declare namespace jdk {
    namespace internal {
        namespace org {
            namespace xml {
                namespace sax {
                    class InputSource {
                        public constructor()
                        public constructor(arg0: java.lang.String | string)
                        public constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda)
                        public constructor(arg0: java.io.Reader)
                        public setPublicId(arg0: java.lang.String | string): void
                        public getPublicId(): string
                        public setSystemId(arg0: java.lang.String | string): void
                        public getSystemId(): string
                        public setByteStream(arg0: java.io.InputStream | java.io.InputStream$$Lambda): void
                        public getByteStream(): java.io.InputStream
                        public setEncoding(arg0: java.lang.String | string): void
                        public getEncoding(): string
                        public setCharacterStream(arg0: java.io.Reader): void
                        public getCharacterStream(): java.io.Reader
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}