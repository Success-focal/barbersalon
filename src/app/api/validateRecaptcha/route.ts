import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { token } = await req.json();
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!token || !secretKey) {
      return NextResponse.json(
        { success: false, message: "Missing token or secret key." },
        { status: 400 }
      );
    }

    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: token,
        }),
      }
    );

    const data = await response.json();

    console.log("🔒 reCAPTCHA verification:", {
      score: data.score,
      hostname: data.hostname,
      success: data.success,
      errors: data["error-codes"],
    });

    if (data.success && data.score >= 0.5) {
      return NextResponse.json({
        success: true,
        score: data.score,
        hostname: data.hostname,
      });
    } else {
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
    console.error("❌ reCAPTCHA server error:", error);
    return NextResponse.json(
      { success: false, message: "Server error during reCAPTCHA validation." },
      { status: 500 }
    );
  }
}
