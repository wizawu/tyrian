declare namespace sun {
    namespace nio {
        namespace cs {
            class Surrogate {
                public static MIN_HIGH: char
                public static MAX_HIGH: char
                public static MIN_LOW: char
                public static MAX_LOW: char
                public static MIN: char
                public static MAX: char
                public static UCS4_MIN: int
                public static UCS4_MAX: int
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