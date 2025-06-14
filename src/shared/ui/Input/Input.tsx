import classNames from 'classnames/bind'

import styles from './Input.module.scss'

const cx = classNames.bind(styles)

interface IProps {
  name: string
  className: string
	value: string
	placeholder: string
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
	type?: string
	required?: boolean
	disabled?: boolean
}

export const Input = ({
  name = 'input',
	value,
	placeholder,
	onChange,
	type = 'text',
	required = false,
	disabled = false,
	className,
}: IProps) => {
	return (
		<input
      name={name}
			value={value}
			type={type}
			className={cx('input', 'p-medium', className)}
			placeholder={placeholder}
			onChange={(e) => onChange(e)}
			disabled={disabled}
			required={required}
		/>
	)
}