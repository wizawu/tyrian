declare namespace jdk {
  namespace javadoc {
    namespace doclet {

      interface Doclet$Option {
        getArgumentCount(): number
        getDescription(): java.lang.String
        getKind(): jdk.javadoc.doclet.Doclet$Option$Kind
        getNames(): java.util.List<java.lang.String>
        getParameters(): java.lang.String
        process(arg0: java.lang.String | string, arg1: java.util.List<java.lang.String>): boolean
      }

    }
  }
}
