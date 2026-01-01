import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface Post {
    id: string;
    name: string;
    time: string;
    content: string;
    likes: number;
    comments: number;
    avatar: string;
    isLiked?: boolean;
}

interface CommunityState {
    posts: Post[];
    addPost: (content: string, user: { name: string }) => void;
    toggleLike: (id: string) => void;
}

// Initial mock data
const INITIAL_POSTS: Post[] = [
    {
        id: '1',
        name: 'Sarah M.',
        time: '2 hours ago • Completed Day 12',
        content: 'Just finished the Full Body Power workout! The goblet squats were killer today. 🥵💪 #FitTribe #Day12',
        likes: 24,
        comments: 3,
        avatar: 'https://i.pravatar.cc/150?img=5',
        isLiked: false,
    },
    {
        id: '2',
        name: 'Mike T.',
        time: '4 hours ago • Completed Day 12',
        content: 'Streak kept alive! Late night session but got it done. 🌙',
        likes: 12,
        comments: 0,
        avatar: 'https://i.pravatar.cc/150?img=3',
        isLiked: false,
    },
    {
        id: '3',
        name: 'Jessica K.',
        time: '5 hours ago • Joined Challenge',
        content: "Joined the Plank Master challenge! Who's with me?",
        likes: 45,
        comments: 8,
        avatar: 'https://i.pravatar.cc/150?img=9',
        isLiked: false,
    },
];

export const useCommunityStore = create<CommunityState>()(
    persist(
        (set) => ({
            posts: INITIAL_POSTS,
            addPost: (content, user) => set((state) => ({
                posts: [
                    {
                        id: Date.now().toString(),
                        name: user.name,
                        time: 'Just now',
                        content,
                        likes: 0,
                        comments: 0,
                        avatar: 'https://i.pravatar.cc/150?img=11', // Default avatar for now
                        isLiked: false,
                    },
                    ...state.posts
                ]
            })),
            toggleLike: (id) => set((state) => ({
                posts: state.posts.map(post =>
                    post.id === id
                        ? { ...post, likes: post.isLiked ? post.likes - 1 : post.likes + 1, isLiked: !post.isLiked }
                        : post
                )
            })),
        }),
        {
            name: 'community-storage',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);
