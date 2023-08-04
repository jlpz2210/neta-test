import { Character } from "../App";

interface CharacterCardProps {
    character: Character
}

export default function CharacterCard({character}: CharacterCardProps) {
    return(
        <div className="shadow-xl flex flex-col bg-neutral-800 hover:animate-pulse cursor-pointer">
            <div className="flex justify-center max-h-80">
                <img className="object-contain md:object-cover" src={character.thumbnail.path + '.' + character.thumbnail.extension} alt={character.name} />
            </div>
            <div>
                <p className="text-xl font-bold text-white">{character.name}</p>
                <p className="text-white">{character.description}</p>
            </div>
        </div>
    )
}