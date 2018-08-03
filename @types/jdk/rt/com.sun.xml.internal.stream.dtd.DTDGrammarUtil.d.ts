declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace dtd {
                        class DTDGrammarUtil {
                            protected static readonly SYMBOL_TABLE: string
                            protected static readonly NAMESPACES: string
                            protected fDTDGrammar: com.sun.xml.internal.stream.dtd.nonvalidating.DTDGrammar
                            protected fNamespaces: boolean
                            protected fSymbolTable: com.sun.org.apache.xerces.internal.util.SymbolTable
                            public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable)
                            public constructor(arg0: com.sun.xml.internal.stream.dtd.nonvalidating.DTDGrammar, arg1: com.sun.org.apache.xerces.internal.util.SymbolTable)
                            public constructor(arg0: com.sun.xml.internal.stream.dtd.nonvalidating.DTDGrammar, arg1: com.sun.org.apache.xerces.internal.util.SymbolTable, arg2: com.sun.org.apache.xerces.internal.xni.NamespaceContext)
                            public reset(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager): void
                            public startElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes): void
                            public endElement(arg0: com.sun.org.apache.xerces.internal.xni.QName): void
                            public startCDATA(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                            public endCDATA(arg0: com.sun.org.apache.xerces.internal.xni.Augmentations): void
                            public addDTDDefaultAttrs(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes): void
                            protected handleStartElement(arg0: com.sun.org.apache.xerces.internal.xni.QName, arg1: com.sun.org.apache.xerces.internal.xni.XMLAttributes): void
                            protected handleEndElement(arg0: com.sun.org.apache.xerces.internal.xni.QName): void
                            public isInElementContent(): boolean
                            public isIgnorableWhiteSpace(arg0: com.sun.org.apache.xerces.internal.xni.XMLString): boolean
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}