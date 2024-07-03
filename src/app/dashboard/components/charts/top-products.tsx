'use server'
import { GetTopProducts } from '@/app/actions'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

type TTopProducts = {
  id: string
  code: string
  name: string
  color: string
  background: string
  backgroundLine: string
  result: string
}

interface ITopProducts {
  data: TTopProducts[]
}

export const TopProducts = ({ data }: ITopProducts) => {
  return (
    <div className="col-span-6 flex flex-col rounded-lg bg-white p-8">
      <h6 className="font-bold text-palette-text-primary">Top produtos</h6>

      <Table className="mt-3">
        <TableHeader>
          <TableRow>
            <TableHead className="text-center text-xs text-[#96A5B8]">
              #
            </TableHead>
            <TableHead className="text-center text-xs text-[#96A5B8]">
              Produto
            </TableHead>
            <TableHead className="text-center text-xs text-[#96A5B8]">
              Alavancagem
            </TableHead>
            <TableHead className="text-center text-xs text-[#96A5B8]">
              %
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((product: TTopProducts) => {
            return (
              <TableRow
                key={product.id}
                className="text-center text-xs text-[#444A6D]"
              >
                <TableCell>{product.code}</TableCell>
                <TableCell>{product.name}</TableCell>

                <TableCell>
                  <div
                    className={`h-1.5 w-[100%] rounded-full`}
                    style={{ backgroundColor: product.backgroundLine }}
                  >
                    <div
                      className={`h-1.5 rounded-full`}
                      style={{
                        backgroundColor: product.color,
                        width: product.result,
                      }}
                    ></div>
                  </div>
                </TableCell>
                <TableCell>
                  <div
                    className="mx-auto flex w-16 self-center rounded-xl px-4 py-1 text-center font-semibold"
                    style={{
                      border: `2px solid ${product.color}`,
                      backgroundColor: product.background,
                      textAlign: 'center',
                      color: `${product.color}`,
                    }}
                  >
                    {product.result}
                  </div>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
