declare namespace sun {
    namespace text {
        namespace normalizer {
            abstract class UCharacterIterator implements java.lang.Cloneable {
                public static readonly DONE: int
                protected constructor()
                public static getInstance(arg0: java.lang.String | string): sun.text.normalizer.UCharacterIterator
                public static getInstance(arg0: java.lang.StringBuffer): sun.text.normalizer.UCharacterIterator
                public static getInstance(arg0: java.text.CharacterIterator): sun.text.normalizer.UCharacterIterator
                public abstract current(): int
                public abstract getLength(): int
                public abstract getIndex(): int
                public abstract next(): int
                public nextCodePoint(): int
                public abstract previous(): int
                public abstract setIndex(arg0: int): void
                public abstract getText(arg0: char[], arg1: int): int
                public getText(arg0: char[]): int
                public getText(): string
                public moveIndex(arg0: int): int
                public clone(): java.lang.Object
                public static class: java.lang.Class<any>
            }
        }
    }
}