declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace io {
                                class UCSReader extends java.io.Reader {
                                    public static readonly DEFAULT_BUFFER_SIZE: int
                                    public static readonly UCS2LE: short
                                    public static readonly UCS2BE: short
                                    public static readonly UCS4LE: short
                                    public static readonly UCS4BE: short
                                    protected fInputStream: java.io.InputStream
                                    protected fBuffer: byte[]
                                    protected fEncoding: short
                                    public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: short)
                                    public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: int, arg2: short)
                                    public read(): int
                                    public read(arg0: char[], arg1: int, arg2: int): int
                                    public skip(arg0: long): long
                                    public ready(): boolean
                                    public markSupported(): boolean
                                    public mark(arg0: int): void
                                    public reset(): void
                                    public close(): void
                                    public static class: java.lang.Class<any>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}