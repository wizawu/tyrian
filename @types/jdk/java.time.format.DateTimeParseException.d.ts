declare namespace java {
  namespace time {
    namespace format {

      class DateTimeParseException extends java.time.DateTimeException {
        public constructor(arg0: java.lang.String | string, arg1: string | java.lang.CharSequence, arg2: number | java.lang.Integer)
        public constructor(arg0: java.lang.String | string, arg1: string | java.lang.CharSequence, arg2: number | java.lang.Integer, arg3: java.lang.Throwable)
        public getParsedString(): java.lang.String
        public getErrorIndex(): number
      }

    }
  }
}
