declare namespace java {
  namespace lang {

    class StringBuilder extends java.lang.AbstractStringBuilder implements java.io.Serializable, java.lang.Comparable<java.lang.StringBuilder>, java.lang.CharSequence {
      static readonly serialVersionUID: long
      public constructor()
      public constructor(arg0: int)
      public constructor(arg0: java.lang.String)
      public constructor(arg0: java.lang.CharSequence)
      public compareTo(arg0: java.lang.StringBuilder): int
      public append(arg0: java.lang.Object): java.lang.StringBuilder
      public append(arg0: java.lang.String): java.lang.StringBuilder
      public append(arg0: java.lang.StringBuffer): java.lang.StringBuilder
      public append(arg0: java.lang.CharSequence): java.lang.StringBuilder
      public append(arg0: java.lang.CharSequence, arg1: int, arg2: int): java.lang.StringBuilder
      public append(arg0: char[]): java.lang.StringBuilder
      public append(arg0: char[], arg1: int, arg2: int): java.lang.StringBuilder
      public append(arg0: boolean): java.lang.StringBuilder
      public append(arg0: char): java.lang.StringBuilder
      public append(arg0: int): java.lang.StringBuilder
      public append(arg0: long): java.lang.StringBuilder
      public append(arg0: float): java.lang.StringBuilder
      public append(arg0: double): java.lang.StringBuilder
      public appendCodePoint(arg0: int): java.lang.StringBuilder
      public delete(arg0: int, arg1: int): java.lang.StringBuilder
      public deleteCharAt(arg0: int): java.lang.StringBuilder
      public replace(arg0: int, arg1: int, arg2: java.lang.String): java.lang.StringBuilder
      public insert(arg0: int, arg1: char[], arg2: int, arg3: int): java.lang.StringBuilder
      public insert(arg0: int, arg1: java.lang.Object): java.lang.StringBuilder
      public insert(arg0: int, arg1: java.lang.String): java.lang.StringBuilder
      public insert(arg0: int, arg1: char[]): java.lang.StringBuilder
      public insert(arg0: int, arg1: java.lang.CharSequence): java.lang.StringBuilder
      public insert(arg0: int, arg1: java.lang.CharSequence, arg2: int, arg3: int): java.lang.StringBuilder
      public insert(arg0: int, arg1: boolean): java.lang.StringBuilder
      public insert(arg0: int, arg1: char): java.lang.StringBuilder
      public insert(arg0: int, arg1: int): java.lang.StringBuilder
      public insert(arg0: int, arg1: long): java.lang.StringBuilder
      public insert(arg0: int, arg1: float): java.lang.StringBuilder
      public insert(arg0: int, arg1: double): java.lang.StringBuilder
      public indexOf(arg0: java.lang.String): int
      public indexOf(arg0: java.lang.String, arg1: int): int
      public lastIndexOf(arg0: java.lang.String): int
      public lastIndexOf(arg0: java.lang.String, arg1: int): int
      public reverse(): java.lang.StringBuilder
      public toString(): java.lang.String
      public codePoints(): java.util.stream.IntStream
      public chars(): java.util.stream.IntStream
      public reverse(): java.lang.AbstractStringBuilder
      public insert(arg0: int, arg1: double): java.lang.AbstractStringBuilder
      public insert(arg0: int, arg1: float): java.lang.AbstractStringBuilder
      public insert(arg0: int, arg1: long): java.lang.AbstractStringBuilder
      public insert(arg0: int, arg1: int): java.lang.AbstractStringBuilder
      public insert(arg0: int, arg1: char): java.lang.AbstractStringBuilder
      public insert(arg0: int, arg1: boolean): java.lang.AbstractStringBuilder
      public insert(arg0: int, arg1: java.lang.CharSequence, arg2: int, arg3: int): java.lang.AbstractStringBuilder
      public insert(arg0: int, arg1: java.lang.CharSequence): java.lang.AbstractStringBuilder
      public insert(arg0: int, arg1: char[]): java.lang.AbstractStringBuilder
      public insert(arg0: int, arg1: java.lang.String): java.lang.AbstractStringBuilder
      public insert(arg0: int, arg1: java.lang.Object): java.lang.AbstractStringBuilder
      public insert(arg0: int, arg1: char[], arg2: int, arg3: int): java.lang.AbstractStringBuilder
      public substring(arg0: int, arg1: int): java.lang.String
      public subSequence(arg0: int, arg1: int): java.lang.CharSequence
      public substring(arg0: int): java.lang.String
      public replace(arg0: int, arg1: int, arg2: java.lang.String): java.lang.AbstractStringBuilder
      public deleteCharAt(arg0: int): java.lang.AbstractStringBuilder
      public appendCodePoint(arg0: int): java.lang.AbstractStringBuilder
      public delete(arg0: int, arg1: int): java.lang.AbstractStringBuilder
      public append(arg0: double): java.lang.AbstractStringBuilder
      public append(arg0: float): java.lang.AbstractStringBuilder
      public append(arg0: long): java.lang.AbstractStringBuilder
      public append(arg0: int): java.lang.AbstractStringBuilder
      public append(arg0: char): java.lang.AbstractStringBuilder
      public append(arg0: boolean): java.lang.AbstractStringBuilder
      public append(arg0: char[], arg1: int, arg2: int): java.lang.AbstractStringBuilder
      public append(arg0: char[]): java.lang.AbstractStringBuilder
      public append(arg0: java.lang.CharSequence, arg1: int, arg2: int): java.lang.AbstractStringBuilder
      public append(arg0: java.lang.CharSequence): java.lang.AbstractStringBuilder
      public append(arg0: java.lang.StringBuffer): java.lang.AbstractStringBuilder
      public append(arg0: java.lang.String): java.lang.AbstractStringBuilder
      public append(arg0: java.lang.Object): java.lang.AbstractStringBuilder
      public setCharAt(arg0: int, arg1: char): void
      public getChars(arg0: int, arg1: int, arg2: char[], arg3: int): void
      public offsetByCodePoints(arg0: int, arg1: int): int
      public codePointCount(arg0: int, arg1: int): int
      public codePointBefore(arg0: int): int
      public codePointAt(arg0: int): int
      public charAt(arg0: int): char
      public setLength(arg0: int): void
      public trimToSize(): void
      public ensureCapacity(arg0: int): void
      public capacity(): int
      public length(): int
      public append(arg0: char): java.lang.Appendable
      public append(arg0: java.lang.CharSequence, arg1: int, arg2: int): java.lang.Appendable
      public append(arg0: java.lang.CharSequence): java.lang.Appendable
      public compareTo(arg0: java.lang.Object): int
    }

  }
}
