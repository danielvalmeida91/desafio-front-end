'use client'
import { BlueLogo } from '@/app/assets/logo'
import Link from 'next/link'
import { MenuDashboardIcon } from './components/dashboard-icon'
import { ItemMenu } from './components/item-menu'
import { MenuLeaderboardIcon } from './components/leaderboard-icon'
import { usePathname } from 'next/navigation'
import { MenuIconBanner } from './components/icon-banner'
import { Button } from '../ui/button'

export const Menu = () => {
  const pathname = usePathname()

  return (
    <aside className="flex h-full flex-col space-y-5 bg-white p-8">
      <div className="flex flex-col gap-6">
        <Link
          href={'/'}
          className="mb-5 flex w-full items-center justify-start gap-6 no-underline"
        >
          <BlueLogo />
          <h1 className="text-3xl font-bold text-palette-text-primary">Blue</h1>
        </Link>
        <nav className="list-none space-y-6">
          <ItemMenu
            title="Dashboard"
            icon={
              <div className="text-black">
                <MenuDashboardIcon size={28} />
              </div>
            }
            isActive={pathname === '/dashboard'}
          />
          <ItemMenu
            title="Leaderbord"
            icon={
              <MenuLeaderboardIcon
                color={pathname === '/leaderbord' ? '#FFF' : '#737791'}
                size={28}
              />
            }
            isActive={pathname === '/leaderbord'}
          />
        </nav>
      </div>

      <div className="flex h-full items-end pb-5">
        <div
          style={{
            backgroundImage: 'url(/bg-banner-menu.svg)',
            backgroundSize: 'cover',
          }}
          className="flex h-72 flex-col items-center gap-5 rounded-3xl p-6"
        >
          <MenuIconBanner />
          <h2 className="text-xl font-medium text-white">{`Conheça a Blue`}</h2>
          <span className="text-center text-sm font-light text-white opacity-80">
            Saiba mais informações sobre a Blue, uma operadora de saúde Health
            Tech
          </span>
          <Button className="bg-white px-5 text-palette-primary-main hover:bg-[#4a2bff] hover:text-white">
            Conhecer
          </Button>
        </div>
      </div>
    </aside>
  )
}
