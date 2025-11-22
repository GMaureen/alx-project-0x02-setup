import { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

export default function PostsPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      // Map API data to PostProps format
      const mappedPosts = data.slice(0, 10).map((post: any) => ({
        userId: post.userId,
        id: post.id,
        title: post.title,
        content: post.body,
      }));
      setPosts(mappedPosts);
    };
    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="p-6 grid gap-4">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            userId={post.userId}
            title={post.title}
            content={post.content}
          />
        ))}
      </div>
    </>
  );
}
