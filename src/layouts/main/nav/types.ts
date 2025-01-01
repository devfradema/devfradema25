import type { Theme, SxProps } from '@mui/material/styles';
import type { ButtonBaseProps } from '@mui/material/ButtonBase';

// ----------------------------------------------------------------------

/**
 * Item
 */
export type NavItemStateProps = {
  open?: boolean;
  active?: boolean;
};

export type NavItemOptionsProps = {
  subItem?: boolean;
  hasChild?: boolean;
  externalLink?: boolean;
};

export type NavItemDataProps = {
  path: string;
  title: string;
  icon?: React.ReactNode;
  children?: {
    subheader: string;
    coverUrl?: string;
    items: { title: string; path: string }[];
  }[];
};

export type NavItemProps = ButtonBaseProps &
  NavItemDataProps &
  NavItemStateProps &
  NavItemOptionsProps;

/**
 * List
 */
export type NavListProps = React.ComponentProps<'li'> & {
  sx?: SxProps<Theme>;
  data: NavItemDataProps;
};

export type NavSubListProps = React.ComponentProps<'li'> & {
  sx?: SxProps<Theme>;
  coverUrl?: string;
  subheader: string;
  items: { title: string; path: string }[];
};

/**
 * Main
 */
export type NavMainProps = {
  sx?: SxProps<Theme>;
  data: NavItemDataProps[];
};
