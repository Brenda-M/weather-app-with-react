import { useState, useEffect } from 'react';

const UseFetch = (initialUrl) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    if (!url) return;
    setIsLoading(true);
    setData(null);
    setError(null);

    fetch(url)
      .then((response) => response.json())
      .then((responseData) => {
        setIsLoading(false);
        if (responseData.cod >= 400) {
          let errorMessage = 'An error occurred while fetching data.';

          if (responseData.cod === 401) {
            errorMessage = 'Unauthorized. Please check your API key.';
          } else if (responseData.cod === 404) {
            errorMessage = 'City not found. Please enter a valid city name.';
          } else {
            errorMessage = `Error: ${responseData.message}`;
          }

          setError(errorMessage);
          return;
        }

        setData(responseData);
      })
      .catch((fetchError) => {
        setIsLoading(false);
        setError('An error occurred while fetching data. Please try again later.');
      });
  }, [url]);

  return { data, error, isLoading, setUrl };
};

export default UseFetch;
