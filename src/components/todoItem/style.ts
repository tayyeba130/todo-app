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
	label {
		color: ${(props) =>
			props.theme === Theme.Light ? '#4d4e59' : '#bebebe'};
		input {
			display: none;
		}
		span.circle {
			width: 20px;
			height: 20px;
			border: 1px solid #33394b;
			border-radius: 50%;
			display: inline-block;
			margin: 0 20px;
		}
	}
	@media (min-width: 576px) {
		height: 60px;
	}
`;

export default TodoItemStyle;
