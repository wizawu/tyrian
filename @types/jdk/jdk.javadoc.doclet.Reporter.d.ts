declare namespace jdk {
  namespace javadoc {
    namespace doclet {

      interface Reporter {
        print(arg0: javax.tools.Diagnostic$Kind, arg1: java.lang.String): void
        print(arg0: javax.tools.Diagnostic$Kind, arg1: com.sun.source.util.DocTreePath, arg2: java.lang.String): void
        print(arg0: javax.tools.Diagnostic$Kind, arg1: javax.lang.model.element.Element, arg2: java.lang.String): void
      }

    }
  }
}
