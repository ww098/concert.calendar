import { Subscription } from "@/types";

export async function sendEmailNotification(subscription: Subscription) {
  return {
    channel: "email",
    target: subscription.email,
    queued: Boolean(subscription.email),
    message: "示範模式：此處可串接 SMTP、Resend 或 SendGrid。"
  };
}

export async function sendLineNotification(subscription: Subscription) {
  return {
    channel: "line",
    target: subscription.lineId,
    queued: Boolean(subscription.lineId),
    message: "示範模式：此處可串接 LINE Messaging API 或 LINE Notify 替代方案。"
  };
}
