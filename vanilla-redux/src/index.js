import{createStore} from "redux"    //redix에서 create store를 import
const plus=document.getElementById("add")
const minus=document.getElementById("minus")
const number=document.getElementById("number")


//reducer는 function 다.
//data를 수정하기 위한 함수
// reducer 은 data를 바꾸고 modify 하는걸 책임지는 
//reducer 나 modifier는 처음으로 data를 바꿔준다.

const countModifler =()=>{
    return "hello";  //이러면 이게 내 data가 될 수 있다.
 
}



//create 라는 함수가 우리에게 reducer 를 주기를 요구한다.
const countStore=createStore(countModifler); //store 생성

console.log(countStore.getState())









//store는 data(state)를 넣는 공간이다
//count를 modify(수정) 하기 위함 이다.
//리덕스에는 createStroe 이라는 function 함수가 잇다
//store가 하는 일은 기본적으로 너의 data를 넣을 수 있는 장소를 생성한다.
//리덕스는 data를(관리하는데) 도와주는 역할을 하기 위해 만들어 졋다./4
//이 케이스 에서는 redux 가 -1 +1 을  count 하는걸 도와주기 위해 만들어 졋다.
//reducer 이 function 을 받아야 한다.





// let count = 0;
// number.innerText = count;

// const updateText = () => {
//   number.innerText = count;
// };

// const handleAdd = () => {
//   count = count + 1;
//   updateText();
// };

// const handleMinus = () => {
//   count = count - 1;
//   updateText();
// };

// plus.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);