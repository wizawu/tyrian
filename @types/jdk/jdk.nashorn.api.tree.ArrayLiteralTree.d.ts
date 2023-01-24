declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {
        interface ArrayLiteralTree extends jdk.nashorn.api.tree.ExpressionTree {
          getElements(): java.util.List<jdk.nashorn.api.tree.ExpressionTree>
        }
      }
    }
  }
}
