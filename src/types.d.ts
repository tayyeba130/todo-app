type Todo = {
	text: string;
	complete: boolean;
	id: string;
};

type Action = {
	type: string;
	payload: any;
};
