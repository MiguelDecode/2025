import GifGridItem from "../GifGridItem/GifGridItem";
import { useFetchGifs } from "../../hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  console.log({ images, isLoading });

  /*   const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then((newImages) => setImages(newImages));
  }, []); */

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
