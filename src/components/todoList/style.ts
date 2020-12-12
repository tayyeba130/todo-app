import styled from 'styled-components/macro';
import { Theme } from '../../contexts/ThemeContext';

const TodoListStyle = styled.div`
	margin-top: 20px;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	background: ${(props) =>
		props.theme === Theme.Light ? '#fff' : '#25283c'};
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
`;

export default TodoListStyle;
