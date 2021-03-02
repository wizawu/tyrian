declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface TemplateLiteralTree extends jdk.nashorn.api.tree.ExpressionTree {
          getExpressions(): java.util.List<jdk.nashorn.api.tree.ExpressionTree>
        }

      }
    }
  }
}
