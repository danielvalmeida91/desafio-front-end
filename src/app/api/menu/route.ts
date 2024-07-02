import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    menu: [
      {
        id: '5c9ae8ba-631b-4ad6-b1a5-de856e3d2eaf',
        title: 'Dashboard',
        url: '/dashboard',
        icon: '/public/icons/blue-icon-menu.svg',
        order: 1,
      },
      {
        id: '97743b44-4286-40a2-845d-93c62a4d7125',
        title: 'Leaderboard',
        url: '/leaderboard',
        icon: 'mdi:poll',
        order: 2,
      },
    ],
  })
}
