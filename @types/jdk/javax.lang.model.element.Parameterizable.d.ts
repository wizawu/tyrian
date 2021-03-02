declare namespace javax {
  namespace lang {
    namespace model {
      namespace element {

        interface Parameterizable extends javax.lang.model.element.Element {
          getTypeParameters(): java.util.List<javax.lang.model.element.TypeParameterElement>
        }

      }
    }
  }
}
