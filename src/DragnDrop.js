import React,{useEffect} from 'react'
import { useDropzone } from "react-dropzone";

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
  
  export default function Doka(props) {
    const {
      getRootProps,
      getInputProps,
      isDragAccept,
      isDragReject,
    } = useDropzone({
      accept: "image/*",
      maxFiles: 1,
      multiple: false,
      onDrop: (acceptedFiles) => {
        let data = acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
        props.addFiles(data);
      },
    });
  
    const thumbs = props.files.map((file, index) => (
      <div style={thumb} key={file.name}>
        <div style={thumbInner}>
          <img src={file.preview} style={img} alt="" />
        </div>
        <button style={thumbButton} onClick={props.handleCrop}>
          Crop
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
        <div {...getRootProps({ className: `dropzone ${additionalClass}` })}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop  file here, or click to select files</p>
        </div>
        <aside style={thumbsContainer}>{thumbs}</aside>
      </section>
    );
  }
  
