declare namespace java {
  namespace util {
    class StringJoiner {
      public constructor(arg0: string | java.lang.CharSequence)
      public constructor(
        arg0: string | java.lang.CharSequence,
        arg1: string | java.lang.CharSequence,
        arg2: string | java.lang.CharSequence
      )
      public setEmptyValue(arg0: string | java.lang.CharSequence): java.util.StringJoiner
      public toString(): java.lang.String
      public add(arg0: string | java.lang.CharSequence): java.util.StringJoiner
      public merge(arg0: java.util.StringJoiner): java.util.StringJoiner
      public length(): number
    }
  }
}
