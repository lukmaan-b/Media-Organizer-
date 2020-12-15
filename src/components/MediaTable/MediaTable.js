import React from 'react';
import './MediaTable.module.css';
const MediaTable = ({ mediaList, setMediaList }) => {
  return (
    mediaList.length > 0 && (
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Release Date</th>
            <th>Rating</th>
            <th>⚙</th>
          </tr>
        </thead>
        <tbody>
          {mediaList.map(({ id, name, releaseDate, rating }, index) => (
            <tr key={index}>
              <td>{name}</td>
              <td>{new Date(releaseDate).toLocaleDateString()}</td>
              <td>{rating.toPrecision(3)}</td>
              <td>
                <button
                  onClick={() =>
                    setMediaList((prevState) =>
                      prevState.filter((_, i) => index !== i)
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
