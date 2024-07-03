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
  data: TSale[]
}

export const SalesToday = async ({ data }: ISalesToday) => {
  return (
    <div className="col-span-7 row-span-3 rounded-lg bg-white p-4">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start">
          <h6 className="text-base font-semibold text-palette-text-primary">
            Vendas hoje
          </h6>
          <span className="text-xs text-palette-text-disabled">
            Resumo de vendas
          </span>
        </div>
        <div className="rounded-lg">
          <Button variant={'outline'} size={'sm'} className="flex gap-3">
            <Upload size={16} />
            Exportar
          </Button>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-12 gap-4">
        {data &&
          data.map((sale) => {
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
                  <h6 className="text-base font-semibold text-palette-text-primary">
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
