import Header from '@/components/Header';

export default function About() {
    return (
        <div>
            <Header />
            <main className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">About Famous Personalities Chat</h1>

                <div className="prose max-w-none">
                    <p className="text-xl mb-4">
                        Famous Personalities Chat is an interactive AI application that allows you to have conversations with simulated versions of historical figures and celebrities.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">How It Works</h2>
                    <p>
                        Our application uses advanced AI language models from Groq to create realistic conversational personas based on famous personalities.
                        Each AI personality is designed with specific traits, backgrounds, and speaking styles to provide an authentic experience.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">Educational Value</h2>
                    <p>
                        This tool can be used for educational purposes, allowing students and enthusiasts to engage with historical figures in a unique and interactive way.
                        It can help bring history, science, art, and other subjects to life through conversation.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">Limitations</h2>
                    <p>
                        While our AI personalities are designed to be informative and engaging, they are simulations based on available information about these personalities.
                        They may not perfectly represent how these individuals would respond in real conversations.
                        Always verify important historical facts using reliable sources.
                    </p>

                    <h2 className="text-2xl font-semibold mt-8 mb-4">Technology</h2>
                    <p>
                        This application is built using:
                    </p>
                    <ul className="list-disc ml-8 mt-2 mb-4">
                        <li>Next.js for the frontend and API routes</li>
                        <li>Groq AI for the language model</li>
                        <li>Tailwind CSS for styling</li>
                    </ul>
                </div>
            </main>
        </div>
    );
}