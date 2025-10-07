import React from 'react';
import Banner from '../Components/Banner';
import { data, useLoaderData } from 'react-router';
import Card from './Card';

const Home = () => {
  const appData = useLoaderData();
  console.log(data);
  return (
    <section>
      <Banner></Banner>

      <div className="my-5 text-center space-y-3">
        <h1 className="text-3xl font-bold">Trending Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10">
        {appData.map((data) => (
          <Card key={data.id} data={data}></Card>
        ))}
      </div>
    </section>
  );
};

export default Home;
