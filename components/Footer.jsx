import React from "react";

export default function Footer() {
    return (
        <footer className='bg-gray-900'>
            <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between'>
                    <p className='text-gray-300'>
                        Copyright © {new Date().getFullYear()} Made by SVOGER
                        with love
                    </p>
                </div>
            </div>
        </footer>
    );
}
