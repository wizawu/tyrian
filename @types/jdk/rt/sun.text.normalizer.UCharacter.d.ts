declare namespace sun {
    namespace text {
        namespace normalizer {
            class UCharacter {
                public static readonly MIN_VALUE: int
                public static readonly MAX_VALUE: int
                public static readonly SUPPLEMENTARY_MIN_VALUE: int
                public constructor()
                public static digit(arg0: int, arg1: int): int
                public static getDirection(arg0: int): int
                public static getCodePoint(arg0: char, arg1: char): int
                public static getAge(arg0: int): sun.text.normalizer.VersionInfo
                public static class: java.lang.Class<any>
            }
        }
    }
}