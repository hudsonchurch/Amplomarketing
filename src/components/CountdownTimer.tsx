import { useState, useEffect } from 'react';

interface CountdownTimerProps {
  deadline?: Date;
  className?: string;
}

const CountdownTimer = ({ deadline, className = "" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set deadline to end of current month if not provided
    const targetDate = deadline || new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0, 23, 59, 59);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <div className={`countdown-timer text-center ${className}`}>
      <div className="flex items-center justify-center gap-1 text-sm mb-2">
        ⏰ <span className="font-bold">Partnership Deadline:</span>
      </div>
      <div className="flex justify-center gap-4">
        <div className="bg-[hsl(var(--red-urgency))] text-white px-3 py-2 rounded font-bold min-w-[50px]">
          {timeLeft.days}
          <div className="text-xs font-normal">DAYS</div>
        </div>
        <div className="bg-[hsl(var(--red-urgency))] text-white px-3 py-2 rounded font-bold min-w-[50px]">
          {timeLeft.hours}
          <div className="text-xs font-normal">HOURS</div>
        </div>
        <div className="bg-[hsl(var(--red-urgency))] text-white px-3 py-2 rounded font-bold min-w-[50px]">
          {timeLeft.minutes}
          <div className="text-xs font-normal">MINS</div>
        </div>
        <div className="bg-[hsl(var(--red-urgency))] text-white px-3 py-2 rounded font-bold min-w-[50px]">
          {timeLeft.seconds}
          <div className="text-xs font-normal">SECS</div>
        </div>
      </div>
      <div className="text-sm mt-2 text-[hsl(var(--text-secondary))]">
        Winter enrollment closes when timer hits zero
      </div>
    </div>
  );
};

export default CountdownTimer;