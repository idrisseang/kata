"use strict";
/* Author : Idrisse Angama */
const filterByTitle = (movies, searchedTitle) => {
    const moviesFounded = movies.filter(movie => movie.title.toLowerCase() === searchedTitle.toLowerCase());
    return moviesFounded;
};
const recentMovies = [
    {
        title: "The Great Adventure",
        releaseDate: "2023-07-15",
        actors: ["Alex Johnson", "Samantha Bloom", "Michael Cane"]
    },
    {
        title: "Lost in Time",
        releaseDate: "2023-05-22",
        actors: ["Clara Hughes", "Robert Smith", "Emily Stone"]
    },
    {
        title: "Mystery of the Blue Ocean",
        releaseDate: "2023-08-30",
        actors: ["Henry Gold", "Natalie Port", "Bruce Wayne"]
    },
    {
        title: "Cybernetic",
        releaseDate: "2023-09-12",
        actors: ["Aaron Stark", "Lisa Ray", "Jeremy Irons"]
    },
    {
        title: "The Hidden World",
        releaseDate: "2023-10-05",
        actors: ["Sophia Loren", "Daniel Craig", "Emma Watson"]
    }
];
console.log(filterByTitle(recentMovies, "the hidden world"));
