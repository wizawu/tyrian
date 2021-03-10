declare namespace java {
  namespace text {

    class ChoiceFormat extends java.text.NumberFormat {
      static readonly SIGN: long
      static readonly EXPONENT: long
      static readonly POSITIVEINFINITY: long
      public applyPattern(arg0: java.lang.String | string): void
      public toPattern(): java.lang.String
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: number[] | java.lang.Double[], arg1: java.lang.String[] | string[])
      public setChoices(arg0: number[] | java.lang.Double[], arg1: java.lang.String[] | string[]): void
      public getLimits(): number[]
      public getFormats(): java.lang.Object[]
      public format(arg0: number | java.lang.Long, arg1: java.lang.StringBuffer, arg2: java.text.FieldPosition): java.lang.StringBuffer
      public format(arg0: number | java.lang.Double, arg1: java.lang.StringBuffer, arg2: java.text.FieldPosition): java.lang.StringBuffer
      public parse(arg0: java.lang.String | string, arg1: java.text.ParsePosition): java.lang.Number
      public static nextDouble(arg0: number | java.lang.Double): number
      public static previousDouble(arg0: number | java.lang.Double): number
      public clone(): java.lang.Object
      public hashCode(): number
      public equals(arg0: java.lang.Object | any): boolean
      public static nextDouble(arg0: number | java.lang.Double, arg1: boolean | java.lang.Boolean): number
    }

  }
}
