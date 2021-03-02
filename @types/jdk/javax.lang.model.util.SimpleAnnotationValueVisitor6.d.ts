declare namespace javax {
  namespace lang {
    namespace model {
      namespace util {

        class SimpleAnnotationValueVisitor6<R,P> extends javax.lang.model.util.AbstractAnnotationValueVisitor6<R,P> {
          protected readonly DEFAULT_VALUE: R
          protected constructor()
          protected constructor(arg0: R)
          protected defaultAction(arg0: java.lang.Object | any, arg1: P): R
          public visitBoolean(arg0: boolean | java.lang.Boolean, arg1: P): R
          public visitByte(arg0: number | java.lang.Byte, arg1: P): R
          public visitChar(arg0: string | java.lang.Character, arg1: P): R
          public visitDouble(arg0: number | java.lang.Double, arg1: P): R
          public visitFloat(arg0: number | java.lang.Float, arg1: P): R
          public visitInt(arg0: number | java.lang.Integer, arg1: P): R
          public visitLong(arg0: number | java.lang.Long, arg1: P): R
          public visitShort(arg0: number | java.lang.Short, arg1: P): R
          public visitString(arg0: java.lang.String | string, arg1: P): R
          public visitType(arg0: javax.lang.model.type.TypeMirror, arg1: P): R
          public visitEnumConstant(arg0: javax.lang.model.element.VariableElement, arg1: P): R
          public visitAnnotation(arg0: javax.lang.model.element.AnnotationMirror, arg1: P): R
          public visitArray(arg0: java.util.List<javax.lang.model.element.AnnotationValue>, arg1: P): R
        }

      }
    }
  }
}
