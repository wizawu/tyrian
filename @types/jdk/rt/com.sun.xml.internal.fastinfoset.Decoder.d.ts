declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    abstract class Decoder implements com.sun.xml.internal.org.jvnet.fastinfoset.FastInfosetParser {
                        public static STRING_INTERNING_SYSTEM_PROPERTY: string
                        public static BUFFER_SIZE_SYSTEM_PROPERTY: string
                        protected _parseFragments: boolean
                        protected _needForceStreamClose: boolean
                        protected _notations: java.util.List
                        protected _unparsedEntities: java.util.List
                        protected _registeredEncodingAlgorithms: java.util.Map
                        protected _v: com.sun.xml.internal.fastinfoset.vocab.ParserVocabulary
                        protected _prefixTable: com.sun.xml.internal.fastinfoset.util.PrefixArray
                        protected _elementNameTable: com.sun.xml.internal.fastinfoset.util.QualifiedNameArray
                        protected _attributeNameTable: com.sun.xml.internal.fastinfoset.util.QualifiedNameArray
                        protected _characterContentChunkTable: com.sun.xml.internal.fastinfoset.util.ContiguousCharArrayArray
                        protected _attributeValueTable: com.sun.xml.internal.fastinfoset.util.StringArray
                        protected _b: int
                        protected _terminate: boolean
                        protected _doubleTerminate: boolean
                        protected _addToTable: boolean
                        protected _integer: int
                        protected _identifier: int
                        protected _bufferSize: int
                        protected _octetBuffer: byte[]
                        protected _octetBufferStart: int
                        protected _octetBufferOffset: int
                        protected _octetBufferEnd: int
                        protected _octetBufferLength: int
                        protected _charBuffer: char[]
                        protected _charBufferLength: int
                        protected _duplicateAttributeVerifier: com.sun.xml.internal.fastinfoset.util.DuplicateAttributeVerifier
                        protected static NISTRING_STRING: int
                        protected static NISTRING_INDEX: int
                        protected static NISTRING_ENCODING_ALGORITHM: int
                        protected static NISTRING_EMPTY_STRING: int
                        protected _prefixIndex: int
                        protected _namespaceNameIndex: int
                        protected constructor()
                        public setStringInterning(arg0: boolean): void
                        public getStringInterning(): boolean
                        public setBufferSize(arg0: int): void
                        public getBufferSize(): int
                        public setRegisteredEncodingAlgorithms(arg0: java.util.Map): void
                        public getRegisteredEncodingAlgorithms(): java.util.Map
                        public setExternalVocabularies(arg0: java.util.Map): void
                        public getExternalVocabularies(): java.util.Map
                        public setParseFragments(arg0: boolean): void
                        public getParseFragments(): boolean
                        public setForceStreamClose(arg0: boolean): void
                        public getForceStreamClose(): boolean
                        public reset(): void
                        public setVocabulary(arg0: com.sun.xml.internal.fastinfoset.vocab.ParserVocabulary): void
                        public setInputStream(arg0: java.io.InputStream): void
                        protected decodeDII(): void
                        protected decodeAdditionalData(): void
                        protected decodeInitialVocabulary(): void
                        protected decodeNotations(): void
                        protected decodeUnparsedEntities(): void
                        protected decodeCharacterEncodingScheme(): string
                        protected decodeVersion(): string
                        protected decodeEIIIndexMedium(): com.sun.xml.internal.fastinfoset.QualifiedName
                        protected decodeEIIIndexLarge(): com.sun.xml.internal.fastinfoset.QualifiedName
                        protected decodeLiteralQualifiedName(arg0: int, arg1: com.sun.xml.internal.fastinfoset.QualifiedName): com.sun.xml.internal.fastinfoset.QualifiedName
                        protected decodeNonIdentifyingStringOnFirstBit(): int
                        protected decodeOctetsOnFifthBitOfNonIdentifyingStringOnFirstBit(arg0: int): void
                        protected decodeOctetsOnSeventhBitOfNonIdentifyingStringOnThirdBit(arg0: int): void
                        protected decodeIdentifyingNonEmptyStringOnFirstBit(arg0: com.sun.xml.internal.fastinfoset.util.StringArray): string
                        protected decodeIdentifyingNonEmptyStringOnFirstBitAsPrefix(arg0: boolean): string
                        protected decodeIdentifyingNonEmptyStringIndexOnFirstBitAsPrefix(arg0: boolean): string
                        protected decodeIdentifyingNonEmptyStringOnFirstBitAsNamespaceName(arg0: boolean): string
                        protected decodeIdentifyingNonEmptyStringIndexOnFirstBitAsNamespaceName(arg0: boolean): string
                        protected decodeNonEmptyOctetStringOnSecondBitAsUtf8String(): string
                        protected decodeNonEmptyOctetStringOnSecondBitAsUtf8CharArray(): void
                        protected decodeNonEmptyOctetStringLengthOnSecondBit(): void
                        protected decodeIntegerIndexOnSecondBit(): int
                        protected decodeHeader(): void
                        protected decodeRestrictedAlphabetAsCharBuffer(): void
                        protected decodeRestrictedAlphabetAsString(): string
                        protected decodeRAOctetsAsString(arg0: char[]): string
                        protected decodeFourBitAlphabetOctetsAsCharBuffer(arg0: char[]): void
                        protected decodeAlphabetOctetsAsCharBuffer(arg0: char[]): void
                        protected decodeUtf8StringAsCharBuffer(): void
                        protected decodeUtf8StringAsCharBuffer(arg0: char[], arg1: int): void
                        protected decodeUtf8StringAsString(): string
                        protected decodeUtf16StringAsCharBuffer(): void
                        protected decodeUtf16StringAsString(): string
                        protected decodeUtf8StringIntoCharBuffer(): void
                        protected decodeUtf8StringIntoCharBuffer(arg0: char[], arg1: int): void
                        protected decodeUtf8NCNameIntoCharBuffer(): void
                        protected createQualifiedNameString(arg0: java.lang.String | string): string
                        protected createQualifiedNameString(arg0: char[], arg1: java.lang.String | string): string
                        protected read(): int
                        protected closeIfRequired(): void
                        protected peek(): int
                        protected peek(arg0: com.sun.xml.internal.fastinfoset.OctetBufferListener | com.sun.xml.internal.fastinfoset.OctetBufferListener$$Lambda): int
                        protected peek2(arg0: com.sun.xml.internal.fastinfoset.OctetBufferListener | com.sun.xml.internal.fastinfoset.OctetBufferListener$$Lambda): int
                        protected _isFastInfosetDocument(): boolean
                        public static isFastInfosetDocument(arg0: java.io.InputStream): boolean
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}