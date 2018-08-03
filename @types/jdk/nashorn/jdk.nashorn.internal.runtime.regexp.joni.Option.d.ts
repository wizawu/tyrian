declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
                        class Option {
                            public static readonly NONE: int
                            public static readonly IGNORECASE: int
                            public static readonly EXTEND: int
                            public static readonly MULTILINE: int
                            public static readonly SINGLELINE: int
                            public static readonly FIND_LONGEST: int
                            public static readonly FIND_NOT_EMPTY: int
                            public static readonly NEGATE_SINGLELINE: int
                            public static readonly DONT_CAPTURE_GROUP: int
                            public static readonly CAPTURE_GROUP: int
                            public static readonly NOTBOL: int
                            public static readonly NOTEOL: int
                            public static readonly POSIX_REGION: int
                            public static readonly MAXBIT: int
                            public static readonly DEFAULT: int
                            public constructor()
                            public static toString(arg0: int): string
                            public static isIgnoreCase(arg0: int): boolean
                            public static isExtend(arg0: int): boolean
                            public static isSingleline(arg0: int): boolean
                            public static isMultiline(arg0: int): boolean
                            public static isFindLongest(arg0: int): boolean
                            public static isFindNotEmpty(arg0: int): boolean
                            public static isFindCondition(arg0: int): boolean
                            public static isNegateSingleline(arg0: int): boolean
                            public static isDontCaptureGroup(arg0: int): boolean
                            public static isCaptureGroup(arg0: int): boolean
                            public static isNotBol(arg0: int): boolean
                            public static isNotEol(arg0: int): boolean
                            public static isPosixRegion(arg0: int): boolean
                            public static isDynamic(arg0: int): boolean
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}