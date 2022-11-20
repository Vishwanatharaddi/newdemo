//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//document.title = 123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent= 'hello';  
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images)


//GETELEMENTBYID//
//console.log(document.getElementById('header-title')); 
//var headerTitle = document.getElementById('header-title'); 
//var header = document.getElementById('main-header'); 
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Goodbye';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h3>Hello<h3>';
//header.style.borderBottom = 'solid 3px #000';

//GETELEMENTSBYCLASSNAME//
//var li = document.getElementsByClassName('list-group-item');
//console.log(li);
//console.log(li[1]);
//item[1].textContent = 'Hello 2';
//item[0].style.fontWeight = 'bold';
//item[1].style.fontWeight = 'bold';
//item[2].style.fontWeight = 'bold';
//item[3].style.fontWeight = 'bold';
//item[2].style.backgroundColor = 'green';

 //for(var i=0; i<item.length; i++){
    //item[i].style.backgroundColor = '#f4f4f4';


 //GETELEMENTSBYTAGNAME//
// var li = document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
//li[0].style.fontWeight = 'bold';
//li[1].style.fontWeight = 'bold';
//li[2].style.fontWeight = 'bold';
//li[3].style.fontWeight = 'bold';
//li[2].style.backgroundColor = 'green';

//QUEARYSELECTOR//
//var header = document.querySelector('#main-header');
//header.style.borderBottom = 'solid 4px #ccc';

//var input = document.querySelector('input');
//input.value = 'Hello World'

//var submit = document.querySelector('input[type="submit"]');
//submit.value="SEND"

//var item = document.querySelector('.list-group-item');
//item.style.color="red"

//var LastItem = document.querySelector
//('.list-group-item:last-child');
//LastItem.style.color = 'blue';

//var secondItem = document.querySelector
//('.list-group-item:nth-child(2)');
//secondItem.style.color = 'coral';

//QUEARYSELECTOR//
//var titles = document.querySelectorAll('.title');

//console.log(titles);
//titles[0].textContent = 'Hello';

//var odd = document.querySelectorAll('li:nth-child(odd)');
 
//for(var i =0; i< odd.length; i++){
   // odd[i].style.backgroundColor = 'green'
//}



 // TRAVERSING DOM
 var itemList = document.querySelector('#items');
  //Parentnode
  //console.log(itemList.parentNode);
  //itemList.parentNode.style.backgroundColor = 'lightgrey';
  //console.log(itemList.parentNode.parentNode);

   //ParentElement
   //console.log(itemList.parentElement);
   //itemList.parentElement.style.backgroundColor = 'lightgrey';
   //console.log(itemList.parentElement.parentElement);
 
   // childNodes
  // console.log(itemList.childNodes);

 // console.log(itemList.childern);
 // console.log(itemList.children[1]);
  //itemList.children[1].style.backgroundColor = 'skyblue';

//firstChild
//console.log(itemList.firstChild);

//firstElementChild
//console.log(itemList.firstElementChild);
//itemList.firstElementChild.textContent = 'Hello 1';

//lastChild
//console.log(itemList.lastChild);

//lastElementChild
//console.log(itemList.lastElementChild);
//itemList.lastElementChild.textContent = 'Hello 5';

//nextSibiling
//console.log(itemList.nextSibiling);

//nextElementSibiling
//console.log(itemList.nextElementSibiling);

//previousSibiling
//console.log(itemList.previousSibiling);

//previousElementSibiling
//console.log(itemList.previousElementSibiling);
//itemList.previousElementSibiling.style.color = 'green';

//createElement

// Crate a div
var newDiv = document.createElement('div');

//Add class
newDiv.className ='hello';

//Add id
newDiv.id ='hello1';

//Add attr
newDiv.setAttribute ('title','Hello Div');

//Create text mode
var newDivText = document.createTextNode('Hello world');

//Add text to div
newDiv.appendChild(newDivText);

var container =  document.querySelector('header .container');
var h1 = document.querySelector('header h1')

console.log(newDiv);

newDiv.style.fontSize = '30px'

container.insertBefore(newDiv, h1);
