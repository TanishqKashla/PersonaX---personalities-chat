"use client";

import { useState } from "react";
import Link from "next/link";
import PersonalityCard from "@/components/PersonalityCard";
import { personalities } from "@/lib/personalities";
import NavBar from "@/components/NavBar";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPersonalities = personalities.filter(
    (personality) =>
      personality.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      personality.profession.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="container mx-auto px-4 py-8">
      <NavBar />

      {/* <div className="">
            <input
            type="text"
            placeholder="Search personalities..."
            className="w-full max-w-md mx-auto block px-4 py-2 border rounded-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            </div> */}

      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold mb-4">
          Start Chatting with your favorite personalities
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Chat with AI versions of famous personalities from around the world.
          Select a personality to start a conversation!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 ">

        {filteredPersonalities.map((personality) => (
          <Link href={`/chat/${personality.id}`} key={personality.id}>
            <PersonalityCard personality={personality} />
          </Link>
        ))}
      </div>
    </main>
  );
}
