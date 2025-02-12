//1.Create your own resume data in JSON format
const Resume = {
    "Name":"Gunasekar",
    "Age":"25",
    "Mobile number":"638*****50",
    "Educational Qualification":"B.Tech(EEE)",
    "Gender":"male",
    "Email":"gunas*****57amma@gmail.com",
    "Address":[{
        "Street":"Nallavan street",
        "No":420/12,
        "Location":["Small village","Roundana circle","Vellore"],
        "Pincode no":632209
    }],
    "City":"Vellore"  
}
const obj = JSON.parse(JSON.stringify(Resume));
console.log(Resume)

//2.For the above JSON ,iterate for over all loops (For , For in , For of , For Each)
//1.forLoop
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let text = "";
for (let i = 0; i < 1; i++) {
  text += cars[i] + "<br>";
  console.log(cars)
}

//2.forIn
const person = {fname:"Guna", lname:"sekar",  age:25}; 
let txt = "";
for (let i in person) {
  txt += person[i] + "";
  console.log(txt)
}

//3.forOf
var colors = ["Black", "Blue", "Green", "Orange", "Red"];
let take = "";
for (let i of colors) {
  take += i + " " ;
  console.log(take)
}

//4.forEach
let Frt = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);
console.log(Frt)
let = JSON.stringify(Frt)
function myFunction(item, index) {
Frt += index + ": "  + item + " " ;
console.log(Frt)
}

/*3.Read about the difference between Window ,Screen and Document in Javascript
WINDOW :
I.	setTimeout() and setInterval() binding event handlers to a time
II.	Location giving the current UR
III.history with methods back() and forward() giving the tab's mutable history
IV.	Navigator describing the browser software

SCREEN :
The window object also has a screen object with properties describing the physical display:
I.	screen properties width and height are the full-screen
II.	screen properties availWidth and availHeight omit the toolbar
The portion of a screen displaying the rendered document is the viewport in JavaScript, which is potentially confusing because we call an application’s portion of the screen a window when talking about interactions with the operating system.

DOCUMENT :
Each window object has a document object to be rendered. These objects get confused in part because HTML elements are added to the global object when assigned a unique id. E.g., in the HTML snippet
I.	window.hello or window[“hello”]
II.	document.getElementById(“hello”)
III.document.body.firstChild
IV.	document.body.children[0]*/

