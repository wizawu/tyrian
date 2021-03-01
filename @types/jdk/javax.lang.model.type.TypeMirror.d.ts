declare namespace javax {
  namespace lang {
    namespace model {
      namespace type {

        interface TypeMirror extends javax.lang.model.AnnotatedConstruct {

          getKind(): javax.lang.model.type.TypeKind
          equals(arg0: java.lang.Object): boolean
          hashCode(): int
          toString(): java.lang.String
          accept<R,P>(arg0: javax.lang.model.type.TypeVisitor<R,P>, arg1: P): R
        }

      }
    }
  }
}
