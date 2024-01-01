import * as React from "react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const anchors = [
  {
    anchor: "Home",
    link: "top",
  },
  {
    anchor: "About",
    link: "about",
  },
  {
    anchor: "Projects",
    link: "projects",
  },
  {
    anchor: "Contact",
    link: "contact",
  },
];

const NavMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex flex-col md:flex-row">
        {anchors.map(({ anchor, link }, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink
              href={`#${link}`}
              className={`${navigationMenuTriggerStyle()} cursor-pointer transition-none font-semibold `}
            >
              {anchor}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default NavMenu;
