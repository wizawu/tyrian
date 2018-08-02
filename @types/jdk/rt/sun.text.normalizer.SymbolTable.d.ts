declare namespace sun {
    namespace text {
        namespace normalizer {
            interface SymbolTable {
                SYMBOL_REF: char
                lookup(arg0: java.lang.String | string): char[]
                lookupMatcher(arg0: int): sun.text.normalizer.UnicodeMatcher
                parseReference(arg0: java.lang.String | string, arg1: java.text.ParsePosition, arg2: int): string
            }
        }
    }
}