import React, { useEffect, useRef, useState } from 'react';

let timer;

const AddBar = ({ setMediaList }) => {
  const [mediaType, setMediaType] = useState();
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
    }, 1000);
  };

  async function searchMedia(val) {
    //query
    const res = await fetch(
      `https://api.opencritic.com/api/meta/search?criteria=${val}`
    );
    const json = await res.json();

    //modify object
    setMediaSearchResult(json.map(({ id, name }) => ({ id, name })));
  }

  const handleClickAddMedia = () => {
    setMediaList((prevState) => [...prevState, selectedMedia]);
  };

  const handleClickChangeInput = async ({ target }) => {
    const name = target.dataset.name;
    const id = target.dataset.id;

    const res = await fetch(`https://api.opencritic.com/api/game/${id}`);
    const json = await res.json();
    const obj = {
      id,
      name,
      rating: json.averageScore,
      releaseDate: json.Platforms[0].releaseDate,
    };
    setInput(name);
    setSelectedMedia(obj);
    setMediaSearchResult([]);
  };
  return (
    <div>
      <div>
        <input type="text" onInput={handleInput} value={input} />
        <select onChange={handleChange}>
          <option value="games">Games</option>
          <option value="tv">TV Shows</option>
          <option value="movies">Movies</option>
        </select>
        <button onClick={handleClickAddMedia}>Add</button>
      </div>
      <div>
        {mediaSearchResult.length > 0 &&
          mediaSearchResult.map((media) => (
            <button
              onClick={handleClickChangeInput}
              data-name={media.name}
              data-id={media.id}
            >
              {media.name}
            </button>
          ))}
      </div>
    </div>
  );
};

export default AddBar;
