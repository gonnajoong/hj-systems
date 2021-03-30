<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel ="shortcut icon" href="images/favicon/favicon-16.ico" sizes="16x16">
      <link rel ="shortcut icon" href="images/favicon/favicon-32.ico" sizes="32x32">
      <link rel="shortcut icon" href="images/favicon/favicon-32.png">
      <link rel="shortcut icon" href="images/favicon/favicon-96.png">
      <link rel="shortcut icon" href="images/favicon/favicon-152.png">

      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <script src="./js/libs/jquery-3.5.1.min.js"></script>
      <script src="./js/libs/slick.min.js"></script>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="./assets/index.css" />

    <title>HJ SYSTEMS</title>
</head>
<body>
    <?php @include("./layouts/header.php");?>
    <script type="text/javascript" src="/admin/pages/layouts/header.js"></script>
    <section id="hjAddressWrap">
        <h2>찾아오시는 길</h2>
        <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=1960b0cb26671b5f70989ae9e95c3ee2"></script>
        <section class="hj-address-map-section">
            <article class="hj-address-map">
                <div id="hjKakaoMap"></div>
            </article>
        </section>
        <section class="hj-address-text-wrap">
            <ul class="hj-address-text">
                <li>
                    <strong>주소 :</strong>
                    <p>서울시 강서구 양천로 551-24 한화 비즈메트로2차 706호</p>
                </li>
                <li>
                    <strong>문의전화 :</strong>
                    <p>000-0000-0000</p>
                </li>
                <li>
                    <strong>방문 가능시간 :</strong>
                    <p>am 00:00 ~ pm 00:00</p>
                </li>
            </ul>
            <h3>대중교통 정보</h3>
            <table class="hj-transport-table">
                <tr>
                    <th>지하철</th>
                    <th>출구</th>
                </tr>
                <tr>
                    <td><i class="hj-icon hj-9th-metro"></i>9호선</td>
                    <td>증미역 1번 출구</td>
                </tr>
            </table>
            <table  class="hj-transport-table">
                <tr>
                    <th>버스</th>
                    <th>정거장</th>
                </tr>
                <tr>
                    <td><i class="hj-icon hj-blue-bus"></i>660 - 가양역.현대아파트 방면</td>
                    <td>이마트.강서소방서, 이마트.증미역</td>
                </tr>
                <tr>
                    <td><i class="hj-icon hj-blue-bus"></i>672 - 가양역.현대아파트 방면</td>
                    <td>이마트.강서소방서, 이마트.증미역</td>
                </tr>
                <tr>
                    <td><i class="hj-icon hj-green-bus"></i>6642 - 강서구청별관 방면</td>
                    <td>이마트.강서소방서, 이마트.증미역</td>
                </tr>
            </table>
        </section>
        <script type="text/javascript">
            var mapContainer = document.getElementById('hjKakaoMap'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(37.55886395335532, 126.86194486828924), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

// 지도의 마우스 휠, 모바일 터치를 이용한 확대, 축소 기능을 막는다.
map.setZoomable(false);

// 마커가 표시될 위치입니다
var markerPosition  = new kakao.maps.LatLng(37.55886395335532, 126.86194486828924);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
        </script>
    </section>
    <?php @include("./layouts/footer.php");?>
    <script type="text/javascript" src="/pages/main/js/index.js"></script>
</body>
</html>