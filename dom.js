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
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World'

var submit = document.querySelector('input[type="submit"]');
submit.value="SEND"

var item = document.querySelector('.list-group-item');
item.style.color="red"

var LastItem = document.querySelector
('.list-group-item:last-child');
LastItem.style.color = 'blue';

var secondItem = document.querySelector
('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';

   

