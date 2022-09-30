// 배경이미지 이름을 배열에 저장
const images = ["./1.jpg","./2.jpg","./3.jpg","./4.jpg","./5.jpg","./6.jpg","./7.jpg","./8.jpg"]

// 랜덤 함수의 특징 0~1 사이의 실수 > 0~ 원하는 정수 
// 배열 > 요소를 넣어주면 인덱스 값으로 접근가능 
const randomNum = Math.floor(Math.random()*images.length);
const choseImg = images[randomNum];

// 바디 객체를 가져와줌
const bodybackground = document.querySelector("body");

// 바디에 이미지 추가 
//css에서 이미지를 추가하는 방식과 동일 
bodybackground.style.background = `url(./${choseImg})`