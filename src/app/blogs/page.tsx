import Link from "next/link";
import { getAllSlug } from "@/libs/get-all-slug";
import type { NextPage } from "next";

const AllBlogArticlePage: NextPage = () => {
  const slugs = getAllSlug("contents");
  return (
    <div className="container">
      <h1>記事一覧</h1>
      <ul>
        {slugs.map((slug, i) => {
          return (
            <li key={i}>
              <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                  <h2 className="card-title">{slug}</h2>
                  <button className="btn btn-primary">
                    <Link href={`/blogs/${slug}`}>{"続きを読む"}</Link>
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AllBlogArticlePage;
