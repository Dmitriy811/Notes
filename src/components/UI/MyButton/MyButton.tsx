import { FC } from 'react'
import { IMyButton } from '../../../interfaces'
import { Button } from './MyButton.styled'

export const MyButton: FC<IMyButton> = ({ children, onClick }) => {
	return <Button onClick={onClick}>{children}</Button>
}
