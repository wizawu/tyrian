declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serialize {
                            class XMLSerializer extends com.sun.org.apache.xml.internal.serialize.BaseMarkupSerializer {
                                protected static readonly DEBUG: boolean
                                protected fNSBinder: com.sun.org.apache.xerces.internal.util.NamespaceSupport
                                protected fLocalNSBinder: com.sun.org.apache.xerces.internal.util.NamespaceSupport
                                protected fSymbolTable: com.sun.org.apache.xerces.internal.util.SymbolTable
                                protected static readonly PREFIX: string
                                protected fNamespaces: boolean
                                protected fNamespacePrefixes: boolean
                                public constructor()
                                public constructor(arg0: com.sun.org.apache.xml.internal.serialize.OutputFormat)
                                public constructor(arg0: java.io.Writer, arg1: com.sun.org.apache.xml.internal.serialize.OutputFormat)
                                public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: com.sun.org.apache.xml.internal.serialize.OutputFormat)
                                public setOutputFormat(arg0: com.sun.org.apache.xml.internal.serialize.OutputFormat): void
                                public setNamespaces(arg0: boolean): void
                                public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
                                public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public endElementIO(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public startElement(arg0: java.lang.String | string, arg1: org.xml.sax.AttributeList): void
                                public endElement(arg0: java.lang.String | string): void
                                protected startDocument(arg0: java.lang.String | string): void
                                protected serializeElement(arg0: org.w3c.dom.Element): void
                                protected getEntityRef(arg0: int): string
                                protected printEscaped(arg0: java.lang.String | string): void
                                protected printXMLChar(arg0: int): void
                                protected printText(arg0: java.lang.String | string, arg1: boolean, arg2: boolean): void
                                protected printText(arg0: char[], arg1: int, arg2: int, arg3: boolean, arg4: boolean): void
                                protected checkUnboundNamespacePrefixedNode(arg0: org.w3c.dom.Node): void
                                public reset(): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}