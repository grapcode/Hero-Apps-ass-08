import React from 'react';

const Card = ({ data }) => {
  console.log(data);
  const { image, title, downloads } = data;
  return (
    <div>
      <figure className="">
        <img className="w-70 h-70 object-cover" src={image} alt="" />
      </figure>
      <h3 className="text-lg font-semibold">{title} </h3>
      <div>
        <span>{downloads}</span>
        <span>
          {data.ratings.map((rat) => {
            <p>{rat.name}</p>;
          })}
        </span>
      </div>
    </div>
  );
};

export default Card;
