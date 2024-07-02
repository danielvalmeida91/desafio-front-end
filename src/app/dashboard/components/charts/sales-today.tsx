import { GetSales } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { Upload } from 'lucide-react'
import Image from 'next/image'

type TSale = {
  id: string
  value: string
  description: string
  icon: string
  caption: string
  bg: string
}

interface ISalesToday {
  sales: TSale[]
}

export const SalesToday = async () => {
  const { sales }: ISalesToday = await GetSales()

  return (
    <div className="bg-white col-span-7 rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start">
          <h6 className="text-palette-text-primary text-base font-semibold">
            Vendas hoje
          </h6>
          <span className="text-palette-text-disabled text-xs">
            Resumo de vendas
          </span>
        </div>
        <Button variant={'outline'} size={'sm'} className="flex gap-3">
          <Upload size={16} />
          Exportar
        </Button>
      </div>

      <div className="mt-5 grid grid-cols-12 gap-4">
        {sales &&
          sales.map((sale) => {
            return (
              <div className="col-span-3" key={sale.id}>
                <div
                  className="flex flex-col items-start gap-2 rounded-xl p-3"
                  style={{ backgroundColor: sale.bg }}
                >
                  <Image
                    src={`${sale.icon}`}
                    width={40}
                    height={40}
                    alt="Icon"
                  />
                  <h6 className="text-palette-text-primary text-base font-semibold">
                    {sale.value}
                  </h6>
                  <p className="text-sm text-[#425166]">{sale.description}</p>
                  <span className="text-xs text-[#4079ED]">{sale.caption}</span>
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
