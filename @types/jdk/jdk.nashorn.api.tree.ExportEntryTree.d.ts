declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface ExportEntryTree extends jdk.nashorn.api.tree.Tree {
          getExportName(): jdk.nashorn.api.tree.IdentifierTree
          getModuleRequest(): jdk.nashorn.api.tree.IdentifierTree
          getImportName(): jdk.nashorn.api.tree.IdentifierTree
          getLocalName(): jdk.nashorn.api.tree.IdentifierTree
        }

      }
    }
  }
}
