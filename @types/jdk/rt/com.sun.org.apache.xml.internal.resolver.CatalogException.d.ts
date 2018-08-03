declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xml {
                    namespace internal {
                        namespace resolver {
                            class CatalogException extends java.lang.Exception {
                                public static readonly WRAPPER: int
                                public static readonly INVALID_ENTRY: int
                                public static readonly INVALID_ENTRY_TYPE: int
                                public static readonly NO_XML_PARSER: int
                                public static readonly UNKNOWN_FORMAT: int
                                public static readonly UNPARSEABLE: int
                                public static readonly PARSE_FAILED: int
                                public static readonly UNENDED_COMMENT: int
                                public constructor(arg0: int, arg1: java.lang.String | string)
                                public constructor(arg0: int)
                                public constructor(arg0: java.lang.Exception)
                                public constructor(arg0: java.lang.String | string, arg1: java.lang.Exception)
                                public getMessage(): string
                                public getException(): java.lang.Exception
                                public getExceptionType(): int
                                public toString(): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}