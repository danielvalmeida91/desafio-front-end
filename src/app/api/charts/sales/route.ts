import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    sales: [
      {
        id: '45270893-d950-4125-a2a8-6785e64c24bc',
        value: 'R$ 1,000',
        description: 'Total de vendas',
        icon: '/icons/signal.svg',
        caption: '+8% a mais que ontem',
        bg: '#FFE2E5',
      },
      {
        id: '7ac3dfdc-1261-46ac-8a9f-185cf387f0d7',
        value: '300',
        description: 'Total de contratos',
        icon: '/icons/paper.svg',
        caption: '+5% a mais que ontem',
        bg: '#FFF4DE',
      },
      {
        id: '523373e3-5327-4bd0-a57e-6e9532417f8d',
        value: '5',
        description: 'Implantadas',
        icon: '/icons/ticket.svg',
        caption: '+1,2% a mais que ontem',
        bg: '#DCFCE7',
      },
      {
        id: '7c62df5c-df03-4da2-9945-125c54565f9f',
        value: '8',
        description: 'Novos contratos',
        icon: '/icons/person-plus.svg',
        caption: '+0,5% a mais que ontem',
        bg: '#F3E8FF',
      },
    ],
  })
}
