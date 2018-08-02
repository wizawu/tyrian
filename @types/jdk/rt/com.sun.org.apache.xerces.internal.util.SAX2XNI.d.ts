declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace util {
class SAX2XNI implements org.xml.sax.ContentHandler , com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentSource {
    public constructor(arg0: com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler)
    public setDocumentHandler(arg0: com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler): void
    public getDocumentHandler(): com.sun.org.apache.xerces.internal.xni.XMLDocumentHandler
    public startDocument(): void
    public endDocument(): void
    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public characters(arg0: char[], arg1: int, arg2: int): void
    public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
    public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public endPrefixMapping(arg0: java.lang.String | string): void
    public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public skippedEntity(arg0: java.lang.String | string): void
    public setDocumentLocator(arg0: org.xml.sax.Locator): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}