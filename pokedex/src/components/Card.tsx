import { useEffect, useState } from "react";

export interface CardProps {
  position?: string;
  name: string;
  url: string;
}



export function Card({ name, position, url }: CardProps) {
  const [pokemon, setPokemon] = useState<any>();
  async function fetchData() {
    const data = await fetch(url)
      .then(async (response) => {
        const data = await response.json()
        setPokemon(data)
      })
    //  setPokemons(data.results);
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="flex flex-col justify-between w-[170px] h-44 gap-2
         bg-white rounded-md shadow-2x1 drop-shadow-md
        cursor-pointer hover:scale-105 duration-150 transition">
      <span className="text-end-p-2">{position}</span>

      <section className="flex flex-col justify-between pb-2 items-center bg-slate-200 w-full h-[45%] rounded-md">
        <img
          src={pokemon?.sprites?.other?.dream_world?.front_default}
          alt="Imagens de Bulbasaur"
          className="w-28 h-28 -m-16" />

        <span className="capitalize">{name}</span>
      </section>

    </div>
  )
}
