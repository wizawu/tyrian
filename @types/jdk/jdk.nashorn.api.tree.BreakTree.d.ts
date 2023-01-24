declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {
        interface BreakTree extends jdk.nashorn.api.tree.GotoTree {
          getLabel(): java.lang.String
        }
      }
    }
  }
}
