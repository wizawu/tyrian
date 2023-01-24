declare namespace javax {
  namespace script {
    interface ScriptContext {
      readonly ENGINE_SCOPE: int
      readonly GLOBAL_SCOPE: int
      setBindings(arg0: javax.script.Bindings, arg1: number | java.lang.Integer): void
      getBindings(arg0: number | java.lang.Integer): javax.script.Bindings
      setAttribute(
        arg0: java.lang.String | string,
        arg1: java.lang.Object | any,
        arg2: number | java.lang.Integer
      ): void
      getAttribute(arg0: java.lang.String | string, arg1: number | java.lang.Integer): java.lang.Object
      removeAttribute(arg0: java.lang.String | string, arg1: number | java.lang.Integer): java.lang.Object
      getAttribute(arg0: java.lang.String | string): java.lang.Object
      getAttributesScope(arg0: java.lang.String | string): number
      getWriter(): java.io.Writer
      getErrorWriter(): java.io.Writer
      setWriter(arg0: java.io.Writer): void
      setErrorWriter(arg0: java.io.Writer): void
      getReader(): java.io.Reader
      setReader(arg0: java.io.Reader): void
      getScopes(): java.util.List<java.lang.Integer>
    }
  }
}
