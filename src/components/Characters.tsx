import { Character } from "../App"
import CharacterCard from "./CharacterCard"

interface PostsProps {
    characters?: Character[]
}

export default function characters({characters}: PostsProps) {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 px-3">
            {characters?.map(character => <CharacterCard key={character.id} character={character}/>)}
        </div>
    )
}