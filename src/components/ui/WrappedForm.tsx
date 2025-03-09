import React from 'react';

interface WrappedFormProps {
  category: string;
  timeRange: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  setTimeRange: React.Dispatch<React.SetStateAction<string>>;
}

const timeRangeOptions = [
  { label: 'A Month', value: 'short_term' },
  { label: '6 Months', value: 'medium_term' },
  { label: 'All Time', value: 'long_term' },
];
export const WrappedForm: React.FC<WrappedFormProps> = ({
  category,
  timeRange,
  setCategory,
  setTimeRange,
}) => {
  return (
    <div className="grid bg-green rounded-[40px] w-full px-4 py-6 lg:px-16 lg:py-12 lg:h-fit"> 
      <h2 className="text-beige font-Monotage text-left text-newgreen text-xl lg:text-3xl font-normal leading-tight mb-4 lg:mb-6"> 
        WHAT CATEGORY WOULD YOU LIKE?
      </h2>
      <div className="grid grid-flow-col lg:ml-4 mb-6 lg:mb-8">
        <button
          className={`px-3 py-2 text-sm md:text-base lg:text-xl rounded-l-[5px] lg:px-8 font-Monotage lg:rounded-l-[15px] lg:border-4 border-2 border-darkgreen ${
            category === 'tracks'
              ? 'bg-darkgreen text-white'
              : 'bg-white text-darkgreen'
          }`}
          onClick={() => setCategory('tracks')}
        >
          Top Tracks
        </button>
        <button
          className={`px-3 py-2 text-sm md:text-base lg:text-xl rounded-r-[5px] lg:px-8 font-Monotage lg:rounded-r-[15px] lg:border-4 border-2 border-darkgreen ${
            category === 'artists'
              ? 'bg-darkgreen text-white'
              : 'bg-white text-darkgreen'
          }`}
          onClick={() => setCategory('artists')}
        >
          Top Artists
        </button>
      </div>
      <div className="flex flex-col">
        <h2 className="text-beige font-Monotage text-left text-base md:text-lg lg:text-2xl font-normal leading-tight mb-4 lg:mb-6"> 
          What time period would your wrapped consist of?
        </h2>
        <div className="grid grid-flow-col gap-2 md:gap-4 mb-4">
          {timeRangeOptions.map(({ label, value }) => (
            <div
              key={value}
              className={`flex py-2 px-2 md:px-4 lg:px-6 rounded-[10px] lg:rounded-[15px] font-Monotage border-2 border-darkgreen justify-center items-center ${
                timeRange === value
                  ? 'bg-darkgreen text-white'
                  : 'bg-white text-darkgreen cursor-pointer'
              }`}
              onClick={() => setTimeRange(value)}
            >
              <input
                type="radio"
                id={value}
                checked={timeRange === value}
                onChange={() => {}}
                style={{ display: 'none' }}
              />
              <label
                htmlFor={value}
                className="text-center text-xs md:text-sm lg:text-lg font-medium cursor-pointer" 
              >
                {label}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};