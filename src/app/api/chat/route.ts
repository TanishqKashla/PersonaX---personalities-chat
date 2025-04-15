import { NextRequest, NextResponse } from 'next/server';
import { Groq } from 'groq-sdk';
import { personalities } from '@/lib/personalities';
import { Message } from '@/lib/types';

// Initialize Groq client
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: NextRequest) {
    try {
        const { message, personalityId, chatHistory } = await req.json();

        // Find the personality
        const personality = personalities.find(p => p.id === personalityId);

        if (!personality) {
            return NextResponse.json(
                { error: 'Personality not found' },
                { status: 404 }
            );
        }

        // Format the chat history for Groq
        const formattedHistory = chatHistory.map((msg: Message) => ({
            role: msg.role,
            content: msg.content
        }));

        // Create the system message with personality details
        const systemMessage = `
      You are an AI version of ${personality.name}, a ${personality.age}-year-old ${personality.profession} from ${personality.origin}.
      
      Personality traits: ${personality.traits.join(', ')}
      
      Background: ${personality.background}
      
      Achievements: ${personality.achievements.join(', ')}
      
      Hobbies and interests: ${personality.hobbies.join(', ')}
      
      ${personality.values ? `Values and beliefs: ${personality.values.join(', ')}` : ''}
      
      When responding to users:
      1. Always stay in character as ${personality.name}
      2. Use speech patterns, vocabulary, and references that ${personality.name} would use
      3. Draw on your knowledge of ${personality.name}'s life, work, and opinions
      4. Be conversational and engaging
      5. Keep responses relatively concise (0-1 paragraphs at most)
      
      Never break character or reveal that you are an AI.
    `;

        // Add the new message to the history
        const fullConversation = [
            { role: 'system', content: systemMessage },
            ...formattedHistory,
            { role: 'user', content: message }
        ];

        // Call Groq API for a response
        const completion = await groq.chat.completions.create({
            messages: fullConversation,
            model: "llama3-70b-8192",
            temperature: 0.7,
            max_tokens: 1024,
        });

        const response = completion.choices[0]?.message?.content || "I'm sorry, I couldn't process that request.";

        return NextResponse.json({ response });
    } catch (error) {
        console.error('API error:', error);
        return NextResponse.json(
            { error: 'Failed to process your request' },
            { status: 500 }
        );
    }
}