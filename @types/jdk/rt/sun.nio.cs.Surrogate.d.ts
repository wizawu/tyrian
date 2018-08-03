declare namespace sun {
    namespace nio {
        namespace cs {
            class Surrogate {
                public static readonly MIN_HIGH: char
                public static readonly MAX_HIGH: char
                public static readonly MIN_LOW: char
                public static readonly MAX_LOW: char
                public static readonly MIN: char
                public static readonly MAX: char
                public static readonly UCS4_MIN: int
                public static readonly UCS4_MAX: int
                public static isHigh(arg0: int): boolean
                public static isLow(arg0: int): boolean
                public static is(arg0: int): boolean
                public static neededFor(arg0: int): boolean
                public static high(arg0: int): char
                public static low(arg0: int): char
                public static toUCS4(arg0: char, arg1: char): int
                public static class: java.lang.Class<any>
            }
        }
    }
}