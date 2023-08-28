'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"
import { SearchPokemon } from "."
import Image from "next/image"

const SearchButton = ({otherClasses}: {otherClasses: string}) => (
  
  <button type="submit" className={`-ml-11 z-10 ${otherClasses}`}>
    <Image src='/magnifying-glass.svg' alt="icon" width={40} height={40} className="object-contain" />
  </button>
)

const Searchbar = () => {
    const [pokemon, setPokemon] = useState('')
    const router = useRouter()
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if(pokemon.trim() === '') return
      updateSearchParams(pokemon.toLowerCase())
    }

    const updateSearchParams = (pokemon: string) => {
      const searchParams = new URLSearchParams(window.location.search)

      if (pokemon) {
        searchParams.set("pokemon", pokemon);
      } else {
        searchParams.delete("pokemon");
      }

      const newPathname = `${window.location.pathname}?${searchParams.toString()}`
      router.push(newPathname, {scroll: false})
    }

  return (
    <form className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-4xl" onSubmit={handleSearch}>
        <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
            <SearchPokemon pokemon={pokemon} setPokemon={setPokemon} />
            <SearchButton otherClasses='' />
        </div>

    </form>
  )
}
export default Searchbar