import { getAllSlug } from "@/libs/get-all-slug";
import { getMarkdown } from "@/libs/get-markdown";
import { markdownToReactElement } from "@/libs/markdown-to-react-element";

type Props = {
  params: {
    slug?: string;
  };
};

const BlogDetailPage = async ({ params }: Props) => {
  return (
    <div className="container">
      {markdownToReactElement(
        getMarkdown(`contents/${params?.slug}.md`).content
      )}
    </div>
  );
};

export const generateStaticParams = () => {
  return getAllSlug("contents").map((slug) => {
    return {
      slug,
    };
  });
};

export default BlogDetailPage;
