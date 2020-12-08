import styled from 'styled-components/macro';
import { Theme } from '../../contexts/ThemeContext';

const TodoListStyle = styled.div`
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	background: ${(props) =>
		props.theme === Theme.Light ? '#fff' : '#25283c'};
	border-radius: 5px;
	margin-top: 20px;
`;

export default TodoListStyle;
