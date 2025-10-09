import React from 'react';
import Banner from '../Components/Banner';

import Card from './Card';
import useAppsData from '../Hooks/useAppsData';
import { Link } from 'react-router';

const Home = () => {
  // const appData = useLoaderData();
  // loading, error
  const { items } = useAppsData();
  // console.log(appsData);
  const trendingData = items.slice(0, 8);
  return (
    <section>
      <Banner></Banner>

      <div className="my-5 text-center space-y-3">
        <h1 className="text-3xl font-bold">Trending Apps</h1>
        <p className="px-3">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10 py-6">
        {trendingData.map((data) => (
          <Card key={data.id} data={data}></Card>
        ))}
      </div>
      <div className=" flex justify-center">
        <Link to="/apps">
          <button className="btn my-6 text-white bg-linear-to-r px-8 from-[#632EE3] to-[#9F62F2]">
            Show All
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
