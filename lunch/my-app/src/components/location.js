import React, { Component, useState } from 'react';
import Printscreen from './print';

const Location = () =>
{
const [lat, setLat] = useState(null);
const [lng, setLng] = useState(null);
const [status, setStatus] = useState(null);

const componentDidMount = () => {
    console.log(lat, lng);
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
        {<div className="main-banner"> 오늘의 점심 추천</div>}
        {!lat ? <button onClick={getLocation} className='main-button'>
            <div className="banner-font">추천 받기</div>
        </button> :
        <button onClick={getLocation} className='main-button'>
        <div className="banner-font">다시 추천 받기</div>
        </button>
        }
        <div className="loading">{status}</div>
        {lat && lng && componentDidMount()}
        {lat && 
            <div className="recommend-result"> 오늘의 음식점은 "호호호" 입니다 ~!
            </div>}
        {lat && lng && <Printscreen lat={lat} lng={lng}/>}
    </div>
    );
}

export default Location;