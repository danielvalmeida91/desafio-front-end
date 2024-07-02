'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

interface ItemMenuProps {
  title: string
  icon: React.ReactElement
  isActive: boolean
}

export const ItemMenu = ({ title, icon, isActive }: ItemMenuProps) => {
  const router = useRouter()

  return (
    <Button
      onClick={() => router.push(`/${title.toLowerCase()}`)}
      className={`text-md flex w-64 items-center justify-start gap-6 rounded-xl p-8 text-white ${isActive ? 'bg-palette-primary-main hover:bg-[#4a2bff]' : 'border-none bg-transparent text-palette-text-disabled ring-0 hover:bg-palette-primary-main hover:text-white'}`}
    >
      {icon}
      {title}
    </Button>
  )
}
