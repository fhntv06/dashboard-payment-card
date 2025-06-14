import classNames from 'classnames/bind'

import { InputStyleTypes, InputTypes } from './types'

import styles from './Input.module.scss'

const cx = classNames.bind(styles)

interface IProps {
	name?: string
	value: string,
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	type: InputTypes,
	typeStyle: InputStyleTypes,
	placeholder?: string,
	required: boolean
	disabled: boolean
	className?: string
}

export const Input = ({
	name = '',
	type = 'text',
	typeStyle = 'beige',
	placeholder,
	value,
	onChange,
	required = false,
	disabled = false,
	className,
}: IProps) => {
	return (
		<input
      name={name}
			value={value}
			type={type}
			className={cx('input', 'p-medium', typeStyle, className)}
			placeholder={placeholder}
			onChange={(e) => onChange(e)}
			disabled={disabled}
			required={required}
		/>
	)
}
