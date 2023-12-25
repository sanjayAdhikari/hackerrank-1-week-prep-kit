/*
 * Complete the 'superDigit' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING n
 *  2. INTEGER k
 */
// const getSum = (n: number): number => n.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
//
// const getSuperDigit = (n: number) : number => n <10 ? n : getSuperDigit(getSum(n));
//
// function superDigit(n: string, k: number): number {
//     const p = getSum(parseInt(n)) * k;
//     return getSuperDigit((p));
//
// }

const getSum = (n: string): number => n.split('').reduce((acc, curr) => acc + +curr, 0);

const getSuperDigit = (n: string) : string => n.length < 2 ? n : getSuperDigit(getSum(n).toString());

function superDigit(n: string, k: number): number {
    const p = n.repeat(k);
    return parseInt(getSuperDigit(p));

}
console.log(superDigit('3242380402348023482390483294823948234823482', 999999999999))
