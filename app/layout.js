import "./globals.css";

export const metadata = {
  title: "Hannah — Portfolio Manifest",
  description: "해외영업 × 개발 — Hannah의 작품집",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
