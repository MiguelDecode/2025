import { Videogame } from "../models/video-game";
import { GameItem } from "./GameItem";

interface Props {
  games: Videogame[];
}

export const VideoGameGrid = ({ games }: Props) => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="title">Featured Games</h1>
        <div className="grid-container">
          {games.map((game) => (
            <GameItem key={game.id} {...game} />
          ))}
        </div>
      </div>
    </div>
  );
};
