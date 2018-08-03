declare namespace sun {
    namespace text {
        namespace normalizer {
            class RuleCharacterIterator {
                public static readonly DONE: int
                public static readonly PARSE_VARIABLES: int
                public static readonly PARSE_ESCAPES: int
                public static readonly SKIP_WHITESPACE: int
                public constructor(arg0: java.lang.String | string, arg1: sun.text.normalizer.SymbolTable, arg2: java.text.ParsePosition)
                public atEnd(): boolean
                public next(arg0: int): int
                public isEscaped(): boolean
                public inVariable(): boolean
                public getPos(arg0: java.lang.Object): java.lang.Object
                public setPos(arg0: java.lang.Object): void
                public skipIgnored(arg0: int): void
                public lookahead(): string
                public jumpahead(arg0: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}