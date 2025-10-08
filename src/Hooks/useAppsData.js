import axios from 'axios';
import { useEffect, useState } from 'react';

const useAppsData = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios('/appsData.json')
      .then((data) => setItems(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  return { items, loading, error };
};

export default useAppsData;
