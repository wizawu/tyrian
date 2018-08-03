declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace vocab {
                        abstract class Vocabulary {
                            public static readonly RESTRICTED_ALPHABET: int
                            public static readonly ENCODING_ALGORITHM: int
                            public static readonly PREFIX: int
                            public static readonly NAMESPACE_NAME: int
                            public static readonly LOCAL_NAME: int
                            public static readonly OTHER_NCNAME: int
                            public static readonly OTHER_URI: int
                            public static readonly ATTRIBUTE_VALUE: int
                            public static readonly OTHER_STRING: int
                            public static readonly CHARACTER_CONTENT_CHUNK: int
                            public static readonly ELEMENT_NAME: int
                            public static readonly ATTRIBUTE_NAME: int
                            protected _hasInitialReadOnlyVocabulary: boolean
                            protected _referencedVocabularyURI: string
                            public constructor()
                            public hasInitialVocabulary(): boolean
                            protected setInitialReadOnlyVocabulary(arg0: boolean): void
                            public hasExternalVocabulary(): boolean
                            public getExternalVocabularyURI(): string
                            protected setExternalVocabularyURI(arg0: java.lang.String | string): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}