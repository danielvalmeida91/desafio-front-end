import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    topProducts: [
      {
        id: '7f95a868-8d03-4683-86d6-c5e4117a5974',
        code: '01',
        name: 'BLUE START ENF SC',
        color: '#0095FF',
        background: '#F0F9FF',
        backgroundLine: '#CDE7FF',
        result: '45%',
      },
      {
        id: 'a4054d7e-2781-4e79-9574-9738c56a413a',
        code: '02',
        name: 'BLUE START ENF CO',
        color: '#00E58F',
        background: '#F0FDF4',
        backgroundLine: '#8CFAC7',
        result: '29%',
      },
      {
        id: 'df31ba7e-e250-4e23-a65f-40b7783fcb38',
        code: '03',
        name: 'BLUE START APT CO',
        color: '#884DFF',
        background: '#FBF1FF',
        backgroundLine: '#C5A8FF',
        result: '18%',
      },
      {
        id: 'df31ba7e-e250-4e23-a65f-40b7783fcb38',
        code: '03',
        name: 'BLUE START APT SC',
        color: '#FF8900',
        background: '#FEF6E6',
        backgroundLine: '#FFD5A4',
        result: '25%',
      },
    ],
  })
}
