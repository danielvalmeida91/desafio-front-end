import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    profiles: [
      {
        id: 'ce9bf7bf-d69a-4d51-b7cb-b3a840293b4d',
        name: 'Paulo Freire',
        role: 'Comercial',
        avatar: '/profiles/paulo-profile.png',
        default: true,
      },
      {
        id: '1261b0f5-8ca6-4160-b40e-7ca3e2b51051',
        name: 'Aline Pereira',
        role: 'Financeiro',
        avatar: '/profiles/aline-profile.jpg',
        default: false,
      },
      {
        id: 'c2f0f3b7-1e4d-4c8e-9b8c-4c1a5f1b4c2d',
        name: 'João Silva',
        role: 'Administrativo',
        avatar: '/profiles/joao-profile.jpg',
        default: false,
      },
    ],
  })
}
