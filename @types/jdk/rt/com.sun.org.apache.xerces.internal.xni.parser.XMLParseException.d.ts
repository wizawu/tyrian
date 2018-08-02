declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xni {
                            namespace parser {
                                class XMLParseException extends com.sun.org.apache.xerces.internal.xni.XNIException {
                                    protected fPublicId: string
                                    protected fLiteralSystemId: string
                                    protected fExpandedSystemId: string
                                    protected fBaseSystemId: string
                                    protected fLineNumber: int
                                    protected fColumnNumber: int
                                    protected fCharacterOffset: int
                                    public constructor(arg0: com.sun.org.apache.xerces.internal.xni.XMLLocator, arg1: java.lang.String | string)
                                    public constructor(arg0: com.sun.org.apache.xerces.internal.xni.XMLLocator, arg1: java.lang.String | string, arg2: java.lang.Exception)
                                    public getPublicId(): string
                                    public getExpandedSystemId(): string
                                    public getLiteralSystemId(): string
                                    public getBaseSystemId(): string
                                    public getLineNumber(): int
                                    public getColumnNumber(): int
                                    public getCharacterOffset(): int
                                    public toString(): string
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