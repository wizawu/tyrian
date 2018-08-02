declare namespace sun {
    namespace text {
        namespace normalizer {
            class UnicodeSetIterator {
                public static IS_STRING: int
                public codepoint: int
                public codepointEnd: int
                public string: string
                protected endElement: int
                protected nextElement: int
                public constructor(arg0: sun.text.normalizer.UnicodeSet)
                public nextRange(): boolean
                public reset(arg0: sun.text.normalizer.UnicodeSet): void
                public reset(): void
                protected loadRange(arg0: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}