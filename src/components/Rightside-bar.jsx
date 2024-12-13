// import { Button } from "@/components/ui/button"
import { Info } from 'lucide-react'
import { Button } from './ui/button'

export function RightSidebar() {
  return (
    <div className="w-80 border-l p-4">
      <div className="space-y-4">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="font-semibold">Upcoming Lives</h2>
            <Button variant="link" className="h-auto p-0 text-blue-600">
              See More
            </Button>
          </div>
          <div className="mt-4 rounded-lg bg-blue-600 p-4 text-white">
            <div className="flex items-center gap-2">
              <div className="rounded-full bg-white p-1">
                <img
                  alt="CoinMarketCap"
                  className="h-5 w-5"
                  src="/placeholder.svg?height=20&width=20"
                />
              </div>
              <span className="text-sm">CoinMarketCap</span>
              <span className="text-sm">•</span>
              <span className="text-sm">AliceCrypto</span>
            </div>
            <h3 className="mt-2 font-semibold">Weekly Crypto Forecast</h3>
            <p className="mt-1 text-sm">20:30, Dec 09 | 1223 going</p>
            <Button className="mt-3 w-full bg-white text-blue-600 hover:bg-gray-100">
              Set Reminder
            </Button>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="font-semibold">Trending Topics</h2>
              <Info className="h-4 w-4 text-gray-400" />
            </div>
          </div>
          <div className="mt-4 space-y-2">
            {[
              "#Meme Alpha#",
              "#BTC Price Analysis#",
              "#MtGox",
              "#CMC Quest: Earn Rewards#",
              "#Macro Insights#",
            ].map((topic, i) => (
              <div
                key={topic}
                className="flex items-center justify-between rounded-lg p-2 hover:bg-gray-100"
              >
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">{i + 1}</span>
                  <span>{topic}</span>
                </div>
                {[0, 3].includes(i) && (
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-600">
                    +
                  </span>
                )}
                {[1, 4].includes(i) && (
                  <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs text-orange-600">
                    +
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

