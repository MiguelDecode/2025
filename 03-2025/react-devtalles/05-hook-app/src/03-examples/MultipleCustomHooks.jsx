import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {
  const { counter, handleAdd, handleSubstract } = useCounter(1);

  const urlFetch = `https://pokeapi.co/api/v2/pokemon/${counter}`;

  const { data, isLoading, hasError } = useFetch(urlFetch);

  return (
    <>
      <h1>Información del Pokémon</h1>

      <hr />

      <h2>
        {isLoading ? (
          <LoadingMessage />
        ) : (
          <PokemonCard id={data.id} name={data.name} sprites={data.sprites} />
        )}
      </h2>

      {hasError && <p>Error en la petición</p>}

      <button
        className="btn btn-primary mt-2"
        onClick={() => (counter > 1 ? handleSubstract() : null)}
      >
        Anterior
      </button>

      <button className="btn btn-primary mt-2" onClick={() => handleAdd()}>
        Siguiente
      </button>
    </>
  );
};
