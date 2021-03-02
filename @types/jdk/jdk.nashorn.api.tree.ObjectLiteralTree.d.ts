declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface ObjectLiteralTree extends jdk.nashorn.api.tree.ExpressionTree {
          getProperties(): java.util.List<jdk.nashorn.api.tree.PropertyTree>
        }

      }
    }
  }
}
