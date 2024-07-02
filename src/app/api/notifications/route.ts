import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    notifications: [
      {
        id: '5c9ae8ba-631b-4ad6-b1a5-de856e3d2eaf',
        title: 'Perfil',
        description: 'Seu perfil foi atualizado com sucesso',
      },
      {
        id: '97743b44-4286-40a2-845d-93c62a4d7125',
        title: 'Blue Week 2024',
        description: 'Faltam 15 dias para a Blue Week 2024',
      },
    ],
  })
}
