import styled from 'styled-components/macro';
import { Theme } from '../../contexts/ThemeContext';

const FiltersStyle = styled.div`
	display: grid;
	grid-template-rows: 50px 50px;
	grid-template-columns: auto 1fr;
	grid-row-gap: 10px;
	position: relative;
	background: ${(props) =>
		props.theme === Theme.Light ? '#fff' : 'var(--bright-blue-500)'};
	transition: background 300ms ease-in-out;
	color: var(--light-500);
	@media (min-width: 576px) {
		grid-template-columns: auto 1fr auto;
		grid-template-rows: 50px;
		border-bottom-right-radius: 5px;
		border-bottom-left-radius: 5px;
	}
	> div {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	button {
		all: unset;
		cursor: pointer;
		z-index: 1;
	}
	.items-left {
		border-bottom-left-radius: 5px;
		padding-left: 20px;
	}
	.filters {
		grid-row: 2;
		grid-column: 1 / -1;
		padding: 0 20px;
		border-radius: 5px;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
		button {
			margin: 0 10px;
			color: var(--light-600);
		}
		button.selected {
			color: var(--bright-blue-300);
		}
		button:hover {
			color: ${(props) =>
				props.theme === Theme.Light
					? 'var(--bright-blue-500)'
					: 'var(--light-400)'};
		}
		@media (min-width: 576px) {
			grid-row: 1;
			grid-column: 2 / 3;
			box-shadow: none;
			border-radius: 0;
		}
	}
	.clear-completed {
		justify-content: flex-end;
		border-bottom-right-radius: 5px;
		padding-right: 20px;
		&:hover button {
			color: ${(props) =>
				props.theme === Theme.Light
					? 'var(--light-600)'
					: 'var(--light-400)'};
		}
	}
	&::before {
		content: '';
		display: block;
		height: 50px;
		width: 100%;
		position: absolute;
		box-shadow: ${(props) =>
			props.theme === Theme.Light
				? 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
				: 'var(--bright-blue-400) 0px 8px 24px'};
		transition: box-shadow 300ms ease-in-out;
	}
`;

export default FiltersStyle;
