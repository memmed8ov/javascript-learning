export function sade(n) {
    let c = true
    for (let i = 2; i < n - 1; i++) {
        c = c && (n % i !== 0)

        
    }
    return c;
}