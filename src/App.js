import React, { useState } from 'react';
import AddBar from './components/AddBar/AddBar';
import MediaTable from './components/MediaTable/MediaTable';

const App = () => {
  const [mediaList, setMediaList] = useState([
    {
      name: 'pokemon',
      releaseDate: 1,
      rating: 5,
    },
  ]);
  return (
    <div>
      <h1>Media Organizer</h1>
      <AddBar setMediaList={setMediaList} />
      <MediaTable mediaList={mediaList} />
    </div>
  );
};

export default App;
