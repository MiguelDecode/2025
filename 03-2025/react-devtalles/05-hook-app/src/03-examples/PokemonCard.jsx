import { useState } from "react";
import { useLayoutEffect } from "react";
import { useRef } from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  const title = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = title.current.getBoundingClientRect();

    setBoxSize({width, height});
  }, []);

  return (
    <section style={{ height: 200, display: "flex", flexDirection: "row" }}>
      <h2 ref={title} className="text-capitalize">
        #{id} - {name}
      </h2>

      {/* Gallery */}
      <div className="d-flex">
        <img src={sprites.back_default} alt={name} />
        <img src={sprites.front_default} alt={name} />
      </div>

      <pre>{JSON.stringify(boxSize)}</pre>
    </section>
  );
};
