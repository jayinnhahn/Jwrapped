import React, { useEffect, useState, useCallback, useRef } from 'react';
import axios from 'axios';
import { WrappedForm, ResultsModal, ContactMeSection } from "@/components";
import html2canvas from 'html2canvas';
import Navbar from '@/components/ui/Navbar';

interface HomePageProps {
  logout: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ logout }) => {
  const [timeRange, setTimeRange] = useState('medium_term');
  const [forDownload, setForDownload] = useState(false);
  const [category, setCategory] = useState('tracks');
  const [top5Tracks, setTopTracks] = useState([]);
  const [top5Artists, setTopArtists] = useState([]);
  const [tokenExpired, setTokenExpired] = useState(false);
  const resultsModalRef = useRef(null);

const fetchDataFromSpotify = async (timeRange: string, category: string) => {
  try {
    const response = await axios.get(`/api/spotify/top`, {
      params: { timeRange, category },
      withCredentials: true, 
    });
    return response.data;
  } catch (error) {
	console.error('Error fetching top users and tracks:', error);
	if (axios.isAxiosError(error) && error.response?.status === 401) {
	  logout(); 
	}
	throw error;
  }
};
 const fetchTopTracks = useCallback(async () => {
  try {
    const topTracksData = await fetchDataFromSpotify(timeRange, category);
    if (category === 'tracks') {
      setTopTracks(topTracksData.items.map((item: any) => item.name));
      setTopArtists(topTracksData.items.map((item: any) => item.artists[0].name));
    } else if (category === 'artists') {
      setTopTracks([]);
      setTopArtists(topTracksData.items.map((item: any) => item.name));
    }
  } catch (error) {
    console.error('Error fetching data from Spotify API:', error);
  }
}, [timeRange, category, logout]);

  useEffect(() => {
    fetchTopTracks();
  }, [  timeRange, category, fetchTopTracks]);

  const downloadDivContent = async (contentElement: HTMLElement) => {
	try {
	  setForDownload(true);
	  await new Promise(resolve => setTimeout(resolve, 100));
	  const canvas = await html2canvas(contentElement, {
		useCORS: true,
		allowTaint: true,
		backgroundColor: '#ffffff',
		scale: 2,
	  });
	  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

	  if (isMobile) {
		const imageData = canvas.toDataURL('image/png');
		const modalContainer = document.createElement('div');
		modalContainer.style.position = 'fixed';
		modalContainer.style.top = '0';
		modalContainer.style.left = '0';
		modalContainer.style.width = '100%';
		modalContainer.style.height = '100%';
		modalContainer.style.backgroundColor = 'rgba(0,0,0,0.8)';
		modalContainer.style.zIndex = '1000';
		modalContainer.style.display = 'flex';
		modalContainer.style.flexDirection = 'column';
		modalContainer.style.alignItems = 'center';
		modalContainer.style.justifyContent = 'center';
		// Create an image element
		const img = document.createElement('img');
		img.src = imageData;
		img.style.maxWidth = '90%';
		img.style.maxHeight = '70%';
		img.style.objectFit = 'contain';
		// Create action buttons container
		const buttonsContainer = document.createElement('div');
		buttonsContainer.style.display = 'flex';
		buttonsContainer.style.gap = '10px';
		buttonsContainer.style.marginTop = '20px';
		// Create save button
		const saveButton = document.createElement('button');
		saveButton.textContent = 'Save Image';
		saveButton.style.padding = '10px 20px';
		saveButton.style.backgroundColor = '#1DB954'; // Spotify green
		saveButton.style.color = 'white';
		saveButton.style.border = 'none';
		saveButton.style.borderRadius = '5px';
		saveButton.style.fontWeight = 'bold';
		// Create share button if Web Share API is available
		const shareButton = document.createElement('button');
		shareButton.textContent = 'Share';
		shareButton.style.padding = '10px 20px';
		shareButton.style.backgroundColor = '#1DB954';
		shareButton.style.color = 'white';
		shareButton.style.border = 'none';
		shareButton.style.borderRadius = '5px';
		shareButton.style.fontWeight = 'bold';
		// Create close button
		const closeButton = document.createElement('button');
		closeButton.textContent = 'Close';
		closeButton.style.padding = '10px 20px';
		closeButton.style.backgroundColor = '#333';
		closeButton.style.color = 'white';
		closeButton.style.border = 'none';
		closeButton.style.borderRadius = '5px';
		// Add event listeners
		saveButton.addEventListener('click', () => {
		  // Create download link
		  const downloadLink = document.createElement('a');
		  downloadLink.href = imageData;
		  downloadLink.download = `JWRAPPED_${category}_${timeRange}.png`;
		  document.body.appendChild(downloadLink);
		  downloadLink.click();
		  document.body.removeChild(downloadLink);
		});
		if (navigator.share) {
		  shareButton.addEventListener('click', async () => {
			const response = await fetch(imageData);
			const blob = await response.blob();
			const file = new File([blob], `JWRAPPED_${category}_${timeRange}.png`, { type: 'image/png' });
			try {
			  await navigator.share({
				files: [file],
				title: 'My JWRAPPED',
				text: 'Check out my Spotify JWRAPPED!',
			  });
			} catch (error) {
			  console.error('Error sharing:', error);
			}
		  });
		  buttonsContainer.appendChild(shareButton);
		}
		closeButton.addEventListener('click', () => {
		  document.body.removeChild(modalContainer);
		  setForDownload(false);
		});
		buttonsContainer.appendChild(saveButton);
		buttonsContainer.appendChild(closeButton);
		modalContainer.appendChild(img);
		modalContainer.appendChild(buttonsContainer);
		document.body.appendChild(modalContainer);
	  } else {
		// Original download behavior for desktop
		const imageData = canvas.toDataURL('image/png');
		const downloadLink = document.createElement('a');
		downloadLink.href = imageData;
		downloadLink.download = `JWRAPPED_${category}_${timeRange}.png`;
		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
		// Reset forDownload state
		setForDownload(false);
	  }
	} catch (error) {
	  console.error('Error capturing content:', error);
	  setForDownload(false);
	}
  };

  const handleDownload = () => {
    const contentElement = resultsModalRef.current;
    if (contentElement) {
      downloadDivContent(contentElement);
    } else {
      console.error('ResultsModal element not found');
    }
  };

  const buttonData = [
    {
      label: 'Download YOUR JWRAPPED',
      onClick: handleDownload,
      ariaLabel: 'Download YOUR JWRAPPED',
    },
    {
      label: 'logout',
      onClick: logout,
      ariaLabel: 'logout',
    },
  ];

  return (
    <div className="bg-beige w-full lg:pt-5 min-h-screen justify-center content-center">
      {tokenExpired && (
        <div className="text-red-500 font-bold p-3">
          Your Spotify token has expired. Please log in again.
        </div>
      )}
      <Navbar/>
      <div className="flex flex-col items-center justify-center">
        <div id="JwrappedContent" className="grid grid-cols-1 lg:grid-cols-2 lg:px-20 lg:gap-4 px-5 gap-y-5">
          <div className="lg:my-5 flex justify-self-center" ref={resultsModalRef}>
            <ResultsModal
              top5Tracks={top5Tracks}
              top5Artists={top5Artists}
              category={category}
              timeRange={timeRange}
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-darkgreen font-Monotage text-center text-newgreen text-2xl lg:text-4xl font-normal leading-tight"> 
              CUSTOMIZE YOUR JWRAPPED
            </h1>
            <WrappedForm
              category={category}
              timeRange={timeRange}
              setCategory={setCategory}
              setTimeRange={setTimeRange}
            />
            <div className="font-Monotage flex flex-col lg:flex-row lg:place-self-end lg:gap-4">
              {buttonData.map((button, index) => (
                <button
                  key={index}
                  onClick={button.onClick}
                  className="w-full lg:w-fit text-darkgreen bg-white border-4 border-darkgreen lg:text-[1.5rem] px-20 rounded-[10px] mt-4 hover:bg-darkgreen hover:text-white"
                  aria-label={button.ariaLabel}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;