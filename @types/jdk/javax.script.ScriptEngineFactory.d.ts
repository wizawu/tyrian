declare namespace javax {
  namespace script {
    interface ScriptEngineFactory {
      getEngineName(): java.lang.String
      getEngineVersion(): java.lang.String
      getExtensions(): java.util.List<java.lang.String>
      getMimeTypes(): java.util.List<java.lang.String>
      getNames(): java.util.List<java.lang.String>
      getLanguageName(): java.lang.String
      getLanguageVersion(): java.lang.String
      getParameter(arg0: java.lang.String | string): java.lang.Object
      getMethodCallSyntax(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        ...vargs: (java.lang.String | string)[]
      ): java.lang.String
      getOutputStatement(arg0: java.lang.String | string): java.lang.String
      getProgram(...vargs: (java.lang.String | string)[]): java.lang.String
      getScriptEngine(): javax.script.ScriptEngine
    }
  }
}
