import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link href="/" className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors">
                Return Home
            </Link>
        </div>
    );
}