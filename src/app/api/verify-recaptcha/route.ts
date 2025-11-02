import { send } from "@emailjs/browser";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Token is required" },
        { status: 400 },
      );
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 },
      );
    }

    // Get IP address from request headers
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "IP not available";

    // Verify token with Google reCAPTCHA API
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    const recaptchaResponse = await fetch(verifyUrl, {
      method: "POST",
    });

    const recaptchaData = await recaptchaResponse.json();

    // Check if verification was successful and score is acceptable
    // reCAPTCHA v3 returns a score from 0.0 to 1.0
    // 0.0 is very likely a bot, 1.0 is very likely a human
    if (recaptchaData.success && recaptchaData.score >= 0.5) {
      return NextResponse.json({
        success: true,
        score: recaptchaData.score,
        sender_ip: ip || null,
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: "reCAPTCHA verification failed",
        score: recaptchaData.score,
      },
      { status: 400 },
    );
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return NextResponse.json(
      { success: false, message: "Verification error" },
      { status: 500 },
    );
  }
}
