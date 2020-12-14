import React from 'react';

const MediaTable = ({ mediaList }) => {
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
          {mediaList.map(({ name, releaseDate, rating }) => (
            <tr>
              <td>{name}</td>
              <td>{new Date(releaseDate).toLocaleDateString()}</td>
              <td>{rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  );
};

export default MediaTable;
