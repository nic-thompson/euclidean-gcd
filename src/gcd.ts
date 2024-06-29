export function gcd(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const num1 = 48;
const num2 = 18;
console.log(`The GCD of ${num1} and ${num2} is ${gcd(num1, num2)}`);
