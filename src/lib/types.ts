export interface Personality {
    id: string;
    name: string;
    age: number;
    origin: string;
    traits: string[];
    background: string;
    profession: string;
    achievements: string[];
    hobbies: string[];
    values?: string[];
    imageUrl?: string;
    greeting: string;
}

export interface Message {
    role: 'user' | 'assistant' | 'system';
    content: string;
    timestamp: Date;
}