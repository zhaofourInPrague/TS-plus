function sum(a: number,b: number): number {
    return 1;
}

// ReturnType是一个内置的功能 infer猜测
type ReturnType2<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

type returnT = ReturnType<typeof sum>;
const s: returnT = 1;