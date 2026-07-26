import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shdls1016-max.github.io/landing-toypen/"),
  title: "PLAYNOTE! | 문구는 놀이다",
  description: "눌러보고, 던져보고, 변신시키는 기발한 문구 놀이터 PLAYNOTE.",
  openGraph: {
    title: "PLAYNOTE! | 문구는 놀이다",
    description: "눌러보고, 던져보고, 변신시키는 기발한 문구 놀이터.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "PLAYNOTE 문구는 놀이다" }],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PLAYNOTE! | 문구는 놀이다",
    description: "눌러보고, 던져보고, 변신시키는 기발한 문구 놀이터.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
