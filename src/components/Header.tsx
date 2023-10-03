import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

const headerNav = ["main", "about", "game features", "System requirements", "subscribe"];
const platfrom = [
    {
        name: 'xbox',
        logo: <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path d="M8.2357 2.12217C9.50292 2.61908 10.7279 3.27538 11.8825 4.077C12.0139 4.16606 12.1641 4.21294 12.3143 4.21294C12.4645 4.21294 12.6147 4.16606 12.7461 4.077C13.9007 3.27538 15.1256 2.61439 16.3929 2.11748C16.6792 2.00497 16.8716 1.72371 16.8669 1.41431C16.8669 1.10491 16.6745 0.82833 16.3835 0.72051C13.849 -0.240495 10.7795 -0.240495 8.24978 0.72051C7.96348 0.82833 7.76636 1.1096 7.76636 1.41431C7.76636 1.71902 7.94471 2.00966 8.2357 2.12217Z" fill="white" />
            <path d="M19.1203 2.1265C18.8809 1.96243 18.5759 1.94837 18.3177 2.09369C16.9144 2.9 15.558 3.8235 14.2767 4.84076C14.1077 4.9767 14.0044 5.17828 13.9951 5.39392C13.9857 5.60956 14.0702 5.82051 14.225 5.97052C16.8815 8.49726 20.5612 16.2462 21.406 19.809C19.5756 16.715 15.4923 9.43483 12.8217 6.94559C12.5354 6.67838 12.0848 6.67838 11.7985 6.94559C9.12327 9.43483 5.05407 16.7197 3.22363 19.8184C4.06844 16.2556 7.73871 8.49726 10.3952 5.97052C10.5548 5.82051 10.6393 5.60956 10.6299 5.39392C10.6205 5.17828 10.5172 4.9767 10.3483 4.84076C9.06695 3.8235 7.70586 2.9 6.30721 2.09369C6.05846 1.94837 5.744 1.96243 5.50463 2.1265C2.2427 4.37197 0.294922 8.06129 0.294922 11.9991C0.294922 14.8774 1.33217 17.6526 3.22363 19.8184C5.48586 22.4717 8.79473 23.9999 12.3101 23.9999C15.8255 23.9999 19.1391 22.4764 21.406 19.8137C23.2881 17.6573 24.3253 14.8821 24.3253 11.9991C24.3253 8.06129 22.3775 4.37197 19.1203 2.1265Z" fill="white" />
        </svg>
    },
    {
        name: 'steam',
        logo: <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.2814 25.902C20.4369 25.902 26.2375 20.1255 26.2375 12.9999C26.2375 5.87434 20.4369 0.0979004 13.2814 0.0979004C6.12587 0.0979004 0.325195 5.87434 0.325195 12.9999C0.325195 14.3143 0.522547 15.5827 0.889352 16.7774C0.982948 16.7942 1.13429 16.8326 1.35483 16.8969L1.0105 11.5017C1.0105 11.4028 1.17802 11.3552 1.33149 11.3117C1.41573 11.2877 1.49573 11.265 1.54149 11.2357C1.66644 11.157 4.23966 12.0927 4.37711 12.1548L7.66766 13.637C8.51737 13.1029 9.53369 12.8876 10.5334 13.0325L13.524 9.40147C13.5615 6.50326 15.9357 4.16813 18.8555 4.16399C21.5838 4.19297 23.8455 6.26312 24.1037 8.95846C24.3786 11.8732 22.2294 14.4568 19.297 14.7342L14.3154 18.2741C14.0113 19.8268 12.895 21.0978 11.3872 21.6029C9.07551 22.3813 6.56387 21.1475 5.78497 18.8455L4.05223 18.2741C3.92375 18.2335 1.56562 17.2566 0.926974 16.8979C2.58637 22.1182 7.49015 25.902 13.2814 25.902ZM21.5214 9.46349C21.5214 10.9269 20.3279 12.1133 18.8556 12.1133C17.3833 12.1133 16.1898 10.9269 16.1898 9.46349C16.1898 8.00005 17.3833 6.81369 18.8556 6.81369C20.3279 6.81369 21.5214 8.00005 21.5214 9.46349ZM20.6347 9.46355C20.6347 10.4399 19.8384 11.2315 18.8561 11.2315C17.8738 11.2315 17.0775 10.4399 17.0775 9.46355C17.0775 8.48716 17.8738 7.69564 18.8561 7.69564C19.8384 7.69564 20.6347 8.48716 20.6347 9.46355ZM8.81371 19.7978C9.17192 19.9717 9.56761 20.0628 9.96746 20.0628C10.2715 20.0628 10.5672 20.0131 10.8588 19.9179C11.5294 19.686 12.075 19.2016 12.3833 18.5681C13.0247 17.2474 12.4666 15.6658 11.142 15.0282C10.9171 14.9205 10.6547 15.0116 10.5464 15.2311C10.4381 15.4546 10.5298 15.7155 10.7505 15.8231C10.7797 15.8356 10.8088 15.848 10.838 15.8645C11.7127 16.3117 12.05 17.3757 11.6002 18.2452C11.1504 19.1147 10.0758 19.45 9.20524 19.0029C8.98032 18.8952 8.71792 18.9863 8.60962 19.2058C8.50133 19.4293 8.59296 19.6902 8.81371 19.7978Z" fill="white" />
        </svg>
    }
]

