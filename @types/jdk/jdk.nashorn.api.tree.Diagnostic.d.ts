declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {
        interface Diagnostic {
          readonly NOPOS: long
          getKind(): jdk.nashorn.api.tree.Diagnostic$Kind
          getPosition(): number
          getFileName(): java.lang.String
          getLineNumber(): number
          getColumnNumber(): number
          getCode(): java.lang.String
          getMessage(): java.lang.String
        }
      }
    }
  }
}
