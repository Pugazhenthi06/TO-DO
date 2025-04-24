var popupbox=document.querySelector('.popup-box');
var popupoverlay=document.querySelector('.popup-overlay');
var popupbutton=document.getElementById('add-popup');
popupbutton.addEventListener('click',function(){
    popupoverlay.style.display='block';
    popupbox.style.display='block';
})
var cancelpopup=document.getElementById('cancel');
cancelpopup.addEventListener('click',function(event){
    event.preventDefault();
    popupoverlay.style.display='none';
    popupbox.style.display='none';
})
var container=document.querySelector('.container');
var addbook=document.getElementById('add');
var booktitle=document.getElementById('book-in');
var addauthor=document.getElementById('book-ar');
var adddescription=document.getElementById('book-des');
addbook.addEventListener('click',function(event){
    event.preventDefault();
    var div=document.createElement('div'); 
    div.setAttribute('class','book-container');
    div.innerHTML=`<h2>${booktitle.value}</h2>
    <h5>${addauthor.value}</h5>
    <p>${adddescription.value}</p>
    <button class='btn' onclick="deletebook(event)">Delete</button>`
    container.appendChild(div);
    

    popupoverlay.style.display='none';
    popupbox.style.display='none';
    document.getElementById('details').reset();
    
})

function deletebook(event){
    event.target.parentElement.remove();
}   
