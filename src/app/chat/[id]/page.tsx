'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { personalities } from '@/lib/personalities';
import ChatMessage from '@/components/ChatMessage';
import ChatInput from '@/components/ChatInput';
import { Message } from '@/lib/types';
import { SendIcon, ArrowLeftIcon } from 'lucide-react';

export default function ChatPage({ params }: { params: { id: string } }) {
    const router = useRouter();
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [personality, setPersonality] = useState(
        personalities.find(p => p.id === params.id) || personalities[0]
    );

    const messageContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Set initial greeting message from the personality
        if (messages.length === 0 && personality) {
            setMessages([
                {
                    role: 'assistant',
                    content: `Hi there! I'm ${personality.name}. ${personality.greeting}`,
                    timestamp: new Date()
                }
            ]);
        }
    }, [personality, messages.length]);

    useEffect(() => {
        // Scroll to the bottom when new messages are added
        if (messageContainerRef.current) {
            messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSendMessage = async (message: string) => {
        if (!message.trim()) return;

        // Add user message to chat
        const userMessage: Message = {
            role: 'user',
            content: message,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setIsLoading(true);

        try {
            // Call API to get response from personality
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message,
                    personalityId: personality.id,
                    chatHistory: messages
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to get response');
            }

            const data = await response.json();

            // Add assistant message to chat
            const aiMessage: Message = {
                role: 'assistant',
                content: data.response,
                timestamp: new Date()
            };

            setMessages(prev => [...prev, aiMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
            // Add error message
            const errorMessage: Message = {
                role: 'system',
                content: 'Sorry, there was an error processing your message. Please try again.',
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!personality) {
        return <div className="p-8 text-center">Personality not found</div>;
    }

    return (
        <div className="container mx-auto px-4 py-4 h-screen flex flex-col">
            <div className="flex items-center mb-4">
                <button
                    onClick={() => router.push('/')}
                    className="flex items-center mr-4 text-gray-600 hover:text-gray-900"
                >
                    <ArrowLeftIcon className="h-5 w-5 mr-1" />
                    Back
                </button>
                <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden mr-3">
                        {personality.imageUrl && (
                            <img
                                src={personality.imageUrl}
                                alt={personality.name}
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>
                    <div>
                        <h1 className="text-xl font-bold">{personality.name}</h1>
                        <p className="text-sm text-gray-600">{personality.profession}</p>
                    </div>
                </div>
            </div>

            <div
                ref={messageContainerRef}
                className="message-container flex-grow bg-gray-50 rounded-lg p-4 mb-4 overflow-y-auto"
            >
                {messages.map((message, index) => (
                    <ChatMessage key={index} message={message} personality={personality} />
                ))}

                {isLoading && (
                    <div className="flex items-start my-4">
                        <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden mr-3">
                            {personality.imageUrl && (
                                <img
                                    src={personality.imageUrl}
                                    alt={personality.name}
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>
                        <div className="typing-indicator p-3 rounded-lg bg-gray-200 inline-block">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                )}
            </div>

            <ChatInput onSendMessage={handleSendMessage} isLoading={isLoading} />
        </div>
    );
}