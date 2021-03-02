declare namespace javax {
  namespace lang {
    namespace model {
      namespace element {

        interface AnnotationValueVisitor<R,P> {
          visit(arg0: javax.lang.model.element.AnnotationValue, arg1: P): R
          visit(arg0: javax.lang.model.element.AnnotationValue): R
          visitBoolean(arg0: boolean, arg1: P): R
          visitByte(arg0: byte, arg1: P): R
          visitChar(arg0: char, arg1: P): R
          visitDouble(arg0: double, arg1: P): R
          visitFloat(arg0: float, arg1: P): R
          visitInt(arg0: int, arg1: P): R
          visitLong(arg0: long, arg1: P): R
          visitShort(arg0: short, arg1: P): R
          visitString(arg0: java.lang.String, arg1: P): R
          visitType(arg0: javax.lang.model.type.TypeMirror, arg1: P): R
          visitEnumConstant(arg0: javax.lang.model.element.VariableElement, arg1: P): R
          visitAnnotation(arg0: javax.lang.model.element.AnnotationMirror, arg1: P): R
          visitArray(arg0: java.util.List<javax.lang.model.element.AnnotationValue>, arg1: P): R
          visitUnknown(arg0: javax.lang.model.element.AnnotationValue, arg1: P): R
        }

      }
    }
  }
}
