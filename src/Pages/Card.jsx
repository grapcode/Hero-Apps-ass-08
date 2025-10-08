import React from 'react';
import { Link } from 'react-router';

const Card = ({ data }) => {
  // console.log(data);
  const { image, title, downloads, ratingAvg, id } = data;
  return (
    <Link
      to={`/cardDetails/${id}`}
      className="card bg-base-100 border border-gray-400 shadow-lg hover:scale-105 transition ease-in-out"
    >
      <figure className=" overflow-hidden">
        <img className="w-70 h-70 object-cover" src={image} alt="" />
      </figure>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title} </h3>
        <div className="flex justify-between">
          <span>{downloads}</span>
          <span>{ratingAvg}</span>
        </div>
      </div>
    </Link>
  );
};

export default Card;
