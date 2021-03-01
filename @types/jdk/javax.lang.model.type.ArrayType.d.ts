declare namespace javax {
  namespace lang {
    namespace model {
      namespace type {

        interface ArrayType extends javax.lang.model.type.ReferenceType {

          getComponentType(): javax.lang.model.type.TypeMirror
        }

      }
    }
  }
}
