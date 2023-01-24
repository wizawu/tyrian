declare namespace java {
  namespace lang {
    class StringBuilder
      extends java.lang.AbstractStringBuilder
      implements java.io.Serializable, java.lang.Comparable<java.lang.StringBuilder>, java.lang.CharSequence
    {
      static readonly serialVersionUID: long
      public constructor()
      public constructor(arg0: number | java.lang.Integer)
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: string | java.lang.CharSequence)
      public compareTo(arg0: java.lang.StringBuilder): number
      public append(arg0: java.lang.Object | any): java.lang.StringBuilder
      public append(arg0: java.lang.String | string): java.lang.StringBuilder
      public append(arg0: java.lang.StringBuffer): java.lang.StringBuilder
      public append(arg0: string | java.lang.CharSequence): java.lang.StringBuilder
      public append(
        arg0: string | java.lang.CharSequence,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.lang.StringBuilder
      public append(arg0: string[] | java.lang.Character[]): java.lang.StringBuilder
      public append(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.lang.StringBuilder
      public append(arg0: boolean | java.lang.Boolean): java.lang.StringBuilder
      public append(arg0: string | java.lang.Character): java.lang.StringBuilder
      public append(arg0: number | java.lang.Integer): java.lang.StringBuilder
      public append(arg0: number | java.lang.Long): java.lang.StringBuilder
      public append(arg0: number | java.lang.Float): java.lang.StringBuilder
      public append(arg0: number | java.lang.Double): java.lang.StringBuilder
      public appendCodePoint(arg0: number | java.lang.Integer): java.lang.StringBuilder
      public delete(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.StringBuilder
      public deleteCharAt(arg0: number | java.lang.Integer): java.lang.StringBuilder
      public replace(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: java.lang.String | string
      ): java.lang.StringBuilder
      public insert(
        arg0: number | java.lang.Integer,
        arg1: string[] | java.lang.Character[],
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      ): java.lang.StringBuilder
      public insert(arg0: number | java.lang.Integer, arg1: java.lang.Object | any): java.lang.StringBuilder
      public insert(arg0: number | java.lang.Integer, arg1: java.lang.String | string): java.lang.StringBuilder
      public insert(arg0: number | java.lang.Integer, arg1: string[] | java.lang.Character[]): java.lang.StringBuilder
      public insert(arg0: number | java.lang.Integer, arg1: string | java.lang.CharSequence): java.lang.StringBuilder
      public insert(
        arg0: number | java.lang.Integer,
        arg1: string | java.lang.CharSequence,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      ): java.lang.StringBuilder
      public insert(arg0: number | java.lang.Integer, arg1: boolean | java.lang.Boolean): java.lang.StringBuilder
      public insert(arg0: number | java.lang.Integer, arg1: string | java.lang.Character): java.lang.StringBuilder
      public insert(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.StringBuilder
      public insert(arg0: number | java.lang.Integer, arg1: number | java.lang.Long): java.lang.StringBuilder
      public insert(arg0: number | java.lang.Integer, arg1: number | java.lang.Float): java.lang.StringBuilder
      public insert(arg0: number | java.lang.Integer, arg1: number | java.lang.Double): java.lang.StringBuilder
      public indexOf(arg0: java.lang.String | string): number
      public indexOf(arg0: java.lang.String | string, arg1: number | java.lang.Integer): number
      public lastIndexOf(arg0: java.lang.String | string): number
      public lastIndexOf(arg0: java.lang.String | string, arg1: number | java.lang.Integer): number
      public reverse(): java.lang.StringBuilder
      public toString(): java.lang.String
      public codePoints(): java.util.stream.IntStream
      public chars(): java.util.stream.IntStream
      public reverse(): java.lang.AbstractStringBuilder
      public insert(arg0: number | java.lang.Integer, arg1: number | java.lang.Double): java.lang.AbstractStringBuilder
      public insert(arg0: number | java.lang.Integer, arg1: number | java.lang.Float): java.lang.AbstractStringBuilder
      public insert(arg0: number | java.lang.Integer, arg1: number | java.lang.Long): java.lang.AbstractStringBuilder
      public insert(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.AbstractStringBuilder
      public insert(
        arg0: number | java.lang.Integer,
        arg1: string | java.lang.Character
      ): java.lang.AbstractStringBuilder
      public insert(
        arg0: number | java.lang.Integer,
        arg1: boolean | java.lang.Boolean
      ): java.lang.AbstractStringBuilder
      public insert(
        arg0: number | java.lang.Integer,
        arg1: string | java.lang.CharSequence,
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      ): java.lang.AbstractStringBuilder
      public insert(
        arg0: number | java.lang.Integer,
        arg1: string | java.lang.CharSequence
      ): java.lang.AbstractStringBuilder
      public insert(
        arg0: number | java.lang.Integer,
        arg1: string[] | java.lang.Character[]
      ): java.lang.AbstractStringBuilder
      public insert(arg0: number | java.lang.Integer, arg1: java.lang.String | string): java.lang.AbstractStringBuilder
      public insert(arg0: number | java.lang.Integer, arg1: java.lang.Object | any): java.lang.AbstractStringBuilder
      public insert(
        arg0: number | java.lang.Integer,
        arg1: string[] | java.lang.Character[],
        arg2: number | java.lang.Integer,
        arg3: number | java.lang.Integer
      ): java.lang.AbstractStringBuilder
      public substring(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.String
      public subSequence(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): string
      public substring(arg0: number | java.lang.Integer): java.lang.String
      public replace(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: java.lang.String | string
      ): java.lang.AbstractStringBuilder
      public deleteCharAt(arg0: number | java.lang.Integer): java.lang.AbstractStringBuilder
      public appendCodePoint(arg0: number | java.lang.Integer): java.lang.AbstractStringBuilder
      public delete(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.AbstractStringBuilder
      public append(arg0: number | java.lang.Double): java.lang.AbstractStringBuilder
      public append(arg0: number | java.lang.Float): java.lang.AbstractStringBuilder
      public append(arg0: number | java.lang.Long): java.lang.AbstractStringBuilder
      public append(arg0: number | java.lang.Integer): java.lang.AbstractStringBuilder
      public append(arg0: string | java.lang.Character): java.lang.AbstractStringBuilder
      public append(arg0: boolean | java.lang.Boolean): java.lang.AbstractStringBuilder
      public append(
        arg0: string[] | java.lang.Character[],
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.lang.AbstractStringBuilder
      public append(arg0: string[] | java.lang.Character[]): java.lang.AbstractStringBuilder
      public append(
        arg0: string | java.lang.CharSequence,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.lang.AbstractStringBuilder
      public append(arg0: string | java.lang.CharSequence): java.lang.AbstractStringBuilder
      public append(arg0: java.lang.StringBuffer): java.lang.AbstractStringBuilder
      public append(arg0: java.lang.String | string): java.lang.AbstractStringBuilder
      public append(arg0: java.lang.Object | any): java.lang.AbstractStringBuilder
      public setCharAt(arg0: number | java.lang.Integer, arg1: string | java.lang.Character): void
      public getChars(
        arg0: number | java.lang.Integer,
        arg1: number | java.lang.Integer,
        arg2: string[] | java.lang.Character[],
        arg3: number | java.lang.Integer
      ): void
      public offsetByCodePoints(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      public codePointCount(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): number
      public codePointBefore(arg0: number | java.lang.Integer): number
      public codePointAt(arg0: number | java.lang.Integer): number
      public charAt(arg0: number | java.lang.Integer): string
      public setLength(arg0: number | java.lang.Integer): void
      public trimToSize(): void
      public ensureCapacity(arg0: number | java.lang.Integer): void
      public capacity(): number
      public length(): number
      public append(arg0: string | java.lang.Character): java.lang.Appendable
      public append(
        arg0: string | java.lang.CharSequence,
        arg1: number | java.lang.Integer,
        arg2: number | java.lang.Integer
      ): java.lang.Appendable
      public append(arg0: string | java.lang.CharSequence): java.lang.Appendable
      public compareTo(arg0: java.lang.Object | any): number
    }
  }
}
