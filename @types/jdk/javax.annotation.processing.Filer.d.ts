declare namespace javax {
  namespace annotation {
    namespace processing {

      interface Filer {
        createSourceFile(arg0: string | java.lang.CharSequence, ...vargs: (javax.lang.model.element.Element)[]): javax.tools.JavaFileObject
        createClassFile(arg0: string | java.lang.CharSequence, ...vargs: (javax.lang.model.element.Element)[]): javax.tools.JavaFileObject
        createResource(arg0: javax.tools.JavaFileManager$Location, arg1: string | java.lang.CharSequence, arg2: string | java.lang.CharSequence, ...vargs: (javax.lang.model.element.Element)[]): javax.tools.FileObject
        getResource(arg0: javax.tools.JavaFileManager$Location, arg1: string | java.lang.CharSequence, arg2: string | java.lang.CharSequence): javax.tools.FileObject
      }

    }
  }
}
