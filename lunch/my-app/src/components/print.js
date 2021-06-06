/* global kakao*/
import React, {useEffect} from 'react';
import '../App.css'

const Printscreen = ({lat, lng}) => {

    useEffect(()=>{
        var container = document.getElementById("mymap");
        var options = {
            center: new kakao.maps.LatLng(lat, lng),
            level: 2,
        };
        var map = new kakao.maps.Map(container, options);
        var markerPosition  = new kakao.maps.LatLng(lat, lng); 
        var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);
    }, [lat, lng])

    return (
        <div>
            <div id="mymap" style={{width:"300px", height: "400px"}}></div>
        </div>
    )
}

export default Printscreen;