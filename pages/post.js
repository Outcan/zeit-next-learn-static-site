import Layout from "../components/Layout";
import { withRouter } from "next/router";

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p style={{ width: "80%" }}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad similique,
      illum qui ullam quam libero molestias iure quo non odio pariatur sit totam
      ipsum, architecto exercitationem, corporis debitis cupiditate eligendi?
      Sint et nisi possimus autem?
    </p>
  </Layout>
);

export default withRouter(Post);
