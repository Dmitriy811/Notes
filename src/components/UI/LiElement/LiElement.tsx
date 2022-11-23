import { FC, ReactNode } from 'react'

import { MdOutlineNotes } from 'react-icons/md'
import { SiSharp, SiYoutubegaming } from 'react-icons/si'
import { FiMusic } from 'react-icons/fi'
import { IoLogoJavascript } from 'react-icons/io'
import { DiPython, DiReact } from 'react-icons/di'
import { BsCameraVideoFill, BsTrash2Fill } from 'react-icons/bs'

import { Li } from './LiElement.styled'
import { ILi } from '../../../interfaces'

export const LiElement: FC<ILi> = ({ children, active, ...props }) => {
	let ico: ReactNode | null = null

	switch (children?.toString().toLocaleLowerCase()) {
		case 'notes':
			ico = <MdOutlineNotes />
			break
		case 'music':
			ico = <FiMusic />
			break
		case 'youtube':
			ico = <SiYoutubegaming />
			break
		case 'javascript':
			ico = <IoLogoJavascript />
			break
		case 'react':
			ico = <DiReact />
			break
		case 'python':
			ico = <DiPython />
			break
		case 'games' || 'game':
			ico = <SiYoutubegaming />
			break
		case 'video':
			ico = <BsCameraVideoFill />
			break
		case 'trash':
			ico = <BsTrash2Fill />
			break
		default:
			ico = <SiSharp />
	}

	return (
		<Li active={active} {...props}>
			{ico}
			{children}
		</Li>
	)
}
