declare namespace java {
  namespace lang {

    interface CharSequence {
      length(): int
      charAt(arg0: int): char
      subSequence(arg0: int, arg1: int): java.lang.CharSequence
      toString(): java.lang.String
      chars(): java.util.stream.IntStream
      codePoints(): java.util.stream.IntStream
      compare(arg0: java.lang.CharSequence, arg1: java.lang.CharSequence): int
    }

  }
}
