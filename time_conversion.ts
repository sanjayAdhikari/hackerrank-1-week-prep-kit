
/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s: string): string {
    // Write your code here
    const amPM = s.substr(-2);
    s = s.substring(0, s.length -2);
    const timeArr: any[] = s.split(':');
    timeArr[0] = parseInt(timeArr[0], 10) % 12;
    if(amPM === 'PM') timeArr[0] = (parseInt(timeArr[0], 10) + 12);
    timeArr[0] = timeArr[0].toString().padStart(2, '0');
    return timeArr.join(':');
}
export default timeConversion;