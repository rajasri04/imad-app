console.log('Loaded!');
var element= document.getElementById('main');
element.innerHTML="bye";
var counter= 0;
var button = document.getElementById('counter');
button.onclick = function(){
    counter=counter + 1;
    var span = document.getElementById('counter');
    span.innerHTML = counter.toString();
};