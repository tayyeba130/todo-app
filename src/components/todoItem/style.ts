import styled from 'styled-components/macro';
import { Theme } from '../../contexts/ThemeContext';

const TodoItemStyle = styled.li`
	border-bottom: 1px solid #e6e5e9;
	border-color: ${(props) =>
		props.theme === Theme.Light ? '#e6e5e9' : '#404041'};
	height: 50px;
	list-style-type: none;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${(props) =>
		props.theme === Theme.Light ? '#fff' : 'var(--bright-blue-500)'};
	transition: background 300ms ease-in-out, border-color 300ms ease-in-out;
	padding: 0 20px;
	label {
		color: ${(props) =>
			props.theme === Theme.Light ? 'var(--light-600)' : '#bebebe'};
		display: flex;
		align-items: flex-end;
		cursor: pointer;
		input {
			display: none;
		}
		span:last-child {
			user-select: none;
		}
		span.circle {
			width: 20px;
			height: 20px;
			border-radius: 50%;
			display: inline-block;
			margin-right: 20px;
			cursor: pointer;
			background: rgb(87, 221, 255);
			background-image: linear-gradient(
				to right bottom,
				#47daff,
				#7b8bff,
				#c058f3
			);
			border: 0;
			text-align: center;
			line-height: 20px;
		}
		span.circle.not-completed {
			background-image: none;
			background-color: transparent;
			border: 1px solid var(--light-400);
			border-color: ${(props) =>
				props.theme === Theme.Light
					? 'var(--light-400)'
					: 'var(--dark-600)'};
			&:hover {
				background-image: linear-gradient(
					to right bottom,
					#47daff,
					#7b8bff,
					#c058f3
				);
				border: 0;
				display: flex;
				align-items: center;
				justify-content: center;
				&::before {
					content: '';
					width: calc(100% - 2px);
					height: calc(100% - 2px);
					border-radius: 50%;
					display: block;
					background-color: ${(props) =>
						props.theme === Theme.Light
							? '#fff'
							: 'var(--bright-blue-500)'};
				}
			}
		}
		&.complete {
			text-decoration: line-through;
			color: var(--light-500);
		}
	}
	button.delete {
		all: unset;
		cursor: pointer;
		img {
			filter: invert(1);
		}
	}
	@media (min-width: 576px) {
		height: 60px;
	}
	&.item-enter {
		opacity: 0;
	}
	&.item-enter-active {
		opacity: 1;
		transition: opacity 200ms ease-in;
	}
	&.item-exit {
		opacity: 1;
	}
	&.item-exit-active {
		opacity: 0;
		transition: opacity 200ms ease-in;
	}
`;

export default TodoItemStyle;
