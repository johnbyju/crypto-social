import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Header() {
    return (
        <header className="border-b">
            <div className="flex h-16 items-center px-4 gap-6">
                <div className="flex items-center gap-2">
                    

                    <span className="text-xl font-bold text-orange-500">CD</span>
                </div>
                <nav className="flex items-center gap-6">
                    <a className="text-sm font-medium hover:underline" href="#">
                        Cryptocurrencies
                    </a>
                    <a className="text-sm font-medium hover:underline" href="#">
                        DexScan
                    </a>
                    <a className="text-sm font-medium hover:underline" href="#">
                        Exchanges
                    </a>
                    <a className="text-sm font-medium hover:underline" href="#">
                        Community
                    </a>
                    <a className="text-sm font-medium hover:underline" href="#">
                        Products
                    </a>
                </nav>
                <div className="ml-auto flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                        <Input
                            className="w-full min-w-[300px] pl-9"
                            placeholder="Search..."
                            type="search"
                        />
                    </div>
                    <Button variant="ghost">Portfolio</Button>
                    <Button variant="ghost">Watchlist</Button>
                    <Button>Log In</Button>
                </div>
            </div>
        </header>
    )
}

