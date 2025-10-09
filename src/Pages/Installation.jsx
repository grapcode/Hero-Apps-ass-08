import { Download, Star } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Installation = () => {
  const [installList, setInstallList] = useState([]);
  console.log(installList);

  const [sortOrder, setSortOrder] = useState('none');

  //   💥 install btn for localStorage

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('install'));
    if (savedList) setInstallList(savedList);
  }, []);

  // 🎯 sort by list
  const sortedItem = (() => {
    const parseDownloads = (value) => {
      if (!value) return 0;
      const num = parseFloat(value);
      if (value.toLowerCase().includes('k')) return num * 1000;
      if (value.toLowerCase().includes('m')) return num * 1000000;
      return num;
    };

    if (sortOrder === 'downloads-asc') {
      return [...installList].sort(
        (a, b) => parseDownloads(a.downloads) - parseDownloads(b.downloads)
      );
    } else if (sortOrder === 'downloads-desc') {
      return [...installList].sort(
        (a, b) => parseDownloads(b.downloads) - parseDownloads(a.downloads)
      );
    } else {
      return installList;
    }
  })();

  // 🔰 remove from installed apps
  const handleRemove = (id) => {
    const existingList = JSON.parse(localStorage.getItem('install'));

    let updatedList = existingList.filter((p) => p.id !== id);
    //  for ui instant update
    setInstallList(updatedList);
    localStorage.setItem('install', JSON.stringify(updatedList));
    toast.info('♻️Uninstalled from your Device');
  };

  if (!installList.length)
    return (
      <p className="text-center text-[#6832e4] text-5xl font-bold my-10">
        No data Available
      </p>
    );

  return (
    <div className="space-y-6">
      <div className="my-5 text-center space-y-3">
        <h1 className="text-3xl font-bold">Your Installed Apps</h1>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="flex justify-between py-5 items-center">
        <p className="text-lg font-semibold ml-3">
          {installList.length} Apps Found
        </p>

        {/* // 🎯 Sort work */}
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-border"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by Size</option>
            <option value="downloads-asc">Low -&gt; High</option>
            <option value="downloads-desc">High -&gt; Low</option>
          </select>
        </label>
      </div>

      {/* 🍁 Uninstall card */}

      <div className="space-y-3">
        {sortedItem.map((p) => (
          <div
            key={p.id}
            className="card card-side bg-base-100 shadow flex items-center justify-between "
          >
            <figure className="p-3">
              <img
                className="w-40 h-28 object-cover rounded-2xl p-2"
                src={p.image}
                alt={p.name}
              />
            </figure>
            <div className="space-y-5 flex-1">
              <h2 className="card-title">{p.title}</h2>
              <div className="flex ">
                <p className="flex gap-1  py-1 px-2 rounded-sm font-semibold text-green-500">
                  <Download size={20} /> {p.downloads}
                </p>
                <p className="flex gap-1 py-1 px-2 rounded-sm font-semibold text-orange-500">
                  <Star size={20} />
                  {p.ratingAvg}
                </p>
                <p className="flex gap-1 py-1 px-2 rounded-sm font-semibold text-gray-700">
                  {p.size} MB
                </p>
              </div>
            </div>
            <div className="pr-4 flex items-center gap-3">
              <button
                onClick={() => handleRemove(p.id)}
                className="btn bg-[#00d390] text-white"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
