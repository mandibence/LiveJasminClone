import React from 'react' 
import { useRef, MouseEvent } from 'react';

export default function Header() {

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

            // Use scrollLeft to scroll horizontally
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

    return (
        <header>
            <div className="flex bg-red-600">
                <div className="flex bg-red-400 items-center">
                    <svg className="w-6 h-6 fill-current text-white ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg className="w-5 h-5 fill-current text-white ml-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg> 
                </div>
                <div className="mx-auto flex bg-red-700">LiveJasminLogo</div>
                <div className="flex bg-red-400 items-center">
                    <svg className="w-5 h-5 fill-current text-white mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                    <svg className="w-5 h-5 fill-current text-white mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            <div ref={scrollContainerRef}
                className="overflow-x-hidden whitespace-nowrap pl-10 flex"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}>
                    <div className="inline-block px-4 py-2 m-2 border rounded-md bg-white">Item 1</div>
                    <div className="inline-block px-4 py-2 m-2 border rounded-md bg-white">Item 2</div>
                    <div className="inline-block px-4 py-2 m-2 border rounded-md bg-white">Item 3</div>
                    <div className="inline-block px-4 py-2 m-2 border rounded-md bg-white">Item 4</div>
                    <div className="inline-block px-4 py-2 m-2 border rounded-md bg-white">Item 1</div>
                    <div className="inline-block px-4 py-2 m-2 border rounded-md bg-white">Item 2</div>
                    <div className="inline-block px-4 py-2 m-2 border rounded-md bg-white">Item 3</div>
                    <div className="inline-block px-4 py-2 m-2 border rounded-md bg-white">Item 4</div>
                    <div className="inline-block px-4 py-2 m-2 border rounded-md bg-white">Item 1</div>
                    <div className="inline-block px-4 py-2 m-2 border rounded-md bg-white">Item 2</div>
                    <div className="inline-block px-4 py-2 m-2 border rounded-md bg-white">Item 3</div>
                    <div className="inline-block px-4 py-2 m-2 border rounded-md bg-white">Item 4</div>
            </div>
        </header >        
    )
}