declare namespace javax {
  namespace lang {
    namespace model {
      namespace element {

        interface TypeParameterElement extends javax.lang.model.element.Element {
          getGenericElement(): javax.lang.model.element.Element
          getBounds(): java.util.List<javax.lang.model.type.TypeMirror>
          getEnclosingElement(): javax.lang.model.element.Element
        }

      }
    }
  }
}
