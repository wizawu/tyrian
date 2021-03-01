declare namespace java {
  namespace lang {

    class StringBuffer extends java.lang.AbstractStringBuilder implements java.io.Serializable, java.lang.Comparable<java.lang.StringBuffer>, java.lang.CharSequence {

      static readonly serialVersionUID: long
      public constructor()
      public constructor(arg0: int)
      public constructor(arg0: java.lang.String)
      public constructor(arg0: java.lang.CharSequence)
      public compareTo(arg0: java.lang.StringBuffer): int
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
      public append(arg0: java.lang.Object): java.lang.StringBuffer
      public append(arg0: java.lang.String): java.lang.StringBuffer
      public append(arg0: java.lang.StringBuffer): java.lang.StringBuffer
      append(arg0: java.lang.AbstractStringBuilder): java.lang.StringBuffer
      public append(arg0: java.lang.CharSequence): java.lang.StringBuffer
      public append(arg0: java.lang.CharSequence, arg1: int, arg2: int): java.lang.StringBuffer
      public append(arg0: char[]): java.lang.StringBuffer
      public append(arg0: char[], arg1: int, arg2: int): java.lang.StringBuffer
      public append(arg0: boolean): java.lang.StringBuffer
      public append(arg0: char): java.lang.StringBuffer
      public append(arg0: int): java.lang.StringBuffer
      public appendCodePoint(arg0: int): java.lang.StringBuffer
      public append(arg0: long): java.lang.StringBuffer
      public append(arg0: float): java.lang.StringBuffer
      public append(arg0: double): java.lang.StringBuffer
      public delete(arg0: int, arg1: int): java.lang.StringBuffer
      public deleteCharAt(arg0: int): java.lang.StringBuffer
      public replace(arg0: int, arg1: int, arg2: java.lang.String): java.lang.StringBuffer
      public substring(arg0: int): java.lang.String
      public subSequence(arg0: int, arg1: int): java.lang.CharSequence
      public substring(arg0: int, arg1: int): java.lang.String
      public insert(arg0: int, arg1: char[], arg2: int, arg3: int): java.lang.StringBuffer
      public insert(arg0: int, arg1: java.lang.Object): java.lang.StringBuffer
      public insert(arg0: int, arg1: java.lang.String): java.lang.StringBuffer
      public insert(arg0: int, arg1: char[]): java.lang.StringBuffer
      public insert(arg0: int, arg1: java.lang.CharSequence): java.lang.StringBuffer
      public insert(arg0: int, arg1: java.lang.CharSequence, arg2: int, arg3: int): java.lang.StringBuffer
      public insert(arg0: int, arg1: boolean): java.lang.StringBuffer
      public insert(arg0: int, arg1: char): java.lang.StringBuffer
      public insert(arg0: int, arg1: int): java.lang.StringBuffer
      public insert(arg0: int, arg1: long): java.lang.StringBuffer
      public insert(arg0: int, arg1: float): java.lang.StringBuffer
      public insert(arg0: int, arg1: double): java.lang.StringBuffer
      public indexOf(arg0: java.lang.String): int
      public indexOf(arg0: java.lang.String, arg1: int): int
      public lastIndexOf(arg0: java.lang.String): int
      public lastIndexOf(arg0: java.lang.String, arg1: int): int
      public reverse(): java.lang.StringBuffer
      public toString(): java.lang.String
      getBytes(arg0: byte[], arg1: int, arg2: byte): void
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
      append(arg0: java.lang.AbstractStringBuilder): java.lang.AbstractStringBuilder
      public append(arg0: java.lang.StringBuffer): java.lang.AbstractStringBuilder
      public append(arg0: java.lang.String): java.lang.AbstractStringBuilder
      public append(arg0: java.lang.Object): java.lang.AbstractStringBuilder
      public append(arg0: char): java.lang.Appendable
      public append(arg0: java.lang.CharSequence, arg1: int, arg2: int): java.lang.Appendable
      public append(arg0: java.lang.CharSequence): java.lang.Appendable
      public compareTo(arg0: java.lang.Object): int
    }

  }
}
