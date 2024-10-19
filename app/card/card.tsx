"use client";
import { Ticket, Mail, FileText, Link } from "lucide-react";
import { ActionCard } from "../components/ActionCard";
import { useState } from "react";

export const description =
  "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image.";

export default function Cardss() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardSelect = (title: string) => {
    setSelectedCard(selectedCard === title ? null : title);
  };
  return (
    <div className="flex w-full flex-col">
      <main className="flex flex-col gap-4 p-2 md:gap-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <ActionCard
            title="Set up your link in bio"
            icon={<Link href="" className="h-5 w-5" />}
            isSelected={selectedCard === "Set up your link in bio"}
            onSelect={handleCardSelect}
          />
          <ActionCard
            title="Create a media kit"
            icon={<Ticket className="h-5 w-5" />}
            isSelected={selectedCard === "Create a media kit"}
            onSelect={handleCardSelect}
          />
          <ActionCard
            title="Send an email"
            icon={<Mail className="h-5 w-5" />}
            isSelected={selectedCard === "Send an email"}
            onSelect={handleCardSelect}
          />
          <ActionCard
            title="Generate an invoice"
            icon={<FileText className="h-5 w-5" />}
            isSelected={selectedCard === "Generate an invoice"}
            onSelect={handleCardSelect}
          />
        </div>
      </main>
    </div>
  );
}
// <div className="flex min-h-screen w-full flex-col">
//   <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8">
//     <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
//       <Card className="flex items-center" x-chunk="dashboard-01-chunk-0">
//         <div className="flex items-center rounded-md ml-10">
//           <div
//             className="rounded-lg p-2 mr-3"
//             style={{ background: "#f5fbfd" }}
//           >
//             <ArrowUpRight className="text-black" size={35} />
//           </div>
//           <div
//             className="items-center space-y-2 ml-2"
//             style={{ color: "#292d32" }}
//           >
//             <p className="text-[15px]">Set up your </p>
//             <p className="text-[15px] text-nowrap">link in bio</p>
//           </div>
//         </div>
//       </Card>
//       <Card className="flex items-center" x-chunk="dashboard-01-chunk-1">
//         <div className="flex items-center rounded-md ml-10">
//           <div
//             className="rounded-lg p-2 mr-3"
//             style={{ background: "#f5fbfd" }}
//           >
//             <ArrowUpRight className="text-black" size={35} />
//           </div>
//           <div
//             className="items-center space-y-2 ml-2"
//             style={{ color: "#292d32" }}
//           >
//             <p className="text-xl">Create a media kit</p>
//           </div>
//         </div>
//       </Card>
//       <Card x-chunk="dashboard-01-chunk-2">
//         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//           {/* <CardTitle className="text-sm font-medium">
//             Send an email
//           </CardTitle> */}
//           <CreditCard className="h-4 w-4 text-muted-foreground" />
//         </CardHeader>
//         <CardContent>
//           <div className="text-2xl font-bold">Send an email</div>
//           <p className="text-xs text-muted-foreground">
//             +19% from last month
//           </p>
//         </CardContent>
//       </Card>
//       <Card x-chunk="dashboard-01-chunk-3">
//         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
//           <CardTitle className="text-sm font-medium">Active Now</CardTitle>
//           <Activity className="h-4 w-4 text-muted-foreground" />
//         </CardHeader>
//         <CardContent>
//           <div className="text-2xl font-bold">+573</div>
//           <p className="text-xs text-muted-foreground">
//             +201 since last hour
//           </p>
//         </CardContent>
//       </Card>
//     </div>
//   </main>
// </div>
