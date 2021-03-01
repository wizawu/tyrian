declare namespace javax {
  namespace annotation {
    namespace processing {

      interface Messager {

        printMessage(arg0: javax.tools.Diagnostic$Kind, arg1: java.lang.CharSequence): void
        printMessage(arg0: javax.tools.Diagnostic$Kind, arg1: java.lang.CharSequence, arg2: javax.lang.model.element.Element): void
        printMessage(arg0: javax.tools.Diagnostic$Kind, arg1: java.lang.CharSequence, arg2: javax.lang.model.element.Element, arg3: javax.lang.model.element.AnnotationMirror): void
        printMessage(arg0: javax.tools.Diagnostic$Kind, arg1: java.lang.CharSequence, arg2: javax.lang.model.element.Element, arg3: javax.lang.model.element.AnnotationMirror, arg4: javax.lang.model.element.AnnotationValue): void
      }

    }
  }
}
