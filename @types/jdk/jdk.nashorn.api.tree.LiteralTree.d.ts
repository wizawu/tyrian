declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface LiteralTree extends jdk.nashorn.api.tree.ExpressionTree {
          getValue(): java.lang.Object
        }

      }
    }
  }
}
