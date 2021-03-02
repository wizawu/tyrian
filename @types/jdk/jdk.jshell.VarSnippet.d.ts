declare namespace jdk {
  namespace jshell {

    class VarSnippet extends jdk.jshell.DeclarationSnippet {
      readonly typeName: java.lang.String
      readonly fullTypeName: java.lang.String
      readonly anonymousClasses: java.util.Set<java.lang.String>
      constructor(arg0: jdk.jshell.Key$VarKey, arg1: java.lang.String, arg2: jdk.jshell.Wrap, arg3: java.lang.String, arg4: jdk.jshell.Snippet$SubKind, arg5: java.lang.String, arg6: java.lang.String, arg7: java.util.Set<java.lang.String>, arg8: java.util.Collection<java.lang.String>, arg9: jdk.jshell.DiagList)
      public typeName(): java.lang.String
      importLine(arg0: jdk.jshell.JShell): java.lang.String
    }

  }
}
