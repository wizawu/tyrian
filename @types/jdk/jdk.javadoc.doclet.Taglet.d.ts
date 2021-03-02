declare namespace jdk {
  namespace javadoc {
    namespace doclet {

      interface Taglet {
        getAllowedLocations(): java.util.Set<jdk.javadoc.doclet.Taglet$Location>
        isInlineTag(): boolean
        getName(): java.lang.String
        init(arg0: jdk.javadoc.doclet.DocletEnvironment, arg1: jdk.javadoc.doclet.Doclet): void
        toString(arg0: java.util.List<com.sun.source.doctree.DocTree>, arg1: javax.lang.model.element.Element): java.lang.String
      }

    }
  }
}
