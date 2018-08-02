declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace tools {
class VocabularyGenerator extends org.xml.sax.helpers.DefaultHandler implements org.xml.sax.ext.LexicalHandler {
    protected _serializerVocabulary: com.sun.xml.internal.fastinfoset.vocab.SerializerVocabulary
    protected _parserVocabulary: com.sun.xml.internal.fastinfoset.vocab.ParserVocabulary
    protected _v: com.sun.xml.internal.org.jvnet.fastinfoset.Vocabulary
    protected attributeValueSizeConstraint: int
    protected characterContentChunkSizeContraint: int
    public constructor()
    public constructor(arg0: com.sun.xml.internal.fastinfoset.vocab.SerializerVocabulary)
    public constructor(arg0: com.sun.xml.internal.fastinfoset.vocab.ParserVocabulary)
    public constructor(arg0: com.sun.xml.internal.fastinfoset.vocab.SerializerVocabulary, arg1: com.sun.xml.internal.fastinfoset.vocab.ParserVocabulary)
    public getVocabulary(): com.sun.xml.internal.org.jvnet.fastinfoset.Vocabulary
    public setCharacterContentChunkSizeLimit(arg0: int): void
    public getCharacterContentChunkSizeLimit(): int
    public setAttributeValueSizeLimit(arg0: int): void
    public getAttributeValueSizeLimit(): int
    public startDocument(): void
    public endDocument(): void
    public startPrefixMapping(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public endPrefixMapping(arg0: java.lang.String | string): void
    public startElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: org.xml.sax.Attributes): void
    public endElement(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public characters(arg0: char[], arg1: int, arg2: int): void
    public ignorableWhitespace(arg0: char[], arg1: int, arg2: int): void
    public processingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
    public setDocumentLocator(arg0: org.xml.sax.Locator): void
    public skippedEntity(arg0: java.lang.String | string): void
    public comment(arg0: char[], arg1: int, arg2: int): void
    public startCDATA(): void
    public endCDATA(): void
    public startDTD(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public endDTD(): void
    public startEntity(arg0: java.lang.String | string): void
    public endEntity(arg0: java.lang.String | string): void
    public addToTable(arg0: java.lang.String | string, arg1: java.util.Set, arg2: com.sun.xml.internal.fastinfoset.util.StringIntMap, arg3: com.sun.xml.internal.fastinfoset.util.StringArray): void
    public addToTable(arg0: java.lang.String | string, arg1: java.util.Set, arg2: com.sun.xml.internal.fastinfoset.util.StringIntMap, arg3: com.sun.xml.internal.fastinfoset.util.PrefixArray): void
    public addToCharArrayTable(arg0: com.sun.xml.internal.fastinfoset.util.CharArray): void
    public addToNameTable(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.util.Set, arg4: com.sun.xml.internal.fastinfoset.util.LocalNameQualifiedNamesMap, arg5: com.sun.xml.internal.fastinfoset.util.QualifiedNameArray, arg6: boolean): void
    public static getPrefixFromQualifiedName(arg0: java.lang.String | string): string
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}