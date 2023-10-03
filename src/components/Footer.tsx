// import React from 'react';
import logo from '../assets/logo.png';


const footerNav = ["main", "about", "game features", "System requirements", "subscribe"];

const social = [
    {
        name: 'facebook',
        logo: <svg xmlns="http://www.w3.org/2000/svg" width="10" height="19" viewBox="0 0 10 19" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.4463 19H2.3553V9.50599H0.310303V6.23299H2.3553V4.26899C2.3553 1.59999 3.5103 0.0109863 6.7883 0.0109863H9.5183V3.28399H7.8133C6.5353 3.28399 6.4513 3.74199 6.4513 4.59599L6.4463 6.23299H9.5383L9.1763 9.50599H6.4463V19Z" fill="white" />
        </svg>
    },
    {
        name: 'twitter',
        logo: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M19.69 12.956V8.88461V0.0109863H2.66868L0.541016 2.30769V14.4176H5.86016V18.1758H8.20059L10.7538 15.4615H17.1368L19.69 12.956ZM7.13667 12.7473H3.73242C3.49837 12.7473 3.30688 12.5594 3.30688 12.3297V2.09898C3.30688 1.86931 3.49837 1.6814 3.73242 1.6814H17.3494C17.5835 1.6814 17.775 1.86931 17.775 2.09898V10.033C17.775 10.1479 17.7324 10.2523 17.6526 10.3306L15.3122 12.6273C15.2324 12.7056 15.1207 12.7473 15.009 12.7473H11.0994L7.80157 14.971C7.73242 15.0179 7.64731 15.044 7.5622 15.044C7.49305 15.044 7.42923 15.0284 7.3654 14.9971C7.22178 14.924 7.13667 14.783 7.13667 14.6265V12.7473Z" fill="white" />
            <path d="M13.5197 9.09355V4.91772H11.8176V9.09355H13.5197ZM9.26438 9.09355V4.91772H7.56226V9.09355H9.26438Z" fill="white" />
        </svg>
    },
    {
        name: 'youtube',
        logo: <svg xmlns="http://www.w3.org/2000/svg" width="26" height="19" viewBox="0 0 26 19" fill="none">
            <path d="M20.3566 0.0109863H5.73619C2.87285 0.0109863 0.546387 2.37825 0.546387 5.29179V12.7247C0.546387 15.6437 2.87285 18.0055 5.73619 18.0055H20.3512C23.2199 18.0055 25.541 15.6382 25.541 12.7247V5.29179C25.5464 2.37825 23.2199 0.0109863 20.3566 0.0109863ZM16.8425 9.37518L10.0041 12.6915C9.81971 12.7798 9.61363 12.6474 9.61363 12.4377V5.59529C9.61363 5.3856 9.83055 5.25317 10.0095 5.34698L16.8479 8.87303C17.054 8.97788 17.0486 9.27585 16.8425 9.37518Z" fill="white" />
        </svg>
    },
]

export const Footer = () => {
    return (
        <div
            className='h-fit pb-2'
        >
            <div
                className="flex flex-col lg:flex-row md:justify-between 
                px-3 md:px-[47px] md:items-center gap-[30px]"
            >
                <div
                    className="w-[187px] h-[67px]"
                    style={{
                        backgroundImage: `url(${logo})`
                    }}
                />

                <div className="flex flex-col md:flex-row gap-[25px] md:gap-[46px]" >
                    {footerNav.map((item) => (
                        <p
                            key={item}
                            className="text-white text-[0.8rem] md:text-xs not-italic 
                            font-bold tracking-[1.2px] uppercase
                            hover:cursor-pointer"
                        >
                            {item}
                        </p>
                    ))}
                </div>

                <div
                    className="flex flex-row gap-[25px]"
                >
                    {social.map((item) => (
                        <div className="hover:cursor-pointer" key={item.name} >{item.logo}</div>
                    ))}
                </div>
            </div>

            <hr className="mt-[25px]" />

            <div
                className="mt-[25px] px-3 md:px-[47px] text-white flex 
                flex-col md:flex-row justify-between gap-3"
            >
                <p
                    className="text-[0.5rem] md:text-sm not-italic font-normal 
                    leading-normal opacity-50"
                >
                    All Rights Reserved @faizansayani
                </p>

                <p
                    className="text-[0.6rem] md:text-xs not-italic font-bold 
                    leading-normal tracking-[1.2px] uppercase"
                >
                    Privacy Policy | Terms of Services | Code of Conduct
                </p>
            </div>
        </div>
    )
}
