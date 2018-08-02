declare namespace sun {
    namespace text {
        namespace normalizer {
class UCharacterProperty {
    public m_trie_: sun.text.normalizer.CharTrie
    public m_trieIndex_: char[]
    public m_trieData_: char[]
    public m_trieInitialValue_: int
    public m_unicodeVersion_: sun.text.normalizer.VersionInfo
    public static SRC_PROPSVEC: int
    public static SRC_COUNT: int
    public setIndexData(arg0: sun.text.normalizer.CharTrie$FriendAgent): void
    public getProperty(arg0: int): int
    public static getUnsignedValue(arg0: int): int
    public getAdditional(arg0: int, arg1: int): int
    public getAge(arg0: int): sun.text.normalizer.VersionInfo
    public static getRawSupplementary(arg0: char, arg1: char): int
    public static getInstance(): sun.text.normalizer.UCharacterProperty
    public static isRuleWhiteSpace(arg0: int): boolean
    public upropsvec_addPropertyStarts(arg0: sun.text.normalizer.UnicodeSet): void
    public static class: java.lang.Class<any>
}

        }
    }
}