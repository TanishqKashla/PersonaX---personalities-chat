import { Message } from '@/lib/types';
import { Personality } from '@/lib/types';

interface ChatMessageProps {
    message: Message;
    personality: Personality;
}

export default function ChatMessage({ message, personality }: ChatMessageProps) {
    const isUser = message.role === 'user';

    return (
        <div className={`flex items-start my-4 ${isUser ? 'justify-end' : ''}`}>
            {!isUser && (
                <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden mr-3">
                    {personality.imageUrl && (
                        <img
                            src={personality.imageUrl}
                            alt={personality.name}
                            className="w-full h-full object-cover"
                        />
                    )}
                </div>
            )}

            <div className={`p-3 rounded-lg max-w-[80%] ${isUser
                    ? 'bg-blue-600 text-white'
                    : message.role === 'system'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-gray-200'
                }`}>
                <p className="whitespace-pre-wrap">{message.content}</p>
                <span className="text-xs opacity-70 block mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
            </div>

            {isUser && (
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center ml-3">
                    <span>U</span>
                </div>
            )}
        </div>
    );
}