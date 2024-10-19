import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ActionCardProps {
  title: string;
  icon: React.ReactNode;
  onSelect: (title: string) => void;
  isSelected: boolean;
}

export function ActionCard({
  title,
  icon,
  onSelect,
  isSelected,
}: ActionCardProps) {
  return (
    <Card
      className={`p-4 max-w-[300px] md:max-w-full transition-all duration-300 hover:shadow-lg cursor-pointer ${
        isSelected ? "bg-green-500 text-white" : "hover:bg-gray-50"
      }`}
      onClick={() => onSelect(title)}
    >
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <div
          className={`mr-4 p-2 rounded-full ${
            isSelected ? "bg-green-400" : "bg-gray-100"
          }
          `}
        >
          {icon}
        </div>
        <CardTitle className="text-lg font-medium" style={{ color: "#282c32" }}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {/* You can add additional content here if needed */}
        </div>
      </CardContent>
    </Card>
  );
}
