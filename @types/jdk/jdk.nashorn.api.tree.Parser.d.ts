declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface Parser {
          parse(arg0: java.io.File, arg1: jdk.nashorn.api.tree.DiagnosticListener | jdk.nashorn.api.tree.DiagnosticListener$$lambda): jdk.nashorn.api.tree.CompilationUnitTree
          parse(arg0: java.nio.file.Path, arg1: jdk.nashorn.api.tree.DiagnosticListener | jdk.nashorn.api.tree.DiagnosticListener$$lambda): jdk.nashorn.api.tree.CompilationUnitTree
          parse(arg0: java.net.URL, arg1: jdk.nashorn.api.tree.DiagnosticListener | jdk.nashorn.api.tree.DiagnosticListener$$lambda): jdk.nashorn.api.tree.CompilationUnitTree
          parse(arg0: java.lang.String | string, arg1: java.io.Reader, arg2: jdk.nashorn.api.tree.DiagnosticListener | jdk.nashorn.api.tree.DiagnosticListener$$lambda): jdk.nashorn.api.tree.CompilationUnitTree
          parse(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: jdk.nashorn.api.tree.DiagnosticListener | jdk.nashorn.api.tree.DiagnosticListener$$lambda): jdk.nashorn.api.tree.CompilationUnitTree
          parse(arg0: jdk.nashorn.api.scripting.ScriptObjectMirror, arg1: jdk.nashorn.api.tree.DiagnosticListener | jdk.nashorn.api.tree.DiagnosticListener$$lambda): jdk.nashorn.api.tree.CompilationUnitTree
          create(...vargs: (java.lang.String | string)[]): jdk.nashorn.api.tree.Parser
        }

      }
    }
  }
}
