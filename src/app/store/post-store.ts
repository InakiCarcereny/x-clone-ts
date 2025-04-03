import { randomUUID, UUID } from 'crypto';
import { create } from 'zustand';

interface PostStore {
  posts: Post[];
  createPost: (post: Post) => void;
  deletePost: (post: Post) => void;
  like: (post: Post) => void;
  unlike: (post: Post) => void;
}

interface Post {
  id: UUID;
  content: string;
  image?: string;
  likes: number;
  comments: Comment[];
  repost: number;
}

interface Comment {
  id: UUID;
  content: string;
  image?: string;
  likes: number;
  repost: number;
}

export const usePostStore = create<PostStore>((set) => ({
  posts: [],
  createPost: (post: Post) =>
    set((state) => ({
      posts: [
        ...state.posts,
        {
          ...post,
          id: randomUUID(),
          likes: 0,
          comments: [],
          repost: 0,
        },
      ],
    })),
  deletePost: (post: Post) =>
    set((state) => ({
      posts: state.posts.filter((p) => p.id !== post.id),
    })),
  like: (post: Post) =>
    set((state) => ({
      posts: state.posts.map((p) =>
        p.id === post.id ? { ...p, likes: p.likes + 1 } : p,
      ),
    })),
  unlike: (post: Post) =>
    set((state) => ({
      posts: state.posts.map((p) =>
        p.id === post.id ? { ...p, likes: p.likes - 1 } : p,
      ),
    })),
}));
