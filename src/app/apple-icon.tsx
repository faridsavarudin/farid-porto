import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
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
          fontFamily: 'monospace',
          position: 'relative',
        }}
      >
        <span style={{ fontSize: 92, fontWeight: 700, color: '#e7edf2', letterSpacing: -4 }}>
          fs
        </span>
        <span
          style={{
            position: 'absolute',
            right: 34,
            top: 48,
            width: 18,
            height: 74,
            background: '#e7a33e',
          }}
        />
        <span
          style={{
            position: 'absolute',
            left: 30,
            bottom: 34,
            width: 120,
            height: 5,
            background: '#43c08d',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
