"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ReactNode } from "react";

/**
 * RecaptchaProvider - Wraps children components with Google reCAPTCHA v3 context.
 *
 * This provider initializes the Google reCAPTCHA script with your site key
 * and makes the reCAPTCHA functions accessible throughout the component tree.
 *
 * It ensures that any form or component requiring reCAPTCHA can easily integrate
 * by accessing the context provided here.
 */

interface RecaptchaProviderProps {
  children: ReactNode;
}

export default function RecaptchaProvider({
  children,
}: RecaptchaProviderProps) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      scriptProps={{
        async: false,
        defer: false,
        appendTo: "head",
        nonce: undefined,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
