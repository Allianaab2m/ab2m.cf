import Link from "next/link"
import React from "react"

const CustomLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href, children }) => {
  return href?.startsWith("/") ? (
    <Link href={href}>{children}</Link>
  ) : (
    <a href={href} rel="noreferrer" target="_blank">
      {children}
    </a>
  )
}

export default CustomLink
