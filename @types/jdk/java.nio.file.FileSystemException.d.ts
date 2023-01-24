declare namespace java {
  namespace nio {
    namespace file {
      class FileSystemException extends java.io.IOException {
        static readonly serialVersionUID: long
        public constructor(arg0: java.lang.String | string)
        public constructor(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string
        )
        public getFile(): java.lang.String
        public getOtherFile(): java.lang.String
        public getReason(): java.lang.String
        public getMessage(): java.lang.String
      }
    }
  }
}
