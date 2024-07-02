'use client'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'

type Language = {
  id: string
  title: string
  description: string
  flag: string
  default: boolean
}

export interface ISelectLanguage {
  languages: Language[]
}

export const SelectLanguage = ({ languages }: ISelectLanguage) => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>({
    id: '',
    title: '',
    description: '',
    flag: '',
    default: false,
  })
  useEffect(() => {
    const defaultLanguage = languages.find((language) => language.default)
    setSelectedLanguage(defaultLanguage!)
  }, [])

  return (
    <Button
      className="flex items-center justify-between gap-3 text-nowrap bg-transparent text-palette-text-primary shadow-none hover:bg-transparent focus:border-none focus-visible:ring-0"
      onClick={() => console.log('open dropdown menu')}
    >
      <div
        className="flex size-6 items-center rounded-full bg-cover bg-center"
        style={{
          backgroundImage: `url('${selectedLanguage.flag}')`,
        }}
      />
      {selectedLanguage.description}
      <ChevronDown className="size-4 text-[#A098AE]" />
    </Button>
  )
}
