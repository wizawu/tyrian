declare namespace java {
  namespace nio {
    namespace file {
      class InvalidPathException extends java.lang.IllegalArgumentException {
        static readonly serialVersionUID: long
        public constructor(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: number | java.lang.Integer
        )
        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
        public getInput(): java.lang.String
        public getReason(): java.lang.String
        public getIndex(): number
        public getMessage(): java.lang.String
      }
    }
  }
}
