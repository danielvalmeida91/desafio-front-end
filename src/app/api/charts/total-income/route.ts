import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    totalIncome: [
      {
        id: '94b5af8a-b615-4fc9-bccf-d9725fd0c660',
        color: '#0095FF',
        options: {
          name: 'Aguardando',
          data: [14000, 16500, 6000, 16000, 12000, 16000, 21000],
        },
      },
      {
        id: 'e87fc375-2b46-49b3-94e5-6a07a60c592c',
        color: '#00E096',
        options: {
          name: 'Implantadas',
          data: [13000, 12500, 23000, 6000, 11000, 14000, 11000],
        },
      },
    ],
  })
}
