declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace vocab {
                        class ParserVocabulary extends com.sun.xml.internal.fastinfoset.vocab.Vocabulary {
                            public static readonly IDENTIFYING_STRING_TABLE_MAXIMUM_ITEMS_PEOPERTY: string
                            public static readonly NON_IDENTIFYING_STRING_TABLE_MAXIMUM_ITEMS_PEOPERTY: string
                            public static readonly NON_IDENTIFYING_STRING_TABLE_MAXIMUM_CHARACTERS_PEOPERTY: string
                            protected static readonly IDENTIFYING_STRING_TABLE_MAXIMUM_ITEMS: int
                            protected static readonly NON_IDENTIFYING_STRING_TABLE_MAXIMUM_ITEMS: int
                            protected static readonly NON_IDENTIFYING_STRING_TABLE_MAXIMUM_CHARACTERS: int
                            public readonly restrictedAlphabet: com.sun.xml.internal.fastinfoset.util.CharArrayArray
                            public readonly encodingAlgorithm: com.sun.xml.internal.fastinfoset.util.StringArray
                            public readonly namespaceName: com.sun.xml.internal.fastinfoset.util.StringArray
                            public readonly prefix: com.sun.xml.internal.fastinfoset.util.PrefixArray
                            public readonly localName: com.sun.xml.internal.fastinfoset.util.StringArray
                            public readonly otherNCName: com.sun.xml.internal.fastinfoset.util.StringArray
                            public readonly otherURI: com.sun.xml.internal.fastinfoset.util.StringArray
                            public readonly attributeValue: com.sun.xml.internal.fastinfoset.util.StringArray
                            public readonly otherString: com.sun.xml.internal.fastinfoset.util.CharArrayArray
                            public readonly characterContentChunk: com.sun.xml.internal.fastinfoset.util.ContiguousCharArrayArray
                            public readonly elementName: com.sun.xml.internal.fastinfoset.util.QualifiedNameArray
                            public readonly attributeName: com.sun.xml.internal.fastinfoset.util.QualifiedNameArray
                            public readonly tables: com.sun.xml.internal.fastinfoset.util.ValueArray[]
                            protected _readOnlyVocabulary: com.sun.xml.internal.fastinfoset.vocab.SerializerVocabulary
                            public constructor()
                            public constructor(arg0: com.sun.xml.internal.org.jvnet.fastinfoset.Vocabulary)
                            public setInitialVocabulary(arg0: com.sun.xml.internal.fastinfoset.vocab.ParserVocabulary, arg1: boolean): void
                            public setReferencedVocabulary(arg0: java.lang.String | string, arg1: com.sun.xml.internal.fastinfoset.vocab.ParserVocabulary, arg2: boolean): void
                            public clear(): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}