const BigInteger = java.math.BigInteger

{
    let start = Date.now()

    let a = BigInteger.valueOf(1)
    let b = BigInteger.valueOf(2)
    for (let i = 0; i < 100000; i++) {
        let c = a.add(b)
        a = b
        b = c
    }

    echo(b.toString().length)
    echo(Date.now() - start + "ms")
}
