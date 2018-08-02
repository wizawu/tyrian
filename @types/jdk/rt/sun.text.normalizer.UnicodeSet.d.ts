declare namespace sun {
    namespace text {
        namespace normalizer {
            class UnicodeSet implements sun.text.normalizer.UnicodeMatcher {
                public static MIN_VALUE: int
                public static MAX_VALUE: int
                public static IGNORE_SPACE: int
                public constructor()
                public constructor(arg0: int, arg1: int)
                public constructor(arg0: java.lang.String | string)
                public set(arg0: sun.text.normalizer.UnicodeSet): sun.text.normalizer.UnicodeSet
                public applyPattern(arg0: java.lang.String | string): sun.text.normalizer.UnicodeSet
                public _generatePattern(arg0: java.lang.StringBuffer, arg1: boolean, arg2: boolean): java.lang.StringBuffer
                public add(arg0: int): sun.text.normalizer.UnicodeSet
                public add(arg0: java.lang.String | string): sun.text.normalizer.UnicodeSet
                public complement(arg0: int, arg1: int): sun.text.normalizer.UnicodeSet
                public complement(): sun.text.normalizer.UnicodeSet
                public contains(arg0: int): boolean
                public addAll(arg0: sun.text.normalizer.UnicodeSet): sun.text.normalizer.UnicodeSet
                public retainAll(arg0: sun.text.normalizer.UnicodeSet): sun.text.normalizer.UnicodeSet
                public removeAll(arg0: sun.text.normalizer.UnicodeSet): sun.text.normalizer.UnicodeSet
                public clear(): sun.text.normalizer.UnicodeSet
                public getRangeCount(): int
                public getRangeStart(arg0: int): int
                public getRangeEnd(arg0: int): int
                public applyPropertyAlias(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: sun.text.normalizer.SymbolTable): sun.text.normalizer.UnicodeSet
                public static class: java.lang.Class<any>
            }
        }
    }
}