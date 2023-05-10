import { getAllSlug } from "@/libs/get-all-slug";
import { getMarkdown } from "@/libs/get-markdown";
import { markdownToReactElement } from "@/libs/markdown-to-react-element";

type Props = {
  params: {
    slug?: string;
  };
};

const BlogDetailPage = ({ params }: Props) => {
  const content = markdownToReactElement(
    getMarkdown(`contents/${params.slug}.md`).content
  );
  return <div className="mx-auto prose">{content}</div>;
};

export const generateStaticParams = () => {
  return getAllSlug("contents").map((slug) => {
    return {
      slug,
    };
  });
};

export default BlogDetailPage;
