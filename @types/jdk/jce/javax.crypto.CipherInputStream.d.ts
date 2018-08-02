declare namespace javax {
    namespace crypto {
class CipherInputStream extends java.io.FilterInputStream {
    public constructor(arg0: java.io.InputStream, arg1: javax.crypto.Cipher)
    protected constructor(arg0: java.io.InputStream)
    public read(): int
    public read(arg0: byte[]): int
    public read(arg0: byte[], arg1: int, arg2: int): int
    public skip(arg0: long): long
    public available(): int
    public close(): void
    public markSupported(): boolean
    public static class: java.lang.Class<any>
}

    }
}