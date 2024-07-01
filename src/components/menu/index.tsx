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
    <aside className="grid h-full grid-rows-12 space-y-5 bg-white p-8">
      <Link
        href={'/'}
        className="visited:text-text-primary row-span-1 flex w-full items-center justify-start gap-6 no-underline"
      >
        <BlueLogo />
        <h1 className="text-3xl font-bold text-palette-text-primary">Blue</h1>
      </Link>
      <nav className="row-span-6 list-none space-y-5">
        <ItemMenu
          title="Dashboard"
          icon={
            <div className="text-black">
              <MenuDashboardIcon
                // color={pathname === '/dashboard' ? '#FFF' : '#737791'}
                size={28}
              />
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
      <div
        style={{
          backgroundImage: 'url(/bg-banner-menu.svg)',
          backgroundSize: 'cover',
        }}
        className="row-span-4 flex h-72 flex-col items-center gap-5 rounded-3xl p-6"
      >
        <MenuIconBanner />
        <h2 className="text-xl font-medium">{`Conheça a Blue`}</h2>
        <span className="text-center text-sm font-light text-white opacity-80">
          Saiba mais informações sobre a Blue, uma operadora de saúde Healt Tech
        </span>
        <Button className="bg-white px-5 text-palette-primary-main hover:bg-[#4a2bff] hover:text-white">
          Conhecer
        </Button>
      </div>
    </aside>
  )
}
