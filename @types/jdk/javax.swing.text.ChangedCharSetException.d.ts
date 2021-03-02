declare namespace javax {
  namespace swing {
    namespace text {

      class ChangedCharSetException extends java.io.IOException {
        charSetSpec: java.lang.String
        charSetKey: boolean
        public constructor(arg0: java.lang.String | string, arg1: boolean | java.lang.Boolean)
        public getCharSetSpec(): java.lang.String
        public keyEqualsCharSet(): boolean
      }

    }
  }
}
