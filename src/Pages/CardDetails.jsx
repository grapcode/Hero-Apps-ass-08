import React from 'react';
import { useParams } from 'react-router';
import useAppsData from '../Hooks/useAppsData';

const CardDetails = () => {
  const { id } = useParams();
  //   console.log(id);
  const { items } = useAppsData();
  console.log(items);

  return (
    <div>
      <h1>ami Product Details</h1>
    </div>
  );
};

export default CardDetails;
