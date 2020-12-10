import React, { useRef, useState } from 'react';

const AddBar = () => {
  const [mediaType, setMediaType] = useState();
  const input = useRef('');
  const handleChange = (e) => {
    setMediaType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // fetch('https://api.opencritic.com/api/meta/search?criteria=cyberpunk')
    //   .then((res) => res.json())
    //   .then((json) => console.log(json));
  };

  function addMedia(mName, mType) {}

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={input} />
      <select onChange={handleChange}>
        <option value="games">Games</option>
        <option value="tv">TV Shows</option>
        <option value="movies">Movies</option>
      </select>
      <button>Add</button>
    </form>
  );
};

export default AddBar;
