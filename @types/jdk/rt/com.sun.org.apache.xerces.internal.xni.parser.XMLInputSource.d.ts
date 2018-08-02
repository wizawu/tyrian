declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xni {
                            namespace parser {
class XMLInputSource {
    protected fPublicId: string
    protected fSystemId: string
    protected fBaseSystemId: string
    protected fByteStream: java.io.InputStream
    protected fCharStream: java.io.Reader
    protected fEncoding: string
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
    public constructor(arg0: com.sun.org.apache.xerces.internal.xni.XMLResourceIdentifier)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.io.InputStream, arg4: java.lang.String | string)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.io.Reader, arg4: java.lang.String | string)
    public setPublicId(arg0: java.lang.String | string): void
    public getPublicId(): string
    public setSystemId(arg0: java.lang.String | string): void
    public getSystemId(): string
    public setBaseSystemId(arg0: java.lang.String | string): void
    public getBaseSystemId(): string
    public setByteStream(arg0: java.io.InputStream): void
    public getByteStream(): java.io.InputStream
    public setCharacterStream(arg0: java.io.Reader): void
    public getCharacterStream(): java.io.Reader
    public setEncoding(arg0: java.lang.String | string): void
    public getEncoding(): string
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