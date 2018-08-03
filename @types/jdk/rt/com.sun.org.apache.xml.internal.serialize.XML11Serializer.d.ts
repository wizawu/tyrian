declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace serialize {
                            class XML11Serializer extends com.sun.org.apache.xml.internal.serialize.XMLSerializer {
                                protected static readonly DEBUG: boolean
                                protected fNSBinder: com.sun.org.apache.xerces.internal.util.NamespaceSupport
                                protected fLocalNSBinder: com.sun.org.apache.xerces.internal.util.NamespaceSupport
                                protected fSymbolTable: com.sun.org.apache.xerces.internal.util.SymbolTable
                                protected fDOML1: boolean
                                protected fNamespaceCounter: int
                                protected static readonly PREFIX: string
                                protected fNamespaces: boolean
                                public constructor()
                                public constructor(arg0: com.sun.org.apache.xml.internal.serialize.OutputFormat)
                                public constructor(arg0: java.io.Writer, arg1: com.sun.org.apache.xml.internal.serialize.OutputFormat)
                                public constructor(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: com.sun.org.apache.xml.internal.serialize.OutputFormat)
                                public characters(arg0: char[], arg1: int, arg2: int): void
                                protected printEscaped(arg0: java.lang.String | string): void
                                protected printCDATAText(arg0: java.lang.String | string): void
                                protected printXMLChar(arg0: int): void
                                protected surrogates(arg0: int, arg1: int): void
                                protected printText(arg0: java.lang.String | string, arg1: boolean, arg2: boolean): void
                                protected printText(arg0: char[], arg1: int, arg2: int, arg3: boolean, arg4: boolean): void
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