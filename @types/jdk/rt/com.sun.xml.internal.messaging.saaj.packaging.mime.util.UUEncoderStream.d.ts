declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace messaging {
                    namespace saaj {
                        namespace packaging {
                            namespace mime {
                                namespace util {
                                    class UUEncoderStream extends java.io.FilterOutputStream {
                                        protected name: string
                                        protected mode: int
                                        public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda)
                                        public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.lang.String | string)
                                        public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.lang.String | string, arg2: int)
                                        public setNameMode(arg0: java.lang.String | string, arg1: int): void
                                        public write(arg0: byte[], arg1: int, arg2: int): void
                                        public write(arg0: byte[]): void
                                        public write(arg0: int): void
                                        public flush(): void
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
}