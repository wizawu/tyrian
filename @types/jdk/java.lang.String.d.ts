declare namespace java {
  namespace lang {

    class String implements java.io.Serializable, java.lang.Comparable<java.lang.String>, java.lang.CharSequence {

      static readonly COMPACT_STRINGS: boolean
      public static readonly CASE_INSENSITIVE_ORDER: java.util.Comparator<java.lang.String>
      static readonly LATIN1: byte
      static readonly UTF16: byte
      public constructor()
      public constructor(arg0: java.lang.String)
      public constructor(arg0: char[])
      public constructor(arg0: char[], arg1: int, arg2: int)
      public constructor(arg0: int[], arg1: int, arg2: int)
      public constructor(arg0: byte[], arg1: int, arg2: int, arg3: int)
      public constructor(arg0: byte[], arg1: int)
      public constructor(arg0: byte[], arg1: int, arg2: int, arg3: java.lang.String)
      public constructor(arg0: byte[], arg1: int, arg2: int, arg3: java.nio.charset.Charset)
      public constructor(arg0: byte[], arg1: java.lang.String)
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
      public getBytes(arg0: java.lang.String): byte[]
      public getBytes(arg0: java.nio.charset.Charset): byte[]
      public getBytes(): byte[]
      public equals(arg0: java.lang.Object): boolean
      public contentEquals(arg0: java.lang.StringBuffer): boolean
      public contentEquals(arg0: java.lang.CharSequence): boolean
      public equalsIgnoreCase(arg0: java.lang.String): boolean
      public compareTo(arg0: java.lang.String): int
      public compareToIgnoreCase(arg0: java.lang.String): int
      public regionMatches(arg0: int, arg1: java.lang.String, arg2: int, arg3: int): boolean
      public regionMatches(arg0: boolean, arg1: int, arg2: java.lang.String, arg3: int, arg4: int): boolean
      public startsWith(arg0: java.lang.String, arg1: int): boolean
      public startsWith(arg0: java.lang.String): boolean
      public endsWith(arg0: java.lang.String): boolean
      public hashCode(): int
      public indexOf(arg0: int): int
      public indexOf(arg0: int, arg1: int): int
      public lastIndexOf(arg0: int): int
      public lastIndexOf(arg0: int, arg1: int): int
      public indexOf(arg0: java.lang.String): int
      public indexOf(arg0: java.lang.String, arg1: int): int
      static indexOf(arg0: byte[], arg1: byte, arg2: int, arg3: java.lang.String, arg4: int): int
      public lastIndexOf(arg0: java.lang.String): int
      public lastIndexOf(arg0: java.lang.String, arg1: int): int
      static lastIndexOf(arg0: byte[], arg1: byte, arg2: int, arg3: java.lang.String, arg4: int): int
      public substring(arg0: int): java.lang.String
      public substring(arg0: int, arg1: int): java.lang.String
      public subSequence(arg0: int, arg1: int): java.lang.CharSequence
      public concat(arg0: java.lang.String): java.lang.String
      public replace(arg0: char, arg1: char): java.lang.String
      public matches(arg0: java.lang.String): boolean
      public contains(arg0: java.lang.CharSequence): boolean
      public replaceFirst(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
      public replaceAll(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
      public replace(arg0: java.lang.CharSequence, arg1: java.lang.CharSequence): java.lang.String
      public split(arg0: java.lang.String, arg1: int): java.lang.String[]
      public split(arg0: java.lang.String): java.lang.String[]
      public static join(arg0: java.lang.CharSequence, ...arg1: java.lang.CharSequence[]): java.lang.String
      public static join(arg0: java.lang.CharSequence, arg1: java.lang.Iterable<java.lang.CharSequence>): java.lang.String
      public toLowerCase(arg0: java.util.Locale): java.lang.String
      public toLowerCase(): java.lang.String
      public toUpperCase(arg0: java.util.Locale): java.lang.String
      public toUpperCase(): java.lang.String
      public trim(): java.lang.String
      public strip(): java.lang.String
      public stripLeading(): java.lang.String
      public stripTrailing(): java.lang.String
      public isBlank(): boolean
      public lines(): java.util.stream.Stream<java.lang.String>
      public toString(): java.lang.String
      public chars(): java.util.stream.IntStream
      public codePoints(): java.util.stream.IntStream
      public toCharArray(): char[]
      public static format(arg0: java.lang.String, ...arg1: java.lang.Object[]): java.lang.String
      public static format(arg0: java.util.Locale, arg1: java.lang.String, ...arg2: java.lang.Object[]): java.lang.String
      public static valueOf(arg0: java.lang.Object): java.lang.String
      public static valueOf(arg0: char[]): java.lang.String
      public static valueOf(arg0: char[], arg1: int, arg2: int): java.lang.String
      public static copyValueOf(arg0: char[], arg1: int, arg2: int): java.lang.String
      public static copyValueOf(arg0: char[]): java.lang.String
      public static valueOf(arg0: boolean): java.lang.String
      public static valueOf(arg0: char): java.lang.String
      public static valueOf(arg0: int): java.lang.String
      public static valueOf(arg0: long): java.lang.String
      public static valueOf(arg0: float): java.lang.String
      public static valueOf(arg0: double): java.lang.String
      public intern(): java.lang.String
      public repeat(arg0: int): java.lang.String
      getBytes(arg0: byte[], arg1: int, arg2: byte): void
      constructor(arg0: char[], arg1: int, arg2: int, arg3: java.lang.Void)
      constructor(arg0: java.lang.AbstractStringBuilder, arg1: java.lang.Void)
      constructor(arg0: byte[], arg1: byte)
      coder(): byte
      value(): byte[]
      static checkIndex(arg0: int, arg1: int): void
      static checkOffset(arg0: int, arg1: int): void
      static checkBoundsOffCount(arg0: int, arg1: int, arg2: int): void
      static checkBoundsBeginEnd(arg0: int, arg1: int, arg2: int): void
      static valueOfCodePoint(arg0: int): java.lang.String
      public compareTo(arg0: java.lang.Object): int
    }

  }
}
