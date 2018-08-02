declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
                            namespace dtd {
class DTDGrammarBucket {
    protected fGrammars: java.util.Map<com.sun.org.apache.xerces.internal.impl.dtd.XMLDTDDescription, com.sun.org.apache.xerces.internal.impl.dtd.DTDGrammar>
    protected fActiveGrammar: com.sun.org.apache.xerces.internal.impl.dtd.DTDGrammar
    protected fIsStandalone: boolean
    public constructor()
    public putGrammar(arg0: com.sun.org.apache.xerces.internal.impl.dtd.DTDGrammar | com.sun.org.apache.xerces.internal.impl.dtd.DTDGrammar$$Lambda): void
    public getGrammar(arg0: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription): com.sun.org.apache.xerces.internal.impl.dtd.DTDGrammar
    public clear(): void
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