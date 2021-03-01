declare namespace javax {
  namespace script {

    class ScriptException extends java.lang.Exception {

      public constructor(arg0: java.lang.String)
      public constructor(arg0: java.lang.Exception)
      public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: int)
      public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: int, arg3: int)
      public getMessage(): java.lang.String
      public getLineNumber(): int
      public getColumnNumber(): int
      public getFileName(): java.lang.String
    }

  }
}
