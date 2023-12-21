import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";

interface IPost {
  id?: number;
  body?: string;
  title?: string;
  userId?: number;
}

const PostInner = () => {
  const { postId } = useParams();

  const [post, setPost] = useState<IPost | null>(null);
  const [loading, setLoading] = useState(false);

  const getPost = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    setPost(data);
    setLoading(false);
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{post?.title || `Post ${postId}`}</title>
        <meta name="description" content={post?.body} />
      </Helmet>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h2>{post?.title}</h2>
          <hr />
          <p>{post?.body}</p>
        </div>
      )}
    </HelmetProvider>
  );
};

export default PostInner;
