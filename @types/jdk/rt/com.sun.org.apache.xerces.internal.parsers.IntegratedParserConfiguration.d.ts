declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace parsers {
class IntegratedParserConfiguration extends com.sun.org.apache.xerces.internal.parsers.StandardParserConfiguration {
    protected fNamespaceScanner: com.sun.org.apache.xerces.internal.impl.XMLNSDocumentScannerImpl
    protected fNonNSScanner: com.sun.org.apache.xerces.internal.impl.XMLDocumentScannerImpl
    protected fNonNSDTDValidator: com.sun.org.apache.xerces.internal.impl.dtd.XMLDTDValidator
    public constructor()
    public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable)
    public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool)
    public constructor(arg0: com.sun.org.apache.xerces.internal.util.SymbolTable, arg1: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool, arg2: com.sun.org.apache.xerces.internal.xni.parser.XMLComponentManager)
    protected configurePipeline(): void
    protected createDocumentScanner(): com.sun.org.apache.xerces.internal.xni.parser.XMLDocumentScanner
    protected createDTDValidator(): com.sun.org.apache.xerces.internal.impl.dtd.XMLDTDValidator
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}