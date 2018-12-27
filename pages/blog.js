import Layout from "../components/Layout";
import Link from "next/link";

const PostLink = ({ slug, title }) => (
  <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

const Blog = () => (
  <Layout title="My Blog">
    <ul>
      <PostLink slug="react-post" title="React Post" />
      <PostLink slug="vue-post" title="Vue Post" />
      <PostLink slug="node-post" title="Node Post" />
    </ul>
  </Layout>
);

export default Blog;
