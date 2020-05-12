var ourRequest = new XMLHttpRequest();
var btn = document.getElementById("btn");
var ourList = document.getElementById("ourList");
initNumber=0;
pageNumber=5;

btn.addEventListener("click",function(){
    ourRequest.open('GET','https://jsonplaceholder.typicode.com/posts');
    ourRequest.onload=function(){
        var ourData = JSON.parse(ourRequest.responseText);
        showMe(ourData);
};

    ourRequest.send();
});

function showMe(data) {
    var Element ="";
    for(var i = initNumber; i < pageNumber; i++){
        Element+= `<p> My id is ${data[i].id} </p>`;

    };
    ourList.insertAdjacentHTML("beforeend", Element);
    initNumber += 5;
    pageNumber += 5;
    if(pageNumber == 15){
    btn.classList.add("hideBtn");
    }
}
