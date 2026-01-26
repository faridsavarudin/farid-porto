import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Farid Savarudin - Professional Android Developer'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            opacity: 0.3,
          }}
        />
        
        {/* Main Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          {/* Android Icon */}
          <div
            style={{
              fontSize: 120,
              marginBottom: 20,
              color: '#3DDC84',
              fontFamily: 'monospace',
              fontWeight: 'bold',
            }}
          >
            &lt;/&gt;
          </div>
          
          {/* Name */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              marginBottom: 20,
              background: 'linear-gradient(90deg, #3B82F6 0%, #3DDC84 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Farid Savarudin
          </div>
          
          {/* Title */}
          <div
            style={{
              fontSize: 40,
              color: '#9CA3AF',
              marginBottom: 30,
            }}
          >
            Professional Android Developer
          </div>
          
          {/* Skills */}
          <div
            style={{
              fontSize: 28,
              color: '#D1D5DB',
              display: 'flex',
              gap: 20,
            }}
          >
            <span style={{ background: '#1F2937', padding: '8px 20px', borderRadius: '8px' }}>
              Kotlin
            </span>
            <span style={{ background: '#1F2937', padding: '8px 20px', borderRadius: '8px' }}>
              Flutter
            </span>
            <span style={{ background: '#1F2937', padding: '8px 20px', borderRadius: '8px' }}>
              Jetpack Compose
            </span>
          </div>
        </div>
        
        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: 40,
            fontSize: 24,
            color: '#6B7280',
          }}
        >
          faridsavarudin.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
