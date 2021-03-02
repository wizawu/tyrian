declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        class SimpleTreeVisitorES6<R,P> extends jdk.nashorn.api.tree.SimpleTreeVisitorES5_1<R,P> {
          public constructor()
          public visitCompilationUnit(arg0: jdk.nashorn.api.tree.CompilationUnitTree, arg1: P): R
          public visitModule(arg0: jdk.nashorn.api.tree.ModuleTree, arg1: P): R
          public visitExportEntry(arg0: jdk.nashorn.api.tree.ExportEntryTree, arg1: P): R
          public visitImportEntry(arg0: jdk.nashorn.api.tree.ImportEntryTree, arg1: P): R
          public visitClassDeclaration(arg0: jdk.nashorn.api.tree.ClassDeclarationTree, arg1: P): R
          public visitClassExpression(arg0: jdk.nashorn.api.tree.ClassExpressionTree, arg1: P): R
          public visitForOfLoop(arg0: jdk.nashorn.api.tree.ForOfLoopTree, arg1: P): R
          public visitYield(arg0: jdk.nashorn.api.tree.YieldTree, arg1: P): R
          public visitSpread(arg0: jdk.nashorn.api.tree.SpreadTree, arg1: P): R
          public visitTemplateLiteral(arg0: jdk.nashorn.api.tree.TemplateLiteralTree, arg1: P): R
          public visitVariable(arg0: jdk.nashorn.api.tree.VariableTree, arg1: P): R
        }

      }
    }
  }
}
