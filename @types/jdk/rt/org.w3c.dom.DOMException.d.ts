declare namespace org {
    namespace w3c {
        namespace dom {
            class DOMException extends java.lang.RuntimeException {
                public code: short
                public static readonly INDEX_SIZE_ERR: short
                public static readonly DOMSTRING_SIZE_ERR: short
                public static readonly HIERARCHY_REQUEST_ERR: short
                public static readonly WRONG_DOCUMENT_ERR: short
                public static readonly INVALID_CHARACTER_ERR: short
                public static readonly NO_DATA_ALLOWED_ERR: short
                public static readonly NO_MODIFICATION_ALLOWED_ERR: short
                public static readonly NOT_FOUND_ERR: short
                public static readonly NOT_SUPPORTED_ERR: short
                public static readonly INUSE_ATTRIBUTE_ERR: short
                public static readonly INVALID_STATE_ERR: short
                public static readonly SYNTAX_ERR: short
                public static readonly INVALID_MODIFICATION_ERR: short
                public static readonly NAMESPACE_ERR: short
                public static readonly INVALID_ACCESS_ERR: short
                public static readonly VALIDATION_ERR: short
                public static readonly TYPE_MISMATCH_ERR: short
                public constructor(arg0: short, arg1: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
        }
    }
}