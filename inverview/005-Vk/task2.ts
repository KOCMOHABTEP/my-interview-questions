interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

const todo : TodoPreview = {
    title: 'Clean node',
    completed: true
}

type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};