declare namespace javax {
  namespace lang {
    namespace model {
      namespace type {

        class MirroredTypesException extends java.lang.RuntimeException {

          types: java.util.List<javax.lang.model.type.TypeMirror>
          constructor(arg0: java.lang.String, arg1: javax.lang.model.type.TypeMirror)
          public constructor(arg0: java.util.List<javax.lang.model.type.TypeMirror>)
          public getTypeMirrors(): java.util.List<javax.lang.model.type.TypeMirror>
        }

      }
    }
  }
}
