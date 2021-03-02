declare namespace jdk {
  namespace javadoc {
    namespace doclet {

      class StandardDoclet implements jdk.javadoc.doclet.Doclet {
        public constructor()
        public init(arg0: java.util.Locale, arg1: jdk.javadoc.doclet.Reporter): void
        public getName(): java.lang.String
        public getSupportedOptions(): java.util.Set<jdk.javadoc.doclet.Doclet$Option>
        public getSupportedSourceVersion(): javax.lang.model.SourceVersion
        public run(arg0: jdk.javadoc.doclet.DocletEnvironment): boolean
      }

    }
  }
}
