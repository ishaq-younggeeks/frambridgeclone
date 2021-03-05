import { useDropzone } from "react-dropzone";
import React, { useCallback, useState, useEffect } from "react";
import './App.css'

const artDimensionList = {
  3:{
    width:3,
    height:4
  },
  4:{
    width:4,
    height:5.33
  },
  5:{
    width:5,
    height:6.6667
  }
}

const matStyleColourList = {
  1:{background:'#000000',
    matCore:"#fff"
    },
  2:{background:'#ff0000',
    matCore:"#0000ff"
    },
  3:{background:'#fff',
  matCore:"#000000"
  },
}
function App() {
  const [files, setFiles] = useState([]);
  const [artDimension,setArtDimension] = useState("3")
  const [matColour,setMatColour] = useState("3")

console.log("Files", files);
console.log({files});
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
  return (
    <React.Fragment>
      <div className="container">
        <div className="left_portion">
        <div>
        <svg
          className="preview-menu"
          contextmenu="preview-menu"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          ng-attr-width="{{imgWidth || '100%'}}"
          ng-attr-height="{{imgHeight || '100%'}}"
          ng-attr-view_box= {`0, 0, {{viewBoxWidth()}}, {{viewBoxHeight()}}`}
          tabindex="-1"
          width="444.5"
          height="444.5"
          viewBox={`0,
           0,
            ${7.75+artDimensionList[artDimension].width},
             ${7.75+artDimensionList[artDimension].height}`}
        >
          <defs>
            <pattern
              x="0"
              y="0"
              width="1"
              height="1"
              patternContentUnits="userSpaceOnUse"
              id="artwork-fill-0-frame-50"
            >
              <image
                width={`${artDimensionList[artDimension].width}`}
                height={`${artDimensionList[artDimension].height}`}
                preserveAspectRatio="xMidYMid slice"
                xlinkHref={files.length?files[0].preview:`${process.env.PUBLIC_URL}/r.jpg`}
              ></image>
            </pattern>
            <linearGradient
              id="mat-core-gradient-undefined-frame-50"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
              gradientTransform="rotate(45)"
            >
              <stop offset="0%" stop-opacity="1" stop-color={matStyleColourList[matColour].matCore}></stop>
              <stop offset="2%" stop-opacity="1" stop-color={matStyleColourList[matColour].matCore}></stop>
            </linearGradient>
            <pattern
              x="3.530646580543654"
              y="0"
              width="12.069444444444443"
              height="1.5"
              patternUnits="userSpaceOnUse"
              id="moulding-top-piece-pattern-frame-50"
            >
              <image
                x="0"
                y="0"
                width="12.069444444444443"
                height="1.5"
                preserveAspectRatio="xMaxYMin"
                xlinkHref="https://convex.framebridge.io/images/.jpg?url=https%3A%2F%2Fcdn.framebridge.com%2Fproduction%2Fmoulding_tiles%2F43%2Fimages%2Foriginal%2Fjambi.jpg%3F1525718226"
              ></image>
            </pattern>
            <pattern
              x="10.639317915884343"
              y="0"
              width="12.069444444444443"
              height="1.5"
              patternUnits="userSpaceOnUse"
              id="moulding-right-piece-pattern-frame-50"
            >
              <image
                x="0"
                y="0"
                width="12.069444444444443"
                height="1.5"
                preserveAspectRatio="xMaxYMin"
                xlinkHref="https://convex.framebridge.io/images/.jpg?url=https%3A%2F%2Fcdn.framebridge.com%2Fproduction%2Fmoulding_tiles%2F43%2Fimages%2Foriginal%2Fjambi.jpg%3F1525718226"
              ></image>
            </pattern>
            <pattern
              x="4.303579960585778"
              y="0"
              width="12.069444444444443"
              height="1.5"
              patternUnits="userSpaceOnUse"
              id="moulding-bottom-piece-pattern-frame-50"
            >
              <image
                x="0"
                y="0"
                width="12.069444444444443"
                height="1.5"
                preserveAspectRatio="xMaxYMin"
                xlinkHref="https://convex.framebridge.io/images/.jpg?url=https%3A%2F%2Fcdn.framebridge.com%2Fproduction%2Fmoulding_tiles%2F43%2Fimages%2Foriginal%2Fjambi.jpg%3F1525718226"
              ></image>
            </pattern>
            <pattern
              x="6.608811209694319"
              y="0"
              width="12.069444444444443"
              height="1.5"
              patternUnits="userSpaceOnUse"
              id="moulding-left-piece-pattern-frame-50"
            >
              <image
                x="0"
                y="0"
                width="12.069444444444443"
                height="1.5"
                preserveAspectRatio="xMaxYMin"
                xlinkHref="https://convex.framebridge.io/images/.jpg?url=https%3A%2F%2Fcdn.framebridge.com%2Fproduction%2Fmoulding_tiles%2F43%2Fimages%2Foriginal%2Fjambi.jpg%3F1525718226"
              ></image>
            </pattern>
            <filter
              id="opening-frame-shadow-frame-50"
              x="-20%"
              y="-20%"
              width="170%"
              height="140%"
            >
              <feGaussianBlur
                in="SourceAlpha"
                stdDeviation=".25"
              ></feGaussianBlur>
              <feOffset dx="-.1" dy=".25"></feOffset>
              <feComponentTransfer>
                <feFuncA type="linear" slope=".25"></feFuncA>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
            <filter
              id="outer-frame-shadow-frame-50"
              x="-20%"
              y="-20%"
              width="170%"
              height="140%"
            >
              <feGaussianBlur
                in="SourceAlpha"
                stdDeviation=".25"
              ></feGaussianBlur>
              <feOffset dx="-.1" dy=".225"></feOffset>
              <feComponentTransfer>
                <feFuncA type="linear" slope=".125"></feFuncA>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
            <filter
              id="float-mount-shadow-frame-50"
              x="0"
              y="0"
              width="200%"
              height="200%"
              filterUnits="userSpaceOnUse"
            >
              <feGaussianBlur
                in="SourceAlpha"
                stdDeviation=".1"
              ></feGaussianBlur>
              <feOffset dx="-.15" dy=".15" result="offsetblur"></feOffset>
              <feComponentTransfer>
                <feFuncA type="linear" slope=".4"></feFuncA>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
            <filter
              id="readymade-mount-shadow-frame-50"
              x="0"
              y="0"
              width="200%"
              height="200%"
              filterUnits="userSpaceOnUse"
            >
              <feGaussianBlur
                in="SourceAlpha"
                stdDeviation=".1"
              ></feGaussianBlur>
              <feOffset dx="-.15" dy=".15" result="offsetblur"></feOffset>
              <feComponentTransfer>
                <feFuncA type="linear" slope=".25"></feFuncA>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
            <linearGradient
              id="monogram-gold-foil-gradient-frame-50"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stop-opacity="1" stop-color="#fdc360"></stop>
              <stop offset="100%" stop-opacity="1" stop-color="#ffe7a0"></stop>
            </linearGradient>
            <linearGradient
              id="monogram-silver-foil-gradient-frame-50"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="0%" stop-opacity="1" stop-color="#cccccc"></stop>
              <stop offset="100%" stop-opacity="1" stop-color="#e2dede"></stop>
            </linearGradient>
          </defs>
          <g
            className="frame"
            id="frame-50"
            filter="url(#outer-frame-shadow-frame-50)"
            data-frame-key="50"
            data-artworks-count="1"
            data-artwork-key="0"
          >
            <g className="mount" fill-rule="evenodd">
              <path
                className="mount-surface"
                fill="#fcfcfc"
                d={`M1.5 ,
                1.5 L1.5,
                ${6.25+artDimensionList[artDimension].height} L${6.25+artDimensionList[artDimension].width},
                ${6.25+artDimensionList[artDimension].height} L${6.25+artDimensionList[artDimension].width},
                 1.5 z`}
              ></path>
            </g>
            <g className="artworks">
              <rect
                className="artwork cropped"
                data-artwork-key="0"
                x="3.875"
                y="3.875"
                width={artDimensionList[artDimension].width}
                height={artDimensionList[artDimension].height}
                fill="url(#artwork-fill-0-frame-50)"
              ></rect>
            </g>
            <g className="mats">
              <g className="mat" data-mat-key="0" fill-rule="evenodd">
                <path
                  className="mat-surface"
                  fill={matStyleColourList[matColour].background}
                  d={`M1.5 ,
                  1.5 L1.5,
                  ${6.25+artDimensionList[artDimension].height} L${6.25+artDimensionList[artDimension].width},
                  ${6.25+artDimensionList[artDimension].height} L${6.25+artDimensionList[artDimension].width},
                   1.5 z M3.9375 ,
                   3.9375 L3.9375,
                   ${3.8125+artDimensionList[artDimension].height} L${3.8125+artDimensionList[artDimension].width},
                   ${3.8125+artDimensionList[artDimension].height} L${3.8125+artDimensionList[artDimension].width},
                    3.9375 z`}
                ></path>
                <path
                  data-mat-key="0"
                  data-artwork-key="0"
                  className="mat-core"
                  fill="url(#mat-core-gradient-undefined-frame-50)"
                  d={`M3.9375 ,
                  3.9375 L3.9375,
                  ${3.8125+artDimensionList[artDimension].height} L${3.8125+artDimensionList[artDimension].width},
                  ${3.8125+artDimensionList[artDimension].height} L${3.8125+artDimensionList[artDimension].width},
                   3.9375 z M4 ,
                   4 L4,
                   ${3.8125+artDimensionList[artDimension].height} L${3.75+artDimensionList[artDimension].width},
                   ${3.8125+artDimensionList[artDimension].height} L${3.75+artDimensionList[artDimension].width},
                    4 z`}
                ></path>
              </g>
            </g>
            <g>
              <g
                className="moulding"
                filter="url(#opening-frame-shadow-frame-50)"
              >
                <path
                  className="strut"
                  d={`M0,
                  0 L1.5,
                  1.5 L${6.25+artDimensionList[artDimension].width},
                  1.5 L${7.75+artDimensionList[artDimension].width},
                  0  z`}
                  fill="url(#moulding-top-piece-pattern-frame-50)"
                  transform="rotate(0, 0, 0) translate(0, 0)"
                ></path>
                <path
                  class="strut"
                  d={`M0,
                  0 L1.5,
                  1.5 L${6.25+artDimensionList[artDimension].height},
                  1.5 L${7.75+artDimensionList[artDimension].height},
                  0  z`}
                  fill="url(#moulding-left-piece-pattern-frame-50)"
                  transform={`rotate(270, 0, 0) translate(-${7.75+artDimensionList[artDimension].height}, 0)`}
                ></path>
              </g>
              <g class="moulding">
                <path
                  class="strut"
                  d={`M0,
                  0 L1.5,
                  1.5 L${6.25+artDimensionList[artDimension].height},
                  1.5 L${7.75+artDimensionList[artDimension].height},
                  0  z`}
                  fill="url(#moulding-right-piece-pattern-frame-50)"
                  transform={`rotate(90, 0, 0) translate(0, -${7.75+artDimensionList[artDimension].width})`}
                ></path>
                <path
                  class="strut"
                  d={`M0,
                  0 L1.5,
                  1.5 L${6.25+artDimensionList[artDimension].width},
                  1.5 L${7.75+artDimensionList[artDimension].width},
                  0  z`}
                  fill="url(#moulding-bottom-piece-pattern-frame-50)"
                  transform={`rotate(180, ${2.375+artDimensionList[artDimension].width}, ${1.875+artDimensionList[artDimension].height}) translate(0, 0)`}
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
          </div>
          <div className="right_portion">
            <div>
              <select value={artDimension} onChange={handleArtDimension}>
              <option label='"3 x 4.00"' value="3"></option>
              <option label='"4 x 5.33"' value="4"></option>
              <option label='"5 x 6.67"' value="5"></option>
              </select>
              </div>
              <div>
              <select value={matColour} onChange={handleMatStyle}>
              <option label='black' value="1"></option>
              <option label='red' value="2"></option>
              <option label='white' value="3" ></option>
              </select>
              </div>
          <Doka addFiles={addFiles} />
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

const editImage = (image, done) => {
  const imageFile = image.doka ? image.doka.file : image;
  const imageState = image.doka ? image.doka.data : {};
  // create({
  //   // recreate previous state
  //   ...imageState,

  //   // load original image file
  //   src: imageFile,
  //   outputData: true,

  //   onconfirm: ({ file, data }) => {
  //     Object.assign(file, {
  //       doka: { file: imageFile, data }
  //     });
  //     done(file);
  //   }
  // });
};

function Doka(props) {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
     
        let data = acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }
        )
      );
      setFiles(data)
      props.addFiles(data)
    },
  });

  const thumbs = files.map((file, index) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} alt="" />
      </div>
      <button
        style={thumbButton}
        onClick={() =>
          editImage(file, (output) => {
            const updatedFiles = [...files];

            // replace original image with new image
            updatedFiles[index] = output;

            // revoke preview URL for old image
            if (file.preview) URL.revokeObjectURL(file.preview);

            // set new preview URL
            Object.assign(output, {
              preview: URL.createObjectURL(output),
            });

            // update view
            setFiles(updatedFiles);
          })
        }
      >
        edit
      </button>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  return (
    <section className="container">
      <div
        {...getRootProps({ className: "dropzone" })}
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
