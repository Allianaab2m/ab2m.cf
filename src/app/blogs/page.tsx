import Link from "next/link"
import { getAllSlug } from "@/libs/get-all-slug"
import type { NextPage } from "next"

const AllBlogArticlePage: NextPage = () => {
  const slugs = getAllSlug("contents")
  return (
    <div className="container">
      <h1>記事一覧</h1>
      <ul>
        {slugs.map((slug, i) => {
          return (
            <li key={i}>
              <Link href={`/blogs/${slug}`}>{slug}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AllBlogArticlePage
