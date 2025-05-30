import { useGetAnnouncementQuery } from '@/redux/ApiCalling/apiClice';
import React from 'react';
import './Announcement.css';

const Announcement = () => {
  const { data, isLoading, isError } = useGetAnnouncementQuery();
  const announcementData = data?.data || [];

  if (isLoading) {
    return <p className="text-center text-2xl font-bold">Loading...</p>;
  }

  if (isError) {
    return (
      <p className="text-center text-2xl font-bold text-red-500">
        Something went wrong!
      </p>
    );
  }

  return (
    <div>
      {announcementData.length > 0 ? (
        announcementData.map(announce => {
          const date = new Date(Number(announce?.date));
          const formattedDate = date.toLocaleString(); // or toLocaleDateString()

          return (
            <div
              key={announce?.id}
              className="mx-16 mb-16 flex flex-col md:flex-row items-center gap-6 rounded-md bg-blue-950"
            >
              <div className="md:w-2/5">
                <img
                  src={announce?.thumbnail}
                  className="h-56 w-full clip-diagonal"
                  alt="Announcement"
                />
              </div>
              <div className="space-y-3 md:w-3/5 pr-10">
                <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">
                  {announce?.title}
                </h1>
                <p className="text-xs md:text-base lg:text-base font-bold">
                  {announce?.description}
                </p>
                <p className="text-sm text-gray-400">{formattedDate}</p>
              </div>
            </div>
          );
        })
      ) : (
        <p className="text-xl md:text-2xl lg:text-3xl font-bold text-center">
          No announcement found
        </p>
      )}
    </div>
  );
};

export default Announcement;
