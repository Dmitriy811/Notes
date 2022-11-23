import { FC } from 'react'
import uuid from 'react-uuid'

import { ITagList } from '../../interfaces'

import { LiElement } from '../UI/LiElement'
import { Wrapper } from './TagList.styled'

export const TagList: FC<ITagList> = ({
	tags,
	tagActive,
	setTagActive,
	setActiveIdNote,
}) => {
	const setTag = (tag: string) => {
		setTagActive(tag)
		setActiveIdNote(null)
	}

	return (
		<Wrapper>
			<ul>
				{tags.map(tag => (
					<LiElement
						active={tagActive.toLowerCase() === tag.toLowerCase()}
						onClick={() => setTag(tag)}
						key={uuid()}
					>
						{tag}
					</LiElement>
				))}
			</ul>
		</Wrapper>
	)
}
