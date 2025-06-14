import classnames from "classnames/bind";
import { InputTypes } from './types';

import styles from './Input.module.scss';

interface IProps {
	id?: string;
	name?: string;
	className?: string,
	styleType?: InputTypes
	type?: string,
	disabled?: boolean,
	active? : boolean,
	placeholder?: string,
	value?: string,
}

const cx = classnames.bind(styles);

export const Input = ({
	id,
	name,
	className,
	styleType = 'gray' as InputTypes,
	type,
	disabled,
	active = false,
	placeholder,
	value,
}: IProps) => {
	const classNames = cx(className, styleType, { active: active })
	return (
    <input
      id={id}
      name={name}
      className={classNames}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
    />
	)
}
