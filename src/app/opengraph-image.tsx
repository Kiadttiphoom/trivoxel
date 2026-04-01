import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Kiadttiphoom Bu-iad | Full Stack Developer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom right, #020617 0%, #0f172a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '80px',
        }}
      >
        {/* Animated-like Glow */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '-20%',
            width: '60%',
            height: '60%',
            background: '#10b981',
            opacity: 0.15,
            filter: 'blur(150px)',
            borderRadius: '100%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-20%',
            right: '-20%',
            width: '60%',
            height: '60%',
            background: '#3b82f6',
            opacity: 0.15,
            filter: 'blur(150px)',
            borderRadius: '100%',
          }}
        />

        {/* Text Content */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          textAlign: 'center',
          gap: '20px'
        }}>
          <div style={{ 
            fontSize: '32px', 
            fontWeight: 900, 
            letterSpacing: '10px', 
            opacity: 0.5,
            textTransform: 'uppercase'
          }}>
            Portfolio 2026
          </div>
          <div style={{ 
            fontSize: '96px', 
            fontWeight: 900, 
            display: 'flex',
            gap: '10px'
          }}>
            KIADTTIPHOOM <span style={{ color: '#10b981' }}>BU-IAD</span>
          </div>
          <div style={{ 
            fontSize: '40px', 
            fontWeight: 600, 
            opacity: 0.6,
            marginTop: '20px',
            color: '#3b82f6'
          }}>
            Senior Full Stack Developer
          </div>
        </div>

        {/* Decorative Badge */}
        <div style={{
          position: 'absolute',
          bottom: '60px',
          right: '80px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '16px 32px',
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '100px',
          border: '1px solid rgba(255,255,255,0.1)',
          fontSize: '20px',
          fontWeight: 800,
          color: '#10b981'
        }}>
          <div style={{ width: 12, height: 12, background: '#10b981', borderRadius: '50%' }} />
          LIVE NOW
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
