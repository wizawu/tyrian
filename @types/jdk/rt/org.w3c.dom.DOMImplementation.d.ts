declare namespace org {
    namespace w3c {
        namespace dom {
            interface DOMImplementation {
                hasFeature(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                createDocumentType(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): org.w3c.dom.DocumentType
                createDocument(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: org.w3c.dom.DocumentType): org.w3c.dom.Document
                getFeature(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Object
            }
        }
    }
}