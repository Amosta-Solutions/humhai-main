import React, {useState } from 'react';

function Home() {

const [play,setPlay]=useState('')

  const handleFileChange = (e) => {
    setPlay(URL.createObjectURL(e.target.files[0]));
  };
  return (
    <>
    <div>
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
