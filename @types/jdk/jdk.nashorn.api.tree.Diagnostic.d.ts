declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface Diagnostic {
          public static readonly NOPOS: long
          getKind(): jdk.nashorn.api.tree.Diagnostic$Kind
          getPosition(): long
          getFileName(): java.lang.String
          getLineNumber(): long
          getColumnNumber(): long
          getCode(): java.lang.String
          getMessage(): java.lang.String
        }

      }
    }
  }
}
