import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(
  _req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug.replace(/-/g, ' ');
  const title = slug.charAt(0).toUpperCase() + slug.slice(1);

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          background: '#050505',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Accent bar */}
        <div style={{ width: '64px', height: '4px', background: '#10B981', marginBottom: '48px' }} />
        {/* Label */}
        <div style={{ fontSize: '14px', color: '#A1A1AA', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '24px' }}>
          Cyber Eye Intelligence
        </div>
        {/* Title */}
        <div style={{ fontSize: '64px', fontWeight: 700, color: '#FFFFFF', lineHeight: 1.1, flex: 1 }}>
          {title}
        </div>
        {/* Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '14px', color: '#10B981', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Forensics · Intelligence · Security
          </div>
          <div style={{ fontSize: '14px', color: '#71717A' }}>cybereyeintelligence.com</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
