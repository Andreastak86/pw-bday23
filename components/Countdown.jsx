import { useEffect, useState } from "react";

const Countdown = () => {
    const [countdown, setCountdown] = useState({});

    useEffect(() => {
        const eventDate = new Date("2073-05-12T00:00:00Z").getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = eventDate - now;

            setCountdown({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                ),
                minutes: Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60)
                ),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p>
                {countdown.days} dager, {countdown.hours} timer,{" "}
                {countdown.minutes} minutter, og {countdown.seconds} sekunder
                til 100-års dagen din 12.05.2073.
            </p>
        </div>
    );
};

export default Countdown;
