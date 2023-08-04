import { Character } from "../App"
import CharacterCard from "./CharacterCard"

interface PostsProps {
    characters?: Character[]
    handleSelect(id: number): void
}

export default function characters({characters, handleSelect}: PostsProps) {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5 gap-4 px-3">
            {characters?.map(character => <CharacterCard onClick={handleSelect} key={character.id} character={character}/>)}
        </div>
    )
}