import styled from 'styled-components/macro';

const TodoListStyle = styled.div`
	margin-top: 20px;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	> div.todo-list {
		li:first-child {
			border-top-left-radius: 5px;
			border-top-right-radius: 5px;
		}
	}
`;

export default TodoListStyle;
