import React, { PropsWithChildren } from 'react';
import classnames from "classnames/bind";
import { IconType, IconNames } from '../Icon/types';
import { ButtonTypes } from './types';
import { Icon } from '../';

import styles from './Button.module.scss';

interface IProps extends PropsWithChildren {
	sizeIcons?: IconType,
	sizeLeftIcon?: IconType,
	sizeRightIcon?: IconType,
	className?: string,
	type?: ButtonTypes
	iconLeftName?: IconNames,
	iconRightName?: IconNames
	disabled?: boolean,
	onClick?: ((event: React.MouseEvent<HTMLElement>) => void)
	active? : boolean,
	href?: string
}

const cx = classnames.bind(styles);

export const Button = ({
	active = false,
	sizeIcons,
	sizeLeftIcon = 'medium',
	sizeRightIcon = 'medium',
	className,
	type = 'none' as ButtonTypes,
	iconLeftName,
	iconRightName,
	disabled,
	onClick,
	href = '',
	children
}: IProps) => {
	const content = (
		<>
			{iconLeftName && <Icon className={cx('icon__left')} name={iconLeftName} size={sizeIcons || sizeLeftIcon} />}
			<p className={cx('p-reg')}>{children}</p>
			{iconRightName && <Icon className={cx('icon__right')} name={iconRightName} size={sizeIcons || sizeRightIcon} />}
		</>
	)
	const classNames = cx(className, type, { active: active })

	const onClickHandler = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
		if (onClick) {
			event.preventDefault()
			onClick(event)
		}
	}

	return (
		href
			? <a href={href} className={classNames} onClick={onClickHandler}>{content}</a>
			: <button className={cx('button', classNames)} disabled={disabled} onClick={onClickHandler}>{content}</button>
	)
}
