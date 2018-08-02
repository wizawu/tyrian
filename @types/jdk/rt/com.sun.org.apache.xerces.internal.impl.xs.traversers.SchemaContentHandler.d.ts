declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace xs {
                                namespace traversers {
class SchemaContentHandler implements org.xml.sax.ContentHandler {
    public constructor()
    public getDocument(): org.w3c.dom.Document
    public setDocumentLocator(arg0: org.xml.sax.Locator): void
    public startDocument(): void
    public endDocument(): void
    public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public endPrefixMapping(arg0: java.lang.String | string): void
    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public characters(arg0: char[], arg1: int, arg2: int): void
    public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
    public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public skippedEntity(arg0: java.lang.String | string): void
    public reset(arg0: com.sun.org.apache.xerces.internal.impl.xs.opti.SchemaDOMParser, arg1: com.sun.org.apache.xerces.internal.util.SymbolTable, arg2: boolean, arg3: boolean): void
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
}