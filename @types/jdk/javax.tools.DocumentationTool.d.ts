declare namespace javax {
  namespace tools {
    interface DocumentationTool extends javax.tools.Tool, javax.tools.OptionChecker {
      getTask(
        arg0: java.io.Writer,
        arg1: javax.tools.JavaFileManager,
        arg2: javax.tools.DiagnosticListener<unknown> | javax.tools.DiagnosticListener$$lambda<unknown>,
        arg3: java.lang.Class<unknown>,
        arg4: java.lang.Iterable<java.lang.String>,
        arg5: java.lang.Iterable<javax.tools.JavaFileObject>
      ): javax.tools.DocumentationTool$DocumentationTask
      getStandardFileManager(
        arg0: javax.tools.DiagnosticListener<unknown> | javax.tools.DiagnosticListener$$lambda<unknown>,
        arg1: java.util.Locale,
        arg2: java.nio.charset.Charset
      ): javax.tools.StandardJavaFileManager
    }
  }
}
