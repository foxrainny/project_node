import React, { useState } from 'react';

const Location = () =>
{
const [lat, setLat] = useState(null);
const [lng, setLng] = useState(null);
const [status, setStatus] = useState(null);

const getLocation = () => {
    if (!navigator.geolocation) {
        setStatus('Geolocation is not supported by your browser');
    } else {
        setStatus('잠시만 기다려주세요 !');
        navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        fetch('주소', {
            method: 'post',
            body: JSON.stringify({
            latitude: position.coords.latitude,
            longtitude: position.coords.longtitude
            })
        })
        }, () => {
        setStatus('Unable to retrieve your location');
        });
    }
}

    return (
    <div className="App">
        
        <h1>오늘의 추천 음식은 ?</h1>
        <button onClick={getLocation}>추천 받기</button>
        <p>{status}</p>
        {lat && <p>Latitude: {lat}</p>}
        {lng && <p>Longitude: {lng}</p>}
        
    </div>
    );
}

export default Location;