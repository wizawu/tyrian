declare namespace jdk {
  namespace javadoc {
    namespace doclet {
      interface DocletEnvironment {
        getSpecifiedElements(): java.util.Set<javax.lang.model.element.Element>
        getIncludedElements(): java.util.Set<javax.lang.model.element.Element>
        getDocTrees(): com.sun.source.util.DocTrees
        getElementUtils(): javax.lang.model.util.Elements
        getTypeUtils(): javax.lang.model.util.Types
        isIncluded(arg0: javax.lang.model.element.Element): boolean
        isSelected(arg0: javax.lang.model.element.Element): boolean
        getJavaFileManager(): javax.tools.JavaFileManager
        getSourceVersion(): javax.lang.model.SourceVersion
        getModuleMode(): jdk.javadoc.doclet.DocletEnvironment$ModuleMode
        getFileKind(arg0: javax.lang.model.element.TypeElement): javax.tools.JavaFileObject$Kind
      }
    }
  }
}
