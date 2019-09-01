declare namespace java {
    namespace lang {
        abstract class AbstractStringBuilder implements java.lang.Appendable , java.lang.CharSequence {
            public length(): int
            public capacity(): int
            public ensureCapacity(arg0: int): void
            public trimToSize(): void
            public setLength(arg0: int): void
            public charAt(arg0: int): char
            public codePointAt(arg0: int): int
            public codePointBefore(arg0: int): int
            public codePointCount(arg0: int, arg1: int): int
            public offsetByCodePoints(arg0: int, arg1: int): int
            public getChars(arg0: int, arg1: int, arg2: char[], arg3: int): void
            public setCharAt(arg0: int, arg1: char): void
            public append(arg0: java.lang.Object): java.lang.AbstractStringBuilder
            public append(arg0: java.lang.String | string): java.lang.AbstractStringBuilder
            public append(arg0: java.lang.StringBuffer): java.lang.AbstractStringBuilder
            public append(arg0: java.lang.CharSequence): java.lang.AbstractStringBuilder
            public append(arg0: java.lang.CharSequence, arg1: int, arg2: int): java.lang.AbstractStringBuilder
            public append(arg0: char[]): java.lang.AbstractStringBuilder
            public append(arg0: char[], arg1: int, arg2: int): java.lang.AbstractStringBuilder
            public append(arg0: boolean): java.lang.AbstractStringBuilder
            public append(arg0: char): java.lang.AbstractStringBuilder
            public append(arg0: int): java.lang.AbstractStringBuilder
            public append(arg0: long): java.lang.AbstractStringBuilder
            public append(arg0: float): java.lang.AbstractStringBuilder
            public append(arg0: double): java.lang.AbstractStringBuilder
            public delete(arg0: int, arg1: int): java.lang.AbstractStringBuilder
            public appendCodePoint(arg0: int): java.lang.AbstractStringBuilder
            public deleteCharAt(arg0: int): java.lang.AbstractStringBuilder
            public replace(arg0: int, arg1: int, arg2: java.lang.String | string): java.lang.AbstractStringBuilder
            public substring(arg0: int): string
            public subSequence(arg0: int, arg1: int): java.lang.CharSequence
            public substring(arg0: int, arg1: int): string
            public insert(arg0: int, arg1: char[], arg2: int, arg3: int): java.lang.AbstractStringBuilder
            public insert(arg0: int, arg1: java.lang.Object): java.lang.AbstractStringBuilder
            public insert(arg0: int, arg1: java.lang.String | string): java.lang.AbstractStringBuilder
            public insert(arg0: int, arg1: char[]): java.lang.AbstractStringBuilder
            public insert(arg0: int, arg1: java.lang.CharSequence): java.lang.AbstractStringBuilder
            public insert(arg0: int, arg1: java.lang.CharSequence, arg2: int, arg3: int): java.lang.AbstractStringBuilder
            public insert(arg0: int, arg1: boolean): java.lang.AbstractStringBuilder
            public insert(arg0: int, arg1: char): java.lang.AbstractStringBuilder
            public insert(arg0: int, arg1: int): java.lang.AbstractStringBuilder
            public insert(arg0: int, arg1: long): java.lang.AbstractStringBuilder
            public insert(arg0: int, arg1: float): java.lang.AbstractStringBuilder
            public insert(arg0: int, arg1: double): java.lang.AbstractStringBuilder
            public indexOf(arg0: java.lang.String | string): int
            public indexOf(arg0: java.lang.String | string, arg1: int): int
            public lastIndexOf(arg0: java.lang.String | string): int
            public lastIndexOf(arg0: java.lang.String | string, arg1: int): int
            public reverse(): java.lang.AbstractStringBuilder
            public abstract toString(): string
            public append(arg0: char): java.lang.Appendable
            public append(arg0: java.lang.CharSequence, arg1: int, arg2: int): java.lang.Appendable
            public append(arg0: java.lang.CharSequence): java.lang.Appendable
            public static class: java.lang.Class<any>
        }
        interface AbstractStringBuilder$$Lambda implements java.lang.Appendable , java.lang.CharSequence {
            (): string
        }
    }
}