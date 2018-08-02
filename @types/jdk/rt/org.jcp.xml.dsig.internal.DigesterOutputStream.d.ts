declare namespace org {
    namespace jcp {
        namespace xml {
            namespace dsig {
                namespace internal {
class DigesterOutputStream extends java.io.OutputStream {
    public constructor(arg0: java.security.MessageDigest)
    public constructor(arg0: java.security.MessageDigest, arg1: boolean)
    public write(arg0: int): void
    public write(arg0: byte[], arg1: int, arg2: int): void
    public getDigestValue(): byte[]
    public getInputStream(): java.io.InputStream
    public close(): void
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}