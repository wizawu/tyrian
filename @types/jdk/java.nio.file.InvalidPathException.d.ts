declare namespace java {
  namespace nio {
    namespace file {

      class InvalidPathException extends java.lang.IllegalArgumentException {
        static readonly serialVersionUID: long
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: int)
        public constructor(arg0: java.lang.String, arg1: java.lang.String)
        public getInput(): java.lang.String
        public getReason(): java.lang.String
        public getIndex(): int
        public getMessage(): java.lang.String
      }

    }
  }
}
