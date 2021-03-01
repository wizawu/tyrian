declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface CompilationUnitTree extends jdk.nashorn.api.tree.Tree {

          getSourceElements(): java.util.List<jdk.nashorn.api.tree.Tree>
          getSourceName(): java.lang.String
          isStrict(): boolean
          getLineMap(): jdk.nashorn.api.tree.LineMap
          getModule(): jdk.nashorn.api.tree.ModuleTree
        }

      }
    }
  }
}
