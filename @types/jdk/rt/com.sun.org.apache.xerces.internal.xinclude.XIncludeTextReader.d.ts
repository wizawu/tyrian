declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xinclude {
class XIncludeTextReader {
    public constructor(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource, arg1: com.sun.org.apache.xerces.internal.xinclude.XIncludeHandler, arg2: int)
    public setErrorReporter(arg0: com.sun.org.apache.xerces.internal.impl.XMLErrorReporter): void
    protected getReader(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): java.io.Reader
    protected getEncodingName(arg0: java.io.InputStream): string
    protected consumeBOM(arg0: java.io.InputStream, arg1: java.lang.String | string): string
    protected getEncodingName(arg0: byte[]): string
    public parse(): void
    public setInputSource(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): void
    public close(): void
    protected isValid(arg0: int): boolean
    protected setBufferSize(arg0: int): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}