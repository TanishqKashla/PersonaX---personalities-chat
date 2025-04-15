import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="bg-white flex justify-between items-center mb-8 p-4 px-10 rounded-full border-2 border-black">
            <div className="flex items-center">
                <Link href="/" className="text-2xl font-extrabold">
                    PersonaX
                </Link>
            </div>
            <div className="flex space-x-4">
                <Link href="/about" className="text-lg">
                    About
                </Link>
                <Link href="/contact" className="text-lg">
                    Contact
                </Link>
            </div>
        </nav>
    );
}