declare namespace java {
    namespace text {
        abstract class BreakIterator implements java.lang.Cloneable {
            public static DONE: int
            protected constructor()
            public clone(): java.lang.Object
            public first(): int
            public last(): int
            public next(arg0: int): int
            public next(): int
            public previous(): int
            public following(arg0: int): int
            public preceding(arg0: int): int
            public isBoundary(arg0: int): boolean
            public current(): int
            public getText(): java.text.CharacterIterator
            public setText(arg0: java.lang.String | string): void
            public setText(arg0: java.text.CharacterIterator): void
            public static getWordInstance(): java.text.BreakIterator
            public static getWordInstance(arg0: java.util.Locale): java.text.BreakIterator
            public static getLineInstance(): java.text.BreakIterator
            public static getLineInstance(arg0: java.util.Locale): java.text.BreakIterator
            public static getCharacterInstance(): java.text.BreakIterator
            public static getCharacterInstance(arg0: java.util.Locale): java.text.BreakIterator
            public static getSentenceInstance(): java.text.BreakIterator
            public static getSentenceInstance(arg0: java.util.Locale): java.text.BreakIterator
            public static getAvailableLocales(): java.util.Locale[]
            public static class: java.lang.Class<any>
        }
    }
}