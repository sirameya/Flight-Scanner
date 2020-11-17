import { useState, useEffect } from 'react';

import * as Api from '../utils/SkyScannerApi';

const useGetPlaces = (from) => {
  const [error, setError] = useState(null);
  const [throttle, setThrottle] = useState(false);

  const [places, setPlaces] = useState([]);

  useEffect(async () => {
    if (from.length > 3 && from.length < 100 && !throttle) {
      setThrottle(true);
      setTimeout(() => setThrottle(false), 100);

      const response = await Api.getPlaces(from);

      if (!response.message && response.Places) {
        setPlaces(response.Places);
      } else {
        setError('Something went wrong');
      }
    } else {
      setPlaces([]);
    }
  }, [from]);

  if (error) return error;

  return [places, setPlaces];
};

export default useGetPlaces;
