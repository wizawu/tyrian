declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace util {
                            class XMLGrammarPoolImpl implements com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarPool {
                                protected static TABLE_SIZE: int
                                protected fGrammars: com.sun.org.apache.xerces.internal.util.XMLGrammarPoolImpl$Entry[]
                                protected fPoolIsLocked: boolean
                                protected fGrammarCount: int
                                public constructor()
                                public constructor(arg0: int)
                                public retrieveInitialGrammarSet(arg0: java.lang.String | string): com.sun.org.apache.xerces.internal.xni.grammars.Grammar[]
                                public cacheGrammars(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.xni.grammars.Grammar[]): void
                                public retrieveGrammar(arg0: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription | com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription$$Lambda): com.sun.org.apache.xerces.internal.xni.grammars.Grammar
                                public putGrammar(arg0: com.sun.org.apache.xerces.internal.xni.grammars.Grammar | com.sun.org.apache.xerces.internal.xni.grammars.Grammar$$Lambda): void
                                public getGrammar(arg0: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription | com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription$$Lambda): com.sun.org.apache.xerces.internal.xni.grammars.Grammar
                                public removeGrammar(arg0: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription | com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription$$Lambda): com.sun.org.apache.xerces.internal.xni.grammars.Grammar
                                public containsGrammar(arg0: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription | com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription$$Lambda): boolean
                                public lockPool(): void
                                public unlockPool(): void
                                public clear(): void
                                public equals(arg0: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription | com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription$$Lambda, arg1: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription | com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription$$Lambda): boolean
                                public hashCode(arg0: com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription | com.sun.org.apache.xerces.internal.xni.grammars.XMLGrammarDescription$$Lambda): int
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}