export const Header = () => {

    const [anchor, setAnchor] = useState(false);

    const toggleDrawer = (value: boolean) => {
        setAnchor(value)
    }

    return (
        <div
            className="mx-[30px] py-[20px] flex relative flex-row z-10 
            items-center justify-between"
        >
            <div
                className="w-[120px] md:h-[40px] xl:w-[259px] h-[55px] 
                bg-no-repeat bg-contain"
                style={{
                    backgroundImage: `url(${logo})`
                }}
            />

            <div
                className="text-white lg:flex flex-row gap-[50px]
                hidden"
            >
                {headerNav.map((item) => (
                    <p
                        key={item}
                        className="md:text-[12px] xl:text-[18px] not-italic font-bold leading-normal tracking-[1.8px] uppercase
                        hover:cursor-pointer"
                    >
                        {item}
                    </p>
                ))}
            </div>

            <div
                className="hidden lg:flex flex-row items-center 
                md:gap-[10px] xl:gap-[40px]"
            >
                <div
                    className="flex flex-row items-center gap-[11px]
                    hover:cursor-pointer"
                >
                    <p className="text-white md:text-[13px] xl:text-[18px] not-italic font-bold leading-normal tracking-[1.8px] uppercase" >eng</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
                        <path d="M1 1.3999L4.64785 4.60028L8.29505 1.3999" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                </div>

                <div className="h-[40px] w-[1px] bg-white" />

                <div className="flex flex-row md:gap-[15px] xl:gap-[28px]" >
                    {platfrom.map((item) => (
                        <div
                            key={item.name}
                            className="hover:cursor-pointer"
                        >
                            {item.logo}
                        </div>
                    ))}
                </div>
            </div>

            <React.Fragment>
                <button
                    className="lg:hidden text-white w-fit h-fit"
                    onClick={() => toggleDrawer(true)}
                >
                    <svg
                        className="fill-white w-[30px] h-[30px]"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                    >
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                </button>
                <Drawer
                    anchor={'right'}
                    open={anchor}
                    onClose={() => toggleDrawer(false)}
                >
                    <Box
                        sx={{
                            width: 250,
                            height: '100%',
                            backgroundColor: 'black'
                        }}
                        role="presentation"
                    >
                        <List className='text-white' >
                            {headerNav.map((item) => (
                                <ListItem
                                    key={item}
                                    className="group-hover:bg-white"
                                >
                                    <ListItemButton>
                                        <ListItemText
                                            className="xl:text-[18px] not-italic font-bold 
                                        leading-normal tracking-[1.8px] uppercase"
                                        >
                                            {item}
                                        </ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Drawer>
            </React.Fragment>
        </div>
    )
}
