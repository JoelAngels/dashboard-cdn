import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import SocialAccounts from "../components/SocialAccounts";
import GuideCards from "../card/card";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="flex flex-col items-start">
              <h1 className="text-lg font-semibold md:text-2xl">Hi, Creator</h1>
              <p>Where would you like to start today?</p>
            </div>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-4 lg:gap-6 lg:p-6">
          <div
            className="flex flex-1 rounded-lg mx-auto md:w-full"
            x-chunk="dashboard-02-chunk-1"
          >
            <GuideCards />
          </div>
          <div className="mb-2">
            <SocialAccounts />
          </div>
        </main>
        {/* <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div> */}
      </SidebarInset>
    </SidebarProvider>
  );
}
