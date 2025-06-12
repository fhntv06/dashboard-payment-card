import React, { PropsWithChildren } from 'react';
import classnames from "classnames/bind";
import { IconType } from '../Icon/types';
import { InputTypes } from './types';
// import { Icon } from '../';

import styles from './Input.module.scss';

interface IProps extends PropsWithChildren {
	sizeLeftIcon?: IconType,
	sizeRightIcon?: IconType,
	className?: string,
	styleType?: InputTypes
	type?: string,
	disabled?: boolean,
	onClick?: ((event: React.MouseEvent<HTMLElement>) => void)
	active? : boolean,
}

const cx = classnames.bind(styles);

export const Input = ({
	active = false,
	className,
	styleType = 'gray' as InputTypes,
	type,
	disabled,
	onClick,
}: IProps) => {
	const classNames = cx(className, styleType, { active: active })
	return (
			<input className={classNames} type={type} disabled={disabled} onClick={onClick} />
	)
}
