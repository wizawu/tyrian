declare namespace org {
    namespace w3c {
        namespace dom {
            namespace ls {
                interface LSOutput {
                    getCharacterStream(): java.io.Writer
                    setCharacterStream(arg0: java.io.Writer): void
                    getByteStream(): java.io.OutputStream
                    setByteStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                    getSystemId(): string
                    setSystemId(arg0: java.lang.String | string): void
                    getEncoding(): string
                    setEncoding(arg0: java.lang.String | string): void
                }
            }
        }
    }
}