declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
class DOMErrorImpl implements org.w3c.dom.DOMError {
    public fSeverity: short
    public fMessage: string
    public fLocator: com.sun.org.apache.xerces.internal.dom.DOMLocatorImpl
    public fException: java.lang.Exception
    public fType: string
    public fRelatedData: java.lang.Object
    public constructor()
    public constructor(arg0: short, arg1: com.sun.org.apache.xerces.internal.xni.parser.XMLParseException)
    public getSeverity(): short
    public getMessage(): string
    public getLocation(): org.w3c.dom.DOMLocator
    public getRelatedException(): java.lang.Object
    public reset(): void
    public getType(): string
    public getRelatedData(): java.lang.Object
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}