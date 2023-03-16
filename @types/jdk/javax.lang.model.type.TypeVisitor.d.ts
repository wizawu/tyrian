declare namespace javax {
  namespace lang {
    namespace model {
      namespace type {
        interface TypeVisitor<R, P> {
          visit(arg0: javax.lang.model.type.TypeMirror, arg1: P): R
          visit?(arg0: javax.lang.model.type.TypeMirror): R
          visitPrimitive(arg0: javax.lang.model.type.PrimitiveType, arg1: P): R
          visitNull(arg0: javax.lang.model.type.NullType, arg1: P): R
          visitArray(arg0: javax.lang.model.type.ArrayType, arg1: P): R
          visitDeclared(arg0: javax.lang.model.type.DeclaredType, arg1: P): R
          visitError(arg0: javax.lang.model.type.ErrorType, arg1: P): R
          visitTypeVariable(arg0: javax.lang.model.type.TypeVariable, arg1: P): R
          visitWildcard(arg0: javax.lang.model.type.WildcardType, arg1: P): R
          visitExecutable(arg0: javax.lang.model.type.ExecutableType, arg1: P): R
          visitNoType(arg0: javax.lang.model.type.NoType, arg1: P): R
          visitUnknown(arg0: javax.lang.model.type.TypeMirror, arg1: P): R
          visitUnion(arg0: javax.lang.model.type.UnionType, arg1: P): R
          visitIntersection(arg0: javax.lang.model.type.IntersectionType, arg1: P): R
        }
      }
    }
  }
}
