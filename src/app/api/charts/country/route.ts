import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    country: [
      ['State', 'Sales'],
      ['BR-AC', 0],
      ['BR-AL', 0],
      ['BR-AM', 90],
      ['BR-AP', 0],
      ['BR-BA', 0],
      ['BR-CE', 0],
      ['BR-DF', 0],
      ['BR-ES', 30],
      ['BR-GO', 0],
      ['BR-MA', 0],
      ['BR-MT', 0],
      ['BR-MS', 0],
      ['BR-MG', 42],
      ['BR-PA', 0],
      ['BR-PB', 0],
      ['BR-PR', 0],
      ['BR-PE', 0],
      ['BR-PI', 0],
      ['BR-RJ', 0],
      ['BR-RN', 0],
      ['BR-RS', 0],
      ['BR-RO', 0],
      ['BR-RR', 0],
      ['BR-SC', 0],
      ['BR-SP', 50],
      ['BR-SE', 0],
      ['BR-TO', 0],
    ],
  })
}
