import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Farid Savarudin - Android & Kotlin Multiplatform Engineer'
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
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#090d12',
          color: '#c9d4de',
          fontFamily: 'sans-serif',
          padding: '72px',
          position: 'relative',
        }}
      >
        {/* engineering grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(to right, rgba(122,143,163,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(122,143,163,0.06) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        {/* horizon glow */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '760px',
            height: '420px',
            background:
              'radial-gradient(closest-side, rgba(231,163,62,0.16), transparent)',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 16, zIndex: 1 }}>
          <span style={{ fontSize: 22, fontFamily: 'monospace', letterSpacing: 4, color: '#8698a9' }}>
            ANDROID · KOTLIN MULTIPLATFORM · REALTIME SYSTEMS
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', zIndex: 1 }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 700,
              color: '#f4f7f9',
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            Farid Savarudin
          </div>
          <div style={{ fontSize: 34, color: '#a9b8c6', marginTop: 18 }}>
            Android &amp; Kotlin Multiplatform Engineer
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 1,
            fontFamily: 'monospace',
            fontSize: 22,
            color: '#8698a9',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ width: 12, height: 12, borderRadius: 12, background: '#e15656' }} />
            <span style={{ width: 12, height: 12, borderRadius: 12, background: '#e7a33e' }} />
            <span style={{ width: 12, height: 12, borderRadius: 12, background: '#43c08d' }} />
            <span style={{ marginLeft: 8, color: '#5a6f83' }}>9 years · sole engineer, 4 realtime systems</span>
          </div>
          <span>faridsavarudin.vercel.app</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
