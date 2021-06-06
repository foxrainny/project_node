import React, { Component, useState } from 'react';
import Printscreen from './print';

const Location = () =>
{
const [lat, setLat] = useState(null);
const [lng, setLng] = useState(null);
const [status, setStatus] = useState(null);

const componentDidMount = () => {
    fetch('http://localhost:3001/api_v1', {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            coord: {lat, lng}
        })
    }).then(response => console.log(response))
}

const getLocation = () => {
    if (!navigator.geolocation) {
        setStatus('Geolocation is not supported by your browser');
    } else {
        setStatus('추천 음식점 검색중 ! !');
        navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        componentDidMount()
        console.log("hi");
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
        {!lat && <h1>오늘의 점심은 ?!</h1>}
        <button onClick={getLocation}>추천 받기</button>
        <p>{status}</p>
        {/*lat && <p>Latitude: {lat}</p>*/}
        {/*lng && <p>Longitude: {lng}</p>*/}
        {lat && <Printscreen lat={lat} lng={lng}/>}        
    </div>
    );
}

export default Location;