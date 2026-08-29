import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0d131a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '20%',
          fontFamily: 'monospace',
          position: 'relative',
        }}
      >
        <span style={{ fontSize: 17, fontWeight: 700, color: '#e7edf2', letterSpacing: -1 }}>
          fs
        </span>
        <span
          style={{
            position: 'absolute',
            right: 6,
            top: 8,
            width: 4,
            height: 16,
            background: '#e7a33e',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
