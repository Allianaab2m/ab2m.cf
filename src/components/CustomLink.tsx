import Link from "next/link";
import React from "react";

const CustomLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  href,
  children,
}) => {
  return href?.startsWith("/") ? (
    <Link href={href}>{children}</Link>
  ) : href?.startsWith("#") ? (
    <a href={href}>{children}</a>
  ) : (
    <iframe
      className="dark:opacity-80 rounded"
      src={`https://hatenablog-parts.com/embed?url=${href}`}
    >
      {children}
    </iframe>
  );
};

export default CustomLink;
