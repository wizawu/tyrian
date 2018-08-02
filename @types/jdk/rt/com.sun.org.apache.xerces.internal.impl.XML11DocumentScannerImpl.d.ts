declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
class XML11DocumentScannerImpl extends com.sun.org.apache.xerces.internal.impl.XMLDocumentScannerImpl {
    public constructor()
    protected scanContent(arg0: com.sun.org.apache.xerces.internal.util.XMLStringBuffer): int
    protected scanAttributeValue(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: com.sun.org.apache.xerces.internal.xni.XMLString, arg2: java.lang.String | string, arg3: boolean, arg4: java.lang.String | string, arg5: boolean): boolean
    protected scanPubidLiteral(arg0: com.sun.org.apache.xerces.internal.xni.XMLString): boolean
    protected normalizeWhitespace(arg0: com.sun.org.apache.xerces.internal.xni.XMLString): void
    protected normalizeWhitespace(arg0: com.sun.org.apache.xerces.internal.xni.XMLString, arg1: int): void
    protected isUnchangedByNormalization(arg0: com.sun.org.apache.xerces.internal.xni.XMLString): int
    protected isInvalid(arg0: int): boolean
    protected isInvalidLiteral(arg0: int): boolean
    protected isValidNameChar(arg0: int): boolean
    protected isValidNameStartChar(arg0: int): boolean
    protected isValidNCName(arg0: int): boolean
    protected isValidNameStartHighSurrogate(arg0: int): boolean
    protected versionSupported(arg0: java.lang.String | string): boolean
    protected getVersionNotSupportedKey(): string
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}