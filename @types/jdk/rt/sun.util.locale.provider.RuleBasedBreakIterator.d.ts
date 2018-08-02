declare namespace sun {
    namespace util {
        namespace locale {
            namespace provider {
                class RuleBasedBreakIterator extends java.text.BreakIterator {
                    protected static IGNORE: byte
                    protected readTables(arg0: java.lang.String | string): void
                    protected readFile(arg0: java.lang.String | string): byte[]
                    public clone(): java.lang.Object
                    public equals(arg0: java.lang.Object): boolean
                    public toString(): string
                    public hashCode(): int
                    public first(): int
                    public last(): int
                    public next(arg0: int): int
                    public next(): int
                    public previous(): int
                    protected static checkOffset(arg0: int, arg1: java.text.CharacterIterator): void
                    public following(arg0: int): int
                    public preceding(arg0: int): int
                    public isBoundary(arg0: int): boolean
                    public current(): int
                    public getText(): java.text.CharacterIterator
                    public setText(arg0: java.text.CharacterIterator): void
                    protected handleNext(): int
                    protected handlePrevious(): int
                    protected lookupCategory(arg0: int): int
                    protected lookupState(arg0: int, arg1: int): int
                    protected lookupBackwardState(arg0: int, arg1: int): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}