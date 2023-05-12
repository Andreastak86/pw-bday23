import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <>
            <div
                // site
                className='flex flex-col min-h-screen'
            >
                <div
                    //  content
                    className='flex-1'
                >
                    {children}
                </div>
                <Footer />
            </div>
        </>
    );
}
