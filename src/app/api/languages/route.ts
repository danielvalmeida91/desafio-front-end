import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    languages: [
      {
        id: 'd62ff55c-0648-4ca1-b344-031cb6e64180',
        title: 'Portuguese',
        description: 'PT (BR)',
        flag: '/flags/br.svg',
        default: true,
      },
      {
        id: '7778a903-db59-4705-8b55-e49cb1f603e4',
        title: 'English',
        description: 'EN (US)',
        flag: '/flags/us.svg',
        default: false,
      },
    ],
  })
}
