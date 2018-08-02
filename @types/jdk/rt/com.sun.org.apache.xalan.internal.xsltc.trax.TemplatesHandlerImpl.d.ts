declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace trax {
class TemplatesHandlerImpl implements org.xml.sax.ContentHandler , javax.xml.transform.sax.TemplatesHandler , com.sun.org.apache.xalan.internal.xsltc.compiler.SourceLoader {
    protected constructor(arg0: int, arg1: com.sun.org.apache.xalan.internal.xsltc.trax.TransformerFactoryImpl)
    public getSystemId(): string
    public setSystemId(arg0: java.lang.String | string): void
    public setURIResolver(arg0: javax.xml.transform.URIResolver | javax.xml.transform.URIResolver$$Lambda): void
    public getTemplates(): javax.xml.transform.Templates
    public loadSource(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: com.sun.org.apache.xalan.internal.xsltc.compiler.XSLTC): org.xml.sax.InputSource
    public startDocument(): void
    public endDocument(): void
    public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public endPrefixMapping(arg0: java.lang.String | string): void
    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public characters(arg0: char[], arg1: int, arg2: int): void
    public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
    public skippedEntity(arg0: java.lang.String | string): void
    public setDocumentLocator(arg0: org.xml.sax.Locator): void
    public static class: java.lang.Class<any>
}

class TemplatesHandlerImpl$$Lambda implements org.xml.sax.ContentHandler , javax.xml.transform.sax.TemplatesHandler , com.sun.org.apache.xalan.internal.xsltc.compiler.SourceLoader {
    protected constructor(arg0: int, arg1: com.sun.org.apache.xalan.internal.xsltc.trax.TransformerFactoryImpl)
}

                            }
                        }
                    }
                }
            }
        }
    }
}