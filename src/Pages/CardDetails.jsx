import React, { useState } from 'react';
import { useParams } from 'react-router';
import useAppsData from '../Hooks/useAppsData';
import { Download, Star, UserStar } from 'lucide-react';
import { toast } from 'react-toastify';

const CardDetails = () => {
  const { id } = useParams();
  //   console.log(id);
  const { items, loading } = useAppsData();
  //   console.log(items);

  const [isInstalled, setIsInstalled] = useState(false);

  const item = items.find((p) => String(p.id) === id);
  if (loading)
    return <span className="loading loading-spinner loading-xl"></span>;
  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    description,
  } = item;
  //   console.log(item);

  //   💥 install btn for localStorage

  const handleInstallBtn = () => {
    setIsInstalled(true);

    const existingList = JSON.parse(localStorage.getItem('install'));
    // console.log(existingList);
    let updatedList = [];
    if (existingList) {
      const isDuplicate = existingList.some((p) => p.id === item.id);
      if (isDuplicate) return toast('Already installed!');
      updatedList = [...existingList, item];
    } else {
      updatedList.push(item);
    }
    localStorage.setItem('install', JSON.stringify(updatedList));
    toast.success('Wow! Installed Successfully');
  };

  //    📊 chart  data

  return (
    <section>
      <div className="card card-side bg-base-100 shadow-sm my-5">
        <figure>
          <img className="h-40" src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{companyName}</p>
          {/* icons 3 */}
          <div className="p-4 flex gap-16">
            <div className=" space-y-2">
              <span className="text-green-500">
                <Download size={35} />
              </span>
              <p>Downloads</p>
              <h3 className="text-4xl font-bold">{downloads}</h3>
            </div>
            <div className=" space-y-2">
              <span className="text-orange-500">
                <Star size={35} />
              </span>
              <p>Average Ratings</p>
              <h3 className="text-4xl font-bold">{ratingAvg}</h3>
            </div>
            <div className=" space-y-2">
              <span className="text-fuchsia-700">
                <UserStar size={35} />
              </span>
              <p>Total Reviews</p>
              <h3 className="text-4xl font-bold">{reviews}</h3>
            </div>
          </div>

          <button
            onClick={handleInstallBtn}
            className={`btn w-fit bg-[#00d390] text-white ${
              isInstalled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00d390]'
            }`}
            disabled={isInstalled}
          >
            {isInstalled ? 'Installed' : 'Install Now'}
          </button>
        </div>
      </div>
      <p className="py-5">{description}</p>
    </section>
  );
};

export default CardDetails;
