declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
class XMLNSDocumentScannerImpl extends com.sun.org.apache.xerces.internal.impl.XMLDocumentScannerImpl {
    protected fBindNamespaces: boolean
    protected fPerformValidation: boolean
    protected fNotAddNSDeclAsAttribute: boolean
    public constructor()
    public reset(arg0: com.sun.org.apache.xerces.internal.impl.PropertyManager): void
    public reset(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager): void
    public next(): int
    public setDTDValidator(arg0: com.sun.org.apache.xerces.internal.impl.dtd.XMLDTDValidatorFilter): void
    protected scanStartElement(): boolean
    protected scanAttribute(arg0: com.sun.org.apache.xerces.internal.util.XMLAttributesImpl): void
    protected createContentDriver(): com.sun.org.apache.xerces.internal.impl.XMLDocumentFragmentScannerImpl$Driver
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}