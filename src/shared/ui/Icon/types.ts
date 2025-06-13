export type IconNames =
  | 'eye'
  | 'eye-close'
  | 'home'
  | 'person'
  | 'sorting-asc'
  | 'sorting-desc'
  | 'arrow-right'
  | 'arrow-left'
  | '' // For skip icon if you need

export type IconType =
  | 'small'
  | 'medium'
  | 'big'
  | 'large'
  | 'custom'
  | 'logo'


export interface IIcon {
  className?: string;
  name: IconNames | string;
  size?: IconType,
}
