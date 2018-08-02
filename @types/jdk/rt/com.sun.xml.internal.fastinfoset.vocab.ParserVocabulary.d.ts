declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace vocab {
class ParserVocabulary extends com.sun.xml.internal.fastinfoset.vocab.Vocabulary {
    public static IDENTIFYING_STRING_TABLE_MAXIMUM_ITEMS_PEOPERTY: string
    public static NON_IDENTIFYING_STRING_TABLE_MAXIMUM_ITEMS_PEOPERTY: string
    public static NON_IDENTIFYING_STRING_TABLE_MAXIMUM_CHARACTERS_PEOPERTY: string
    protected static IDENTIFYING_STRING_TABLE_MAXIMUM_ITEMS: int
    protected static NON_IDENTIFYING_STRING_TABLE_MAXIMUM_ITEMS: int
    protected static NON_IDENTIFYING_STRING_TABLE_MAXIMUM_CHARACTERS: int
    public restrictedAlphabet: com.sun.xml.internal.fastinfoset.util.CharArrayArray
    public encodingAlgorithm: com.sun.xml.internal.fastinfoset.util.StringArray
    public namespaceName: com.sun.xml.internal.fastinfoset.util.StringArray
    public prefix: com.sun.xml.internal.fastinfoset.util.PrefixArray
    public localName: com.sun.xml.internal.fastinfoset.util.StringArray
    public otherNCName: com.sun.xml.internal.fastinfoset.util.StringArray
    public otherURI: com.sun.xml.internal.fastinfoset.util.StringArray
    public attributeValue: com.sun.xml.internal.fastinfoset.util.StringArray
    public otherString: com.sun.xml.internal.fastinfoset.util.CharArrayArray
    public characterContentChunk: com.sun.xml.internal.fastinfoset.util.ContiguousCharArrayArray
    public elementName: com.sun.xml.internal.fastinfoset.util.QualifiedNameArray
    public attributeName: com.sun.xml.internal.fastinfoset.util.QualifiedNameArray
    public tables: com.sun.xml.internal.fastinfoset.util.ValueArray[]
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