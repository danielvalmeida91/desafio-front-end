import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    serviceLevel: [
      {
        id: '32a5af8a-b615-4fc9-bccf-d9725fd0c660',
        color: '#0095FF',
        total: '1135',
        options: {
          name: 'Expectativa',
          data: [230, 300, 280, 220, 105],
        },
      },
      {
        id: 'f92fc375-2b46-49b3-94e5-6a07a60c592c',
        color: '#00E096',
        total: '635',
        options: {
          name: 'Realidade',
          data: [130, 200, 160, 95, 50],
        },
      },
    ],
  })
}
