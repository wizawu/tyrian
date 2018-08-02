declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace stream {
                    namespace buffer {
                        abstract class AbstractCreatorProcessor {
                            protected static FLAG_DOCUMENT_FRAGMENT: int
                            protected static FLAG_PREFIX: int
                            protected static FLAG_URI: int
                            protected static FLAG_QUALIFIED_NAME: int
                            protected static CONTENT_TYPE_CHAR_ARRAY: int
                            protected static CONTENT_TYPE_CHAR_ARRAY_COPY: int
                            protected static CONTENT_TYPE_STRING: int
                            protected static CONTENT_TYPE_OBJECT: int
                            protected static CHAR_ARRAY_LENGTH_SMALL: int
                            protected static CHAR_ARRAY_LENGTH_MEDIUM: int
                            protected static CHAR_ARRAY_LENGTH_SMALL_SIZE: int
                            protected static CHAR_ARRAY_LENGTH_MEDIUM_SIZE: int
                            protected static VALUE_TYPE_STRING: int
                            protected static VALUE_TYPE_OBJECT: int
                            protected static TYPE_MASK: int
                            protected static T_DOCUMENT: int
                            protected static T_ELEMENT: int
                            protected static T_ATTRIBUTE: int
                            protected static T_NAMESPACE_ATTRIBUTE: int
                            protected static T_TEXT: int
                            protected static T_COMMENT: int
                            protected static T_PROCESSING_INSTRUCTION: int
                            protected static T_UNEXPANDED_ENTITY_REFERENCE: int
                            protected static T_END: int
                            protected static T_DOCUMENT_FRAGMENT: int
                            protected static T_ELEMENT_U_LN_QN: int
                            protected static T_ELEMENT_P_U_LN: int
                            protected static T_ELEMENT_U_LN: int
                            protected static T_ELEMENT_LN: int
                            protected static T_NAMESPACE_ATTRIBUTE_P: int
                            protected static T_NAMESPACE_ATTRIBUTE_P_U: int
                            protected static T_NAMESPACE_ATTRIBUTE_U: int
                            protected static T_ATTRIBUTE_U_LN_QN: int
                            protected static T_ATTRIBUTE_P_U_LN: int
                            protected static T_ATTRIBUTE_U_LN: int
                            protected static T_ATTRIBUTE_LN: int
                            protected static T_ATTRIBUTE_U_LN_QN_OBJECT: int
                            protected static T_ATTRIBUTE_P_U_LN_OBJECT: int
                            protected static T_ATTRIBUTE_U_LN_OBJECT: int
                            protected static T_ATTRIBUTE_LN_OBJECT: int
                            protected static T_TEXT_AS_CHAR_ARRAY: int
                            protected static T_TEXT_AS_CHAR_ARRAY_SMALL: int
                            protected static T_TEXT_AS_CHAR_ARRAY_MEDIUM: int
                            protected static T_TEXT_AS_CHAR_ARRAY_COPY: int
                            protected static T_TEXT_AS_STRING: int
                            protected static T_TEXT_AS_OBJECT: int
                            protected static T_COMMENT_AS_CHAR_ARRAY: int
                            protected static T_COMMENT_AS_CHAR_ARRAY_SMALL: int
                            protected static T_COMMENT_AS_CHAR_ARRAY_MEDIUM: int
                            protected static T_COMMENT_AS_CHAR_ARRAY_COPY: int
                            protected static T_COMMENT_AS_STRING: int
                            protected static T_END_OF_BUFFER: int
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