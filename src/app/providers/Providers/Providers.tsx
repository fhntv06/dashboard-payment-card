import React from 'react'
import { Provider } from 'react-redux'
import { ModalProvider, NotificationProvider} from '../'

import store from '../../store'

interface IProps {
	children: React.ReactNode
}

export const Providers = ({ children }: IProps) => {
	return (
		<Provider store={store}>
			<NotificationProvider>
				<ModalProvider>
					{children}
				</ModalProvider>
			</NotificationProvider>
		</Provider>
	)
}
