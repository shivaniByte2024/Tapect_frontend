/* eslint-disable react-hooks/exhaustive-deps */
// import { PropsWithChildren, useEffect, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useDispatch, useSelector } from 'react-redux';
// import { IRootState } from './store';
// import { toggleRTL, toggleTheme, toggleLocale, toggleMenu, toggleLayout, toggleAnimation, toggleNavbar, toggleSemidark } from './store/themeConfigSlice';
// import { ImageProvider } from './components/ImageContext';
// import { ColorProvider } from './components/ColorContext';
// import router from 'next/router';
// import { LeadCaptureProvider } from './components/LeadCaptureContext';
// // import Login from './pages/Login';

// function App({ children }: PropsWithChildren) {
//     const themeConfig = useSelector((state: IRootState) => state.themeConfig);
//     const dispatch = useDispatch();
//     const { i18n } = useTranslation();
//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     useEffect(() => {
//         const isLoggedIn = localStorage.getItem('isLoggedIn');

//         if (!isLoggedIn) {
//             // Redirect to the login page if not authenticated
//             router.push('/Login');
//         }
//     }, [dispatch]);

//     useEffect(() => {
//         dispatch(toggleTheme(localStorage.getItem('theme') || themeConfig.theme));
//         dispatch(toggleMenu(localStorage.getItem('menu') || themeConfig.menu));
//         dispatch(toggleLayout(localStorage.getItem('layout') || themeConfig.layout));
//         dispatch(toggleRTL(localStorage.getItem('rtlClass') || themeConfig.rtlClass));
//         dispatch(toggleAnimation(localStorage.getItem('animation') || themeConfig.animation));
//         dispatch(toggleNavbar(localStorage.getItem('navbar') || themeConfig.navbar));
//         dispatch(toggleSemidark(localStorage.getItem('semidark') || themeConfig.semidark));
//         // locale
//         const locale = localStorage.getItem('i18nextLng') || themeConfig.locale;
//         dispatch(toggleLocale(locale));
//         i18n.changeLanguage(locale);
//     }, [dispatch, themeConfig.theme, themeConfig.menu, themeConfig.layout, themeConfig.rtlClass, themeConfig.animation, themeConfig.navbar, themeConfig.locale, themeConfig.semidark]);

//     return (
//         <ImageProvider>
//             <ColorProvider>
//                 <LeadCaptureProvider>
//                     <div
//                         className={`${(themeConfig.sidebar && 'toggle-sidebar') || ''} ${themeConfig.menu} ${themeConfig.layout} ${
//                             themeConfig.rtlClass
//                         } main-section relative font-nunito text-sm font-normal antialiased`}
//                     >
//                         {children}
//                         {/* <Login /> */}
//                     </div>
//                 </LeadCaptureProvider>
//             </ColorProvider>
//         </ImageProvider>
//     );
// }

// export default App;

import { PropsWithChildren, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from './store';
import { toggleRTL, toggleTheme, toggleLocale, toggleMenu, toggleLayout, toggleAnimation, toggleNavbar, toggleSemidark } from './store/themeConfigSlice';

function App({ children }: PropsWithChildren) {
    const themeConfig = useSelector((state: IRootState) => state.themeConfig);
    const dispatch = useDispatch();
    const { i18n } = useTranslation();

    useEffect(() => {
        dispatch(toggleTheme(localStorage.getItem('theme') || themeConfig.theme));
        dispatch(toggleMenu(localStorage.getItem('menu') || themeConfig.menu));
        dispatch(toggleLayout(localStorage.getItem('layout') || themeConfig.layout));
        dispatch(toggleRTL(localStorage.getItem('rtlClass') || themeConfig.rtlClass));
        dispatch(toggleAnimation(localStorage.getItem('animation') || themeConfig.animation));
        dispatch(toggleNavbar(localStorage.getItem('navbar') || themeConfig.navbar));
        dispatch(toggleSemidark(localStorage.getItem('semidark') || themeConfig.semidark));
        // locale
        const locale = localStorage.getItem('i18nextLng') || themeConfig.locale;
        dispatch(toggleLocale(locale));
        i18n.changeLanguage(locale);
    }, [dispatch, themeConfig.theme, themeConfig.menu, themeConfig.layout, themeConfig.rtlClass, themeConfig.animation, themeConfig.navbar, themeConfig.locale, themeConfig.semidark]);

    return (
        <div
            className={`${(themeConfig.sidebar && 'toggle-sidebar') || ''} ${themeConfig.menu} ${themeConfig.layout} ${
                themeConfig.rtlClass
            } main-section relative font-nunito text-sm font-normal antialiased`}
        >
            {children}
        </div>
    );
}

export default App;