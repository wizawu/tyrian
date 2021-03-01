declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface ImportEntryTree extends jdk.nashorn.api.tree.Tree {

          getModuleRequest(): jdk.nashorn.api.tree.IdentifierTree
          getImportName(): jdk.nashorn.api.tree.IdentifierTree
          getLocalName(): jdk.nashorn.api.tree.IdentifierTree
        }

      }
    }
  }
}
