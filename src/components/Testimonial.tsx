interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  result?: string;
  photoUrl?: string;
  initials: string;
  gradientFrom: string;
  gradientTo: string;
}

const Testimonial = ({ 
  quote, 
  name, 
  title, 
  result, 
  photoUrl, 
  initials, 
  gradientFrom, 
  gradientTo 
}: TestimonialProps) => {
  return (
    <div className="flex items-center justify-center gap-4">
      {photoUrl ? (
        <img 
          src={photoUrl} 
          alt={`${name} profile`}
          className="w-12 h-12 rounded-full object-cover"
          onError={(e) => {
            // Fallback to gradient circle if image fails to load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />
      ) : null}
      <div 
        className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center text-white font-bold text-lg ${photoUrl ? 'hidden' : 'flex'}`}
      >
        {initials}
      </div>
      <div className="text-left">
        <div className="font-apple font-semibold text-[hsl(var(--text-primary))]">
          {name}
        </div>
        <div className="font-apple text-sm text-[hsl(var(--text-secondary))]">
          {title}
        </div>
        {result && (
          <div className="font-apple text-xs text-[hsl(var(--text-secondary))]">
            {result}
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonial;