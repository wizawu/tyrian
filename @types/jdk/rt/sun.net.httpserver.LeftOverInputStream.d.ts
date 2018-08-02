declare namespace sun {
    namespace net {
        namespace httpserver {
            abstract class LeftOverInputStream extends java.io.FilterInputStream {
                protected closed: boolean
                protected eof: boolean
                public constructor(arg0: sun.net.httpserver.ExchangeImpl, arg1: java.io.InputStream)
                public isDataBuffered(): boolean
                public close(): void
                public isClosed(): boolean
                public isEOF(): boolean
                protected readImpl(arg0: byte[], arg1: int, arg2: int): int
                public read(): int
                public read(arg0: byte[], arg1: int, arg2: int): int
                public drain(arg0: long): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}