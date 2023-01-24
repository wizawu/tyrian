declare namespace jdk {
  namespace jshell {
    class ImportSnippet extends jdk.jshell.PersistentSnippet {
      readonly fullname: java.lang.String
      readonly fullkey: java.lang.String
      readonly isStatic: boolean
      readonly isStar: boolean
      constructor(
        arg0: jdk.jshell.Key$ImportKey,
        arg1: java.lang.String | string,
        arg2: jdk.jshell.Wrap,
        arg3: java.lang.String | string,
        arg4: java.lang.String | string,
        arg5: jdk.jshell.Snippet$SubKind,
        arg6: java.lang.String | string,
        arg7: boolean | java.lang.Boolean,
        arg8: boolean | java.lang.Boolean
      )
      public name(): java.lang.String
      public fullname(): java.lang.String
      public isStatic(): boolean
      key(): jdk.jshell.Key$ImportKey
      importLine(arg0: jdk.jshell.JShell): java.lang.String
      key(): jdk.jshell.Key
    }
  }
}
