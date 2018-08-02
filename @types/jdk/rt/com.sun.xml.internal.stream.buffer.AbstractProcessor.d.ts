declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace buffer {
abstract class AbstractProcessor extends com.sun.xml.internal.stream.buffer.AbstractCreatorProcessor {
    protected static STATE_ILLEGAL: int
    protected static STATE_DOCUMENT: int
    protected static STATE_DOCUMENT_FRAGMENT: int
    protected static STATE_ELEMENT_U_LN_QN: int
    protected static STATE_ELEMENT_P_U_LN: int
    protected static STATE_ELEMENT_U_LN: int
    protected static STATE_ELEMENT_LN: int
    protected static STATE_TEXT_AS_CHAR_ARRAY_SMALL: int
    protected static STATE_TEXT_AS_CHAR_ARRAY_MEDIUM: int
    protected static STATE_TEXT_AS_CHAR_ARRAY_COPY: int
    protected static STATE_TEXT_AS_STRING: int
    protected static STATE_TEXT_AS_OBJECT: int
    protected static STATE_COMMENT_AS_CHAR_ARRAY_SMALL: int
    protected static STATE_COMMENT_AS_CHAR_ARRAY_MEDIUM: int
    protected static STATE_COMMENT_AS_CHAR_ARRAY_COPY: int
    protected static STATE_COMMENT_AS_STRING: int
    protected static STATE_PROCESSING_INSTRUCTION: int
    protected static STATE_END: int
    protected static STATE_NAMESPACE_ATTRIBUTE: int
    protected static STATE_NAMESPACE_ATTRIBUTE_P: int
    protected static STATE_NAMESPACE_ATTRIBUTE_P_U: int
    protected static STATE_NAMESPACE_ATTRIBUTE_U: int
    protected static STATE_ATTRIBUTE_U_LN_QN: int
    protected static STATE_ATTRIBUTE_P_U_LN: int
    protected static STATE_ATTRIBUTE_U_LN: int
    protected static STATE_ATTRIBUTE_LN: int
    protected static STATE_ATTRIBUTE_U_LN_QN_OBJECT: int
    protected static STATE_ATTRIBUTE_P_U_LN_OBJECT: int
    protected static STATE_ATTRIBUTE_U_LN_OBJECT: int
    protected static STATE_ATTRIBUTE_LN_OBJECT: int
    protected _buffer: com.sun.xml.internal.stream.buffer.XMLStreamBuffer
    protected _fragmentMode: boolean
    protected _stringInterningFeature: boolean
    protected _treeCount: int
    protected _qNameBuffer: java.lang.StringBuilder
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