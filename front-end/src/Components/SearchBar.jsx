import React, { useState } from "react";

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedActor, setSelectedActor] = useState("");


  function handleSubmit(event) {
    event.preventDefault();
    console.log("Search with:", {
      q: searchInput,
      genre: selectedGenre,
      year: selectedYear,
      actor: selectedActor,
    });
  }

  return (
    <div className="searchBarContainer">
      <form onSubmit={handleSubmit}>
        {/* Genre Dropdown */}
        <label htmlFor="genreDropdown">Select Genre:</label>
        <select
          id="genreDropdown"
          name="genre"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="">-- All Genres --</option>
          {/* Populate this dropdown dynamically with genres */}
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>

        {/* Year Dropdown */}
        <label htmlFor="yearDropdown">Select Year:</label>
        <select
          id="yearDropdown"
          name="year"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">-- All Years --</option>
          {/* Populate this dropdown dynamically with years */}
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        <label htmlFor="actorActressDropdown">Select Actor/Actress:</label>
        <select
          id="genreDropdown"
          name="Actor/Actress"
          value={selectedActor}
          onChange={(e) => setSelectedActor(e.target.value)}
        >
          <option value="">-- All Genres --</option>
          {/* Populate this dropdown dynamically with genres */}
          {actor.map((genre) => (
            <option key={actor} value={actor}>
              {actor}
            </option>
          ))}
        </select>

        {/* Movie Search Bar */}
        <label htmlFor="movieSearch">Search for Movie:</label>
        <input
          className="search-input"
          type="search"
          name="search-bar"
          id="search-bar"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SearchBar;
