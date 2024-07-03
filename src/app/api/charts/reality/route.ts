import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    reality: [
      {
        id: '5c746cef-7009-4847-9df0-d7081c8c2fbb',
        role: 'Global',
        color: '#27AE60',
        total: '8.823',
        options: {
          name: 'Contratos finalizados',
          data: [1096, 1246, 1146, 996, 1296, 1596, 1447],
        },
      },
      {
        id: '434462d4-5825-4868-9d03-29848a87432e',
        role: 'Commercial',
        color: '#FFCF00',
        total: '12.122',
        options: {
          name: 'Aguardando',
          data: [1486, 1286, 1586, 1486, 1686, 2286, 2306],
        },
      },
    ],
  })
}
