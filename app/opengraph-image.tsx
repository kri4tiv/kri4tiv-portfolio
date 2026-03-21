import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'KRI4TIV';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const clashDisplayData = await fetch(
    new URL('https://cdn.fontshare.com/wf/BFBSY7LX5W2U2EROCLVVTQP4VS7S4PC3/IIUX4FGTMD2LK2VWD3RVTAS4SSMUN7B5/53RZKGODFYDW3QHTIL7IPOWTBCSUEZK7.ttf')
  ).then((res) => res.arrayBuffer());

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
          fontFamily: '"Clash Display"',
          fontSize: 180,
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: '#050505',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span>KRI</span>
          <span style={{ color: '#d2f34d', fontStyle: 'italic' }}>4</span>
          <span>TIV</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Clash Display',
          data: clashDisplayData,
          style: 'normal',
          weight: 700,
        },
      ],
    }
  );
}
