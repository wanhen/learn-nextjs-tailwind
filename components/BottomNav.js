export default function BottomNav () {
    return (
        <>
            <h1 className="text-center font-bold pt-60 text-3xl dark:text-white">Bottom Navigation</h1>
            <section
                className="block fixed bottom-0 inset-x-0 z-50 shadow-lg text-gray-800 bg-gray-700 dark:bg-dark backdrop-blur-lg bg-opacity-30 dark:bg-opacity-30 dark:text-gray-400 border-t-2 border-royal/20">
                <div id="tabs" className="flex justify-between">
                    <a href="#"
                        className="w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white"
                        activeclass="dark:text-gray-100 text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className="tab block text-xs">Home</span>
                    </a>
                    <a href="#"
                        className="w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white"
                        activeclass="dark:text-gray-100 text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mb-1" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        <span className="tab block text-xs">Categories</span>
                    </a>
                    <a href="#"
                        className="w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white"
                        activeclass="dark:text-gray-100 text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mb-1" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="tab block text-xs">Gallery</span>
                    </a>
                    <a href="#"
                        className="w-full focus:text-royal hover:text-royal justify-center inline-block text-center pt-2 pb-1 hover:bg-white"
                        activeclass="dark:text-gray-100 text-black">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="tab block text-xs">About</span>
                    </a>
                </div>
            </section>
        </>
    )
}