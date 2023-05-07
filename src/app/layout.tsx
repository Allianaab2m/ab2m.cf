import { IBM_Plex_Mono, IBM_Plex_Sans_JP } from "next/font/google";
import Link from "next/link"
import { ThemeToggle } from "@/components/ThemeToggle"
import "./globals.css"

const plexjp = IBM_Plex_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--plexsansjp"
})

const plexmono = IBM_Plex_Mono({
  weight: ["300"],
  subsets: ["latin"],
  variable: "--plexmono"
})

export const metadata = {
  title: "ab2m.cf",
  description: "Alliana's personal website",
  twitter: {
    card: "summary_large_image",
    title: "ab2m.cf",
    description: "Alliana's personal website",
    creator: "@ab2m_Alliana",
  },
  icons: {
    icon: "icon.ico",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" data-theme="business">
      <body className={plexjp.className}>
        <header className="navbar bg-primary">
          <h1 className="flex-1"><Link href="/">ab2m.cf</Link></h1>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><Link className="" href="/blogs">Blog</Link></li>
              <li><Link className="" href="/about">About</Link></li>
              <li><ThemeToggle /></li>
            </ul>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
