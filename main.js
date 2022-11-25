window.onload = function(){
    changeColor(localStorage.getItem("color"));
}
function changeColor(color){
    document.body.style.background = color;
    localStorage.setItem("color", color);
}
function updateResult(e){
    e.preventDefault();
    var val = document.getElementById('search').value;
    fetch("https://api.tvmaze.com/search/shows?q="+val)
        .then(async function(r){
            var resp = await r.json();
            var ans = "";
            for(var i = 0; i < resp.length; i++){
                ans += "<img src=\""+resp[i].show.image.medium+"\">";
            }
            document.getElementById("searched").innerHTML = ans;
        });
    return false;
}

document.getElementById('search-box').addEventListener('submit', updateResult);