declare namespace java {
    namespace text {
        interface CharacterIterator extends java.lang.Cloneable {
            DONE: char
            first(): char
            last(): char
            current(): char
            next(): char
            previous(): char
            setIndex(arg0: int): char
            getBeginIndex(): int
            getEndIndex(): int
            getIndex(): int
            clone(): java.lang.Object
        }
    }
}