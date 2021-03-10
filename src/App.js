import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import Frame1 from "./Frame1";
import Doka from './DragnDrop'
function App() {
  const [files, setFiles] = useState([]);
  const [artDimension, setArtDimension] = useState("3");
  const [matColour, setMatColour] = useState("3");
  const [openCrop, setOpenCrop] = useState(false);
  const [croppedImage, setCroppedImage] = useState("");
  const [frameText, setFrameText] = useState("");

  const cropperRef = useRef(null);
  const onCrop = () => {
    const imageElement = cropperRef.current;
    const cropper = imageElement.cropper;
    console.log("cropper", cropper);
    setCroppedImage(cropper.getCroppedCanvas().toDataURL());
  };

  const addFiles = (img) => {
    setFiles(img);
  };

  useEffect(() => {
    // Update the document title using the browser API
    if (files.length) console.log("files", files[0].path);
  }, [files]);

  const handleArtDimension = (e) => {
    setArtDimension(e.target.value);
    console.log("targetd value", e.target.value);
  };

  const handleMatStyle = (e) => {
    setMatColour(e.target.value);
  };

  const handleCrop = () => {
    setOpenCrop(true);
  };

  const frameTextHandler = (e) => {
    setFrameText(e.target.value);
    console.log(frameText);
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="left_portion">
          <Frame1
            croppedImage={croppedImage}
            matColour={matColour}
            artDimension={artDimension}
            frameText={frameText}
          />
        </div>
        <div className="right_portion">
          <div className="custom-select">
            <div className="mask"></div>
            <label style={{ margin: "0 5px" }} for="dimensions-select">
              Art Dimension:
            </label>
            <select
              name="dimensions-select"
              value={artDimension}
              onChange={handleArtDimension}
            >
              <option label='"3 x 4.00"' value="3"></option>
              <option label='"4 x 5.33"' value="4"></option>
              <option label='"5 x 6.67"' value="5"></option>
            </select>
          </div>
          <div className="custom-select">
            <div className="mask"></div>
            <label style={{ margin: "0 5px" }} for="dimensions-select">
              Mat Style:
            </label>
            <select value={matColour} onChange={handleMatStyle}>
              <option label="black" value="1"></option>
              <option label="red" value="2"></option>
              <option label="white" value="3"></option>
            </select>
          </div>
          <div>
            <form>
              <div className="textTitle">Frame Title</div>
              <div className="textContainer">
                <textarea
                  name="frameText"
                  rows="2"
                  cols="30"
                  value={frameText}
                  onChange={frameTextHandler}
                ></textarea>
              </div>
            </form>
          </div>
          <Doka
            addFiles={addFiles}
            files={files}
            handleCrop={handleCrop}
            className="dragndrop"
          />
          {openCrop && (
            <>
              <div
                className="clearfix"
                style={{ height: "250px", width: "250px" }}
              >
                <img
                className="croppedPrivew"
                  src={croppedImage}
                  alt="cropped image"
                />
              </div>
              <div>
                <Cropper
                  src={files[0].preview}
                  style={{ height: 400, width: "100%" }}
                  // Cropper.js options
                  initialAspectRatio={16 / 9}
                  guides={false}
                  crop={onCrop}
                  ref={cropperRef}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}


export default App;
