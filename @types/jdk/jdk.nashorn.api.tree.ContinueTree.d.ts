declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface ContinueTree extends jdk.nashorn.api.tree.GotoTree {
          getLabel(): java.lang.String
        }

      }
    }
  }
}
