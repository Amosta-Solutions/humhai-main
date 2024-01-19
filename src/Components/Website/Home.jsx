import React, { useState } from 'react';

function Home() {
  const [play, setPlay] = useState('');

  const handleFileChange = (e) => {
    setPlay(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <>
    <div>
      <div className="container">
        <div className="text-container">
          <p className="static-text">Hi, I'm a</p>
          <ul className="dynamic-text">
            <li className="item">web developer</li>
            <li className="item">mobile developer</li>
            <li className="item">UX/UI designer</li>
          </ul>
        </div>
      </div>

      <div>
        <div className="form">
          <form>
            <label>
              Upload Profile VoiceNote:
              <br />
              <input
                type="file"
                accept="audio/*"
                className="profile-aud"
                onChange={handleFileChange}
              />
            </label>
          </form>
        </div>

        {play && (
          <audio controls>
            <source src={play} type="audio/mp3" />
            Your browser does not support the audio tag.
          </audio>
         )} 

      </div>
    </div>
    </>
  );
}

export default Home;
