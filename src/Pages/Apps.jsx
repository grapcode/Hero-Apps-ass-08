import React, { useState } from 'react';
import useAppsData from '../Hooks/useAppsData';
import Card from './Card';

const Apps = () => {
  // 🔗 hook theke data load
  const { items } = useAppsData();
  // console.log(appsData);

  // ⚡search work
  const [search, setSearch] = useState('');
  // console.log(search);
  const term = search.trim().toLowerCase();
  const searchItems = term
    ? items.filter((item) => item.title.toLowerCase().includes(term))
    : items;

  // console.log(searchItems);
  return (
    <section>
      <div className="my-5 text-center space-y-3">
        <h1 className="text-3xl font-bold">Our All Applications</h1>
        <p>
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">
          ({searchItems.length}) Apps Found
        </h3>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            required
            placeholder="Search Apps"
          />
        </label>
      </div>
      {searchItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10 py-10">
          {searchItems.map((data) => (
            <Card key={data.id} data={data}></Card>
          ))}
        </div>
      ) : (
        <p className="text-center text-[#6832e4] text-xl font-semibold my-10">
          No App Found
        </p>
      )}
    </section>
  );
};

export default Apps;
