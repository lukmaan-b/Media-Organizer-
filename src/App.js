import React, { useState } from 'react';
import AddBar from './components/AddBar/AddBar';
import MediaTable from './components/MediaTable/MediaTable';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
  const [mediaList, setMediaList] = useLocalStorage('mediaList', []);
  return (
    <div>
      <h1>Media Organizer</h1>
      <AddBar setMediaList={setMediaList} />
      <MediaTable mediaList={mediaList} />
    </div>
  );
};

export default App;
