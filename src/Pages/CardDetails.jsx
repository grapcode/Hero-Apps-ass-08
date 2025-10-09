import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import useAppsData from '../Hooks/useAppsData';
import { Download, Star, UserStar } from 'lucide-react';
import { toast } from 'react-toastify';
import appError from '../assets/App-Error.png';
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import Loading from '../Components/Loading';

const CardDetails = () => {
  const { id } = useParams();
  //   console.log(id);
  const { items, loading } = useAppsData();
  //   console.log(items);

  // ⚡ install btn work
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const installed = localStorage.getItem(`installed_${id}`);
    if (installed === 'true') {
      setIsInstalled(true);
    }
  }, [id]);

  const item = items.find((p) => String(p.id) === id);
  if (loading) return <Loading />;

  // ⚡ item na paile
  if (!item) {
    return (
      <div className="flex flex-col items-center gap-5 justify-center mb-5 mt-20">
        <img src={appError} alt="" />

        <h1 className="text-3xl font-semibold">OPPS!! APP NOT FOUND</h1>
        <p>
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <Link to="/">
          <button className="btn text-white bg-linear-to-r px-6 from-[#632EE3] to-[#9F62F2]">
            Go Back!
          </button>
        </Link>
      </div>
    );
  }

  const {
    image,
    title,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    description,
    ratings,
    size,
  } = item;
  //   console.log(item);

  //   💥 install btn for localStorage

  const handleInstallBtn = () => {
    setIsInstalled(true);
    localStorage.setItem(`installed_${id}`, 'true');

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
  const chartData = ratings || [];

  return (
    <section>
      {/* ✨ Details Card */}

      <div className="card card-side my-5 p-5">
        <figure>
          <img className="h-64" src={image} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="border-b border-gray-300 pb-3">
            Developed by: <span className="text-purple-700">{companyName}</span>
          </p>
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
            {isInstalled ? 'Installed ' : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      {/* //    📊 chart  data */}

      <div className="space-y-5 border-b border-gray-300 border-t my-6 p-5">
        <h3 className="text-lg font-semibold">Ratings Distribution</h3>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              layout="vertical"
              width={500}
              height={400}
              data={chartData}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" scale="band" />
              <Tooltip />
              <Legend />
              <Area dataKey="amt" fill="#8884d8" stroke="#8884d8" />
              <Bar dataKey="count" barSize={20} fill="#ff8811" />
              <Line dataKey="uv" stroke="#8884d8" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
      <h3 className="text-lg font-semibold">Description</h3>
      <p className="py-5 text-gray-500">{description}</p>
    </section>
  );
};

export default CardDetails;
