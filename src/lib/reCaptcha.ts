/**
 * validateRecaptcha – Sends the reCAPTCHA token to the backend API for verification.
 * Throws an error if the request fails or the token is invalid.
 * Returns the verification response data if successful.
 *
 * @param token - The reCAPTCHA token generated on the client side.
 */
export async function validateRecaptcha(token: string) {
  const res = await fetch("/api/validateRecaptcha", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  });
  if (!res.ok) throw new Error("Failed to validate reCAPTCHA");
  const data = await res.json();
  if (!data.success) throw new Error("reCAPTCHA validation failed");
  return data;
}
