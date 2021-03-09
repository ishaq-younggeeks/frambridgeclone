import React from "react";

const artDimensionList = {
  3: {
    width: 3,
    height: 4,
  },
  4: {
    width: 4,
    height: 5.33,
  },
  5: {
    width: 5,
    height: 6.6667,
  },
};

const matStyleColourList = {
  1: { background: "#000000", matCore: "#fff" },
  2: { background: "#ff0000", matCore: "#0000ff" },
  3: { background: "#fff", matCore: "#000000" },
};
export default function Frame1(props) {
  const { artDimension, croppedImage, matColour } = props;
  return (
    <div>
      <svg
        className="preview-menu"
        contextMenu="preview-menu"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        ng-attr-width="{{440px || '100%'}}"
        ng-attr-height="{{imgHeight || '100%'}}"
        ng-attr-view_box={`0, 0, {{viewBoxWidth()}}, {{viewBoxHeight()}}`}
        tabIndex="-1"
        width="444.5"
        height="444.5"
        viewBox={`0,
           0,
            ${7.75 + artDimensionList[artDimension].width},
             ${7.75 + artDimensionList[artDimension].height}`}
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
              xlinkHref={
                croppedImage ? croppedImage : `${process.env.PUBLIC_URL}/r.jpg`
              }
            ></image>
          </pattern>
          <style>
          { `.classA { font: italic 1px serif; fill: red; }`}
            </style>
          <linearGradient
            id="mat-core-gradient-undefined-frame-50"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
            gradientTransform="rotate(45)"
          >
            <stop
              offset="0%"
              stopOpacity="1"
              stopColor={matStyleColourList[matColour].matCore}
            ></stop>
            <stop
              offset="2%"
              stopOpacity="1"
              stopColor={matStyleColourList[matColour].matCore}
            ></stop>
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
            <feGaussianBlur in="SourceAlpha" stdDeviation=".1"></feGaussianBlur>
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
            <feGaussianBlur in="SourceAlpha" stdDeviation=".1"></feGaussianBlur>
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
            <stop offset="0%" stopOpacity="1" stopColor="#fdc360"></stop>
            <stop offset="100%" stopOpacity="1" stopColor="#ffe7a0"></stop>
          </linearGradient>
          <linearGradient
            id="monogram-silver-foil-gradient-frame-50"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopOpacity="1" stopColor="#cccccc"></stop>
            <stop offset="100%" stopOpacity="1" stopColor="#e2dede"></stop>
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
          <g className="mount" fillRule="evenodd">
            <path
              className="mount-surface"
              fill="#fcfcfc"
              d={`M1.5 ,
                1.5 L1.5,
                ${6.25 + artDimensionList[artDimension].height} L${
                6.25 + artDimensionList[artDimension].width
              },
                ${6.25 + artDimensionList[artDimension].height} L${
                6.25 + artDimensionList[artDimension].width
              },
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
            <g className="mat" data-mat-key="0" fillRule="evenodd">
              <path
                className="mat-surface"
                fill={matStyleColourList[matColour].background}
                d={`M1.5 ,
                  1.5 L1.5,
                  ${6.25 + artDimensionList[artDimension].height} L${
                  6.25 + artDimensionList[artDimension].width
                },
                  ${6.25 + artDimensionList[artDimension].height} L${
                  6.25 + artDimensionList[artDimension].width
                },
                   1.5 z M3.9375 ,
                   3.9375 L3.9375,
                   ${3.8125 + artDimensionList[artDimension].height} L${
                  3.8125 + artDimensionList[artDimension].width
                },
                   ${3.8125 + artDimensionList[artDimension].height} L${
                  3.8125 + artDimensionList[artDimension].width
                },
                    3.9375 z`}
              ></path>
                <g width="5"height="6">
                  <text x={5} y={5+artDimensionList[artDimension].height} class="classA" >{props.frameText}</text></g>
              <path
                data-mat-key="0"
                data-artwork-key="0"
                className="mat-core"
                fill="url(#mat-core-gradient-undefined-frame-50)"
                d={`M3.9375 ,
                  3.9375 L3.9375,
                  ${3.8125 + artDimensionList[artDimension].height} L${
                  3.8125 + artDimensionList[artDimension].width
                },
                  ${3.8125 + artDimensionList[artDimension].height} L${
                  3.8125 + artDimensionList[artDimension].width
                },
                   3.9375 z M4 ,
                   4 L4,
                   ${3.75 + artDimensionList[artDimension].height} L${
                  3.75 + artDimensionList[artDimension].width
                },
                   ${3.75 + artDimensionList[artDimension].height} L${
                  3.75 + artDimensionList[artDimension].width
                },
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
                  1.5 L${6.25 + artDimensionList[artDimension].width},
                  1.5 L${7.75 + artDimensionList[artDimension].width},
                  0  z`}
                fill="url(#moulding-top-piece-pattern-frame-50)"
                transform="rotate(0, 0, 0) translate(0, 0)"
              ></path>
              <path
                className="strut"
                d={`M0,
                  0 L1.5,
                  1.5 L${6.25 + artDimensionList[artDimension].height},
                  1.5 L${7.75 + artDimensionList[artDimension].height},
                  0  z`}
                fill="url(#moulding-left-piece-pattern-frame-50)"
                transform={`rotate(270, 0, 0) translate(-${
                  7.75 + artDimensionList[artDimension].height
                }, 0)`}
              ></path>
            </g>
            <g className="moulding">
              <path
                className="strut"
                d={`M0,
                  0 L1.5,
                  1.5 L${6.25 + artDimensionList[artDimension].height},
                  1.5 L${7.75 + artDimensionList[artDimension].height},
                  0  z`}
                fill="url(#moulding-right-piece-pattern-frame-50)"
                transform={`rotate(90, 0, 0) translate(0, -${
                  7.75 + artDimensionList[artDimension].width
                })`}
              ></path>
              <path
                className="strut"
                d={`M0,
                  0 L1.5,
                  1.5 L${6.25 + artDimensionList[artDimension].width},
                  1.5 L${7.75 + artDimensionList[artDimension].width},
                  0  z`}
                fill="url(#moulding-bottom-piece-pattern-frame-50)"
                transform={`rotate(180,
                     ${
                       5.375 + (artDimensionList[artDimension].width - 3) * 0.5
                     },
                      ${
                        5.375 +
                        (artDimensionList[artDimension].height - 3) * 0.5
                      }) translate(0, 0)`}
              ></path>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
