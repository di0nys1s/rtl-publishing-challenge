import { useState, useEffect } from "react";

import { IPublishingData } from "./useGetPublishing.interfaces";

const useGetPublishing = () => {
  const [publishing, setPublishing] = useState<IPublishingData>();
  const [loading, setLoading] = useState<boolean>(true);

  const getPublishingData = () => {
    // Better to keep the localhost url in a .env file and call it with process.env.REACT_APP_LOCALHOST_URL
    fetch("http://localhost:3000/publishing")
      .then((response) => response.json())
      .then((json) => setPublishing(json))
      .catch((error) => console.log(error));

    setLoading(false);
  };

  useEffect(() => {
    const mockGetDataDelay = setTimeout(() => {
      getPublishingData();
    }, 750);

    return () => clearTimeout(mockGetDataDelay);
  }, []);

  return { publishing, loading };
};

export { useGetPublishing };
