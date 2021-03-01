declare namespace javax {
  namespace lang {
    namespace model {
      namespace element {

        interface AnnotationMirror {

          getAnnotationType(): javax.lang.model.type.DeclaredType
          getElementValues(): java.util.Map<javax.lang.model.element.ExecutableElement,javax.lang.model.element.AnnotationValue>
        }

      }
    }
  }
}
