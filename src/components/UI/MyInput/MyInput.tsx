import { FC } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { IMyInput } from '../../../interfaces'
import { Wrapper, Input } from './MyInput.styled'

export const MyInput: FC<IMyInput> = ({ value, setValue }) => {
	return (
		<Wrapper>
			<BiSearchAlt size={'20px'} />
			<Input
				type='text'
				onChange={e => setValue(e.target.value)}
				value={value.toString()}
			/>
		</Wrapper>
	)
}
