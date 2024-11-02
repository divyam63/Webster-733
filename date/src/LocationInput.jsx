import React, { useState, useEffect } from 'react';
import { set } from 'react-hook-form';

function LocationInput  ()  {
  const [latitude, setLatitude] = useState( null);
  const [longitude, setLongitude] = useState( null);
 
  useEffect(() => {
    
    const savedLatitude = localStorage.getItem('userLatitude');
    const savedLongitude = localStorage.getItem('userLongitude');

    if (savedLatitude) setLatitude(savedLatitude);
    if (savedLongitude) setLongitude(savedLongitude);
    
  }, [])
  

 

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          
          const {latitude,longitude}= position.coords;
          setLatitude(latitude);
          setLongitude(longitude);

          localStorage.setItem('userLatitude', latitude);
          localStorage.setItem('userLongitude', longitude);
          
          alert('Location saved!');
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Erron in location getting");
        }
      );
    } else {
      alert("Geolocation Api not there");
    }
  };

  return (
    <div>
      <button onClick={getUserLocation}>Input Your Location</button>

      <div className='mt-5'>
        {latitude && longitude && (
          <p className='max-w-100%'>
            Saved Coordinates: Latitude {latitude}, Longitude {longitude}
          </p>
        )}
      </div>
    </div>
  );
};

export default LocationInput;
