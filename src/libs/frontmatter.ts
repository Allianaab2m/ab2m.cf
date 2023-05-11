import fs from "fs"
import matter from "gray-matter";

export const getFrontMatter = (slug?: string) => {
  if (slug) {
    const content = fs.readFileSync(`contents/${slug}.md`)
    const { data } = matter(content)
    return data
  }
}
