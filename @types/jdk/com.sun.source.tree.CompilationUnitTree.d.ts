declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {
        interface CompilationUnitTree extends com.sun.source.tree.Tree {
          getPackageAnnotations(): java.util.List<com.sun.source.tree.AnnotationTree>
          getPackageName(): com.sun.source.tree.ExpressionTree
          getPackage(): com.sun.source.tree.PackageTree
          getImports(): java.util.List<com.sun.source.tree.ImportTree>
          getTypeDecls(): java.util.List<com.sun.source.tree.Tree>
          getSourceFile(): javax.tools.JavaFileObject
          getLineMap(): com.sun.source.tree.LineMap
        }
      }
    }
  }
}
