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
  const posts = [
    {
      id: 1,
      avatar: "/images/user1.jpg",
      username: "Market Guru",
      handle: "@MarketGuru",
      time: "2 hours",
      content: "ETH has reclaimed $2000 amid a bullish sentiment. Analysts suggest a potential breakout.",
      hashtags: ["#Ethereum", "#ETH Analysis"],
      image: "/images/sample.png",
      comments: 120,
      retweets: 25,
      likes: 1500,
    },
    {
      id: 2,
      avatar: "/images/user2.jpg",
      username: "Crypto Trends",
      handle: "@CryptoTrends",
      time: "5 hours",
      content: "XRP is showing strong support near $1.30. A good entry point for long-term investors.",
      hashtags: ["#XRP", "#Crypto News"],
      image: "/images/bitcoin-prediction.jpg",
      comments: 80,
      retweets: 10,
      likes: 300,
    },
    {
      id: 3,
      avatar: "/images/user3.jpg",
      username: "Bitcoin Analyst",
      handle: "@BTC_Analyst",
      time: "8 hours",
      content: "BTC dips slightly but holds above $60K. Watching key support levels closely.",
      hashtags: ["#Bitcoin", "#BTC Analysis"],
      image: "/images/usual.png",
      comments: 50,
      retweets: 8,
      likes: 400,
    },
    {
      id: 4,
      avatar: "/images/user4.jpg",
      username: "Altcoin Observer",
      handle: "@AltcoinObs",
      time: "12 hours",
      content: "SOL rallies above $150. Bullish trend expected if it holds these levels.",
      hashtags: ["#Solana", "#Altcoins"],
      image: "/images/top-coin.png",
      comments: 75,
      retweets: 12,
      likes: 600,
    },
    {
      id: 5,
      avatar: "/images/user5.jpg",
      username: "Market Pulse",
      handle: "@MarketPulse",
      time: "1 day",
      content: "ADA breaks out from resistance, suggesting it could be a good buy at current levels.",
      hashtags: ["#Cardano", "#ADA Analysis"],
      image: "/images/btc-return.png",
      comments: 95,
      retweets: 15,
      likes: 800,
    },
    {
      id: 6,
      avatar: "/images/user6.jpg",
      username: "Crypto Insights",
      handle: "@CryptoInsights",
      time: "1 day",
      content: "LTC shows strong support around $200. Bulls need to defend this level for a potential rally.",
      hashtags: ["#Litecoin", "#Crypto Analysis"],
      image: "/images/etf.jpg",
      comments: 60,
      retweets: 20,
      likes: 1000,
    },
    {
      id: 7,
      avatar: "/images/user7.jpg",
      username: "Market Watch",
      handle: "@MarketWatch",
      time: "2 days",
      content: "DOGE finds support at $0.25. Could this be the start of a recovery?",
      hashtags: ["#Dogecoin", "#Crypto"],
      image: "/images/trump.jpg",
      comments: 45,
      retweets: 5,
      likes: 250,
    },
    {
      id: 8,
      avatar: "/images/user8.jpg",
      username: "Altcoin Analyst",
      handle: "@AltcoinAnalyst",
      time: "3 days",
      content: "BNB remains resilient near $500 despite market volatility.",
      hashtags: ["#BinanceCoin", "#BNB Analysis"],
      image: "/images/solana.png",
      comments: 70,
      retweets: 18,
      likes: 1200,
    },
    {
      id: 9,
      avatar: "/images/user9.jpg",
      username: "Crypto Trends Daily",
      handle: "@CryptoTrendsDaily",
      time: "4 days",
      content: "XTZ breaks $7 resistance, signaling a potential rally ahead.",
      hashtags: ["#Tezos", "#XTZ Analysis"],
      image: "/images/us-bitcoin.jpg",
      comments: 55,
      retweets: 10,
      likes: 450,
    },
    {
      id: 10,
      avatar: "/images/user10.jpg",
      username: "Altcoin Forecast",
      handle: "@AltcoinForecast",
      time: "5 days",
      content: "MATIC showing strong support near $2. Looking bullish if it holds.",
      hashtags: ["#Polygon", "#MATIC Analysis"],
      image: "/images/binance.png",
      comments: 40,
      retweets: 7,
      likes: 300,
    },
  ];

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
                <Button variant="outline" size="sm" className="text-white bg-green-400 text-lg">
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
          {posts.map((post) => (
            <div key={post.id} className="rounded-lg border p-4">
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarImage src={post.avatar} />
                    <AvatarFallback>{post.username[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{post.username}</span>
                      <span className="text-sm text-gray-500">{post.handle}</span>
                      <span className="text-sm text-gray-500">• {post.time}</span>
                    </div>
                    <p className="mt-2">{post.content}</p>
                    <div className="mt-2">
                      {post.hashtags.map((hashtag, index) => (
                        <span key={index} className="text-blue-600">{hashtag}</span>
                      ))}
                    </div>
                    <img
                      alt="Post image"
                      className="mt-4 rounded-lg w-full"
                      height="400"
                      src={post.image}
                    />
                    <div className="mt-4 flex items-center gap-6">
                      <div className="flex items-center gap-2 text-gray-500">
                        <ChatBubbleLeftIcon className="h-5 w-5" />
                        <span>{post.comments}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <ArrowPathIcon className="h-5 w-5" />
                        <span>{post.retweets}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500">
                        <HandThumbUpIcon className="h-5 w-5" />
                        <span>{post.likes}</span>
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
                <Button variant="outline" size="sm" className="text-white">
                  Follow
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
