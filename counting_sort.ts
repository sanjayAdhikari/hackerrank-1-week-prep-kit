// https://www.hackerrank.com/challenges/one-week-preparation-kit-countingsort1/problem
/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr: number[]): number[] {
    // Write your code here
    const results: number[] = Array(100).fill(0);
    console.log(results);
    for(const each of arr) {
        results[each]++;
    }
    return results;

}

export default countingSort;