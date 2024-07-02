import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    platforms: [
      {
        id: 'd62ff55c-0648-4ca1-b344-031cb6e64180',
        color: '#A701FF',
        options: {
          name: 'TD Consultoria',
          data: [250, 200, 180, 160, 180, 220, 250, 300, 280, 250, 200, 150],
        },
      },
      {
        id: '8e298a75-2c41-4b1a-8f23-123ab5c4d9e8',
        color: '#EF4444',
        options: {
          name: 'RIKO Plataforma',
          data: [240, 120, 100, 120, 180, 240, 300, 350, 320, 280, 200, 120],
        },
      },
      {
        id: '3c7f9b22-5d8a-4e09-9a6f-234cd6e7f8a9',
        color: '#3CD856',
        options: {
          name: 'Blue Serviços',
          data: [300, 350, 320, 300, 280, 320, 350, 320, 300, 280, 240, 180],
        },
      },
    ],
  })
}
