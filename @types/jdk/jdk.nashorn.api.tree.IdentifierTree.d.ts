declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        interface IdentifierTree extends jdk.nashorn.api.tree.ExpressionTree {

          getName(): java.lang.String
          isRestParameter(): boolean
          isSuper(): boolean
          isThis(): boolean
          isStar(): boolean
          isDefault(): boolean
          isStarDefaultStar(): boolean
        }

      }
    }
  }
}
