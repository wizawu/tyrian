declare namespace jdk {
  namespace jshell {

    class MethodSnippet extends jdk.jshell.DeclarationSnippet {
      readonly signature: java.lang.String
      constructor(arg0: jdk.jshell.Key$MethodKey, arg1: java.lang.String, arg2: jdk.jshell.Wrap, arg3: java.lang.String, arg4: java.lang.String, arg5: jdk.jshell.Wrap, arg6: java.util.Collection<java.lang.String>, arg7: java.util.Collection<java.lang.String>, arg8: jdk.jshell.DiagList)
      public parameterTypes(): java.lang.String
      public signature(): java.lang.String
      public toString(): java.lang.String
      key(): jdk.jshell.Key$MethodKey
      qualifiedParameterTypes(): java.lang.String
      setQualifiedParameterTypes(arg0: java.lang.String): void
      key(): jdk.jshell.Key
    }

  }
}
