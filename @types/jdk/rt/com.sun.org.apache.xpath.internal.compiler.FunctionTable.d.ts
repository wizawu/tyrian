declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xpath {
                    namespace internal {
                        namespace compiler {
                            class FunctionTable {
                                public static readonly FUNC_CURRENT: int
                                public static readonly FUNC_LAST: int
                                public static readonly FUNC_POSITION: int
                                public static readonly FUNC_COUNT: int
                                public static readonly FUNC_ID: int
                                public static readonly FUNC_KEY: int
                                public static readonly FUNC_LOCAL_PART: int
                                public static readonly FUNC_NAMESPACE: int
                                public static readonly FUNC_QNAME: int
                                public static readonly FUNC_GENERATE_ID: int
                                public static readonly FUNC_NOT: int
                                public static readonly FUNC_TRUE: int
                                public static readonly FUNC_FALSE: int
                                public static readonly FUNC_BOOLEAN: int
                                public static readonly FUNC_NUMBER: int
                                public static readonly FUNC_FLOOR: int
                                public static readonly FUNC_CEILING: int
                                public static readonly FUNC_ROUND: int
                                public static readonly FUNC_SUM: int
                                public static readonly FUNC_STRING: int
                                public static readonly FUNC_STARTS_WITH: int
                                public static readonly FUNC_CONTAINS: int
                                public static readonly FUNC_SUBSTRING_BEFORE: int
                                public static readonly FUNC_SUBSTRING_AFTER: int
                                public static readonly FUNC_NORMALIZE_SPACE: int
                                public static readonly FUNC_TRANSLATE: int
                                public static readonly FUNC_CONCAT: int
                                public static readonly FUNC_SUBSTRING: int
                                public static readonly FUNC_STRING_LENGTH: int
                                public static readonly FUNC_SYSTEM_PROPERTY: int
                                public static readonly FUNC_LANG: int
                                public static readonly FUNC_EXT_FUNCTION_AVAILABLE: int
                                public static readonly FUNC_EXT_ELEM_AVAILABLE: int
                                public static readonly FUNC_UNPARSED_ENTITY_URI: int
                                public static readonly FUNC_DOCLOCATION: int
                                public constructor()
                                public installFunction(arg0: java.lang.String | string, arg1: java.lang.Class): int
                                public functionAvailable(arg0: java.lang.String | string): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}