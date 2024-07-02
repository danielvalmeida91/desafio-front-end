import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    lifes: [
      {
        id: 'ab73f99f-ec20-4866-ac75-f411b8fe9b40',
        color: '#0095FF',
        total: '3.432',
        options: {
          name: 'Último mês',
          data: [525, 475, 455, 485, 465, 515, 512],
        },
      },
      {
        id: '10bdf542-c063-4097-8b8e-b6a4a252aafc',
        color: '#07E098',
        total: '4.504',
        options: {
          name: 'Este mês',
          data: [615, 635, 625, 655, 665, 645, 664],
        },
      },
    ],
  })
}
