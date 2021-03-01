declare namespace java {
  namespace util {
    namespace regex {

      class PatternSyntaxException extends java.lang.IllegalArgumentException {

        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: int)
        public getIndex(): int
        public getDescription(): java.lang.String
        public getPattern(): java.lang.String
        public getMessage(): java.lang.String
      }

    }
  }
}
