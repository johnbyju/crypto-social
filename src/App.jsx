import { Header } from "./components/Header";
import { MainContent } from "./components/Main-content";
import { RightSidebar } from "./components/Rightside-bar";
import { Sidebar } from "./components/Sidebar";

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <div className="sticky top-0 w-1/4">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-y-auto h-[calc(100vh-64px)] overflow-hidden">
          <MainContent />
        </div>
        <div className="sticky top-0 w-1/4">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
