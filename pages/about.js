import fetch from "isomorphic-unfetch";
import { Component } from "react";
import Error from "./_error";
import Layout from "../components/Layout";

class About extends Component {
  // state = {
  //   user: null
  // };

  static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/Outcan");
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();

    return { user: data, statusCode };
  }

  // componentDidMount() {
  //   fetch("https://api.github.com/users/Outcan")
  //     .then(response => response.json())
  //     .then(data => {
  //       this.setState({
  //         user: data
  //       });
  //     });
  // }

  render() {
    const { user, statusCode } = this.props;

    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title="About">
        <p>A JavaScript Programmer</p>
        <p>{user.name}</p>

        <img
          src={user.avatar_url}
          alt={user.name}
          style={{ height: "200px", width: "auto", borderRadius: "50%" }}
        />
      </Layout>
    );
  }
}

export default About;
