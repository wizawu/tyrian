declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace scripting {

        class NashornScriptEngineFactory implements javax.script.ScriptEngineFactory {
          public constructor()
          public getEngineName(): java.lang.String
          public getEngineVersion(): java.lang.String
          public getExtensions(): java.util.List<java.lang.String>
          public getLanguageName(): java.lang.String
          public getLanguageVersion(): java.lang.String
          public getMethodCallSyntax(arg0: java.lang.String | string, arg1: java.lang.String | string, ...vargs: (java.lang.String | string)[]): java.lang.String
          public getMimeTypes(): java.util.List<java.lang.String>
          public getNames(): java.util.List<java.lang.String>
          public getOutputStatement(arg0: java.lang.String | string): java.lang.String
          public getParameter(arg0: java.lang.String | string): java.lang.Object
          public getProgram(...vargs: (java.lang.String | string)[]): java.lang.String
          public getScriptEngine(): javax.script.ScriptEngine
          public getScriptEngine(arg0: java.lang.ClassLoader): javax.script.ScriptEngine
          public getScriptEngine(arg0: jdk.nashorn.api.scripting.ClassFilter | jdk.nashorn.api.scripting.ClassFilter$$lambda): javax.script.ScriptEngine
          public getScriptEngine(...vargs: (java.lang.String | string)[]): javax.script.ScriptEngine
          public getScriptEngine(arg0: java.lang.String[], arg1: java.lang.ClassLoader): javax.script.ScriptEngine
          public getScriptEngine(arg0: java.lang.String[], arg1: java.lang.ClassLoader, arg2: jdk.nashorn.api.scripting.ClassFilter | jdk.nashorn.api.scripting.ClassFilter$$lambda): javax.script.ScriptEngine
        }

      }
    }
  }
}
