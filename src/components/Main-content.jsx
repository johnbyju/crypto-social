import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ArrowPathIcon,
  ArrowUpTrayIcon,
  ChatBubbleLeftIcon,
  EllipsisHorizontalIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/outline"

export function MainContent() {
  return (
    <div className="flex-1 p-4">
      <div className="rounded-lg border p-4">
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <Input
              className="mb-4"
              placeholder="How do you feel about the markets today? Share your ideas here!"
            />
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="text-white text-lg">
                  Bullish
                </Button>
                <Button variant="outline" size="sm"  className="text-white bg-green-400 text-lg">
                  Bearish
                </Button>
              </div>
              <Button>Post</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <h2 className="mb-4 text-xl font-semibold">For you</h2>
        <Input className="mb-6" placeholder="Search posts or users..." />
        <div className="space-y-6">
          <div className="rounded-lg border p-4">
            <div className="flex items-start justify-between">
              <div className="flex gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>DI</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">Da Investopedia</span>
                    <span className="text-sm text-gray-500">@DaInvestopedia</span>
                    <span className="text-sm text-gray-500">• 16 hours</span>
                  </div>
                  <p className="mt-2">
                    BTC surged past $100,000 after breaking out of a triangle
                    pattern, driven by high trading volume. Strong momentum and
                    bullish indicators suggest the rally may continue after a brief
                    consolidation.
                  </p>
                  <div className="mt-2">
                    <span className="text-blue-600">#Bitcoin</span>{" "}
                    <span className="text-blue-600">#BTC Price Analysis#</span>
                  </div>
                  <img
                    alt="Bitcoin price chart"
                    className="mt-4 rounded-lg w-full"
                    height="400"
                    src="/images/sample.png"
                    
                    
                  />
                  <div className="mt-4 flex items-center gap-6">
                    <div className="flex items-center gap-2 text-gray-500">
                      <ChatBubbleLeftIcon className="h-5 w-5" />
                      <span>68</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <ArrowPathIcon className="h-5 w-5" />
                      <span>12</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <HandThumbUpIcon className="h-5 w-5" />
                      <span>1K</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <ArrowUpTrayIcon className="h-5 w-5" />
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <EllipsisHorizontalIcon className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm" className='text-white'>
                Follow
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

