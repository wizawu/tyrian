declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace io {
class ASCIIReader extends java.io.Reader {
    public static DEFAULT_BUFFER_SIZE: int
    protected fInputStream: java.io.InputStream
    protected fBuffer: byte[]
    public constructor(arg0: java.io.InputStream, arg1: com.sun.org.apache.xerces.internal.util.MessageFormatter | com.sun.org.apache.xerces.internal.util.MessageFormatter$$Lambda, arg2: java.util.Locale)
    public constructor(arg0: java.io.InputStream, arg1: int, arg2: com.sun.org.apache.xerces.internal.util.MessageFormatter | com.sun.org.apache.xerces.internal.util.MessageFormatter$$Lambda, arg3: java.util.Locale)
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