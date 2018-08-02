declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xalan {
                    namespace internal {
                        namespace xsltc {
                            namespace trax {
class TransformerHandlerImpl implements javax.xml.transform.sax.TransformerHandler , org.xml.sax.ext.DeclHandler {
    public constructor(arg0: com.sun.org.apache.xalan.internal.xsltc.trax.TransformerImpl)
    public getSystemId(): string
    public setSystemId(arg0: java.lang.String | string): void
    public getTransformer(): javax.xml.transform.Transformer
    public setResult(arg0: javax.xml.transform.Result): void
    public characters(arg0: char[], arg1: int, arg2: int): void
    public startDocument(): void
    public endDocument(): void
    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public startCDATA(): void
    public endCDATA(): void
    public comment(arg0: char[], arg1: int, arg2: int): void
    public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
    public setDocumentLocator(arg0: org.xml.sax.Locator): void
    public skippedEntity(arg0: java.lang.String | string): void
    public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public endPrefixMapping(arg0: java.lang.String | string): void
    public startDTD(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public endDTD(): void
    public startEntity(arg0: java.lang.String | string): void
    public endEntity(arg0: java.lang.String | string): void
    public unparsedEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string): void
    public notationDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public attributeDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): void
    public elementDecl(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public externalEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public internalEntityDecl(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public reset(): void
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