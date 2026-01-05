import  { useEffect, useRef } from 'react';

export default function SponsorsCarousel({ sponsors }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId;
    let scrollPosition = 0;
    const speed = 0.5; // Adjust speed here

    const animate = () => {
      scrollPosition += speed;
      
      // Reset position for infinite loop
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    scrollContainer.addEventListener('mouseenter', () => {
      cancelAnimationFrame(animationId);
    });

    scrollContainer.addEventListener('mouseleave', () => {
      animationId = requestAnimationFrame(animate);
    });

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Duplicate sponsors array 3 times for seamless loop
  const repeatedSponsors = [...sponsors, ...sponsors, ...sponsors];

  return (
    <div style={{ 
      width: '100%', 
      overflow: 'hidden',
      position: 'relative',
      padding: '2rem 0',
      marginTop:'-40px',
      marginBottom:'-90px'
    }}>
      {/* Text Header */}
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem',
        animation: 'fadeInDown 1s ease-out'
      }}>
        <h2 style={{
          fontSize: 'clamp(1.5rem, 3vw, 2rem)',
          fontWeight: '500',
          color: 'inherit',
          maxWidth: '900px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          Trivandrum's elite web dev force — trusted by the companies that run the city.
        </h2>
      </div>

      {/* Gradient Overlays */}
      <div style={{
        position: 'absolute',
        left: 0,
        top: '5rem',
        bottom: 0,
        width: '150px',
        background: 'linear-gradient(to right, white, transparent)',
        zIndex: 2,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        right: 0,
        top: '5rem',
        bottom: 0,
        width: '150px',
        background: 'linear-gradient(to left, white, transparent)',
        zIndex: 2,
        pointerEvents: 'none'
      }} />

      {/* Scrolling Container */}
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          gap: '4rem',
          overflow: 'hidden',
          padding: '2rem 0',
          cursor: 'pointer'
        }}
      >
        {repeatedSponsors.map((sponsor, index) => (
          <div
            key={index}
            style={{
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minWidth: '200px',
              height: '100px',
              filter: 'grayscale(100%)',
              opacity: 0.7,
              transition: 'all 0.4s ease',
              animation: `floatSlow ${3 + (index % 3)}s ease-in-out infinite`,
              animationDelay: `${index * 0.2}s`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.filter = 'grayscale(0%)';
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'scale(1.15) translateY(-5px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = 'grayscale(100%)';
              e.currentTarget.style.opacity = '0.7';
              e.currentTarget.style.transform = 'scale(1) translateY(0)';
            }}
          >
            <img
              src={sponsor.logo}
              alt={sponsor.alt}
              style={{
                height: sponsor.size === 'h-20' ? '80px' : (sponsor.larger ? '64px' : '48px'),
                width: 'auto',
                objectFit: 'contain',
                maxWidth: '180px'
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </div>
  );
}