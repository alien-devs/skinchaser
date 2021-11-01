const Ava = () => {
    return (
        <div className="ava">
            <span className="playerStatus"></span>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="51" height="58" viewbox="0 0 50.22947341949744 58">
                <defs>
                    <pattern id="image-bg" x="0" y="0" height="100" width="100" patternUnits="userSpaceOnUse">
                        <image width="50" height="58" xlinkHref="/img/general/default-ava.png"></image>
                    </pattern>
                </defs>
                <path fill="url(#image-bg)" d="M20.784609690826525 2.4999999999999996Q25.11473670974872 0 29.44486372867091 2.5L45.89934640057525 12Q50.22947341949744 14.5 50.22947341949744 19.5L50.22947341949744 38.5Q50.22947341949744 43.5 45.89934640057525 46L29.444863728670914 55.5Q25.11473670974872 58 20.784609690826528 55.5L4.330127018922193 46Q0 43.5 0 38.5L0 19.5Q0 14.5 4.330127018922194 12Z"></path>
            </svg>
        </div>
    )
}

export default Ava