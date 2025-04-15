import { Personality } from '@/lib/types';

interface PersonalityCardProps {
    personality: Personality;
}

export default function PersonalityCard({ personality }: PersonalityCardProps) {
    return (
        <div className="bg-white rounded-3xl border-2 border-dark overflow-hidden h-full transition-shadow duration-300 cursor-pointer">
            <div className=" aspect-square overflow-hidden m-4 mb-0 rounded-2xl border-1 border-dark ">
                {personality.imageUrl ? (

                    <img 
                        src={personality.imageUrl}
                        alt={personality.name}
                        className="w-full h-full object-cover "
                    />
                ) : (
                    <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                        <span className="text-gray-500">{personality.name.charAt(0)}</span>
                    </div>
                )}
            </div>
            <div className="p-4 pb-2">
                <h2 className="text-xl font-bold mb-1">{personality.name}</h2>
                <p className="text-sm text-gray-600 mb-2">{personality.profession}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                    {personality.traits.slice(0, 3).map((trait, index) => (
                        <span key={index} className="text-xs bg-gray-300 px-2 py-1 rounded">
                            {trait}
                        </span>
                    ))}
                </div>
                {/* <p className="text-sm line-clamp-2">{personality.background}</p> */}
            </div>
        </div>
    );
}