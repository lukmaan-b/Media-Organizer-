import React from 'react';

const MediaTable = ({ mediaList, setMediaList }) => {
  return (
    mediaList.length > 0 && (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Release Date</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {mediaList.map(({ id, name, releaseDate, rating }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{new Date(releaseDate).toLocaleDateString()}</td>
              <td>{rating}</td>
              <td>
                <button
                  onClick={() =>
                    setMediaList((prevState) =>
                      prevState.filter((media) => media.id !== id)
                    )
                  }
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  );
};

export default MediaTable;
