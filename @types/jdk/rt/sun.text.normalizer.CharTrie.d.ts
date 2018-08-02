declare namespace sun {
    namespace text {
        namespace normalizer {
            class CharTrie extends sun.text.normalizer.Trie {
                public constructor(arg0: java.io.InputStream, arg1: sun.text.normalizer.Trie$DataManipulate | sun.text.normalizer.Trie$DataManipulate$$Lambda)
                public constructor(arg0: int, arg1: int, arg2: sun.text.normalizer.Trie$DataManipulate | sun.text.normalizer.Trie$DataManipulate$$Lambda)
                public putIndexData(arg0: sun.text.normalizer.UCharacterProperty): void
                public getCodePointValue(arg0: int): char
                public getLeadValue(arg0: char): char
                public getSurrogateValue(arg0: char, arg1: char): char
                public getTrailValue(arg0: int, arg1: char): char
                protected unserialize(arg0: java.io.InputStream): void
                protected getSurrogateOffset(arg0: char, arg1: char): int
                protected getValue(arg0: int): int
                protected getInitialValue(): int
                public static class: java.lang.Class<any>
            }
        }
    }
}