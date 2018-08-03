declare namespace sun {
    namespace text {
        abstract class CodePointIterator {
            public static readonly DONE: int
            public constructor()
            public abstract setToStart(): void
            public abstract setToLimit(): void
            public abstract next(): int
            public abstract prev(): int
            public abstract charIndex(): int
            public static create(arg0: char[]): sun.text.CodePointIterator
            public static create(arg0: char[], arg1: int, arg2: int): sun.text.CodePointIterator
            public static create(arg0: java.lang.CharSequence): sun.text.CodePointIterator
            public static create(arg0: java.text.CharacterIterator): sun.text.CodePointIterator
            public static class: java.lang.Class<any>
        }
    }
}