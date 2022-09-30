//todo 입력 공간 
const todoInput = document.querySelector("#todo-form #todo")

document.querySelector("#todo-form").addEventListener("submit", 
function(e){
    e.preventDefault();
    addTodo();
} )

// todo button : click event 실행
// button에 아이디를 주지 않았기 때문에 노드로 접근하거나 
// querySelector를 이용하여 선택자를 접근해서 객체를 가져온다 
const todoButton = todoInput.nextElementSibling;

// todo-form 들고오기 
const todoBoard = document.querySelector("#todoboard");

// 버튼에 이벤트 리스너 : button 이므로 click 이벤트 
todoButton.addEventListener("click", addTodo);
function addTodo() {
    //console.log("확인");
    // todoInput -value 값을 들고옴
    const text = todoInput.value;



    // 새로 요소 생성
    // li , input type="checkbox", textNode, button
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const textNode = document.createElement("span");
    textNode.innerHTML=text;
    const button = document.createElement("button");

    // li요소 - input, textNode, button 추가
    li.appendChild(checkbox);
    li.appendChild(textNode);
    li.appendChild(button);

    // todoBoard - li 추가
    todoBoard.append(li);

    // todoInput.value값을 빈값으로 만들기
    todoInput.value="";
    // button에 X 문자열 추가
    button.innerHTML = "X";

// check 박스를 눌렀을때 이벤트 리스터 실행 : click 
checkbox.addEventListener("click" , todoCheck);

// x 버튼을 눌렀을때 이벤트 리스너 실행 : click
button.addEventListener("click", todoDelete);

}

// 체크박스 이벤트 리스너에 들어가는 함수 
function todoCheck(e) {
    const li = e.target.nextElementSibling;
    if (e.target.checked) 
    
    {li.style.color = "lightgray";
    li.style.textDecoration = "line-through";}

    else 
       
     {   li.style.color = "black";
     li.style.textDecoration = "none";
    }
}

// x 버튼 이벤트 리스너에 들어갈 함수
function todoDelete (e){
    //li 요소를 삭제
    const li = e.target.parentNode;
    li.remove(); 
}
