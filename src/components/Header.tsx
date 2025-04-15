import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-white shadow">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-blue-600">
                    Famous Personalities Chat
                </Link>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="text-gray-600 hover:text-blue-600">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="text-gray-600 hover:text-blue-600">
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}