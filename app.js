// Add these imports at the very top of your app.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
var config = {
	apiKey: "AIzaSyAzvhjwAXIRkUPA4WdkP8D1jAECYPGVWak",
	authDomain: "my-website-e18f2.firebaseapp.com",
	databaseURL: "https://jeenyato-7cba0-default-rtdb.firebaseio.com/",
	storageBucket: "my-jeenyato-7cba0.appspot.com",
};

const app=initializeApp(config);
const db=getDatabase(app);

window.send=()=>{
 let name=document.getElementById("name").value||"مستخدم";
 let text=document.getElementById("text").value;
 if(!text)return;
 push(ref(db,"messages"),{name,text,time:Date.now()});
 document.getElementById("text").value="";
};

onChildAdded(ref(db,"messages"),s=>{
 let d=s.val();
 messages.innerHTML+=`<div class=msg><b>${d.name}</b><br>${d.text}</div>`;
 messages.scrollTop=messages.scrollHeight;
});
