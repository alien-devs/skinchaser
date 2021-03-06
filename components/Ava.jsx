const Ava = ({ withBg, withStatus, width }) => {
    return (
        <div className={`ava ${withBg ? "with-bg" : ""}`}>
            {withStatus && <span className="playerStatus"></span>}
            {
                withBg && <svg
                xmlns="http://www.w3.org/2000/svg"
                width="96"
                height="104"
                viewBox="0 0 96 104"
                fill="none"
                className="svg"
            >
                <path
                    d="M43.25 17.3198C46.1893 15.6228 49.8107 15.6228 52.75 17.3198L75.659 30.5463C78.5983 32.2433 80.409 35.3795 80.409 38.7735V65.2265C80.409 68.6205 78.5983 71.7567 75.659 73.4537L52.75 86.6802C49.8107 88.3772 46.1893 88.3772 43.25 86.6802L20.341 73.4537C17.4017 71.7567 15.591 68.6205 15.591 65.2265V38.7735C15.591 35.3795 17.4017 32.2433 20.341 30.5463L43.25 17.3198Z"
                    stroke="#393C42"
                />
                <g filter="url(#filter0_d_325:688)">
                    <path
                        d="M43.5 14.7528C46.2846 13.1451 49.7154 13.1451 52.5 14.7528L78.007 29.4793C80.7916 31.087 82.507 34.0581 82.507 37.2735V66.7265C82.507 69.9419 80.7916 72.913 78.007 74.5207L52.5 89.2472C49.7154 90.8549 46.2846 90.8549 43.5 89.2472L17.993 74.5207C15.2083 72.913 13.493 69.9419 13.493 66.7265V37.2735C13.493 34.0581 15.2083 31.087 17.993 29.4793L43.5 14.7528Z"
                        stroke="url(#paint0_linear_325:688)"
                        stroke-width="2"
                    />
                </g>
                <g filter="url(#filter1_i_325:688)">
                    <path
                        d="M43 14.8868C46.094 13.1004 49.906 13.1004 53 14.8868L75.909 28.1132C79.003 29.8996 80.909 33.2008 80.909 36.7735V63.2265C80.909 66.7992 79.003 70.1004 75.909 71.8867L53 85.1133C49.906 86.8996 46.094 86.8996 43 85.1133L20.091 71.8867C16.997 70.1004 15.091 66.7992 15.091 63.2265V36.7735C15.091 33.2008 16.997 29.8996 20.091 28.1132L43 14.8868Z"
                        fill="#242529"
                    />
                </g>
                <path
                    d="M43.25 12.3198C46.1893 10.6228 49.8107 10.6228 52.75 12.3198L78.257 27.0463C81.1964 28.7433 83.007 31.8795 83.007 35.2735V64.7265C83.007 68.1205 81.1964 71.2567 78.257 72.9537L52.75 87.6802C49.8107 89.3772 46.1893 89.3772 43.25 87.6802L17.743 72.9537C14.8036 71.2567 12.993 68.1205 12.993 64.7265V35.2735C12.993 31.8795 14.8036 28.7433 17.743 27.0463L43.25 12.3198Z"
                    stroke="url(#paint1_linear_325:688)"
                />
                <path
                    opacity="0.2"
                    d="M52.75 87.6802C49.8107 89.3772 46.1893 89.3772 43.25 87.6802L17.743 72.9537C14.8037 71.2567 12.993 68.1205 12.993 64.7265L12.993 35.2735C12.993 31.8795 14.8037 28.7433 17.743 27.0463L43.25 12.3198C46.1893 10.6228 49.8107 10.6228 52.75 12.3198L78.257 27.0463C81.1964 28.7433 83.007 31.8795 83.007 35.2735L83.007 64.7265C83.007 68.1205 81.1964 71.2567 78.257 72.9537L52.75 87.6802Z"
                    stroke="url(#paint2_linear_325:688)"
                />
                <path
                    d="M43.25 14.3198C46.1893 12.6228 49.8107 12.6228 52.75 14.3198L78.257 29.0463C81.1964 30.7433 83.007 33.8795 83.007 37.2735V66.7265C83.007 70.1205 81.1964 73.2567 78.257 74.9537L52.75 89.6802C49.8107 91.3772 46.1893 91.3772 43.25 89.6802L17.743 74.9537C14.8036 73.2567 12.993 70.1205 12.993 66.7265V37.2735C12.993 33.8795 14.8036 30.7433 17.743 29.0463L43.25 14.3198Z"
                    stroke="url(#paint3_linear_325:688)"
                />
                <path
                    opacity="0.2"
                    d="M52.75 85.6802C49.8107 87.3772 46.1893 87.3772 43.25 85.6802L17.743 70.9537C14.8037 69.2567 12.993 66.1205 12.993 62.7265L12.993 33.2735C12.993 29.8795 14.8037 26.7433 17.743 25.0463L43.25 10.3198C46.1893 8.62275 49.8107 8.62275 52.75 10.3198L78.257 25.0463C81.1964 26.7433 83.007 29.8795 83.007 33.2735L83.007 62.7265C83.007 66.1205 81.1964 69.2567 78.257 70.9537L52.75 85.6802Z"
                    stroke="url(#paint4_linear_325:688)"
                />
                <path
                    d="M43.25 15.3198C46.1893 13.6228 49.8107 13.6228 52.75 15.3198L75.659 28.5463C78.5983 30.2433 80.409 33.3795 80.409 36.7735V63.2265C80.409 66.6205 78.5983 69.7567 75.659 71.4537L52.75 84.6802C49.8107 86.3772 46.1893 86.3772 43.25 84.6802L20.341 71.4537C17.4017 69.7567 15.591 66.6205 15.591 63.2265V36.7735C15.591 33.3795 17.4017 30.2433 20.341 28.5463L43.25 15.3198Z"
                    stroke="#56595D"
                />
                <defs>
                    <filter
                        id="filter0_d_325:688"
                        x="0.49292"
                        y="0.546997"
                        width="95.0142"
                        height="102.906"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="6" />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.352941 0 0 0 0 0.623529 0 0 0 0 0 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_325:688"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_325:688"
                            result="shape"
                        />
                    </filter>
                    <filter
                        id="filter1_i_325:688"
                        x="15.0911"
                        y="13.547"
                        width="65.8179"
                        height="72.906"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                        />
                        <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="BackgroundImageFix"
                            result="shape"
                        />
                        <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="17.5" />
                        <feComposite
                            in2="hardAlpha"
                            operator="arithmetic"
                            k2="-1"
                            k3="1"
                        />
                        <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.219608 0 0 0 0 0.235294 0 0 0 0 0.239216 0 0 0 1 0"
                        />
                        <feBlend
                            mode="normal"
                            in2="shape"
                            result="effect1_innerShadow_325:688"
                        />
                    </filter>
                    <linearGradient
                        id="paint0_linear_325:688"
                        x1="48"
                        y1="90.5"
                        x2="48"
                        y2="15"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#4F8000" />
                        <stop
                            offset="0.415176"
                            stop-color="#4F8000"
                            stop-opacity="0.1"
                        />
                        <stop
                            offset="0.730585"
                            stop-color="#4F8000"
                            stop-opacity="0"
                        />
                        <stop
                            offset="1"
                            stop-color="#4F8000"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint1_linear_325:688"
                        x1="48"
                        y1="88.5"
                        x2="48"
                        y2="13"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#87BC2C" />
                        <stop
                            offset="0.415176"
                            stop-color="#87BC2C"
                            stop-opacity="0.1"
                        />
                        <stop
                            offset="0.730585"
                            stop-color="#87BC2C"
                            stop-opacity="0"
                        />
                        <stop
                            offset="1"
                            stop-color="#87BC2C"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint2_linear_325:688"
                        x1="48"
                        y1="11.5"
                        x2="48"
                        y2="87"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#87BC2C" />
                        <stop
                            offset="0.415176"
                            stop-color="#87BC2C"
                            stop-opacity="0.1"
                        />
                        <stop
                            offset="0.730585"
                            stop-color="#87BC2C"
                            stop-opacity="0"
                        />
                        <stop
                            offset="1"
                            stop-color="#87BC2C"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint3_linear_325:688"
                        x1="48"
                        y1="90.5"
                        x2="48"
                        y2="15"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#87BC2C" />
                        <stop
                            offset="0.415176"
                            stop-color="#87BC2C"
                            stop-opacity="0.1"
                        />
                        <stop
                            offset="0.730585"
                            stop-color="#87BC2C"
                            stop-opacity="0"
                        />
                        <stop
                            offset="1"
                            stop-color="#87BC2C"
                            stop-opacity="0"
                        />
                    </linearGradient>
                    <linearGradient
                        id="paint4_linear_325:688"
                        x1="48"
                        y1="9.49999"
                        x2="48"
                        y2="85"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stop-color="#87BC2C" />
                        <stop
                            offset="0.415176"
                            stop-color="#87BC2C"
                            stop-opacity="0.1"
                        />
                        <stop
                            offset="0.730585"
                            stop-color="#87BC2C"
                            stop-opacity="0"
                        />
                        <stop
                            offset="1"
                            stop-color="#87BC2C"
                            stop-opacity="0"
                        />
                    </linearGradient>
                </defs>
            </svg>
            }
            <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="51"
                height="58"
                viewbox="0 0 50.22947341949744 58"
            >
                <defs>
                    <pattern
                        id="image-bg"
                        x="0"
                        y="0"
                        height="100"
                        width="100"
                        patternUnits="userSpaceOnUse"
                    >
                        <image
                            width="50"
                            height="58"
                            xlinkHref="/img/general/default-ava.png"
                        ></image>
                    </pattern>
                </defs>
                <path
                    fill="url(#image-bg)"
                    d="M20.784609690826525 2.4999999999999996Q25.11473670974872 0 29.44486372867091 2.5L45.89934640057525 12Q50.22947341949744 14.5 50.22947341949744 19.5L50.22947341949744 38.5Q50.22947341949744 43.5 45.89934640057525 46L29.444863728670914 55.5Q25.11473670974872 58 20.784609690826528 55.5L4.330127018922193 46Q0 43.5 0 38.5L0 19.5Q0 14.5 4.330127018922194 12Z"
                ></path>
            </svg>
        </div>
    );
};

export default Ava;
