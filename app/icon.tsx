import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'transparent',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#d2f34d',
          fontFamily: 'sans-serif',
          fontSize: 26,
          fontStyle: 'italic',
          fontWeight: 700,
        }}
      >
        4
      </div>
    ),
    { ...size }
  );
}
