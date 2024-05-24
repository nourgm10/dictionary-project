import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [error, setError] = useState(false);
  let [searchedKeyword, setSearchedKeyword] = useState("");
  let [photosError, setPhotosError] = useState(false);

  function handleDictionaryResponse(response) {
    if (response.data && response.data.length > 0) {
      setResults(response.data[0]);
      setError(false);
    } else {
      setResults(null);
      setError(true);
    }
  }

  function handlePexelsResponse(response) {
    if (response.data.photos.length > 0) {
      setPhotos(response.data.photos);
      setPhotosError(false);
    } else {
      setPhotos(null);
      setPhotosError(true);
    }
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    setSearchedKeyword(keyword);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios
      .get(apiUrl)
      .then(handleDictionaryResponse)
      .catch(() => {
        setResults(null);
        setError(true);
      });

    let pexelsApiKey =
      "563492ad6f91700001000001fdd29f0808df42bd90c33f42e128fa89";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios
      .get(pexelsApiUrl, { headers: headers })
      .then(handlePexelsResponse)
      .catch(() => {
        setPhotos(null);
        setPhotosError(true);
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h2 className="question">What word would you like to look up?</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              className="form-control"
              placeholder="Type a word..."
              autoFocus="on"
              onChange={handleKeywordChange}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-dark w-100 button"
            />
          </div>
        </div>
      </form>
      <Results
        results={results}
        error={error}
        keyword={searchedKeyword}
        photosError={photosError}
      />
      <Photos photos={photos} />
    </div>
  );
}
