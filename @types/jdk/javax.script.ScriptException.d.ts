declare namespace javax {
  namespace script {

    class ScriptException extends java.lang.Exception {
      public constructor(arg0: java.lang.String | string)
      public constructor(arg0: java.lang.Exception)
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: number | java.lang.Integer)
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: number | java.lang.Integer, arg3: number | java.lang.Integer)
      public getMessage(): java.lang.String
      public getLineNumber(): number
      public getColumnNumber(): number
      public getFileName(): java.lang.String
    }

  }
}
