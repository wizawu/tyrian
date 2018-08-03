declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace buffer {
                        abstract class AbstractProcessor extends com.sun.xml.internal.stream.buffer.AbstractCreatorProcessor {
                            protected static readonly STATE_ILLEGAL: int
                            protected static readonly STATE_DOCUMENT: int
                            protected static readonly STATE_DOCUMENT_FRAGMENT: int
                            protected static readonly STATE_ELEMENT_U_LN_QN: int
                            protected static readonly STATE_ELEMENT_P_U_LN: int
                            protected static readonly STATE_ELEMENT_U_LN: int
                            protected static readonly STATE_ELEMENT_LN: int
                            protected static readonly STATE_TEXT_AS_CHAR_ARRAY_SMALL: int
                            protected static readonly STATE_TEXT_AS_CHAR_ARRAY_MEDIUM: int
                            protected static readonly STATE_TEXT_AS_CHAR_ARRAY_COPY: int
                            protected static readonly STATE_TEXT_AS_STRING: int
                            protected static readonly STATE_TEXT_AS_OBJECT: int
                            protected static readonly STATE_COMMENT_AS_CHAR_ARRAY_SMALL: int
                            protected static readonly STATE_COMMENT_AS_CHAR_ARRAY_MEDIUM: int
                            protected static readonly STATE_COMMENT_AS_CHAR_ARRAY_COPY: int
                            protected static readonly STATE_COMMENT_AS_STRING: int
                            protected static readonly STATE_PROCESSING_INSTRUCTION: int
                            protected static readonly STATE_END: int
                            protected static readonly STATE_NAMESPACE_ATTRIBUTE: int
                            protected static readonly STATE_NAMESPACE_ATTRIBUTE_P: int
                            protected static readonly STATE_NAMESPACE_ATTRIBUTE_P_U: int
                            protected static readonly STATE_NAMESPACE_ATTRIBUTE_U: int
                            protected static readonly STATE_ATTRIBUTE_U_LN_QN: int
                            protected static readonly STATE_ATTRIBUTE_P_U_LN: int
                            protected static readonly STATE_ATTRIBUTE_U_LN: int
                            protected static readonly STATE_ATTRIBUTE_LN: int
                            protected static readonly STATE_ATTRIBUTE_U_LN_QN_OBJECT: int
                            protected static readonly STATE_ATTRIBUTE_P_U_LN_OBJECT: int
                            protected static readonly STATE_ATTRIBUTE_U_LN_OBJECT: int
                            protected static readonly STATE_ATTRIBUTE_LN_OBJECT: int
                            protected _buffer: com.sun.xml.internal.stream.buffer.XMLStreamBuffer
                            protected _fragmentMode: boolean
                            protected _stringInterningFeature: boolean
                            protected _treeCount: int
                            protected readonly _qNameBuffer: java.lang.StringBuilder
                            public constructor()
                            protected setBuffer(arg0: com.sun.xml.internal.stream.buffer.XMLStreamBuffer): void
                            protected setBuffer(arg0: com.sun.xml.internal.stream.buffer.XMLStreamBuffer, arg1: boolean): void
                            protected peekStructure(): int
                            protected readStructure(): int
                            protected readEiiState(): int
                            protected static getEIIState(arg0: int): int
                            protected static getNIIState(arg0: int): int
                            protected static getAIIState(arg0: int): int
                            protected readStructure16(): int
                            protected readStructureString(): string
                            protected readContentString(): string
                            protected readContentCharactersCopy(): char[]
                            protected readContentCharactersBuffer(arg0: int): int
                            protected readContentObject(): java.lang.Object
                            protected getQName(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                            protected getPrefixFromQName(arg0: java.lang.String | string): string
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}