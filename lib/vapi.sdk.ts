import Vapi from "@vapi-ai/web";

// VAPI Web SDK requires a Web Token (public key), not the API key (private key)
// Get this from your VAPI dashboard: Settings > API Keys > Web Token
const vapiToken = process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN || "c0f7ca7f-2a7a-48ef-9df4-79f351c058d2";

// Validate token on client side only
if (typeof window !== "undefined") {
  if (!vapiToken || vapiToken === "") {
    console.warn("⚠️ VAPI Web Token is not set. Calls will fail.");
  } else {
    console.log("✅ VAPI Web Token loaded:", vapiToken.substring(0, 8) + "...");
  }
}

export const vapi = new Vapi(vapiToken);
