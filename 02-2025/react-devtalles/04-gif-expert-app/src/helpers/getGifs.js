export const getGifs = async (category) => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;

  const resp = await fetch(url);
  const { data = [] } = await resp.json();

  const gifs = data.map((el) => ({
    id: el.id,
    title: el.title,
    url: el.images.downsized_medium.url,
  }));

  return gifs;
};
