import  { useEffect, useState } from 'react';
import { Shield, Lock, Code, Server } from 'lucide-react';

export default function CyberSecurityHero() {
  const [codeDisplay, setCodeDisplay] = useState('');
  const [activeIcon, setActiveIcon] = useState(0);

  const codeSnippet = `const initializeSystem = () => {
  const encryption = new AES256();
  const servers = loadBalancer.connect();
  
  return Promise.all([
    encryption.validate(),
    servers.ping(),
    database.sync()
  ]);
};

await initializeSystem();
> System initialized ✓
> Security protocols active ✓
> Ready for deployment`;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < codeSnippet.length) {
        setCodeDisplay(codeSnippet.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const iconInterval = setInterval(() => {
      setActiveIcon(prev => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(iconInterval);
  }, []);

  const icons = [
    { Icon: Shield, activeColor: '#fb923c', inactiveColor: '#666' },
    { Icon: Lock, activeColor: '#f97316', inactiveColor: '#666' },
    { Icon: Code, activeColor: '#ea580c', inactiveColor: '#666' },
    { Icon: Server, activeColor: '#fdba74', inactiveColor: '#666' }
  ];

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      minHeight: '600px'
    }}>
      {/* Floating Icons */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none'
      }}>
        {icons.map((icon, idx) => {
          const { Icon, activeColor, inactiveColor } = icon;
          const positions = [
            { top: '2rem', left: '2rem' },
            { top: '3rem', right: '3rem' },
            { bottom: '4rem', left: '4rem' },
            { bottom: '2rem', right: '2rem' }
          ];
          
          const isActive = activeIcon === idx;
          
          return (
            <div
              key={idx}
              style={{
                position: 'absolute',
                ...positions[idx],
                transition: 'all 0.5s',
                transform: isActive ? 'scale(1.1)' : 'scale(1)',
                opacity: isActive ? 1 : 0.4,
                color: isActive ? activeColor : inactiveColor
              }}
            >
              <div style={{
                padding: '1rem',
                borderRadius: '1rem',
                backdropFilter: 'blur(4px)',
                border: `1px solid ${isActive ? activeColor + '40' : 'rgba(255,255,255,0.1)'}`,
                backgroundColor: isActive ? activeColor + '20' : 'rgba(100, 100, 100, 0.1)'
              }}>
                <Icon size={28} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Terminal Window */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        width: '100%',
        maxWidth: '32rem'
      }}>
        {/* Terminal Header */}
        <div style={{
          backgroundColor: 'rgba(24, 24, 27, 0.9)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(249, 115, 22, 0.3)',
          borderTopLeftRadius: '0.75rem',
          borderTopRightRadius: '0.75rem',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1rem',
            background: 'linear-gradient(to right, rgba(67, 20, 7, 0.5), rgba(24, 24, 27, 1))',
            borderBottom: '1px solid rgba(249, 115, 22, 0.2)'
          }}>
            <div style={{
              width: '0.75rem',
              height: '0.75rem',
              borderRadius: '9999px',
              backgroundColor: '#ef4444',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}></div>
            <div style={{
              width: '0.75rem',
              height: '0.75rem',
              borderRadius: '9999px',
              backgroundColor: '#eab308',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}></div>
            <div style={{
              width: '0.75rem',
              height: '0.75rem',
              borderRadius: '9999px',
              backgroundColor: '#22c55e',
              cursor: 'pointer',
              transition: 'background-color 0.3s'
            }}></div>
            <span style={{
              marginLeft: '1rem',
              color: '#fb923c',
              fontFamily: 'monospace',
              fontSize: '0.875rem'
            }}>system@outObox:/root</span>
          </div>
        </div>

        {/* Terminal Content */}
        <div style={{
          backgroundColor: 'rgba(24, 24, 27, 0.95)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(249, 115, 22, 0.3)',
          borderTop: 'none',
          borderBottomLeftRadius: '0.75rem',
          borderBottomRightRadius: '0.75rem',
          padding: '1.5rem',
          minHeight: '320px',
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}>
          <div>
            <div style={{
              color: '#fb923c',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              lineHeight: '1.625',
              fontSize: '0.75rem'
            }}>
              {codeDisplay}
              <span style={{
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}>█</span>
            </div>
          </div>

          {/* Bottom status */}
          <div style={{
            marginTop: '2rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(249, 115, 22, 0.2)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#f97316',
              fontSize: '0.75rem'
            }}>
              <span style={{
                width: '0.5rem',
                height: '0.5rem',
                borderRadius: '9999px',
                backgroundColor: '#f97316',
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
              }}></span>
              <span>Status: Active</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          marginTop: '1rem',
          display: 'flex',
          gap: '0.75rem'
        }}>
          <button
            style={{
              flex: 1,
              background: 'linear-gradient(to right, #f97316, #ea580c)',
              color: '#000',
              fontWeight: 'bold',
              padding: '0.625rem 1rem',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 0 0 rgba(249, 115, 22, 0)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to right, #fb923c, #f97316)';
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(249, 115, 22, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(to right, #f97316, #ea580c)';
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 0 0 rgba(249, 115, 22, 0)';
            }}
          >
            EXECUTE
          </button>
          <button
            style={{
              flex: 1,
              border: '1px solid rgba(249, 115, 22, 0.5)',
              color: '#fb923c',
              fontFamily: 'monospace',
              padding: '0.625rem 1rem',
              borderRadius: '0.5rem',
              fontSize: '0.875rem',
              cursor: 'pointer',
              transition: 'all 0.3s',
              backgroundColor: 'rgba(24, 24, 27, 0.5)',
              boxShadow: '0 0 0 rgba(249, 115, 22, 0)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#f97316';
              e.currentTarget.style.color = '#fdba74';
              e.currentTarget.style.backgroundColor = 'rgba(67, 20, 7, 0.3)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(249, 115, 22, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(249, 115, 22, 0.5)';
              e.currentTarget.style.color = '#fb923c';
              e.currentTarget.style.backgroundColor = 'rgba(24, 24, 27, 0.5)';
              e.currentTarget.style.boxShadow = '0 0 0 rgba(249, 115, 22, 0)';
            }}
          >
            REVIEW
          </button>
        </div>

        {/* Glow effect */}
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          backgroundColor: 'rgba(249, 115, 22, 0.05)',
          filter: 'blur(60px)',
          borderRadius: '9999px'
        }}></div>
      </div>

      {/* Grid Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: -2,
        opacity: 0.2
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          backgroundImage: `linear-gradient(rgba(249, 115, 22, 0.15) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(249, 115, 22, 0.15) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
    </div>
  );
}