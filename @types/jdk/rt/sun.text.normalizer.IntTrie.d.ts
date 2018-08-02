declare namespace sun {
    namespace text {
        namespace normalizer {
            class IntTrie extends sun.text.normalizer.Trie {
                public constructor(arg0: java.io.InputStream, arg1: sun.text.normalizer.Trie$DataManipulate | sun.text.normalizer.Trie$DataManipulate$$Lambda)
                public getCodePointValue(arg0: int): int
                public getLeadValue(arg0: char): int
                public getTrailValue(arg0: int, arg1: char): int
                protected unserialize(arg0: java.io.InputStream): void
                protected getSurrogateOffset(arg0: char, arg1: char): int
                protected getValue(arg0: int): int
                protected getInitialValue(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}