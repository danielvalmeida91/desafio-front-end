import { Button } from '@/components/ui/button'
import { Bell } from 'lucide-react'

type TNotification = {
  id: string
  title: string
  description: string
}

interface INotifications {
  notifications: TNotification[]
}

export const Notifications = ({ notifications }: INotifications) => {
  return (
    <Button className="relative flex size-12 items-center rounded-xl bg-[#FFFAF1] p-2 shadow-none hover:bg-[#FFA412]/10">
      <Bell className="size-5 text-[#FFA412]" />
      <div className="absolute right-2 top-2 size-1.5 rounded-full bg-[#EB5757]" />
    </Button>
  )
}
