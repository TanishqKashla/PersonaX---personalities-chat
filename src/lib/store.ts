import { create } from 'zustand';
import { Message, Personality } from './types';
import { personalities } from './personalities';

interface ChatState {
    selectedPersonality: Personality | null;
    messages: Message[];
    isLoading: boolean;
    setSelectedPersonality: (personality: Personality) => void;
    addMessage: (message: Message) => void;
    setMessages: (messages: Message[]) => void;
    setIsLoading: (isLoading: boolean) => void;
    clearChat: () => void;
}

export const useChatStore = create<ChatState>((set) => ({
    selectedPersonality: null,
    messages: [],
    isLoading: false,
    setSelectedPersonality: (personality) => set({ selectedPersonality: personality }),
    addMessage: (message) => set((state) => ({ messages: [...state.messages, message] })),
    setMessages: (messages) => set({ messages }),
    setIsLoading: (isLoading) => set({ isLoading }),
    clearChat: () => set({ messages: [] }),
}));