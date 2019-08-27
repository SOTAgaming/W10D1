import warmUp, { htmlGenerator } from "./warmup";
import Clock from "./clock";
import drop_down, { dogs, dogLinkCreator, attachDogLinks, handleEnter, handleLeave} from "./drop_down";
import todo_list, { addTodo, populateList, checkbox} from "./todo_list";
import slide_scroll, { scrollListener} from "./slide_scroll";


console.log(dogLinkCreator(dogs));
const clock = new Clock();

let clockDiv = document.querySelector('#clock');
// let arr = [
//   {
//     "done": false,
//     todo: "walk the dog"
//   },
//   {
//     "done": true,
//     todo: "feed the dog"
//   }
// ];
attachDogLinks();
handleEnter();
handleLeave();
addTodo();
let initial = window.localStorage.getItem("todos") || "[]";
populateList(JSON.parse(initial));
checkbox();
scrollListener();


// htmlGenerator(clock.printTime(), clockDiv);

setInterval(() => {
  htmlGenerator(clock._tick.bind(clock)(), clockDiv)
}, 1000);




// window.addEventListener("scroll", (e) => {

//   if (window.innerHeight > img.y - img.height) {

//   }

// });
