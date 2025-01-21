// Типизируй массив

// @ts-ignore
type ArrType = Array< number> | ArrType;

const array: ArrType = [1, [2, [3]], [4,5]];