import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function SearchBar() {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
      <Input placeholder="部活・サークル名、大学名で検索" className="pl-10" />
    </div>
  );
}
