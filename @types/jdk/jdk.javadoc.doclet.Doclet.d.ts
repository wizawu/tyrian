declare namespace jdk {
  namespace javadoc {
    namespace doclet {

      interface Doclet {
        init(arg0: java.util.Locale, arg1: jdk.javadoc.doclet.Reporter): void
        getName(): java.lang.String
        getSupportedOptions(): java.util.Set<jdk.javadoc.doclet.Doclet$Option>
        getSupportedSourceVersion(): javax.lang.model.SourceVersion
        run(arg0: jdk.javadoc.doclet.DocletEnvironment): boolean
      }

    }
  }
}
