declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace txw2 {
                    namespace output {
class Dom2SaxAdapter implements org.xml.sax.ContentHandler , org.xml.sax.ext.LexicalHandler {
    public getCurrentElement(): org.w3c.dom.Element
    public constructor(arg0: org.w3c.dom.Node)
    public constructor()
    public getDOM(): org.w3c.dom.Node
    public startDocument(): void
    public endDocument(): void
    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public characters(arg0: char[], arg1: int, arg2: int): void
    public comment(arg0: char[], arg1: int, arg2: int): void
    public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
    public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public setDocumentLocator(arg0: org.xml.sax.Locator): void
    public skippedEntity(arg0: java.lang.String | string): void
    public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public endPrefixMapping(arg0: java.lang.String | string): void
    public startDTD(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public endDTD(): void
    public startEntity(arg0: java.lang.String | string): void
    public endEntity(arg0: java.lang.String | string): void
    public startCDATA(): void
    public endCDATA(): void
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}