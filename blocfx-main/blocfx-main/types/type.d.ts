export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  hidden?: boolean;
};
export type MainNavItem = NavItem;

export type Menu = {
  mainNav: MainNavItem[];
};
