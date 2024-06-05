import React from 'react';

const snapchat = ({ buttonColor, textColor }) => {
    return (
        <svg width="58" height="58" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.2" filter="url(#filter0_d_1613_298)">
                <circle cx="24" cy="24" r="20" fill={buttonColor} shapeRendering="crispEdges" />
            </g>
            <path
                d="M32.1902 19.0295C32.1893 18.7197 32.161 18.4106 32.1058 18.1057C32.0439 17.7325 31.926 17.3709 31.7563 17.0329C31.5705 16.6778 31.3286 16.3551 31.0399 16.0771C30.6039 15.6505 30.0654 15.3432 29.4763 15.1851C28.9354 15.0539 28.3795 14.9946 27.8231 15.0086L27.8206 15H19.3835V15.0086C19.0669 15.0063 18.7505 15.0207 18.4355 15.0517C18.0904 15.0883 17.7506 15.1645 17.4229 15.279C16.883 15.4825 16.3987 15.8104 16.0093 16.2362C15.6199 16.6619 15.3363 17.1735 15.1817 17.7294C15.0515 18.2661 14.9921 18.8175 15.0052 19.3696L15 27.8403C14.9988 28.2242 15.0246 28.6078 15.0775 28.988C15.1354 29.3898 15.2544 29.7804 15.4306 30.1461C15.6785 30.6347 16.0316 31.0623 16.4646 31.398C16.7742 31.6444 17.1249 31.8341 17.5004 31.9585C18.0514 32.1287 18.6252 32.2129 19.2018 32.2082C19.5634 32.2108 19.9242 32.2203 20.285 32.2186C22.9085 32.2074 25.532 32.2375 28.1546 32.2022C28.5015 32.1948 28.8471 32.1582 29.1878 32.0929C29.8311 31.9794 30.4298 31.688 30.9159 31.2517C31.4885 30.7537 31.8883 30.0868 32.0576 29.3471C32.1621 28.8518 32.212 28.3465 32.2066 27.8403V27.7396C32.2066 27.7 32.1919 19.1432 32.1902 19.0304M29.8861 26.9948C29.7759 27.2531 29.2197 27.4666 28.2778 27.6121C28.1899 27.6259 28.152 27.7688 28.1012 28.003C28.0806 28.0995 28.0582 28.1942 28.0298 28.2932C28.0211 28.3351 27.9974 28.3724 27.9632 28.3981C27.9289 28.4238 27.8865 28.4361 27.8438 28.4327H27.8283C27.7385 28.4292 27.6492 28.4177 27.5614 28.3983C27.3289 28.3498 27.092 28.325 26.8545 28.3242C26.6837 28.3246 26.5132 28.339 26.3448 28.3673C25.9895 28.4573 25.659 28.6262 25.3779 28.8615C24.9026 29.2669 24.3057 29.502 23.6817 29.5296C23.6495 29.5295 23.6173 29.5287 23.5852 29.527C23.5643 29.5288 23.5433 29.5297 23.5224 29.5296C22.8983 29.5023 22.3012 29.2671 21.8262 28.8615C21.545 28.6263 21.2145 28.4574 20.8593 28.3673C20.6908 28.339 20.5203 28.3246 20.3495 28.3242C20.1121 28.3268 19.8755 28.3536 19.6435 28.4043C19.5555 28.4246 19.4659 28.4373 19.3757 28.4422C19.3303 28.4475 19.2845 28.4357 19.2472 28.4091C19.21 28.3826 19.184 28.3431 19.1742 28.2984C19.1463 28.2019 19.1224 28.1042 19.1028 28.0056C19.0511 27.7706 19.0141 27.6268 18.9263 27.613C17.9843 27.4684 17.4281 27.254 17.317 26.9948C17.3057 26.9689 17.299 26.9412 17.2972 26.913C17.2952 26.8758 17.3071 26.8391 17.3304 26.81C17.3538 26.781 17.387 26.7615 17.4238 26.7554C18.2028 26.6145 18.9047 26.1972 19.4007 25.5801C19.6731 25.264 19.8995 24.9109 20.0731 24.5314L20.0766 24.5245C20.128 24.4405 20.1604 24.3463 20.1715 24.2484C20.1827 24.1506 20.1723 24.0514 20.1412 23.958C20.0206 23.6721 19.6185 23.5447 19.3525 23.4603C19.2924 23.4422 19.233 23.4221 19.1742 23.4001C18.9383 23.3071 18.5509 23.1099 18.6025 22.8387C18.642 22.7364 18.7124 22.6491 18.804 22.5889C18.8955 22.5287 19.0036 22.4986 19.1131 22.5029C19.1664 22.5017 19.2194 22.5122 19.2681 22.5339C19.4664 22.6355 19.6843 22.6931 19.907 22.7026C20.0396 22.7122 20.1709 22.6719 20.2755 22.5898C20.2686 22.4641 20.2608 22.3384 20.2522 22.2127C20.1313 21.3642 20.1832 20.4999 20.4046 19.6719C20.6649 19.0772 21.0946 18.5725 21.6401 18.2206C22.1855 17.8687 22.8225 17.6853 23.4716 17.6933L23.7256 17.6915C24.3754 17.6832 25.0132 17.8664 25.5595 18.2183C26.1058 18.5702 26.5365 19.0751 26.7977 19.6701C27.0191 20.4994 27.0706 21.3648 26.9492 22.2144L26.9466 22.2549L26.9268 22.5898C27.0217 22.665 27.1399 22.7046 27.2609 22.7018C27.4709 22.686 27.6757 22.6289 27.8636 22.5339C27.9255 22.5069 27.9924 22.4934 28.0599 22.4943C28.1369 22.494 28.2132 22.5086 28.2846 22.5373L28.2881 22.539C28.3689 22.5583 28.4421 22.6012 28.4983 22.6622C28.5546 22.7232 28.5914 22.7997 28.6041 22.8817C28.6067 23.0135 28.5094 23.2098 28.0281 23.4001C27.979 23.419 27.9161 23.4397 27.8498 23.4603C27.5829 23.5447 27.1817 23.6721 27.0611 23.958C27.0299 24.0512 27.0194 24.1502 27.0305 24.2479C27.0415 24.3456 27.0737 24.4397 27.1249 24.5237L27.1283 24.5314C27.3689 25.0813 27.7334 25.568 28.1933 25.9536C28.6532 26.3393 29.196 26.6134 29.7794 26.7546C29.816 26.7609 29.849 26.7804 29.8722 26.8094C29.8954 26.8385 29.9071 26.875 29.9051 26.9121C29.9034 26.9406 29.8967 26.9686 29.8853 26.9948"
                fill={textColor}
            />
            <defs>
                <filter id="filter0_d_1613_298" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1613_298" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1613_298" result="shape" />
                </filter>
            </defs>
        </svg>
    );
};

export default snapchat;
