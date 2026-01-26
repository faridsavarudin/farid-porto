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
          fontSize: 100,
          background: 'linear-gradient(135deg, #3DDC84 0%, #07C160 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'monospace',
          fontWeight: 'bold',
        }}
      >
        &lt;/&gt;
      </div>
    ),
    {
      ...size,
    }
  )
}
