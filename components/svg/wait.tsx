export const Wait = (): JSX.Element => {
  return (
    <>
      <div className="mr-5">
        <svg
          width="199"
          height="212"
          viewBox="0 0 199 212"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="3"
            y="3"
            width="193"
            height="206"
            fill="#D9D9D9"
            stroke="black"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="bevel"
          />
          <circle cx="99" cy="90" r="38" fill="black" />
          <g clip-path="url(#clip0_413_1101)">
            <g filter="url(#filter0_d_413_1101)">
              <path d="M99.5 69L135.44 201H63.5599L99.5 69Z" fill="black" />
              <path
                d="M64.2143 200.5L99.5 70.9032L134.786 200.5H64.2143Z"
                stroke="black"
              />
            </g>
          </g>
          <defs>
            <filter
              id="filter0_d_413_1101"
              x="59.5599"
              y="69"
              width="79.8801"
              height="140"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_413_1101"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_413_1101"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_413_1101">
              <rect
                width="94"
                height="107"
                fill="white"
                transform="translate(52 98)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </>
  );
};
