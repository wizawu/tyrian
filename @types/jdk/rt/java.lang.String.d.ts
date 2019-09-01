declare namespace java {
    namespace lang {
        class String implements java.io.Serializable , java.lang.Comparable<java.lang.String> , java.lang.CharSequence {
            public static readonly CASE_INSENSITIVE_ORDER: java.util.Comparator<java.lang.String>
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: char[])
            public constructor(arg0: char[], arg1: int, arg2: int)
            public constructor(arg0: int[], arg1: int, arg2: int)
            public constructor(arg0: byte[], arg1: int, arg2: int, arg3: int)
            public constructor(arg0: byte[], arg1: int)
            public constructor(arg0: byte[], arg1: int, arg2: int, arg3: java.lang.String | string)
            public constructor(arg0: byte[], arg1: int, arg2: int, arg3: java.nio.charset.Charset)
            public constructor(arg0: byte[], arg1: java.lang.String | string)
            public constructor(arg0: byte[], arg1: java.nio.charset.Charset)
            public constructor(arg0: byte[], arg1: int, arg2: int)
            public constructor(arg0: byte[])
            public constructor(arg0: java.lang.StringBuffer)
            public constructor(arg0: java.lang.StringBuilder)
            public length(): int
            public isEmpty(): boolean
            public charAt(arg0: int): char
            public codePointAt(arg0: int): int
            public codePointBefore(arg0: int): int
            public codePointCount(arg0: int, arg1: int): int
            public offsetByCodePoints(arg0: int, arg1: int): int
            public getChars(arg0: int, arg1: int, arg2: char[], arg3: int): void
            public getBytes(arg0: int, arg1: int, arg2: byte[], arg3: int): void
            public getBytes(arg0: java.lang.String | string): byte[]
            public getBytes(arg0: java.nio.charset.Charset): byte[]
            public getBytes(): byte[]
            public equals(arg0: java.lang.Object): boolean
            public contentEquals(arg0: java.lang.StringBuffer): boolean
            public contentEquals(arg0: java.lang.CharSequence): boolean
            public equalsIgnoreCase(arg0: java.lang.String | string): boolean
            public compareTo(arg0: java.lang.String | string): int
            public compareToIgnoreCase(arg0: java.lang.String | string): int
            public regionMatches(arg0: int, arg1: java.lang.String | string, arg2: int, arg3: int): boolean
            public regionMatches(arg0: boolean, arg1: int, arg2: java.lang.String | string, arg3: int, arg4: int): boolean
            public startsWith(arg0: java.lang.String | string, arg1: int): boolean
            public startsWith(arg0: java.lang.String | string): boolean
            public endsWith(arg0: java.lang.String | string): boolean
            public hashCode(): int
            public indexOf(arg0: int): int
            public indexOf(arg0: int, arg1: int): int
            public lastIndexOf(arg0: int): int
            public lastIndexOf(arg0: int, arg1: int): int
            public indexOf(arg0: java.lang.String | string): int
            public indexOf(arg0: java.lang.String | string, arg1: int): int
            public lastIndexOf(arg0: java.lang.String | string): int
            public lastIndexOf(arg0: java.lang.String | string, arg1: int): int
            public substring(arg0: int): string
            public substring(arg0: int, arg1: int): string
            public subSequence(arg0: int, arg1: int): java.lang.CharSequence
            public concat(arg0: java.lang.String | string): string
            public replace(arg0: char, arg1: char): string
            public matches(arg0: java.lang.String | string): boolean
            public contains(arg0: java.lang.CharSequence): boolean
            public replaceFirst(arg0: java.lang.String | string, arg1: java.lang.String | string): string
            public replaceAll(arg0: java.lang.String | string, arg1: java.lang.String | string): string
            public replace(arg0: java.lang.CharSequence, arg1: java.lang.CharSequence): string
            public split(arg0: java.lang.String | string, arg1: int): java.lang.String[]
            public split(arg0: java.lang.String | string): java.lang.String[]
            public static join(arg0: java.lang.CharSequence, ...arg1: java.lang.CharSequence[]): string
            public static join(arg0: java.lang.CharSequence, arg1: java.lang.Iterable<java.lang.CharSequence>): string
            public toLowerCase(arg0: java.util.Locale): string
            public toLowerCase(): string
            public toUpperCase(arg0: java.util.Locale): string
            public toUpperCase(): string
            public trim(): string
            public toString(): string
            public toCharArray(): char[]
            public static format(arg0: java.lang.String | string, ...arg1: java.lang.Object[]): string
            public static format(arg0: java.util.Locale, arg1: java.lang.String | string, ...arg2: java.lang.Object[]): string
            public static valueOf(arg0: java.lang.Object): string
            public static valueOf(arg0: char[]): string
            public static valueOf(arg0: char[], arg1: int, arg2: int): string
            public static copyValueOf(arg0: char[], arg1: int, arg2: int): string
            public static copyValueOf(arg0: char[]): string
            public static valueOf(arg0: boolean): string
            public static valueOf(arg0: char): string
            public static valueOf(arg0: int): string
            public static valueOf(arg0: long): string
            public static valueOf(arg0: float): string
            public static valueOf(arg0: double): string
            public intern(): string
            public compareTo(arg0: java.lang.Object): int
            public static class: java.lang.Class<any>
        }
    }
}