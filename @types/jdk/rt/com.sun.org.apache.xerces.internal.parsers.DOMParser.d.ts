declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace parsers {
class DOMParser extends com.sun.org.apache.xerces.internal.parsers.AbstractDOMParser {
    protected static USE_ENTITY_RESOLVER2: string
    protected static REPORT_WHITESPACE: string
    protected static SYMBOL_TABLE: string
    protected static XMLGRAMMAR_POOL: string
    protected fUseEntityResolver2: boolean
    public constructor(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLParserConfiguration)
    public constructor()
    public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable)
    public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool)
    public parse(arg0: java.lang.String | string): void
    public parse(arg0: org.xml.sax.InputSource): void
    public setEntityResolver(arg0: org.xml.sax.EntityResolver | org.xml.sax.EntityResolver$$Lambda): void
    public getEntityResolver(): org.xml.sax.EntityResolver
    public setErrorHandler(arg0: org.xml.sax.ErrorHandler): void
    public getErrorHandler(): org.xml.sax.ErrorHandler
    public setFeature(arg0: java.lang.String | string, arg1: boolean): void
    public getFeature(arg0: java.lang.String | string): boolean
    public setProperty(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public setProperty0(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public getProperty(arg0: java.lang.String | string): java.lang.Object
    public getXMLParserConfiguration(): com.sun.org.apache.xerces.internal.xni.parser.XMLParserConfiguration
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}