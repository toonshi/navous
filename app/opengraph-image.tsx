import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const alt = 'Navous — Indoor Navigation for Hospitals, Malls & Airports'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const bgData = readFileSync(join(process.cwd(), 'public/mall.jpg'))
  const bgSrc = `data:image/jpeg;base64,${bgData.toString('base64')}`

  const logoData = readFileSync(join(process.cwd(), 'public/logo-email-white.png'))
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`

  return new ImageResponse(
    (
      <div style={{ width: 1200, height: 630, display: 'flex', position: 'relative', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bgSrc}
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />

        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(5,10,18,0.55) 0%, rgba(5,10,18,0.35) 40%, rgba(5,10,18,0.82) 75%, rgba(5,10,18,0.95) 100%)',
          display: 'flex',
        }} />

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="Navous"
          style={{ position: 'absolute', top: 52, left: 0, right: 0, marginLeft: 'auto', marginRight: 'auto', width: 220, height: 'auto' }}
        />

        <div style={{
          position: 'absolute',
          bottom: 60,
          left: 64,
          right: 64,
          display: 'flex',
          flexDirection: 'column',
        }}>
          <span style={{
            fontWeight: 700,
            fontSize: 72,
            lineHeight: 1.0,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            display: 'flex',
          }}>
            You are here.
          </span>
          <span style={{
            fontWeight: 400,
            fontSize: 22,
            color: 'rgba(255,255,255,0.65)',
            marginTop: 16,
            display: 'flex',
          }}>
            Indoor navigation for hospitals, malls &amp; airports.
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
