declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
class XML11NSDocumentScannerImpl extends com.sun.org.apache.xerces.internal.impl.XML11DocumentScannerImpl {
    protected fBindNamespaces: boolean
    protected fPerformValidation: boolean
    public constructor()
    public setDTDValidator(arg0: com.sun.org.apache.xerces.internal.impl.dtd.XMLDTDValidatorFilter): void
    protected scanStartElement(): boolean
    protected scanStartElementName(): void
    protected scanStartElementAfterName(): boolean
    protected scanAttribute(arg0: com.sun.org.apache.xerces.internal.util.XMLAttributesImpl): void
    protected scanEndElement(): int
    public reset(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager): void
    protected createContentDriver(): com.sun.org.apache.xerces.internal.impl.XMLDocumentFragmentScannerImpl$Driver
    public next(): int
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}