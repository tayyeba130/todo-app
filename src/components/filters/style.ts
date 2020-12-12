import styled from 'styled-components/macro';

const FiltersStyle = styled.div`
	display: grid;
	grid-template-rows: 50px 50px;
	grid-template-columns: auto 1fr;
	grid-row-gap: 10px;
	position: relative;
	@media (min-width: 576px) {
		grid-template-columns: auto 1fr auto;
		grid-template-rows: 50px;
	}
	> div {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #fff;
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
		}
		@media (min-width: 576px) {
			grid-row: 1;
			grid-column: 2 / 3;
			box-shadow: none;
		}
	}
	.clear-completed {
		justify-content: flex-end;
		border-bottom-right-radius: 5px;
		padding-right: 20px;
	}
	&::before {
		content: '';
		display: block;
		height: 50px;
		width: 100%;
		position: absolute;
		box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	}
`;

export default FiltersStyle;
