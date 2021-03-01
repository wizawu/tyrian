declare namespace javax {
  namespace swing {
    namespace text {

      class ChangedCharSetException extends java.io.IOException {

        charSetSpec: java.lang.String
        charSetKey: boolean
        public constructor(arg0: java.lang.String, arg1: boolean)
        public getCharSetSpec(): java.lang.String
        public keyEqualsCharSet(): boolean
      }

    }
  }
}
