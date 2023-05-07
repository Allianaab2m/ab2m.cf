import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ab2m.cf",
  description: "Alliana's personal website",
  twitter: {
    card: "summary_large_image",
    title: "ab2m.cf",
    description: "Alliana's personal website",
    creator: "@ab2m_Alliana"
  },
  icons: {
    icon: "icon.ico",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
