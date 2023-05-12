import Image from "next/image";
import Pål from "../public/download.png";
import Counter from "../components/Countdown";

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center  p-24'>
            <div>
                <h1 className=' text-[20px]'>
                    Gratulerer så mye med de 50 år!{" "}
                    <span className=' text-[40px] text-center'>Pål 🥳</span>
                </h1>
                <div className=' my-5 bg-black p-5'>
                    <Image src={Pål} alt='Bilde av en gammel Pål' width={250} />
                </div>
                <div>
                    <p>Halvveis til 100 er ingen spøk</p>
                    <p>Du tenker vel, men det er fryktelig lenge til!</p>
                    <p className=' mt-4'>
                        Nei det er ikke det, faktisk er det bare:
                    </p>
                </div>
                <div className='mt-6 text-[36px]'>
                    <Counter />
                </div>
                <div className='mt-6'>
                    <p>
                        Men fram til da, ønsker jeg deg en riktig så flott
                        bursdag og nyt den fine dagen i dag 👳🏽‍♂️🎈🎈🎈🎈🎈
                    </p>
                </div>
                <div className=' py-6'>
                    <iframe
                        src='https://open.spotify.com/embed/track/5XbtI5DR1e0OcvMbz531IP?utm_source=generator'
                        width='100%'
                        height='352'
                        allowfullscreen=''
                        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
                        loading='lazy'
                    ></iframe>
                </div>
            </div>
        </main>
    );
}
