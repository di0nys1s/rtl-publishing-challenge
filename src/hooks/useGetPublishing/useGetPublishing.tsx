import { useState, useEffect } from "react";

import { IPublishingData } from "./useGetPublishing.interfaces";

const useGetPublishing = () => {
  const [publishing, setPublishing] = useState<IPublishingData>();
  const [loading, setLoading] = useState<boolean>(true);

  const getPublishingData = () => {
    fetch("http://localhost:3000/publishing")
      .then((response) => response.json())
      .then((json) => setPublishing(json))
      .catch((error) => console.log(error));

    setLoading(false);
  };

  useEffect(() => {
    const mockGetDataDelay = setTimeout(() => {
      getPublishingData();
    }, 1000);

    return () => clearTimeout(mockGetDataDelay);
  }, []);

  return { publishing, loading };
};

export { useGetPublishing };
