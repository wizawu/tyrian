declare namespace javax {
  namespace script {

    class SimpleScriptContext implements javax.script.ScriptContext {
      protected writer: java.io.Writer
      protected errorWriter: java.io.Writer
      protected reader: java.io.Reader
      protected engineScope: javax.script.Bindings
      protected globalScope: javax.script.Bindings
      public constructor()
      constructor(arg0: java.io.Reader, arg1: java.io.Writer, arg2: java.io.Writer)
      public setBindings(arg0: javax.script.Bindings, arg1: number | java.lang.Integer): void
      public getAttribute(arg0: java.lang.String | string): java.lang.Object
      public getAttribute(arg0: java.lang.String | string, arg1: number | java.lang.Integer): java.lang.Object
      public removeAttribute(arg0: java.lang.String | string, arg1: number | java.lang.Integer): java.lang.Object
      public setAttribute(arg0: java.lang.String | string, arg1: java.lang.Object | any, arg2: number | java.lang.Integer): void
      public getWriter(): java.io.Writer
      public getReader(): java.io.Reader
      public setReader(arg0: java.io.Reader): void
      public setWriter(arg0: java.io.Writer): void
      public getErrorWriter(): java.io.Writer
      public setErrorWriter(arg0: java.io.Writer): void
      public getAttributesScope(arg0: java.lang.String | string): number
      public getBindings(arg0: number | java.lang.Integer): javax.script.Bindings
      public getScopes(): java.util.List<java.lang.Integer>
    }

  }
}
