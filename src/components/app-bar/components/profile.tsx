'use client'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useState, SyntheticEvent, useEffect } from 'react'

type TProfile = {
  id: string
  name: string
  role: string
  avatar: string
  default: boolean
}

interface IProfileSelect {
  profiles: TProfile[]
}

export const Profile = ({ profiles }: IProfileSelect) => {
  const [selectedProfile, setSelectedProfile] = useState<TProfile>({
    id: '',
    name: '',
    role: '',
    avatar: '',
    default: false,
  })
  const handleSelectProfile = (
    event: Event | SyntheticEvent,
    profile: TProfile,
  ) => {
    setSelectedProfile(profile)
    // handleClose(event)
  }
  useEffect(() => {
    const defaultProfile = profiles.find((profile) => profile.default)
    setSelectedProfile(defaultProfile!)
  }, [])
  return (
    <div className="flex items-center justify-center gap-5">
      <Image
        src={selectedProfile.avatar}
        alt="avatar"
        width={60}
        height={60}
        className="rounded-2xl"
      />
      <div className="flex flex-col items-start justify-center">
        <button className="flex items-center gap-3 text-nowrap bg-transparent text-palette-text-primary shadow-none">
          <span className="text-sm font-semibold text-palette-text-primary">
            {selectedProfile.name}
          </span>
          <ChevronDown size={18} className="text-palette-text-primary" />
        </button>
        <span className="text-xs text-palette-text-disabled">
          {selectedProfile.role}
        </span>
      </div>
    </div>
  )
}
