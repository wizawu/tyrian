declare namespace java {
  namespace lang {

    interface CharSequence {
      length(): number
      charAt(arg0: number | java.lang.Integer): string
      subSequence(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): string
      toString(): java.lang.String
      chars(): java.util.stream.IntStream
      codePoints(): java.util.stream.IntStream
      compare(arg0: string | java.lang.CharSequence, arg1: string | java.lang.CharSequence): number
    }

  }
}
