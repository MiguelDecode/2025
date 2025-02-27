import GifGridItem from "../GifGridItem/GifGridItem";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import PropTypes from "prop-types";

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {isLoading ? (
          <p>Cargando...</p>
        ) : (
          images.map((image) => <GifGridItem key={image.id} {...image} />)
        )}
      </div>
    </>
  );
};

export default GifGrid;

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
