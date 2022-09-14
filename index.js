let count1 = document.getElementById("count")
 
let count=0
 function add(){
   ++count
   count1.innerHTML=count

 }

 function reset(){
   count1.innerHTML = 0
   count=0

 }
 let p1= document.getElementById("save-pre")

 function save(){

   p1.innerHTML += count + " "
 }