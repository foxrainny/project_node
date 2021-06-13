/* global kakao*/
import React, {useEffect} from 'react';
import '../App.css'

const Printscreen = ({lat, lng}) => {

    useEffect(()=>{
        var container = document.getElementById("mymap");
        var options = {
            center: new kakao.maps.LatLng(lat, lng),
            level: 4,
        };
        var map = new kakao.maps.Map(container, options);
        var markerPosition  = new kakao.maps.LatLng(lat, lng); 
        var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);
  var iwContent = '<div style="padding:10px;">(음식점 이름) <br><a href="https://map.kakao.com/link/map/Hello World!,' + lat+ ','+ lng +'" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/Hello World!,' + lat+ ','+ lng +'" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    iwPosition = new kakao.maps.LatLng(lat, lng); //인포윈도우 표시 위치입니다

// 인포윈도우를 생성합니다
var infowindow = new kakao.maps.InfoWindow({
    position : iwPosition, 
    content : iwContent 
});
  
// 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
infowindow.open(map, marker); 
    }, [lat, lng])

    return (
        <div>
            <div id="mymap" style={{width:"600px", height: "600px"}}></div>
        </div>
    )
}

export default Printscreen;