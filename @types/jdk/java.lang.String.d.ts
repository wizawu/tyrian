declare namespace java {
  namespace lang {

    class String implements java.io.Serializable, java.lang.Comparable<java.lang.String>, java.lang.CharSequence {
      static readonly COMPACT_STRINGS: boolean
      public static readonly CASE_INSENSITIVE_ORDER: java.util.Comparator<java.lang.String>
      static readonly LATIN1: byte
      static readonly UTF16: byte
      public constructor()
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: char[])
      public constructor(arg0: char[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
      public constructor(arg0: int[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
      public constructor(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
      public constructor(arg0: byte[], arg1: number | java.lang.Integer)
      public constructor(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.lang.String | string)
      public constructor(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.nio.charset.Charset)
      public constructor(arg0: byte[], arg1: java.lang.String | string)
      public constructor(arg0: byte[], arg1: java.nio.charset.Charset)
      public constructor(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer)
      public constructor(arg0: byte[])
      public constructor(arg0: java.lang.StringBuffer)
      public constructor(arg0: java.lang.StringBuilder)
      public length(): number
      public isEmpty(): boolean
      public charAt(arg0: number | java.lang.Integer): string
      public codePointAt(arg0: number | java.lang.Integer): number
      public codePointBefore(arg0: number | java.lang.Integer): number
      public codePointCount(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      public offsetByCodePoints(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      public getChars(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: char[], arg3: number | java.lang.Integer): void
      public getBytes(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: byte[], arg3: number | java.lang.Integer): void
      public getBytes(arg0: java.lang.String | string): number[]
      public getBytes(arg0: java.nio.charset.Charset): number[]
      public getBytes(): number[]
      public equals(arg0: java.lang.Object | any): boolean
      public contentEquals(arg0: java.lang.StringBuffer): boolean
      public contentEquals(arg0: java.lang.CharSequence): boolean
      public equalsIgnoreCase(arg0: java.lang.String | string): boolean
      public compareTo(arg0: java.lang.String | string): number
      public compareToIgnoreCase(arg0: java.lang.String | string): number
      public regionMatches(arg0: number | java.lang.Integer, arg1: java.lang.String | string, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): boolean
      public regionMatches(arg0: boolean | java.lang.Boolean, arg1: number | java.lang.Integer, arg2: java.lang.String | string, arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): boolean
      public startsWith(arg0: java.lang.String | string, arg1: number | java.lang.Integer): boolean
      public startsWith(arg0: java.lang.String | string): boolean
      public endsWith(arg0: java.lang.String | string): boolean
      public hashCode(): number
      public indexOf(arg0: number | java.lang.Integer): number
      public indexOf(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      public lastIndexOf(arg0: number | java.lang.Integer): number
      public lastIndexOf(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      public indexOf(arg0: java.lang.String | string): number
      public indexOf(arg0: java.lang.String | string, arg1: number | java.lang.Integer): number
      static indexOf(arg0: byte[], arg1: number | java.lang.Byte, arg2: number | java.lang.Integer, arg3: java.lang.String | string, arg4: number | java.lang.Integer): number
      public lastIndexOf(arg0: java.lang.String | string): number
      public lastIndexOf(arg0: java.lang.String | string, arg1: number | java.lang.Integer): number
      static lastIndexOf(arg0: byte[], arg1: number | java.lang.Byte, arg2: number | java.lang.Integer, arg3: java.lang.String | string, arg4: number | java.lang.Integer): number
      public substring(arg0: number | java.lang.Integer): java.lang.String
      public substring(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.String
      public subSequence(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.CharSequence
      public concat(arg0: java.lang.String | string): java.lang.String
      public replace(arg0: string | java.lang.Character, arg1: string | java.lang.Character): java.lang.String
      public matches(arg0: java.lang.String | string): boolean
      public contains(arg0: java.lang.CharSequence): boolean
      public replaceFirst(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
      public replaceAll(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
      public replace(arg0: java.lang.CharSequence, arg1: java.lang.CharSequence): java.lang.String
      public split(arg0: java.lang.String | string, arg1: number | java.lang.Integer): java.lang.String[]
      public split(arg0: java.lang.String | string): java.lang.String[]
      public static join(arg0: java.lang.CharSequence, ...vargs: (java.lang.CharSequence)[]): java.lang.String
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
      public toCharArray(): string[]
      public static format(arg0: java.lang.String | string, ...vargs: (java.lang.Object | any)[]): java.lang.String
      public static format(arg0: java.util.Locale, arg1: java.lang.String | string, ...vargs: (java.lang.Object | any)[]): java.lang.String
      public static valueOf(arg0: java.lang.Object | any): java.lang.String
      public static valueOf(arg0: char[]): java.lang.String
      public static valueOf(arg0: char[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.lang.String
      public static copyValueOf(arg0: char[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.lang.String
      public static copyValueOf(arg0: char[]): java.lang.String
      public static valueOf(arg0: boolean | java.lang.Boolean): java.lang.String
      public static valueOf(arg0: string | java.lang.Character): java.lang.String
      public static valueOf(arg0: number | java.lang.Integer): java.lang.String
      public static valueOf(arg0: number | java.lang.Long): java.lang.String
      public static valueOf(arg0: number | java.lang.Float): java.lang.String
      public static valueOf(arg0: number | java.lang.Double): java.lang.String
      public intern(): java.lang.String
      public repeat(arg0: number | java.lang.Integer): java.lang.String
      getBytes(arg0: byte[], arg1: number | java.lang.Integer, arg2: number | java.lang.Byte): void
      constructor(arg0: char[], arg1: number | java.lang.Integer, arg2: number | java.lang.Integer, arg3: java.lang.Void)
      constructor(arg0: java.lang.AbstractStringBuilder, arg1: java.lang.Void)
      constructor(arg0: byte[], arg1: number | java.lang.Byte)
      coder(): number
      value(): number[]
      static checkIndex(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      static checkOffset(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
      static checkBoundsOffCount(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      static checkBoundsBeginEnd(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): void
      static valueOfCodePoint(arg0: number | java.lang.Integer): java.lang.String
      public compareTo(arg0: java.lang.Object | any): number
    }

  }
}
