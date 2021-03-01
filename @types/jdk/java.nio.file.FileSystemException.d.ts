declare namespace java {
  namespace nio {
    namespace file {

      class FileSystemException extends java.io.IOException {

        static readonly serialVersionUID: long
        public constructor(arg0: java.lang.String)
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String)
        public getFile(): java.lang.String
        public getOtherFile(): java.lang.String
        public getReason(): java.lang.String
        public getMessage(): java.lang.String
      }

    }
  }
}
