// 입력폼 가져오기 - form의 sumbit을 이벤트를 사용하기위해 
const loginForm = document.querySelector("#loginform");

// name 값을 가져오기위한 input
const loginInput = document.querySelector("#loginform #name");
// name 값을 가질 h1 
const title = document.querySelector("#title");

// 이벤트 리스터 연결 
// form의 submit 을 사용할 경우 click 이벤트가 아니라 
// form 의  submit 이벤트로 연결해주어야 한다. 

loginForm.addEventListener("submit", onLoginSubmit);

function onLoginSubmit(e) {
    e.preventDefault(); // 새로고침 취소

    // loginInput의 value값을 가져옴
    const name = loginInput.value;

    // if문을 사용해서, name값이 없을때, 아래 실행되지않게
    // 함수에서 return을 사용하면 함수 종료


    const mee = document.querySelector('input[name="chk_info"]:checked').value

    // value값을 title에 넣어줌
    // console.log(name) // 값이 제대로 들어갔는지, console.log로 확인
    title.innerHTML = " Hello! Welcomeback "+ mee +". "+ name ;

    // loginForm , hidden 클래스 추가
    loginForm.classList.add("hidden");
    // todo-form을 가져와서 hidden 클래스 제거
    document.querySelector("#todo-form")
            .classList.remove("hidden");
}


