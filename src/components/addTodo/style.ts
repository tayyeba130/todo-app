import styled from 'styled-components/macro';

const AddTodoStyle = styled.div`
	background: #fff;
	width: 100%;
	max-width: 325px;
	height: 50px;
	border-radius: 10px;
	display: flex;
	align-items: center;
	@media (min-width: 576px) {
		max-width: 540px;
		height: 65px;
	}
	span {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		border: 1px solid #bababa;
		display: inline-block;
		margin: 0 10px 0 20px;
	}
	input {
		font-size: 14px;
		outline: 0;
		padding: 10px 10px 10px 0;
		height: 100%;
		width: 100%;
		font-family: 'Josefin Sans', sans-serif;
		border: 0;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
		@media (min-width: 576px) {
			font-size: 18px;
		}
	}
`;

export default AddTodoStyle;
