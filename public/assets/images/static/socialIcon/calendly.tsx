import React from 'react';

const calendy = ({ buttonColor, textColor }) => {
    return (
        <svg width="58" height="58" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.2" filter="url(#filter0_d_1613_360)">
                <circle cx="24" cy="24" r="20" fill={buttonColor} shapeRendering="crispEdges" />
            </g>
            <path
                d="M29.9439 25.233C30.1455 25.233 30.3435 25.2495 30.538 25.2789C30.538 25.2825 30.5344 25.2861 30.5344 25.2889C30.4577 25.4836 30.3663 25.6721 30.261 25.8529L29.3864 27.364C28.9938 28.0464 28.4281 28.6131 27.7464 29.007C27.0648 29.4009 26.2913 29.6081 25.504 29.6076H23.759C22.9718 29.6073 22.1986 29.3998 21.5169 29.006C20.8353 28.6121 20.2694 28.0458 19.8759 27.364L19.002 25.8529C18.6082 25.171 18.4009 24.3974 18.4009 23.61C18.4009 22.8226 18.6082 22.049 19.002 21.3671L19.8759 19.856C20.2687 19.1736 20.8346 18.6069 21.5163 18.213C22.1981 17.8191 22.9717 17.6119 23.759 17.6124H25.504C26.2911 17.6127 27.0643 17.8202 27.7458 18.214C28.4273 18.6079 28.9931 19.1742 29.3864 19.856L30.261 21.3671C30.3665 21.5479 30.4555 21.7395 30.5344 21.931C30.5344 21.9339 30.538 21.9375 30.538 21.9411C30.3414 21.9715 30.1428 21.9869 29.9439 21.987C28.6409 21.987 28.1494 21.5515 27.5826 21.05C27.0344 20.5649 26.355 19.9615 25.1144 19.9615H24.3761C23.4785 19.9615 22.6634 20.288 22.0801 20.8785C21.509 21.4561 21.1954 22.2446 21.1954 23.102V24.1144C21.1954 24.9725 21.509 25.7611 22.0801 26.3379C22.6634 26.9284 23.4785 27.2549 24.3761 27.2549H25.118C26.3585 27.2549 27.038 26.6515 27.5855 26.1665C28.153 25.662 28.6409 25.2294 29.9439 25.233ZM29.9475 22.9104C30.2338 22.9104 30.5172 22.8846 30.7934 22.8315C30.792 22.8286 30.792 22.8243 30.792 22.8215C30.738 22.5225 30.6542 22.2297 30.5416 21.9476C31.0562 21.8665 31.5444 21.6652 31.9665 21.3599C31.9665 21.357 31.9629 21.3506 31.9629 21.347C31.7255 20.5698 31.3648 19.8358 30.8946 19.173C30.4288 18.5176 29.8646 17.938 29.2221 17.4546C27.8929 16.4545 26.2734 15.9159 24.61 15.9206C23.5711 15.9206 22.5615 16.1215 21.6144 16.524C20.7011 16.9136 19.8759 17.4675 19.1699 18.1735C18.4639 18.8795 17.9064 19.7011 17.5211 20.618C17.1211 21.566 16.9156 22.5847 16.917 23.6136C16.917 24.6525 17.1186 25.6621 17.5211 26.6084C17.91 27.5225 18.4639 28.3469 19.1699 29.053C19.8759 29.759 20.6975 30.3165 21.6144 30.7025C22.5644 31.1014 23.5711 31.3059 24.61 31.3059C26.2889 31.3059 27.8825 30.775 29.2221 29.7726C29.8653 29.2897 30.4295 28.7097 30.8946 28.0535C31.3628 27.3895 31.7234 26.6558 31.9629 25.8795C31.9629 25.8766 31.9665 25.8694 31.9665 25.8665C31.5444 25.5612 31.0562 25.3599 30.5416 25.2789C30.6571 24.9955 30.7396 24.702 30.792 24.405C30.7956 24.3985 30.7956 24.3949 30.7956 24.3885C31.4192 24.5025 32.009 24.7564 32.5204 25.1311C33.0119 25.4934 32.9165 25.9024 32.8404 26.1471C31.7585 29.6635 28.4831 32.22 24.61 32.22C19.8566 32.22 16 28.3634 16 23.61C16 18.8566 19.853 15 24.61 15C28.4831 15 31.7585 17.5565 32.8404 21.0729C32.9165 21.3176 33.0119 21.7294 32.5204 22.0925C32.0094 22.4678 31.4195 22.7215 30.7956 22.8344C30.8874 23.3481 30.8874 23.8748 30.7956 24.3885C30.516 24.3355 30.232 24.3091 29.9475 24.3096C26.9455 24.3096 27.1004 26.3351 25.1144 26.3351H24.3761C23.0136 26.3351 22.116 25.3614 22.116 24.1144V23.102C22.116 21.855 23.0136 20.8821 24.3761 20.8821H25.118C27.104 20.8821 26.949 22.9076 29.9475 22.9104Z"
                fill={textColor}
            />
            <defs>
                <filter id="filter0_d_1613_360" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1613_360" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1613_360" result="shape" />
                </filter>
            </defs>
        </svg>
    );
};

export default calendy;
