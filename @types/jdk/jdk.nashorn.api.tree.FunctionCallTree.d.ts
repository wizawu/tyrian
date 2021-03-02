declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface FunctionCallTree extends jdk.nashorn.api.tree.ExpressionTree {
          getFunctionSelect(): jdk.nashorn.api.tree.ExpressionTree
          getArguments(): java.util.List<jdk.nashorn.api.tree.ExpressionTree>
        }

      }
    }
  }
}
