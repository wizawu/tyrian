declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class SoftJitterCorrector$JitterStream extends java.io.InputStream {
                    public nextReadBuffer(): byte[]
                    public nextWriteBuffer(): byte[]
                    public commit(): void
                    public close(): void
                    public read(): int
                    public fillBuffer(): void
                    public read(arg0: byte[], arg1: int, arg2: int): int
                    public available(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}