import { useDropzone } from "react-dropzone";
import React, {  useState,useRef, useEffect } from "react";
import './App.css'
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import Frame1 from './Frame1'


function App() {
  const [files, setFiles] = useState([]);
  const [artDimension,setArtDimension] = useState("3")
  const [matColour,setMatColour] = useState("3")
  const [openCrop,setOpenCrop] = useState(false)
  const [croppedImage,setCroppedImage] = useState("")
  const [frameText,setFrameText] =useState("")

  const cropperRef = useRef(null);
  const onCrop = () => {
    const imageElement = cropperRef.current;
    const cropper = imageElement.cropper;
    console.log("cropper",cropper)
    setCroppedImage(cropper.getCroppedCanvas().toDataURL())

  };


  const addFiles = (img) =>{
    setFiles(img)
  }

  useEffect(() => {
    // Update the document title using the browser API
    if(files.length)
   console.log("files",files[0].path)
  },[files]);

  const handleArtDimension = (e) => {
setArtDimension(e.target.value)
    console.log("targetd value",e.target.value)
  }

  const handleMatStyle = (e) => {
    setMatColour(e.target.value)
  }


  const handleCrop = () => {
      setOpenCrop(true)
  }

  const frameTextHandler = (e) => {
    setFrameText(e.target.value)
    console.log(frameText)
  }
  return (
    <React.Fragment>
      <div className="container">
        <div className="left_portion">
        <Frame1
        croppedImage={croppedImage}
        matColour={matColour}
        artDimension ={artDimension}
        frameText = {frameText}
        />
          </div>
          <div className="right_portion">
            <div className="custom-select">
              <div className="mask"></div>
            <label style={{margin:"0 5px"}} for="dimensions-select">Art Dimension:</label>
              <select name="dimensions-select" value={artDimension} onChange={handleArtDimension}>
              <option label='"3 x 4.00"' value="3"></option>
              <option label='"4 x 5.33"' value="4"></option>
              <option label='"5 x 6.67"' value="5"></option>
              </select>
              </div>
              <div className="custom-select">
              <div className="mask"></div>
            <label style={{margin:"0 5px"}} for="dimensions-select">Mat Style:</label>
              <select value={matColour} onChange={handleMatStyle}>
              <option label='black' value="1"></option>
              <option label='red' value="2"></option>
              <option label='white' value="3" ></option>
              </select>
              </div>
              <div>
                <form>
                  <textarea name="frameText" rows="2" cols="20" value={frameText} onChange={frameTextHandler}>

                  </textarea>
                </form>
              </div>
          <Doka addFiles={addFiles} files={files} handleCrop={handleCrop} className="dragndrop"/>
          {openCrop && <><div className="clearfix" style={{height:"300px",width:"400px"}}>
            <img
              style={{ width: "100%" }}
              src={croppedImage}
              alt="cropped image"
            />
            </div><div>
            <Cropper
      src={files[0].preview}
      style={{ height: 400, width: "100%" }}
      // Cropper.js options
      initialAspectRatio={16 / 9}
      guides={false}
      crop={onCrop}
      ref={cropperRef}
    />
          </div></>}
          </div>
        </div>
     

    </React.Fragment>
  );
}

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16,
  padding: 20,
};

const thumb = {
  position: "relative",
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

const thumbButton = {
  position: "absolute",
  right: 10,
  bottom: 10,
  background: "rgba(0,0,0,.8)",
  color: "#fff",
  border: 0,
  borderRadius: ".325em",
  cursor: "pointer",
};



function Doka(props) {


  const { getRootProps, getInputProps,isDragAccept,isDragReject } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
     
        let data = acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }
        )
      );
      props.addFiles(data)
    },
  });

  const thumbs = props.files.map((file, index) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt="" />
      </div>
      <button
        style={thumbButton}
        onClick = {props.handleCrop}
     >
        edit
      </button>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      props.files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [props.files]
  );

  const additionalClass = isDragAccept
            ? "dragAccept"
            : isDragReject
            ? "dragReject"
            : "";

  return (
    <section className="container">
      <div
        {...getRootProps({ className: `dropzone ${additionalClass}` })}
        style={{ width: "300px", height: "100px", border: "1px solid grey" }}
      >
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside style={thumbsContainer}>{thumbs}</aside>
    </section>
  );
}

export default App;
