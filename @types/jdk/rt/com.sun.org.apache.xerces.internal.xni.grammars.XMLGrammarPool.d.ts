declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace xni {
                            namespace grammars {
                                interface XMLGrammarPool {
                                    retrieveInitialGrammarSet(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.xni.grammars.Grammar[]
                                    cacheGrammars(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.grammars.Grammar[]): void
                                    retrieveGrammar(arg0: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription): com.sun.org.apache.xerces.internal.xni.grammars.Grammar
                                    lockPool(): void
                                    unlockPool(): void
                                    clear(): void
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}