import { useEffect } from "react";
import { useState } from "react";

const localCache = {};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  const initLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const getData = async () => {
    if (localCache[url]) {
      console.log("Usando caché");

      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });

      return;
    }

    initLoadingState();

    const res = await fetch(url);

    // sleep
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (!res.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: res.status,
      });

      return;
    }

    const data = await res.json();

    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    });

    // Handle cache
    localCache[url] = data;
  };

  useEffect(() => {
    getData();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
