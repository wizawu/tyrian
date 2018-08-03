declare namespace sun {
    namespace text {
        namespace normalizer {
            abstract class Trie {
                protected static readonly LEAD_INDEX_OFFSET_: int
                protected static readonly INDEX_STAGE_1_SHIFT_: int
                protected static readonly INDEX_STAGE_2_SHIFT_: int
                protected static readonly DATA_BLOCK_LENGTH: int
                protected static readonly INDEX_STAGE_3_MASK_: int
                protected static readonly SURROGATE_BLOCK_BITS: int
                protected static readonly SURROGATE_BLOCK_COUNT: int
                protected static readonly BMP_INDEX_LENGTH: int
                protected static readonly SURROGATE_MASK_: int
                protected m_index_: char[]
                protected m_dataManipulate_: sun.text.normalizer.Trie$DataManipulate
                protected m_dataOffset_: int
                protected m_dataLength_: int
                protected static readonly HEADER_OPTIONS_LATIN1_IS_LINEAR_MASK_: int
                protected static readonly HEADER_SIGNATURE_: int
                protected static readonly HEADER_OPTIONS_INDEX_SHIFT_: int
                protected static readonly HEADER_OPTIONS_DATA_IS_32_BIT_: int
                protected constructor(arg0: java.io.InputStream | java.io.InputStream$$Lambda, arg1: sun.text.normalizer.Trie$DataManipulate | sun.text.normalizer.Trie$DataManipulate$$Lambda)
                protected constructor(arg0: char[], arg1: int, arg2: sun.text.normalizer.Trie$DataManipulate | sun.text.normalizer.Trie$DataManipulate$$Lambda)
                protected abstract getSurrogateOffset(arg0: char, arg1: char): int
                protected abstract getValue(arg0: int): int
                protected abstract getInitialValue(): int
                protected getRawOffset(arg0: int, arg1: char): int
                protected getBMPOffset(arg0: char): int
                protected getLeadOffset(arg0: char): int
                protected getCodePointOffset(arg0: int): int
                protected unserialize(arg0: java.io.InputStream | java.io.InputStream$$Lambda): void
                protected isIntTrie(): boolean
                protected isCharTrie(): boolean
                public static class: java.lang.Class<any>
            }
        }
    }
}