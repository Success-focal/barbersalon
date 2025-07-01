import { NextResponse } from "next/server";

/**
 * POST handler to validate Google reCAPTCHA token.
 *
 * This endpoint receives a token from the client,
 * sends it to Google’s reCAPTCHA verification API,
 * and returns whether the user interaction is likely legitimate.
 *
 * Future devs: reCAPTCHA helps prevent bots/spam by scoring user actions.
 */
export async function POST(req: Request) {
  try {
    // Extract the token sent from the client
    const { token } = await req.json();

    // Get secret key from environment variables (must be kept private!)
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    // Quick sanity check: we need both token and secret to continue
    if (!token || !secretKey) {
      return NextResponse.json(
        { success: false, message: "Missing token or secret key." },
        { status: 400 }
      );
    }

    // Call Google’s reCAPTCHA API to verify the token
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        // Body must be url-encoded key-value pairs
        body: new URLSearchParams({
          secret: secretKey,
          response: token,
        }),
      }
    );

    // Parse the JSON response from Google
    const data = await response.json();

    // Log for debugging & monitoring (remove in production if needed)
    console.log("🔒 reCAPTCHA verification:", {
      score: data.score, // How likely is this a human? (0-1)
      hostname: data.hostname, // Domain where the token was generated  // right now its localhost . later on in production . use the actual domain in google recaptcha of its own companies email secretKey.
      success: data.success, // Was the validation request successful?
      errors: data["error-codes"], // Any errors Google returned
    });

    // Check if the verification succeeded and score is above threshold (0.5)
    if (data.success && data.score >= 0.5) {
      // Legitimate user! Return success and relevant info
      return NextResponse.json({
        success: true,
        score: data.score,
        hostname: data.hostname,
      });
    } else {
      // Suspicious activity or failed validation - reject with 403
      return NextResponse.json(
        {
          success: false,
          message: "reCAPTCHA verification failed",
          score: data.score,
          hostname: data.hostname,
          errors: data["error-codes"],
        },
        { status: 403 }
      );
    }
  } catch (error) {
    // Catch-all for unexpected errors (network issues, server problems, etc.)
    console.error("❌ reCAPTCHA server error:", error);

    // Inform client something went wrong on the server
    return NextResponse.json(
      { success: false, message: "Server error during reCAPTCHA validation." },
      { status: 500 }
    );
  }
}
