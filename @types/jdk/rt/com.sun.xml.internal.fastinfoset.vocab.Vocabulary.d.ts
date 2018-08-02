declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace vocab {
abstract class Vocabulary {
    public static RESTRICTED_ALPHABET: int
    public static ENCODING_ALGORITHM: int
    public static PREFIX: int
    public static NAMESPACE_NAME: int
    public static LOCAL_NAME: int
    public static OTHER_NCNAME: int
    public static OTHER_URI: int
    public static ATTRIBUTE_VALUE: int
    public static OTHER_STRING: int
    public static CHARACTER_CONTENT_CHUNK: int
    public static ELEMENT_NAME: int
    public static ATTRIBUTE_NAME: int
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