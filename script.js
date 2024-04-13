var arr = [
    {name: "pink rose", image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name: "tree with sky", image: "https://i.pinimg.com/564x/73/93/9d/73939d7861ece35fb7030ab1e54b6ca2.jpg"},
    {name: "nothing happened", image: "https://i.pinimg.com/564x/72/b5/9b/72b59b1b8e1e12e3a72515fabde51856.jpg"},
    {name: "Tommy Shelby", image: "https://i.pinimg.com/564x/b9/ff/c8/b9ffc88ad813f68a723558620ce3ff47.jpg"},
    {name: "Female Model", image: "https://images.unsplash.com/photo-1655693489381-a7ae63269c48?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

function showTheCards(){
    var clutter = "";
    arr.forEach(function(obj){
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum</div>
    </div>`;
    })

    document.querySelector(".container").innerHTML = clutter;
}

function handleSearchFunctionality(){
    var input = document.querySelector("#searchinput");
    
    input.addEventListener("focus", function(){
        document.querySelector(".overlay").style.display = "block"; 
    })

    input.addEventListener("blur", function(){
        document.querySelector(".overlay").style.display = "none"; 
    })

    input.addEventListener("input", function(){
        const filterdArray = arr.filter(obj => obj.name.toLowerCase().startsWith(input.value));
        var clutter = "";
        filterdArray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>    
        </div>`
        })

        document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    })
}

handleSearchFunctionality();
showTheCards();