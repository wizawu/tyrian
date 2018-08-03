declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace buffer {
                        abstract class AbstractCreatorProcessor {
                            protected static readonly FLAG_DOCUMENT_FRAGMENT: int
                            protected static readonly FLAG_PREFIX: int
                            protected static readonly FLAG_URI: int
                            protected static readonly FLAG_QUALIFIED_NAME: int
                            protected static readonly CONTENT_TYPE_CHAR_ARRAY: int
                            protected static readonly CONTENT_TYPE_CHAR_ARRAY_COPY: int
                            protected static readonly CONTENT_TYPE_STRING: int
                            protected static readonly CONTENT_TYPE_OBJECT: int
                            protected static readonly CHAR_ARRAY_LENGTH_SMALL: int
                            protected static readonly CHAR_ARRAY_LENGTH_MEDIUM: int
                            protected static readonly CHAR_ARRAY_LENGTH_SMALL_SIZE: int
                            protected static readonly CHAR_ARRAY_LENGTH_MEDIUM_SIZE: int
                            protected static readonly VALUE_TYPE_STRING: int
                            protected static readonly VALUE_TYPE_OBJECT: int
                            protected static readonly TYPE_MASK: int
                            protected static readonly T_DOCUMENT: int
                            protected static readonly T_ELEMENT: int
                            protected static readonly T_ATTRIBUTE: int
                            protected static readonly T_NAMESPACE_ATTRIBUTE: int
                            protected static readonly T_TEXT: int
                            protected static readonly T_COMMENT: int
                            protected static readonly T_PROCESSING_INSTRUCTION: int
                            protected static readonly T_UNEXPANDED_ENTITY_REFERENCE: int
                            protected static readonly T_END: int
                            protected static readonly T_DOCUMENT_FRAGMENT: int
                            protected static readonly T_ELEMENT_U_LN_QN: int
                            protected static readonly T_ELEMENT_P_U_LN: int
                            protected static readonly T_ELEMENT_U_LN: int
                            protected static readonly T_ELEMENT_LN: int
                            protected static readonly T_NAMESPACE_ATTRIBUTE_P: int
                            protected static readonly T_NAMESPACE_ATTRIBUTE_P_U: int
                            protected static readonly T_NAMESPACE_ATTRIBUTE_U: int
                            protected static readonly T_ATTRIBUTE_U_LN_QN: int
                            protected static readonly T_ATTRIBUTE_P_U_LN: int
                            protected static readonly T_ATTRIBUTE_U_LN: int
                            protected static readonly T_ATTRIBUTE_LN: int
                            protected static readonly T_ATTRIBUTE_U_LN_QN_OBJECT: int
                            protected static readonly T_ATTRIBUTE_P_U_LN_OBJECT: int
                            protected static readonly T_ATTRIBUTE_U_LN_OBJECT: int
                            protected static readonly T_ATTRIBUTE_LN_OBJECT: int
                            protected static readonly T_TEXT_AS_CHAR_ARRAY: int
                            protected static readonly T_TEXT_AS_CHAR_ARRAY_SMALL: int
                            protected static readonly T_TEXT_AS_CHAR_ARRAY_MEDIUM: int
                            protected static readonly T_TEXT_AS_CHAR_ARRAY_COPY: int
                            protected static readonly T_TEXT_AS_STRING: int
                            protected static readonly T_TEXT_AS_OBJECT: int
                            protected static readonly T_COMMENT_AS_CHAR_ARRAY: int
                            protected static readonly T_COMMENT_AS_CHAR_ARRAY_SMALL: int
                            protected static readonly T_COMMENT_AS_CHAR_ARRAY_MEDIUM: int
                            protected static readonly T_COMMENT_AS_CHAR_ARRAY_COPY: int
                            protected static readonly T_COMMENT_AS_STRING: int
                            protected static readonly T_END_OF_BUFFER: int
                            protected _currentStructureFragment: com.sun.xml.internal.stream.buffer.FragmentedArray<byte[]>
                            protected _structure: byte[]
                            protected _structurePtr: int
                            protected _currentStructureStringFragment: com.sun.xml.internal.stream.buffer.FragmentedArray<java.lang.String[]>
                            protected _structureStrings: java.lang.String[]
                            protected _structureStringsPtr: int
                            protected _currentContentCharactersBufferFragment: com.sun.xml.internal.stream.buffer.FragmentedArray<char[]>
                            protected _contentCharactersBuffer: char[]
                            protected _contentCharactersBufferPtr: int
                            protected _currentContentObjectFragment: com.sun.xml.internal.stream.buffer.FragmentedArray<java.lang.Object[]>
                            protected _contentObjects: java.lang.Object[]
                            protected _contentObjectsPtr: int
                            public constructor()
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}