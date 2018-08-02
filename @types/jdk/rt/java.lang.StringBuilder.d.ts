declare namespace java {
    namespace lang {
class StringBuilder extends java.lang.AbstractStringBuilder implements java.io.Serializable , java.lang.CharSequence , java.lang.Appendable {
    public constructor()
    public constructor(arg0: int)
    public constructor(arg0: java.lang.String | string)
    public append(arg0: char[]): java.lang.StringBuilder
    public append(arg0: char[], arg1: int, arg2: int): java.lang.StringBuilder
    public append(arg0: char): java.lang.StringBuilder
    public append(arg0: double): java.lang.StringBuilder
    public append(arg0: float): java.lang.StringBuilder
    public append(arg0: int): java.lang.StringBuilder
    public append(arg0: long): java.lang.StringBuilder
    public append(arg0: java.lang.Object): java.lang.StringBuilder
    public append(arg0: java.lang.String | string): java.lang.StringBuilder
    public append(arg0: boolean): java.lang.StringBuilder
    public capacity(): int
    public charAt(arg0: int): char
    public delete(arg0: int, arg1: int): java.lang.StringBuilder
    public deleteCharAt(arg0: int): java.lang.StringBuilder
    public ensureCapacity(arg0: int): void
    public getChars(arg0: int, arg1: int, arg2: char[], arg3: int): void
    public insert(arg0: int, arg1: char[]): java.lang.StringBuilder
    public insert(arg0: int, arg1: char[], arg2: int, arg3: int): java.lang.StringBuilder
    public insert(arg0: int, arg1: char): java.lang.StringBuilder
    public insert(arg0: int, arg1: double): java.lang.StringBuilder
    public insert(arg0: int, arg1: float): java.lang.StringBuilder
    public insert(arg0: int, arg1: int): java.lang.StringBuilder
    public insert(arg0: int, arg1: long): java.lang.StringBuilder
    public insert(arg0: int, arg1: java.lang.Object): java.lang.StringBuilder
    public insert(arg0: int, arg1: java.lang.String | string): java.lang.StringBuilder
    public insert(arg0: int, arg1: boolean): java.lang.StringBuilder
    public length(): int
    public replace(arg0: int, arg1: int, arg2: java.lang.String | string): java.lang.StringBuilder
    public reverse(): java.lang.StringBuilder
    public setCharAt(arg0: int, arg1: char): void
    public setLength(arg0: int): void
    public substring(arg0: int): string
    public substring(arg0: int, arg1: int): string
    public toString(): string
    public append(arg0: java.lang.StringBuffer): java.lang.StringBuilder
    public subSequence(arg0: int, arg1: int): java.lang.CharSequence
    public indexOf(arg0: java.lang.String | string): int
    public indexOf(arg0: java.lang.String | string, arg1: int): int
    public lastIndexOf(arg0: java.lang.String | string): int
    public lastIndexOf(arg0: java.lang.String | string, arg1: int): int
    public constructor(arg0: java.lang.CharSequence)
    public append(arg0: java.lang.CharSequence): java.lang.StringBuilder
    public append(arg0: java.lang.CharSequence, arg1: int, arg2: int): java.lang.StringBuilder
    public insert(arg0: int, arg1: java.lang.CharSequence): java.lang.StringBuilder
    public insert(arg0: int, arg1: java.lang.CharSequence, arg2: int, arg3: int): java.lang.StringBuilder
    public trimToSize(): void
    public codePointAt(arg0: int): int
    public codePointBefore(arg0: int): int
    public codePointCount(arg0: int, arg1: int): int
    public offsetByCodePoints(arg0: int, arg1: int): int
    public appendCodePoint(arg0: int): java.lang.StringBuilder
    public append(arg0: char): java.lang.Appendable
    public append(arg0: java.lang.CharSequence, arg1: int, arg2: int): java.lang.Appendable
    public append(arg0: java.lang.CharSequence): java.lang.Appendable
    public static class: java.lang.Class<any>
}

    }
}