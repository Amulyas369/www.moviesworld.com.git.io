const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
    function myFunction() {
        if(document.getElementById("menu_section").style.display=="none"){
         document.getElementById("menu_section").style.display="block";
        }
        else{
         document.getElementById("menu_section").style.display="none";
        }
           
         }
    const moiveBox = document.querySelector("#movie-holder")
const getMovies = async (APIURL) => {
    const response = await fetch(APIURL)
    const data = await response.json()
    showMovies(data)
    console.log(data);
}
getMovies(APIURL);

const showMovies = (fetchMovieList) => {
//     const response = await fetch(fetchMovieList)
// const data = await response.json()
    moiveBox.innerHTML = "";
    fetchMovieList.results.forEach(
        (result) => {
            const imagePath = result.poster_path === null ? "img/image-missing.png" : IMGPATH + result.poster_path;
           
            const box = document.createElement("div")
            box.classList.add("box")
            box.innerHTML = `
            <a class="movie- link" href="#booker"><img src="${imagePath}" alt="" />
            <div class="overlay">
                <div class="movie" data- d="moviename"> 
                    <h4> ${result.original_title}  </h4>
                    <span> ${result.vote_average} <span>
                </div>
                <h3>Overview:</h3>
                <p> 
                    ${result.overview}
                </p>
             </div>
             </a>
                `
            moiveBox.appendChild(box)
        }
    )
}
// showMovies(data);
document.querySelector("#search").addEventListener(
    "keyup",
    function (event) {
        if (event.target.value != "") {
            getMovies(SEARCHAPI + event.target.value)
        } else {
            getMovies(APIURL);
        }
    }
)
// ticket booking section