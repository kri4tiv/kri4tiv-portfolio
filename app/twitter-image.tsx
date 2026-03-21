import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'KRI4TIV';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#ffffff',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          fontSize: 140,
          fontWeight: 800,
          letterSpacing: '-0.04em',
          color: '#050505',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          KRI
          <span style={{ color: '#d2f34d', fontStyle: 'italic' }}>4</span>
          TIV
        </div>
      </div>
    ),
    { ...size }
  );
}
