import React from 'react';

export const MediaSearchResult = ({
  setSelectedMedia,
  setInput,
  mediaSearchResult,
  setMediaSearchResult,
}) => {
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
      {mediaSearchResult &&
        mediaSearchResult.length > 0 &&
        mediaSearchResult.map((media) => (
          <button
            key={media.id}
            onClick={handleClickChangeInput}
            data-name={media.name}
            data-id={media.id}
          >
            {media.name}
          </button>
        ))}
    </div>
  );
};
