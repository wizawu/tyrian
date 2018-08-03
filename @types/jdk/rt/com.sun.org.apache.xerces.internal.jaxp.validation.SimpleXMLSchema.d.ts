declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace jaxp {
                            namespace validation {
                                class SimpleXMLSchema extends com.sun.org.apache.xerces.internal.jaxp.validation.AbstractXMLSchema implements com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool {
                                    public constructor(arg0: com.sun.org.apache.xerces.internal.xni.grammars.Grammar | com.sun.org.apache.xerces.internal.xni.grammars.Grammar$$Lambda)
                                    public retrieveInitialGrammarSet(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.xni.grammars.Grammar[]
                                    public cacheGrammars(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.grammars.Grammar[]): void
                                    public retrieveGrammar(arg0: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription | com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription$$Lambda): com.sun.org.apache.xerces.internal.xni.grammars.Grammar
                                    public lockPool(): void
                                    public unlockPool(): void
                                    public clear(): void
                                    public getGrammarPool(): com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool
                                    public isFullyComposed(): boolean
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