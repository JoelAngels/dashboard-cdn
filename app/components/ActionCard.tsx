import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ActionCardProps {
  title: string;
  icon: React.ReactNode;
  isHighlighted?: boolean;
}

export function ActionCard({
  title,
  icon,
  isHighlighted = false,
}: ActionCardProps) {
  return (
    <Card
      className={`p-4 w-full transition-all duration-300 hover:shadow-lg ${
        isHighlighted
          ? "bg-green-500 text-white hover:bg-green-600"
          : "hover:bg-gray-50"
      }`}
    >
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <div
          className={`mr-4 p-2 rounded-full ${
            isHighlighted ? "bg-green-400" : "bg-gray-100"
          }`}
        >
          {icon}
        </div>
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {/* You can add additional content here if needed */}
        </div>
      </CardContent>
    </Card>
  );
}
