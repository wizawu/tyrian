declare namespace javax {
  namespace lang {
    namespace model {
      namespace util {
        abstract class AbstractTypeVisitor6<R, P> implements javax.lang.model.type.TypeVisitor<R, P> {
          protected constructor()
          public visit(arg0: javax.lang.model.type.TypeMirror, arg1: P): R
          public visit(arg0: javax.lang.model.type.TypeMirror): R
          public visitUnion(arg0: javax.lang.model.type.UnionType, arg1: P): R
          public visitIntersection(arg0: javax.lang.model.type.IntersectionType, arg1: P): R
          public visitUnknown(arg0: javax.lang.model.type.TypeMirror, arg1: P): R
        }
      }
    }
  }
}
