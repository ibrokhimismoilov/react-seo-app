import axios from "axios";
import { log } from "console";
import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";

interface IPost {
  id?: number;
  body?: string;
  title?: string;
  userId?: number;
}

const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    setLoading(true);
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setPosts(data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Posts page</title>
        <meta name="description" content="Posts page description" />
      </Helmet>

      <h1>Posts</h1>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {posts.map((post: IPost) => (
            <li key={post?.id}>
              <Link to={`/posts/${post?.id}`}>{post?.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </HelmetProvider>
  );
};

export default Posts;
