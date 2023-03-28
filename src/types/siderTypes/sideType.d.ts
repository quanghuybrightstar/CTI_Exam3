type IconType = import('react-icons').IconType;

interface ICollapsed {
  collapsed: boolean;
}

interface IMenuItemSider {
  key: string;
  icon?: MenuProps['items'];
  label: string;
  children?: IMenuItemSider[];
}

type GetItemType = (
  key: string,
  icon: MenuProps['items'],
  label: string,
  children?: IMenuItemSider[]
) => IMenuItemSider[];
