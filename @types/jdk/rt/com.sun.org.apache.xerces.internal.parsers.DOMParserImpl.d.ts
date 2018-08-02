declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace parsers {
class DOMParserImpl extends com.sun.org.apache.xerces.internal.parsers.AbstractDOMParser implements org.w3c.dom.ls.LSParser , org.w3c.dom.DOMConfiguration {
    protected static NAMESPACES: string
    protected static VALIDATION_FEATURE: string
    protected static XMLSCHEMA: string
    protected static XMLSCHEMA_FULL_CHECKING: string
    protected static DYNAMIC_VALIDATION: string
    protected static NORMALIZE_DATA: string
    protected static DISALLOW_DOCTYPE_DECL_FEATURE: string
    protected static NAMESPACE_GROWTH: string
    protected static TOLERATE_DUPLICATES: string
    protected static SYMBOL_TABLE: string
    protected static PSVI_AUGMENT: string
    protected fNamespaceDeclarations: boolean
    protected fSchemaType: string
    protected fBusy: boolean
    protected static DEBUG: boolean
    public constructor(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLParserConfiguration, arg1: java.lang.String | string)
    public constructor(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLParserConfiguration)
    public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable)
    public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool)
    public reset(): void
    public getDomConfig(): org.w3c.dom.DOMConfiguration
    public getFilter(): org.w3c.dom.ls.LSParserFilter
    public setFilter(arg0: org.w3c.dom.ls.LSParserFilter): void
    public setParameter(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public getParameter(arg0: java.lang.String | string): java.lang.Object
    public canSetParameter(arg0: java.lang.String | string, arg1: java.lang.Object): boolean
    public getParameterNames(): org.w3c.dom.DOMStringList
    public parseURI(arg0: java.lang.String | string): org.w3c.dom.Document
    public parse(arg0: org.w3c.dom.ls.LSInput): org.w3c.dom.Document
    public parseWithContext(arg0: org.w3c.dom.ls.LSInput, arg1: org.w3c.dom.Node, arg2: short): org.w3c.dom.Node
    public getAsync(): boolean
    public getBusy(): boolean
    public abort(): void
    public startElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes, arg2: com.sun.org.apache.xerces.internal.xni.Augmentations): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}