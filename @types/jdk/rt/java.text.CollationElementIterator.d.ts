declare namespace java {
    namespace text {
        class CollationElementIterator {
            public static readonly NULLORDER: int
            public reset(): void
            public next(): int
            public previous(): int
            public static primaryOrder(arg0: int): int
            public static secondaryOrder(arg0: int): short
            public static tertiaryOrder(arg0: int): short
            public setOffset(arg0: int): void
            public getOffset(): int
            public getMaxExpansion(arg0: int): int
            public setText(arg0: java.lang.String | string): void
            public setText(arg0: java.text.CharacterIterator): void
            public static class: java.lang.Class<any>
        }
    }
}