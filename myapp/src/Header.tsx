import React from 'react'
import { useRef, MouseEvent, useState } from 'react';

export default function Header() {

    /*functions for the scrollable menu in the header*/

    const scrollContainerRef = useRef<HTMLDivElement | null>(null);
    let isDragging = false;
    let startPosition = 0;

    const handleMouseDown = (e: MouseEvent) => {
        isDragging = true;
        startPosition = e.clientX;
        if (scrollContainerRef.current) {
            scrollContainerRef.current.style.cursor = 'grabbing';
        }
        e.preventDefault(); // Prevent text selection during drag
    };

    const handleMouseUp = () => {
        if (isDragging && scrollContainerRef.current) {
            isDragging = false;
            scrollContainerRef.current.style.cursor = 'pointer';
        }
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging && scrollContainerRef.current) {
            const newPosition = e.clientX - startPosition;

            scrollContainerRef.current.scrollLeft -= newPosition;

            startPosition = e.clientX;
        }
    };

    const handleMouseLeave = () => {
        if (isDragging && scrollContainerRef.current) {
            isDragging = false;
            scrollContainerRef.current.style.cursor = 'pointer';
        }
    };

    /*functions for the menu thats popping after the menu bar clicked*/ 

    const [isMenuVisible, setMenuVisibility] = useState(false);

    const handleMenuToggle = () => {
        setMenuVisibility(!isMenuVisible);
    };

    const scrollContainerRef2 = useRef<HTMLDivElement | null>(null);
    let isDragging2 = false;
    let startPosition2 = 0;

    const handleMouseDown2 = (e: MouseEvent) => {
        isDragging2 = true;
        startPosition2 = e.clientY; // Use clientY for vertical scrolling
        if (scrollContainerRef2.current) {
            scrollContainerRef2.current.style.cursor = 'grabbing';
        }
        e.preventDefault(); // Prevent text selection during drag
    };

    const handleMouseUp2 = () => {
        if (isDragging2 && scrollContainerRef2.current) {
            isDragging2 = false;
            scrollContainerRef2.current.style.cursor = 'auto'; // Reset cursor style
        }
    };

    const handleMouseMove2 = (e: MouseEvent) => {
        if (isDragging2 && scrollContainerRef2.current) {
            const newPosition2 = e.clientY - startPosition2; // Use clientY
            scrollContainerRef2.current.scrollTop -= newPosition2; // Use scrollTop for vertical scrolling
            startPosition2 = e.clientY;
        }
    };

    const handleMouseLeave2 = () => {
        if (isDragging2 && scrollContainerRef2.current) {
            isDragging2 = false;
            scrollContainerRef2.current.style.cursor = 'auto'; // Reset cursor style
        }
    };

    return (
        <header>
            {/*The menu that comes in from the left after the menu bar clicked*/}
            {isMenuVisible && (
                <div className="overflow-y-auto whitespace-nowrap flex-column fixed inset-y-0 left-0 w-64 bg-red-600 mt-8"
                    ref={scrollContainerRef2}
                    style={{ overflow: 'hidden' }}
                    onMouseDown={handleMouseDown2}
                    onMouseUp={handleMouseUp2}
                    onMouseMove={handleMouseMove2}
                    onMouseLeave={handleMouseLeave2}>
                        <div className="flex items-center justify-center h-12 ml-4 mt-4 mr-4 mb-1 bg-yellow-300 text-red-900 font-semibold">Sign Up FREE</div>
                        <div className="flex items-center justify-center h-12 ml-4 mb-4 mr-4 bg-red-800 text-white font-semibold">Login</div>
                        <div className="flex items-center text-white h-12 pl-4">Become a Pro</div>
                        <div className="flex items-center text-red-600 bg-red-300 h-12 pl-4">Live Cams</div>
                        <div className="flex items-center text-white h-12 pl-4">New Models</div>
                        <div className="flex items-center text-white h-12 pl-4">Mobile Live</div>
                        <div className="flex items-center text-white h-12 pl-4">Get Credits</div>
                        <div className="flex items-center text-white h-12 pl-4">Awards</div>
                        <div className="flex items-center text-white h-12 pl-4">Top Members</div>
                        <div className="flex items-center text-white h-12 pl-4">Top Models</div>
                        <div className="flex items-center text-white h-12 pl-4">Favorites</div>
                        <div className="flex items-center text-white h-12 pl-4">Video Call</div>
                        <div className="flex items-center text-white h-12 pl-4">Stories</div>
                        <div className="flex items-center text-white h-12 pl-4">Promotions</div>
                        <div className="flex items-center text-white h-12 pl-4">Messages</div>
                        <div className="flex items-center text-white h-12 pl-4">Club Elite</div>
                        <div className="flex items-center text-white h-12 pl-4">LJ App</div>
                        <div className="flex items-center text-white h-12 pl-4">Languages</div>
                        <div className="flex items-center text-white h-12 pl-4">Club Elite Chat App</div>
                        <div className="flex items-center text-white h-12 pl-4">Help Center</div>
                        <div className="flex items-center text-white h-12 pl-4">Legal Resources</div>
                    </div>
            )}
            {/*Header*/}
            <div className="flex bg-red-600 h-8">
                {/*2 left icon container*/}
                <div className="flex bg-red-600 items-center">
                    <svg className="w-6 h-6 fill-current text-white ml-3"
                        onClick={handleMenuToggle}
                        style={{ cursor: 'pointer' }}
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg className="w-5 h-5 fill-current text-white ml-3"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </div>
                {/*The LiveJasmin Logo*/}
                <div className="mx-auto flex items-center bg-red-600">LiveJasminLogo</div>
                {/*2 right icon container*/}
                <div className="flex bg-red-600 items-center">
                    <svg className="w-5 h-5 fill-current text-white mr-3"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                    <svg className="w-5 h-5 fill-current text-white mr-3"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            {/*Scrollable horizontal menu*/}
            <div ref={scrollContainerRef}
                className="overflow-x-hidden whitespace-nowrap flex h-11 bg-red-700"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}>
                <div className="flex items-center inline-block px-2 py-3 mt-2 mb-2 ml-1 mr-1 border rounded border-red-600 bg-red-600 text-white">Girl</div>
                <div className="flex items-center inline-block px-2 py-3 mt-2 mb-2 ml-1 mr-1 border rounded border-red-800 bg-red-800 text-stone-400">Hot Flirt</div>
                <div className="flex items-center inline-block px-2 py-3 mt-2 mb-2 ml-1 mr-1 border rounded border-red-800 bg-red-800 text-stone-400">Mature</div>
                <div className="flex items-center inline-block px-2 py-3 mt-2 mb-2 ml-1 mr-1 border rounded border-red-800 bg-red-800 text-stone-400">Transgender</div>
                <div className="flex items-center inline-block px-2 py-3 mt-2 mb-2 ml-1 mr-1 border rounded border-red-800 bg-red-800 text-stone-400">Fetish</div>
                <div className="flex items-center inline-block px-2 py-3 mt-2 mb-2 ml-1 mr-1 border rounded border-red-800 bg-red-800 text-stone-400">Soul Mate</div>
                <div className="flex items-center inline-block px-2 py-3 mt-2 mb-2 ml-1 mr-1 border rounded border-red-800 bg-red-800 text-stone-400">Amateur</div>
                <div className="flex items-center inline-block px-2 py-3 mt-2 mb-2 ml-1 mr-1 border rounded border-red-800 bg-red-800 text-stone-400">Lesbian</div>
                <div className="flex items-center inline-block px-2 py-3 mt-2 mb-2 ml-1 mr-1 border rounded border-red-800 bg-red-800 text-stone-400">Couple</div>
                <div className="flex items-center inline-block px-2 py-3 mt-2 mb-2 ml-1 mr-1 border rounded border-red-800 bg-red-800 text-stone-400">Gay</div>
            </div>
            <div className="flex items-center h-8 pl-3 bg-red-900 text-white ">
                Live Sex Cams Enjoy the most popular cam girls...
            </div>
        </header >
    )
}