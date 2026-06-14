import { ImageResponse } from 'next/og';

export const runtime = 'edge';

/**
 * Dynamic OpenGraph image generator. Renders a premium navy/gold card with the
 * page title. Acts as the OG image placeholder system referenced in metadata.
 */
export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title =
    searchParams.get('title')?.slice(0, 110) ?? 'Pouch Care International Ltd.';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background:
            'linear-gradient(135deg, #1a2c48 0%, #0a1422 60%, #060d17 100%)',
          color: '#fbfaf6',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: 'linear-gradient(135deg, #e1c068, #a4761f)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 34,
              fontWeight: 700,
              color: '#0a1422',
            }}
          >
            P
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 26, fontWeight: 700 }}>Pouch Care</span>
            <span
              style={{
                fontSize: 15,
                letterSpacing: 4,
                textTransform: 'uppercase',
                color: '#e1c068',
              }}
            >
              International Ltd.
            </span>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.1,
            maxWidth: 960,
          }}
        >
          {title}
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 22,
            color: '#d3dbe9',
          }}
        >
          <span
            style={{
              padding: '8px 16px',
              borderRadius: 999,
              border: '1px solid rgba(225,192,104,0.4)',
              color: '#e1c068',
            }}
          >
            Verified · Certificate C-202769/2025
          </span>
          <span>Bangladesh-incorporated private limited company</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
