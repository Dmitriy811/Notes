import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
	
	:root{
		--bg-color-primary: #1e2022;
		--bg-color-secondary: #2c2d2f;
		--bg-color-active: #276ab3;
		--text-color-primary: #a8bcc4;
		--text-color-secondary: #5e5e5e;
		--bg-tag-color: #7a7c7f;
	}

	*{
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	ul{
		list-style: none;
	}

	body{
		width: 100%;
		min-height: 100vh;
		overflow: hidden;

		font-family: -apple-system, BlinkMacSystemFont, 'sans-serif';
		font-size: 1rem;

		background-color: var(--bg-color-primary);
		color: var(--text-color-primary);
	}
`
