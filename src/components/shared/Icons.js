import React from 'react';

export const AccountIcon = (props) => {
    return (
        <svg className="svg-inline--fa fa-user-alt fa-w-16 header-icon" title="Account" aria-labelledby="svg-inline--fa-title-1" data-prefix="fal" data-icon="user-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><title id="svg-inline--fa-title-1">Account</title><path fill="currentColor" d="M256 32c61.8 0 112 50.2 112 112s-50.2 112-112 112-112-50.2-112-112S194.2 32 256 32m128 320c52.9 0 96 43.1 96 96v32H32v-32c0-52.9 43.1-96 96-96 85 0 67.3 16 128 16 60.9 0 42.9-16 128-16M256 0c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144S335.5 0 256 0zm128 320c-92.4 0-71 16-128 16-56.8 0-35.7-16-128-16C57.3 320 0 377.3 0 448v32c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-32c0-70.7-57.3-128-128-128z"></path></svg>
    );
};

export const SearchIcon = (props) => {
    return (
        <svg className="svg-inline--fa fa-search fa-w-16 header-icon" title="Search" aria-labelledby="svg-inline--fa-title-2" data-prefix="fal" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><title id="svg-inline--fa-title-2">Search</title><path fill="currentColor" d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"></path></svg>
    );
};

export const CartIcon = (props) => {
    return (
        <svg className="svg-inline--fa fa-shopping-cart fa-w-18 header-icon" title="Shopping Cart" aria-labelledby="svg-inline--fa-title-3" data-prefix="fal" data-icon="shopping-cart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><title id="svg-inline--fa-title-3">Shopping Cart</title><path fill="currentColor" d="M551.991 64H129.28l-8.329-44.423C118.822 8.226 108.911 0 97.362 0H12C5.373 0 0 5.373 0 12v8c0 6.627 5.373 12 12 12h78.72l69.927 372.946C150.305 416.314 144 431.42 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-17.993-7.435-34.24-19.388-45.868C506.022 391.891 496.76 384 485.328 384H189.28l-12-64h331.381c11.368 0 21.177-7.976 23.496-19.105l43.331-208C578.592 77.991 567.215 64 551.991 64zM240 448c0 17.645-14.355 32-32 32s-32-14.355-32-32 14.355-32 32-32 32 14.355 32 32zm224 32c-17.645 0-32-14.355-32-32s14.355-32 32-32 32 14.355 32 32-14.355 32-32 32zm38.156-192H171.28l-36-192h406.876l-40 192z"></path></svg>
    );
};

export const HamburgerIcon = (props) => {
    return (
        <svg onClick={props.toggleMobileLinks} width="41px" height="20px" viewBox="0 0 141 100" version="1.1" xmlns="http://www.w3.org/2000/svg" sketch="http://www.bohemiancoding.com/sketch/ns">
            <title>icon-hamburger-light</title>
            <desc>Created with Sketch.</desc>
            <defs></defs>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" type="MSPage">
                <g id="icon-hamburger-light" type="MSLayerGroup" fill="#EBEBEB">
                    <path d="M10.0714286,20 L130.928571,20 C136.488,20 141,15.52 141,10 C141,4.48 136.488,0 130.928571,0 L10.0714286,0 C4.512,0 0,4.48 0,10 C0,15.52 4.512,20 10.0714286,20 L10.0714286,20 Z M130.928571,40 L10.0714286,40 C4.512,40 0,44.48 0,50 C0,55.52 4.512,60 10.0714286,60 L130.928571,60 C136.488,60 141,55.52 141,50 C141,44.48 136.488,40 130.928571,40 L130.928571,40 Z M130.928571,80 L10.0714286,80 C4.512,80 0,84.48 0,90 C0,95.52 4.512,100 10.0714286,100 L130.928571,100 C136.488,100 141,95.52 141,90 C141,84.48 136.488,80 130.928571,80 L130.928571,80 Z" id="Shape" type="MSShapeGroup"></path>
                </g>
            </g>
        </svg>
    );
};

export const HamburgerLightSaber = (props) => {
    return (
        <div className='hamburger-lightsaber' onClick={props.toggleMobileLinks}>
            
        </div>
    );
};

export const Plus = (props) => {

    return <svg  onClick={props.toggleMobileLinks} x='0px' y='0px' width='50px' height='50px' viewBox='0 0 105 105'>
                        <circle fillOpacity='0' strokeWidth='4px' stroke='white' cx='40px' cy='40px' r='20px'/>
                        <line x1="50px" y1="40px" x2="30px" y2="40px" fill="none" stroke="white" strokeWidth="4px"/>
                        <line x1="40px" y1="30px" x2="40px" y2="50px" fill="none" stroke="white" strokeWidth="4px"/>
    </svg>
}