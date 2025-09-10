import localFont from "next/font/local";
import "./globals.css";

const InterRegular = localFont({
  src: "/fonts/Inter-Regular.otf",
  variable: "--font-inter-regular",
  display: "swap",
});

const KonigDisplayExtraBold = localFont({
  src: "/fonts/KonigDisplay-ExtraBold.otf",
  variable: "--font-konig-display-extra-bold",
  display: "swap",
});

const InterBold = localFont({
  src: "/fonts/Inter-Bold.otf",
  variable: "--font-inter-bold",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${KonigDisplayExtraBold.variable} ${InterRegular.variable} ${InterBold.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
