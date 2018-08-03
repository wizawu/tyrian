declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    abstract class Encoder extends org.xml.sax.helpers.DefaultHandler implements com.sun.xml.internal.org.jvnet.fastinfoset.FastInfosetSerializer {
                        public static CHARACTER_ENCODING_SCHEME_SYSTEM_PROPERTY: string
                        protected static _characterEncodingSchemeSystemDefault: string
                        protected _v: com.sun.xml.internal.fastinfoset.vocab.SerializerVocabulary
                        protected _vData: com.sun.xml.internal.org.jvnet.fastinfoset.VocabularyApplicationData
                        protected _terminate: boolean
                        protected _b: int
                        protected _s: java.io.OutputStream
                        protected _charBuffer: char[]
                        protected _octetBuffer: byte[]
                        protected _octetBufferIndex: int
                        protected _markIndex: int
                        protected minAttributeValueSize: int
                        protected maxAttributeValueSize: int
                        protected attributeValueMapTotalCharactersConstraint: int
                        protected minCharacterContentChunkSize: int
                        protected maxCharacterContentChunkSize: int
                        protected characterContentChunkMapTotalCharactersConstraint: int
                        protected constructor()
                        protected constructor(arg0: boolean)
                        public setIgnoreDTD(arg0: boolean): void
                        public getIgnoreDTD(): boolean
                        public setIgnoreComments(arg0: boolean): void
                        public getIgnoreComments(): boolean
                        public setIgnoreProcesingInstructions(arg0: boolean): void
                        public getIgnoreProcesingInstructions(): boolean
                        public setIgnoreWhiteSpaceTextContent(arg0: boolean): void
                        public getIgnoreWhiteSpaceTextContent(): boolean
                        public setCharacterEncodingScheme(arg0: java.lang.String | string): void
                        public getCharacterEncodingScheme(): string
                        public setRegisteredEncodingAlgorithms(arg0: java.util.Map): void
                        public getRegisteredEncodingAlgorithms(): java.util.Map
                        public getMinCharacterContentChunkSize(): int
                        public setMinCharacterContentChunkSize(arg0: int): void
                        public getMaxCharacterContentChunkSize(): int
                        public setMaxCharacterContentChunkSize(arg0: int): void
                        public getCharacterContentChunkMapMemoryLimit(): int
                        public setCharacterContentChunkMapMemoryLimit(arg0: int): void
                        public isCharacterContentChunkLengthMatchesLimit(arg0: int): boolean
                        public canAddCharacterContentToTable(arg0: int, arg1: com.sun.xml.internal.fastinfoset.util.CharArrayIntMap): boolean
                        public getMinAttributeValueSize(): int
                        public setMinAttributeValueSize(arg0: int): void
                        public getMaxAttributeValueSize(): int
                        public setMaxAttributeValueSize(arg0: int): void
                        public setAttributeValueMapMemoryLimit(arg0: int): void
                        public getAttributeValueMapMemoryLimit(): int
                        public isAttributeValueLengthMatchesLimit(arg0: int): boolean
                        public canAddAttributeToTable(arg0: int): boolean
                        public setExternalVocabulary(arg0: com.sun.xml.internal.org.jvnet.fastinfoset.ExternalVocabulary): void
                        public setVocabularyApplicationData(arg0: com.sun.xml.internal.org.jvnet.fastinfoset.VocabularyApplicationData | com.sun.xml.internal.org.jvnet.fastinfoset.VocabularyApplicationData$$Lambda): void
                        public getVocabularyApplicationData(): com.sun.xml.internal.org.jvnet.fastinfoset.VocabularyApplicationData
                        public reset(): void
                        public setOutputStream(arg0: java.io.OutputStream): void
                        public setVocabulary(arg0: com.sun.xml.internal.fastinfoset.vocab.SerializerVocabulary): void
                        protected encodeHeader(arg0: boolean): void
                        protected encodeInitialVocabulary(): void
                        protected encodeDocumentTermination(): void
                        protected encodeElementTermination(): void
                        protected encodeTermination(): void
                        protected encodeNamespaceAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        protected encodeCharacters(arg0: char[], arg1: int, arg2: int): void
                        protected encodeCharactersNoClone(arg0: char[], arg1: int, arg2: int): void
                        protected encodeNumericFourBitCharacters(arg0: char[], arg1: int, arg2: int, arg3: boolean): void
                        protected encodeDateTimeFourBitCharacters(arg0: char[], arg1: int, arg2: int, arg3: boolean): void
                        protected encodeFourBitCharacters(arg0: int, arg1: int[], arg2: char[], arg3: int, arg4: int, arg5: boolean): void
                        protected encodeAlphabetCharacters(arg0: java.lang.String | string, arg1: char[], arg2: int, arg3: int, arg4: boolean): void
                        protected encodeProcessingInstruction(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        protected encodeDocumentTypeDeclaration(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        protected encodeComment(arg0: char[], arg1: int, arg2: int): void
                        protected encodeCommentNoClone(arg0: char[], arg1: int, arg2: int): void
                        protected encodeElementQualifiedNameOnThirdBit(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                        protected encodeLiteralElementQualifiedNameOnThirdBit(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: com.sun.xml.internal.fastinfoset.util.LocalNameQualifiedNamesMap$Entry): void
                        protected encodeAttributeQualifiedNameOnSecondBit(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                        protected encodeLiteralAttributeQualifiedNameOnSecondBit(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: com.sun.xml.internal.fastinfoset.util.LocalNameQualifiedNamesMap$Entry): boolean
                        protected encodeNonIdentifyingStringOnFirstBit(arg0: java.lang.String | string, arg1: com.sun.xml.internal.fastinfoset.util.StringIntMap, arg2: boolean, arg3: boolean): void
                        protected encodeNonIdentifyingStringOnFirstBit(arg0: java.lang.String | string, arg1: com.sun.xml.internal.fastinfoset.util.CharArrayIntMap, arg2: boolean): void
                        protected encodeNonIdentifyingStringOnFirstBit(arg0: char[], arg1: int, arg2: int, arg3: com.sun.xml.internal.fastinfoset.util.CharArrayIntMap, arg4: boolean, arg5: boolean): void
                        protected encodeNumericNonIdentifyingStringOnFirstBit(arg0: java.lang.String | string, arg1: boolean, arg2: boolean): void
                        protected encodeDateTimeNonIdentifyingStringOnFirstBit(arg0: java.lang.String | string, arg1: boolean, arg2: boolean): void
                        protected encodeNonIdentifyingStringOnFirstBit(arg0: int, arg1: int[], arg2: java.lang.String | string, arg3: boolean, arg4: boolean): void
                        protected encodeNonIdentifyingStringOnFirstBit(arg0: java.lang.String | string, arg1: int, arg2: java.lang.Object): void
                        protected encodeAIIOctetAlgorithmData(arg0: int, arg1: byte[], arg2: int, arg3: int): void
                        protected encodeAIIObjectAlgorithmData(arg0: int, arg1: java.lang.Object, arg2: com.sun.xml.internal.org.jvnet.fastinfoset.EncodingAlgorithm): void
                        protected encodeAIIBuiltInAlgorithmData(arg0: int, arg1: java.lang.Object, arg2: int, arg3: int): void
                        protected encodeNonIdentifyingStringOnThirdBit(arg0: char[], arg1: int, arg2: int, arg3: com.sun.xml.internal.fastinfoset.util.CharArrayIntMap, arg4: boolean, arg5: boolean): void
                        protected encodeNonIdentifyingStringOnThirdBit(arg0: java.lang.String | string, arg1: int, arg2: java.lang.Object): void
                        protected encodeNonIdentifyingStringOnThirdBit(arg0: java.lang.String | string, arg1: int, arg2: byte[], arg3: int, arg4: int): void
                        protected encodeCIIOctetAlgorithmData(arg0: int, arg1: byte[], arg2: int, arg3: int): void
                        protected encodeCIIObjectAlgorithmData(arg0: int, arg1: java.lang.Object, arg2: com.sun.xml.internal.org.jvnet.fastinfoset.EncodingAlgorithm): void
                        protected encodeCIIBuiltInAlgorithmData(arg0: int, arg1: java.lang.Object, arg2: int, arg3: int): void
                        protected encodeCIIBuiltInAlgorithmDataAsCDATA(arg0: char[], arg1: int, arg2: int): void
                        protected encodeIdentifyingNonEmptyStringOnFirstBit(arg0: java.lang.String | string, arg1: com.sun.xml.internal.fastinfoset.util.StringIntMap): void
                        protected encodeNonEmptyOctetStringOnSecondBit(arg0: java.lang.String | string): void
                        protected encodeNonZeroOctetStringLengthOnSecondBit(arg0: int): void
                        protected encodeNonEmptyCharacterStringOnFifthBit(arg0: java.lang.String | string): void
                        protected encodeNonEmptyCharacterStringOnFifthBit(arg0: char[], arg1: int, arg2: int): void
                        protected encodeNonZeroOctetStringLengthOnFifthBit(arg0: int): void
                        protected encodeNonEmptyCharacterStringOnSeventhBit(arg0: char[], arg1: int, arg2: int): void
                        protected encodeNonEmptyFourBitCharacterStringOnSeventhBit(arg0: int[], arg1: char[], arg2: int, arg3: int): void
                        protected encodeNonEmptyFourBitCharacterString(arg0: int[], arg1: char[], arg2: int, arg3: int, arg4: int): void
                        protected encodeNonEmptyNBitCharacterStringOnSeventhBit(arg0: java.lang.String | string, arg1: char[], arg2: int, arg3: int): void
                        protected encodeNonZeroOctetStringLengthOnSenventhBit(arg0: int): void
                        protected encodeNonZeroIntegerOnSecondBitFirstBitOne(arg0: int): void
                        protected encodeNonZeroIntegerOnSecondBitFirstBitZero(arg0: int): void
                        protected encodeNonZeroIntegerOnThirdBit(arg0: int): void
                        protected encodeNonZeroIntegerOnFourthBit(arg0: int): void
                        protected encodeNonEmptyUTF8StringAsOctetString(arg0: int, arg1: java.lang.String | string, arg2: int[]): void
                        protected encodeNonEmptyUTF8StringAsOctetString(arg0: int, arg1: char[], arg2: int, arg3: int, arg4: int[]): void
                        protected encodeNonZeroOctetStringLength(arg0: int, arg1: int, arg2: int[]): void
                        protected encodeNonZeroInteger(arg0: int, arg1: int, arg2: int[]): void
                        protected mark(): void
                        protected resetMark(): void
                        protected hasMark(): boolean
                        protected write(arg0: int): void
                        protected write(arg0: byte[], arg1: int): void
                        protected write(arg0: byte[], arg1: int, arg2: int): void
                        protected encodeUTF8String(arg0: java.lang.String | string): int
                        protected encodeUTF8String(arg0: char[], arg1: int, arg2: int): int
                        protected encodeUtf16String(arg0: java.lang.String | string): int
                        protected encodeUtf16String(arg0: char[], arg1: int, arg2: int): int
                        public static getPrefixFromQualifiedName(arg0: java.lang.String | string): string
                        public static isWhiteSpace(arg0: char[], arg1: int, arg2: int): boolean
                        public static isWhiteSpace(arg0: java.lang.String | string): boolean
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}