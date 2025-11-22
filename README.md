
# alx-project-0x02-setup
# Next.js Project Setup and Basics
# pages/home.tsx 
import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

interface Post {
  title: string;
  content: string;
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <div className="p-6">
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add New Post
      </button>

      <div className="grid gap-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />
    </div>
  );
}

This repository contains the initial setup for a Next.js project as part of the ALX Software Engineering program.
It includes the basic structure needed to start working with Next.js, including setting up the environment and understanding core concepts.
