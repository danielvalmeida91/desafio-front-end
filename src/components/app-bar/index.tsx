import { Search } from 'lucide-react'
import { GetLanguage, GetNotifications, GetProfiles } from '@/app/actions'
import { SelectLanguage } from './components/language'
import { PageTitle } from './components/page-title'
import { Notifications } from './components/notification'
import { Profile } from './components/profile'

export const AppBar = async () => {
  const { languages } = await GetLanguage()
  const { notifications } = await GetNotifications()
  const { profiles } = await GetProfiles()

  return (
    <div className="grid h-32 grid-cols-12 items-center bg-white px-5 text-palette-text-primary">
      <div className="col-span-2">
        <PageTitle />
      </div>
      <div className="col-span-6 flex max-w-lg flex-1 items-center gap-3 rounded-2xl bg-[#F9FAFB] px-3 py-4">
        <Search className="text-[#5D5FEF]" />
        <input
          className="flex-1 border-0 bg-[#F9FAFB] p-0 text-base outline-none focus:ring-0"
          placeholder="Pesquisar informações"
        />
      </div>
      <div className="col-span-4">
        <div className="flex items-center justify-end gap-5">
          <SelectLanguage languages={languages} />
          <Notifications notifications={notifications} />
          <Profile profiles={profiles} />
        </div>
      </div>
    </div>
  )
}
