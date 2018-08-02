declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serializer {
                            interface WriterChain {
                                write(arg0: int): void
                                write(arg0: char[]): void
                                write(arg0: char[], arg1: int, arg2: int): void
                                write(arg0: java.lang.String | string): void
                                write(arg0: java.lang.String | string, arg1: int, arg2: int): void
                                flush(): void
                                close(): void
                                getWriter(): java.io.Writer
                                getOutputStream(): java.io.OutputStream
                            }
                        }
                    }
                }
            }
        }
    }
}