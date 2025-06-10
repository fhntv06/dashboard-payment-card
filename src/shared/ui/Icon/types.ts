export type IconNames =
    | 'eye'
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
