//Code 13: Print all movies except the third movie




var movies = ["bahuballi", "Spider Man", "Iron Man", "Super Man"];
for (var i = 0; i < movies.length; i++) {
    if (i == 2) {
        continue;
    }
    console.log(movies[i]);
}