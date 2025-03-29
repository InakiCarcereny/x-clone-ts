import { UUID } from 'crypto';
import { create } from 'zustand';

interface PostStore {
  posts: Post[];
  addPost: (post: Post) => void;
  deletePost: (post: Post) => void;
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
}

export const usePostStore = create<PostStore>((set) => ({
  posts: [],
  addPost: (post: Post) =>
    set((state) => ({
      posts: [...state.posts, post],
    })),
  deletePost: (post: Post) =>
    set((state) => ({
      posts: state.posts.filter((p) => p.id !== post.id),
    })),
}));
