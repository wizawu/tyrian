declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace regexp {
                    namespace joni {
                        class Option {
                            public static NONE: int
                            public static IGNORECASE: int
                            public static EXTEND: int
                            public static MULTILINE: int
                            public static SINGLELINE: int
                            public static FIND_LONGEST: int
                            public static FIND_NOT_EMPTY: int
                            public static NEGATE_SINGLELINE: int
                            public static DONT_CAPTURE_GROUP: int
                            public static CAPTURE_GROUP: int
                            public static NOTBOL: int
                            public static NOTEOL: int
                            public static POSIX_REGION: int
                            public static MAXBIT: int
                            public static DEFAULT: int
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