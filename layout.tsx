import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Idol Calendar TW",
  description: "追蹤台灣即將開唱的 K-pop 與國際藝人演唱會，整合售票時間、排行與通知。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
