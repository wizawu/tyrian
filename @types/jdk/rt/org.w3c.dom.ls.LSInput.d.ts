declare namespace org {
    namespace w3c {
        namespace dom {
            namespace ls {
interface LSInput {
    getCharacterStream(): java.io.Reader
    setCharacterStream(arg0: java.io.Reader): void
    getByteStream(): java.io.InputStream
    setByteStream(arg0: java.io.InputStream): void
    getStringData(): string
    setStringData(arg0: java.lang.String | string): void
    getSystemId(): string
    setSystemId(arg0: java.lang.String | string): void
    getPublicId(): string
    setPublicId(arg0: java.lang.String | string): void
    getBaseURI(): string
    setBaseURI(arg0: java.lang.String | string): void
    getEncoding(): string
    setEncoding(arg0: java.lang.String | string): void
    getCertifiedText(): boolean
    setCertifiedText(arg0: boolean): void
}

            }
        }
    }
}