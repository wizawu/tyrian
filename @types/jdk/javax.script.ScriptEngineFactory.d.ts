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
      getParameter(arg0: java.lang.String): java.lang.Object
      getMethodCallSyntax(arg0: java.lang.String, arg1: java.lang.String, ...arg2: java.lang.String[]): java.lang.String
      getOutputStatement(arg0: java.lang.String): java.lang.String
      getProgram(...arg0: java.lang.String[]): java.lang.String
      getScriptEngine(): javax.script.ScriptEngine
    }

  }
}
