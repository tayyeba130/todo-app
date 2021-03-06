import styled from 'styled-components/macro';
import { Theme } from '../../contexts/ThemeContext';

const AddTodoStyle = styled.div`
	background: ${(props) =>
		props.theme === Theme.Light ? '#fff' : 'var(--bright-blue-500)'};
	transition: background 300ms ease-in-out;
	width: 100%;
	max-width: 325px;
	height: 50px;
	border-radius: 5px;
	display: flex;
	align-items: center;
	padding: 0 20px;
	@media (min-width: 576px) {
		max-width: 540px;
		height: 65px;
	}
	span {
		width: 20px;
		min-width: 20px;
		height: 20px;
		border-radius: 50%;
		border: 1px solid var(--light-400);
		border-color: ${(props) =>
			props.theme === Theme.Light
				? 'var(--light-400)'
				: 'var(--dark-600)'};
		display: inline-block;
		margin-right: 10px;
	}
	input {
		background-color: transparent;
		font-size: 14px;
		outline: 0;
		padding: 0;
		width: 100%;
		font-family: 'Josefin Sans', sans-serif;
		border: 0;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		margin-bottom: -4px;
		caret-color: var(--bright-blue-300);
		color: ${(props) =>
			props.theme === Theme.Light
				? 'var(--dark-600)'
				: 'var(--light-500)'};
		@media (min-width: 576px) {
			font-size: 18px;
		}
	}
`;

export default AddTodoStyle;
