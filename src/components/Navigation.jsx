import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

const menuStyling =
  "flex justify-center items-center bg-slate-900 text-white h-16";
const menuItemsStyling = "hover:text-gray-800 p-3 hover:bg-gray-200";

const Navigation = () => (
  <NavigationMenu className={menuStyling}>
    <NavigationMenuList>
      <NavigationMenuItem className={menuItemsStyling}>
        <a href="/">
          <NavigationMenuLink>Home</NavigationMenuLink>
        </a>
      </NavigationMenuItem>
      <NavigationMenuItem className={menuItemsStyling}>
        <a href="/about">
          <NavigationMenuLink>About</NavigationMenuLink>
        </a>
      </NavigationMenuItem>
      <NavigationMenuItem className={menuItemsStyling}>
        <a href="/blog">
          <NavigationMenuLink>Blog</NavigationMenuLink>
        </a>
      </NavigationMenuItem>
      <NavigationMenuItem className={menuItemsStyling}>
        <a href="/tags">
          <NavigationMenuLink>Tags</NavigationMenuLink>
        </a>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);

export default Navigation;
