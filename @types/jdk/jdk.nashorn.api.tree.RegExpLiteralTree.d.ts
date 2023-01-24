declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {
        interface RegExpLiteralTree extends jdk.nashorn.api.tree.ExpressionTree {
          getPattern(): java.lang.String
          getOptions(): java.lang.String
        }
      }
    }
  }
}
