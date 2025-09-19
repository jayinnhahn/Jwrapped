import React from 'react';
import Image from 'next/image';
import JwrappedLogo from '@/../public/Image/Jwrppedlogo.png';

interface ResultsModalProps {
  top5Tracks: string[];
  top5Artists: string[];
  category: string;
  timeRange: string;
}

export const ResultsModal: React.FC<ResultsModalProps> = ({
  top5Tracks,
  top5Artists,
  category,
  timeRange,
}) => {
  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;
  return (
    <div className="w-full max-w-sm mx-auto bg-white p-6 font-mono text-black broder-2 border-black">
      <div className="text-center border-b border-dashed border-gray-300 pb-4">
        <div className="flex justify-center mb-2">
          <div className="relative w-12 h-12 md:w-16 md:h-16">
            <Image
              src={JwrappedLogo}
              alt="Jwrapped Logo"
              className="object-contain"
              draggable={false}
              fill
            />
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-1">JWRAPPED</h1>
        <p className="text-xs mb-2">Your Spotify {timeRange} Summary</p>
        <p className="text-xs">{formattedDate}</p>
      </div>
      <div className="py-4 border-b border-dashed border-gray-300">
        <h2 className="text-center text-lg font-bold mb-3">
          {category === 'tracks' ? 'TOP TRACKS' : 'TOP ARTISTS'}
        </h2>
        <div className="space-y-3">
          {category === 'tracks' ? (
            top5Tracks.map((track, index) => (
              <div key={index} className="flex flex-col text-sm">
                <div className="flex items-start">
                  <span className="mr-2 flex-shrink-0">{index + 1}.</span>
                  <span className="flex-grow break-words">{track}</span>
                </div>
                <div className="ml-5 text-gray-600 text-xs mt-1">
                  {top5Artists[index]}
                </div>
              </div>
            ))
          ) : (
            top5Artists.map((artist, index) => (
              <div key={index} className="flex justify-between text-sm">
                <div className="flex flex-wrap">
                  <span className="mr-2 flex-shrink-0">{index + 1}.</span>
                  <span className="break-words">{artist}</span>
                </div>
                <span className="text-gray-600 text-xs flex-shrink-0">★★★★★</span>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="pt-4 text-center">
        <p className="text-xs mb-2">Time period: {timeRange}</p>
      </div>
    </div>
  );
};