declare namespace java {
  namespace time {
    namespace format {

      class DateTimeParseException extends java.time.DateTimeException {

        public constructor(arg0: java.lang.String, arg1: java.lang.CharSequence, arg2: int)
        public constructor(arg0: java.lang.String, arg1: java.lang.CharSequence, arg2: int, arg3: java.lang.Throwable)
        public getParsedString(): java.lang.String
        public getErrorIndex(): int
      }

    }
  }
}
