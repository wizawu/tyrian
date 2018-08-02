declare namespace sun {
    namespace text {
        namespace normalizer {
            abstract class UCharacterIterator implements java.lang.Cloneable {
                public static DONE: int
                protected constructor()
                public static getInstance(arg0: java.lang.String | string): sun.text.normalizer.UCharacterIterator
                public static getInstance(arg0: java.lang.StringBuffer): sun.text.normalizer.UCharacterIterator
                public static getInstance(arg0: java.text.CharacterIterator): sun.text.normalizer.UCharacterIterator
                public current(): int
                public getLength(): int
                public getIndex(): int
                public next(): int
                public nextCodePoint(): int
                public previous(): int
                public setIndex(arg0: int): void
                public getText(arg0: char[], arg1: int): int
                public getText(arg0: char[]): int
                public getText(): string
                public moveIndex(arg0: int): int
                public clone(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}