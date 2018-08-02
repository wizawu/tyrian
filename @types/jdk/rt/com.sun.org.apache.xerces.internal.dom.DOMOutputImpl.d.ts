declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
class DOMOutputImpl implements org.w3c.dom.ls.LSOutput {
    protected fCharStream: java.io.Writer
    protected fByteStream: java.io.OutputStream
    protected fSystemId: string
    protected fEncoding: string
    public constructor()
    public getCharacterStream(): java.io.Writer
    public setCharacterStream(arg0: java.io.Writer | java.io.Writer$$Lambda): void
    public getByteStream(): java.io.OutputStream
    public setByteStream(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
    public getSystemId(): string
    public setSystemId(arg0: java.lang.String | string): void
    public getEncoding(): string
    public setEncoding(arg0: java.lang.String | string): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}