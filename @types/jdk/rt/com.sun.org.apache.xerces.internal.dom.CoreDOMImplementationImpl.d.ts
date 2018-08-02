declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace dom {
class CoreDOMImplementationImpl implements org.w3c.dom.DOMImplementation , org.w3c.dom.ls.DOMImplementationLS {
    public constructor()
    public static getDOMImplementation(): org.w3c.dom.DOMImplementation
    public hasFeature(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
    public createDocumentType(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): org.w3c.dom.DocumentType
    public createDocument(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: org.w3c.dom.DocumentType): org.w3c.dom.Document
    public getFeature(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Object
    public createLSParser(arg0: short, arg1: java.lang.String | string): org.w3c.dom.ls.LSParser
    public createLSSerializer(): org.w3c.dom.ls.LSSerializer
    public createLSInput(): org.w3c.dom.ls.LSInput
    protected assignDocumentNumber(): int
    protected assignDocTypeNumber(): int
    public createLSOutput(): org.w3c.dom.ls.LSOutput
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}