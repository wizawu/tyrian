declare namespace sun {
    namespace awt {
        namespace image {
            class PNGFilterInputStream extends java.io.FilterInputStream {
                public underlyingInputStream: java.io.InputStream
                public constructor(arg0: sun.awt.image.PNGImageDecoder, arg1: java.io.InputStream)
                public available(): int
                public markSupported(): boolean
                public read(): int
                public read(arg0: byte[]): int
                public read(arg0: byte[], arg1: int, arg2: int): int
                public skip(arg0: long): long
                public static class: java.lang.Class<any>
            }
        }
    }
}