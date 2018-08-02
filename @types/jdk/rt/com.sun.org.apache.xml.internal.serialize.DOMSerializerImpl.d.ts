declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serialize {
class DOMSerializerImpl implements org.w3c.dom.ls.LSSerializer , org.w3c.dom.DOMConfiguration {
    protected features: short
    protected static NAMESPACES: short
    protected static WELLFORMED: short
    protected static ENTITIES: short
    protected static CDATA: short
    protected static SPLITCDATA: short
    protected static COMMENTS: short
    protected static DISCARDDEFAULT: short
    protected static INFOSET: short
    protected static XMLDECL: short
    protected static NSDECL: short
    protected static DOM_ELEMENT_CONTENT_WHITESPACE: short
    protected static FORMAT_PRETTY_PRINT: short
    public constructor()
    public getDomConfig(): org.w3c.dom.DOMConfiguration
    public setParameter(arg0: java.lang.String | string, arg1: java.lang.Object): void
    public canSetParameter(arg0: java.lang.String | string, arg1: java.lang.Object): boolean
    public getParameterNames(): org.w3c.dom.DOMStringList
    public getParameter(arg0: java.lang.String | string): java.lang.Object
    public writeToString(arg0: org.w3c.dom.Node): string
    public setNewLine(arg0: java.lang.String | string): void
    public getNewLine(): string
    public getFilter(): org.w3c.dom.ls.LSSerializerFilter
    public setFilter(arg0: org.w3c.dom.ls.LSSerializerFilter): void
    public write(arg0: org.w3c.dom.Node, arg1: org.w3c.dom.ls.LSOutput): boolean
    public writeToURI(arg0: org.w3c.dom.Node, arg1: java.lang.String | string): boolean
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}