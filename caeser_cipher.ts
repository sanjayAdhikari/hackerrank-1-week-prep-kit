
/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */
function caesarCipher(s: string, k: number): string {
    // Write your code here
    // var ascii = s.split('').map((each: string) => each.charCodeAt(0));
    k = k % 26;
    const cipherText: string = s.split('').map((each: string) => {
        let ascii: number = each.charCodeAt(0);
        if(ascii>=65 && ascii <= 90) {
            ascii = ascii + k;
            if(ascii > 90) {
                ascii = (ascii % 91 ) + 65
            }
        }
        else if(ascii>=97 && ascii <= 122) {
            ascii = ascii + k;
            if(ascii> 122) {
                ascii = (ascii % 123 ) + 97
            }

        }

        return String.fromCharCode(ascii);
    }).join('');
    return cipherText;

}
export default caesarCipher;
