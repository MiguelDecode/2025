import { Videogame } from "../models/video-game";

export const GameItem = (game: Omit<Videogame, "id">) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img
          className="w-full h-full object-cover object-center"
          src={game.image}
          alt={game.title}
        />
        <div className="card-overlay">
          <p className="card-icon">🎮</p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="card-title">{game.title}</h3>
        <h4 className="card-subtitle">{game.subtitle}</h4>
        <p className="card-description">{game.description}</p>
      </div>
    </div>
  );
};
