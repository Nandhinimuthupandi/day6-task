var movies = [{title:"Movie 1", studio:"studio A", rating:"PG"},{title:"Movie 2", studio:"studio B", rating:"PG-13"},{title:"Movie 3", studio:"Studio C", rating:"PG"},{title:"Movie 4", studio:"Studio D", rating:"R"}];

class Movie{
    constructor(title,studio,rating = "PG"){
       this.title = title;
       this.studio= studio;
       this.rating= rating;
    }
    getPG(movies){
        var output = movies.filter((movie)=>{
            return movie.rating === this.rating
        })
           return output;
    }
}

var movieObj = new Movie("Casino Royale","Eon Productions");
 var result = movieObj.getPG(movies);
 console.log(result)
 
 
var movieObj1 = new Movie("Casino Royale","Eon Productions","PG13");
 var result1 = movieObj1.getPG(movies);
 console.log(result1)