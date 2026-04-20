// radhe radhe

import { Route, Routes, useParams } from "react-router";
import videos from "../../db/videos.json";
import PopUp from "./PopUp";

function VideoWrapper() {
  const { id } = useParams();

  const requestedVideo = videos.find(video => video.id === id);

  if (!requestedVideo) return <h1>Hell nah!</h1>;

  return <PopUp vid={requestedVideo} />;
}

function Video() {
  return (
    <Routes>
      <Route path=":id" element={<VideoWrapper />} />
    </Routes>
  );
}

export default Video;
