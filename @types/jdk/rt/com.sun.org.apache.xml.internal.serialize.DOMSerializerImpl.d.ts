declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serialize {
                            class DOMSerializerImpl implements org.w3c.dom.ls.LSSerializer , org.w3c.dom.DOMConfiguration {
                                protected features: short
                                protected static readonly NAMESPACES: short
                                protected static readonly WELLFORMED: short
                                protected static readonly ENTITIES: short
                                protected static readonly CDATA: short
                                protected static readonly SPLITCDATA: short
                                protected static readonly COMMENTS: short
                                protected static readonly DISCARDDEFAULT: short
                                protected static readonly INFOSET: short
                                protected static readonly XMLDECL: short
                                protected static readonly NSDECL: short
                                protected static readonly DOM_ELEMENT_CONTENT_WHITESPACE: short
                                protected static readonly FORMAT_PRETTY_PRINT: short
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