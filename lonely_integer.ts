// https://www.hackerrank.com/challenges/one-week-preparation-kit-lonely-integer/problem
/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a: number[]): number {
    // Write your code here
    const uniqueNumber: any = new Map();
    for(const each of a) {
        if(!uniqueNumber.has(each)) {
            uniqueNumber.set(each);
        }else {
            uniqueNumber.delete(each);
        }
    }
    const [firstValue] = uniqueNumber.keys();
    return firstValue;
}

export default lonelyinteger;