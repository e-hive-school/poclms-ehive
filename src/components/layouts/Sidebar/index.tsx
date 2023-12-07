import { Home, Lock, Receipt, UserCog2Icon } from 'lucide-react';
import { SidebarContainer, SidebarLink } from './styled';
// type SidebarProps = {};
const sidebarItens = [
  {
    id: 1,
    name: 'Dashboard',
    path: '/',
    icon: Home,
  },
  {
    id: 2,
    name: 'Conta',
    path: '/account',
    icon: UserCog2Icon,
  },
  {
    id: 3,
    name: 'Privacidade',
    path: '/privacy',
    icon: Lock,
  },
  {
    id: 4,
    name: 'Recibos',
    path: '/receipts',
    icon: Receipt,
  },
];

const Sidebar = () => {
  return (
    <SidebarContainer>
      {sidebarItens.map((item) => {
        const Icon = item.icon;
        return (
          <SidebarLink key={item.id} href={item.path}>
            <Icon size={24} />
            <span>{item.name}</span>
          </SidebarLink>
        );
      })}
    </SidebarContainer>
  );
};

export default Sidebar;
