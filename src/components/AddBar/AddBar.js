import React, { useState } from 'react';
import { MediaSearchResult } from '../MediaSearchResult/MediaSearchResult';
import styles from './AddBar.module.css';
let timer;

const AddBar = ({ setMediaList }) => {
  const [mediaType, setMediaType] = useState('games');
  const [mediaSearchResult, setMediaSearchResult] = useState([]);
  const [input, setInput] = useState('');
  const [selectedMedia, setSelectedMedia] = useState();

  const handleChange = (e) => {
    setMediaType(e.target.value);
  };

  const handleInput = ({ target: { value } }) => {
    clearTimeout(timer);
    setInput(value);
    timer = setTimeout(() => {
      searchMedia(value);
    }, 500);
  };

  async function searchMedia(val) {
    //query
    const res = await fetch(
      `https://api.opencritic.com/api/meta/search?criteria=${val}`
    );
    const json = await res.json();

    //modify object
    json.length &&
      setMediaSearchResult(json.map(({ id, name }) => ({ id, name })));
  }

  const handleClickAddMedia = () => {
    input && setMediaList((prevState) => [...prevState, selectedMedia]);
  };

  return (
    <div>
      <div className={styles.addBarContainer}>
        <input
          type="text"
          onInput={handleInput}
          value={input}
          className={styles.searchBar}
        />
        <div className={styles.btnGroup}>
          <select
            onChange={handleChange}
            selected={mediaType}
            className={styles.mediaOption}
          >
            <option value="games">Games</option>
            <option disabled value="tv">
              TV Shows
            </option>
            <option disabled value="movies">
              Movies
            </option>
          </select>
          <button className={styles.addButton} onClick={handleClickAddMedia}>
            Add
          </button>
        </div>
      </div>
      <div>
        <MediaSearchResult
          setInput={setInput}
          setSelectedMedia={setSelectedMedia}
          mediaSearchResult={mediaSearchResult}
          setMediaSearchResult={setMediaSearchResult}
        />
      </div>
    </div>
  );
};

export default AddBar;
