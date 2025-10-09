import { Download } from 'lucide-react';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const Card = ({ data }) => {
  // console.log(data);
  const { image, title, downloads, ratingAvg, id } = data;
  return (
    <Link
      to={`/cardDetails/${id}`}
      className="card bg-base-100 border-gray-400 shadow-lg hover:scale-105 transition ease-in-out"
    >
      <figure className=" overflow-hidden p-4">
        <img
          className="w-70 h-70 object-cover rounded-2xl"
          src={image}
          alt=""
        />
      </figure>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title} </h3>
        <div className="flex justify-between mt-3">
          <p className="flex gap-2 bg-[#f1f5e8] py-1 px-2 rounded-sm font-semibold text-green-500">
            <Download /> {downloads}
          </p>
          <p className="flex items-center gap-2 bg-[#fff0e1] py-1 px-2 rounded-sm font-semibold text-orange-500">
            <FaStar />
            {ratingAvg}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
