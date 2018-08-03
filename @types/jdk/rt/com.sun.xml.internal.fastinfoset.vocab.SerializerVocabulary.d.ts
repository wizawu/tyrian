declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace vocab {
                        class SerializerVocabulary extends com.sun.xml.internal.fastinfoset.vocab.Vocabulary {
                            public readonly restrictedAlphabet: com.sun.xml.internal.fastinfoset.util.StringIntMap
                            public readonly encodingAlgorithm: com.sun.xml.internal.fastinfoset.util.StringIntMap
                            public readonly namespaceName: com.sun.xml.internal.fastinfoset.util.StringIntMap
                            public readonly prefix: com.sun.xml.internal.fastinfoset.util.StringIntMap
                            public readonly localName: com.sun.xml.internal.fastinfoset.util.StringIntMap
                            public readonly otherNCName: com.sun.xml.internal.fastinfoset.util.StringIntMap
                            public readonly otherURI: com.sun.xml.internal.fastinfoset.util.StringIntMap
                            public readonly attributeValue: com.sun.xml.internal.fastinfoset.util.StringIntMap
                            public readonly otherString: com.sun.xml.internal.fastinfoset.util.CharArrayIntMap
                            public readonly characterContentChunk: com.sun.xml.internal.fastinfoset.util.CharArrayIntMap
                            public readonly elementName: com.sun.xml.internal.fastinfoset.util.LocalNameQualifiedNamesMap
                            public readonly attributeName: com.sun.xml.internal.fastinfoset.util.LocalNameQualifiedNamesMap
                            public readonly tables: com.sun.xml.internal.fastinfoset.util.KeyIntMap[]
                            protected _useLocalNameAsKey: boolean
                            protected _readOnlyVocabulary: com.sun.xml.internal.fastinfoset.vocab.SerializerVocabulary
                            public constructor()
                            public constructor(arg0: com.sun.xml.internal.org.jvnet.fastinfoset.Vocabulary, arg1: boolean)
                            public getReadOnlyVocabulary(): com.sun.xml.internal.fastinfoset.vocab.SerializerVocabulary
                            protected setReadOnlyVocabulary(arg0: com.sun.xml.internal.fastinfoset.vocab.SerializerVocabulary, arg1: boolean): void
                            public setInitialVocabulary(arg0: com.sun.xml.internal.fastinfoset.vocab.SerializerVocabulary, arg1: boolean): void
                            public setExternalVocabulary(arg0: java.lang.String | string, arg1: com.sun.xml.internal.fastinfoset.vocab.SerializerVocabulary, arg2: boolean): void
                            public clear(): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}