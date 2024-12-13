import { Bell, Hash, MoreHorizontal, Radio, Rss, ScrollText, User } from 'lucide-react'
import { Button } from './ui/button'


export function Sidebar() {
  return (
    <div className="w-64 border-r p-4">
      <div className="flex items-center gap-2 pb-4">
        <Radio className="h-5 w-5" />
        <span className="font-semibold">COMMUNITY</span>
      </div>
      <nav className="space-y-2">
        <a
          className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900"
          href="#"
        >
          <Rss className="h-5 w-5" />
          Feed
        </a>
        <a
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 hover:text-gray-900"
          href="#"
        >
          <Hash className="h-5 w-5" />
          Topics
        </a>
        <a
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 hover:text-gray-900"
          href="#"
        >
          <Radio className="h-5 w-5" />
          Lives
        </a>
        <a
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 hover:text-gray-900"
          href="#"
        >
          <ScrollText className="h-5 w-5" />
          Articles
        </a>
        <a
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 hover:text-gray-900"
          href="#"
        >
          <Bell className="h-5 w-5" />
          Notifications
        </a>
        <a
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 hover:text-gray-900"
          href="#"
        >
          <User className="h-5 w-5" />
          My Page
        </a>
        <a
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-600 hover:text-gray-900"
          href="#"
        >
          <MoreHorizontal className="h-5 w-5" />
          More
        </a>
      </nav>
      <div className="mt-6 rounded-lg border p-4">
        <h3 className="font-semibold">Creator Campaign</h3>
        <p className="mt-1 text-sm text-gray-600">
          Become a CMC Creator and win up to 3M impressions!
        </p>
        <Button className="mt-4 w-full">Join now</Button>
      </div>
    </div>
  )
}

