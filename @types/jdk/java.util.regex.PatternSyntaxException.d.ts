declare namespace java {
  namespace util {
    namespace regex {

      class PatternSyntaxException extends java.lang.IllegalArgumentException {
        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: number | java.lang.Integer)
        public getIndex(): number
        public getDescription(): java.lang.String
        public getPattern(): java.lang.String
        public getMessage(): java.lang.String
      }

    }
  }
}
