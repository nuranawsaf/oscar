interface LinkProps {
  id: number;
  title: string;
  href: string;
}

export const links: LinkProps[] = [
  {
    id: 1,
    title: 'Home',
    href: '/',
  },
  {
    id: 2,
    title: 'Services',
    href: '/services',
  },
  {
    id: 3,
    title: 'Companies we represent',
    href: '/companies',
  },
  {
    id: 4,
    title: 'Contact',
    href: '/contact',
  },
];
