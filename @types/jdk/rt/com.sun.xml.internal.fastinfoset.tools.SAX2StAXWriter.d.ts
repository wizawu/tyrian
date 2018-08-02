declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace tools {
class SAX2StAXWriter extends org.xml.sax.helpers.DefaultHandler implements org.xml.sax.ext.LexicalHandler {
    public constructor(arg0: javax.xml.stream.XMLStreamWriter)
    public getWriter(): javax.xml.stream.XMLStreamWriter
    public startDocument(): void
    public endDocument(): void
    public characters(arg0: char[], arg1: int, arg2: int): void
    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public endPrefixMapping(arg0: java.lang.String | string): void
    public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
    public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public setDocumentLocator(arg0: org.xml.sax.Locator): void
    public skippedEntity(arg0: java.lang.String | string): void
    public comment(arg0: char[], arg1: int, arg2: int): void
    public endCDATA(): void
    public endDTD(): void
    public endEntity(arg0: java.lang.String | string): void
    public startCDATA(): void
    public startDTD(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public startEntity(arg0: java.lang.String | string): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}