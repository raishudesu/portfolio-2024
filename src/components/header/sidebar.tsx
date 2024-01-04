import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ModeToggle from "./mode-toggle";
import NavMenu from "./nav-menu";

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent onCloseAutoFocus={(event) => event.preventDefault()}>
        <SheetHeader>
          <SheetTitle className="flex justify-center">bnb.dev</SheetTitle>
        </SheetHeader>
        <div className="mt-6 flex flex-col justify-center items-center gap-2">
          <NavMenu />
          <ModeToggle />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
