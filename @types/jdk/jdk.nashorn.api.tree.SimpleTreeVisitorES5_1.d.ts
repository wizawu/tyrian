declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {

        class SimpleTreeVisitorES5_1<R,P> implements jdk.nashorn.api.tree.TreeVisitor<R,P> {
          public constructor()
          public visitAssignment(arg0: jdk.nashorn.api.tree.AssignmentTree, arg1: P): R
          public visitCompoundAssignment(arg0: jdk.nashorn.api.tree.CompoundAssignmentTree, arg1: P): R
          public visitModule(arg0: jdk.nashorn.api.tree.ModuleTree, arg1: P): R
          public visitExportEntry(arg0: jdk.nashorn.api.tree.ExportEntryTree, arg1: P): R
          public visitImportEntry(arg0: jdk.nashorn.api.tree.ImportEntryTree, arg1: P): R
          public visitBinary(arg0: jdk.nashorn.api.tree.BinaryTree, arg1: P): R
          public visitBlock(arg0: jdk.nashorn.api.tree.BlockTree, arg1: P): R
          public visitBreak(arg0: jdk.nashorn.api.tree.BreakTree, arg1: P): R
          public visitCase(arg0: jdk.nashorn.api.tree.CaseTree, arg1: P): R
          public visitCatch(arg0: jdk.nashorn.api.tree.CatchTree, arg1: P): R
          public visitClassDeclaration(arg0: jdk.nashorn.api.tree.ClassDeclarationTree, arg1: P): R
          public visitClassExpression(arg0: jdk.nashorn.api.tree.ClassExpressionTree, arg1: P): R
          public visitConditionalExpression(arg0: jdk.nashorn.api.tree.ConditionalExpressionTree, arg1: P): R
          public visitContinue(arg0: jdk.nashorn.api.tree.ContinueTree, arg1: P): R
          public visitDebugger(arg0: jdk.nashorn.api.tree.DebuggerTree, arg1: P): R
          public visitDoWhileLoop(arg0: jdk.nashorn.api.tree.DoWhileLoopTree, arg1: P): R
          public visitErroneous(arg0: jdk.nashorn.api.tree.ErroneousTree, arg1: P): R
          public visitExpressionStatement(arg0: jdk.nashorn.api.tree.ExpressionStatementTree, arg1: P): R
          public visitForLoop(arg0: jdk.nashorn.api.tree.ForLoopTree, arg1: P): R
          public visitForInLoop(arg0: jdk.nashorn.api.tree.ForInLoopTree, arg1: P): R
          public visitForOfLoop(arg0: jdk.nashorn.api.tree.ForOfLoopTree, arg1: P): R
          public visitFunctionCall(arg0: jdk.nashorn.api.tree.FunctionCallTree, arg1: P): R
          public visitFunctionDeclaration(arg0: jdk.nashorn.api.tree.FunctionDeclarationTree, arg1: P): R
          public visitFunctionExpression(arg0: jdk.nashorn.api.tree.FunctionExpressionTree, arg1: P): R
          public visitIdentifier(arg0: jdk.nashorn.api.tree.IdentifierTree, arg1: P): R
          public visitIf(arg0: jdk.nashorn.api.tree.IfTree, arg1: P): R
          public visitArrayAccess(arg0: jdk.nashorn.api.tree.ArrayAccessTree, arg1: P): R
          public visitArrayLiteral(arg0: jdk.nashorn.api.tree.ArrayLiteralTree, arg1: P): R
          public visitLabeledStatement(arg0: jdk.nashorn.api.tree.LabeledStatementTree, arg1: P): R
          public visitLiteral(arg0: jdk.nashorn.api.tree.LiteralTree, arg1: P): R
          public visitParenthesized(arg0: jdk.nashorn.api.tree.ParenthesizedTree, arg1: P): R
          public visitReturn(arg0: jdk.nashorn.api.tree.ReturnTree, arg1: P): R
          public visitMemberSelect(arg0: jdk.nashorn.api.tree.MemberSelectTree, arg1: P): R
          public visitNew(arg0: jdk.nashorn.api.tree.NewTree, arg1: P): R
          public visitObjectLiteral(arg0: jdk.nashorn.api.tree.ObjectLiteralTree, arg1: P): R
          public visitProperty(arg0: jdk.nashorn.api.tree.PropertyTree, arg1: P): R
          public visitRegExpLiteral(arg0: jdk.nashorn.api.tree.RegExpLiteralTree, arg1: P): R
          public visitTemplateLiteral(arg0: jdk.nashorn.api.tree.TemplateLiteralTree, arg1: P): R
          public visitEmptyStatement(arg0: jdk.nashorn.api.tree.EmptyStatementTree, arg1: P): R
          public visitSpread(arg0: jdk.nashorn.api.tree.SpreadTree, arg1: P): R
          public visitSwitch(arg0: jdk.nashorn.api.tree.SwitchTree, arg1: P): R
          public visitThrow(arg0: jdk.nashorn.api.tree.ThrowTree, arg1: P): R
          public visitCompilationUnit(arg0: jdk.nashorn.api.tree.CompilationUnitTree, arg1: P): R
          public visitTry(arg0: jdk.nashorn.api.tree.TryTree, arg1: P): R
          public visitInstanceOf(arg0: jdk.nashorn.api.tree.InstanceOfTree, arg1: P): R
          public visitUnary(arg0: jdk.nashorn.api.tree.UnaryTree, arg1: P): R
          public visitVariable(arg0: jdk.nashorn.api.tree.VariableTree, arg1: P): R
          public visitWhileLoop(arg0: jdk.nashorn.api.tree.WhileLoopTree, arg1: P): R
          public visitWith(arg0: jdk.nashorn.api.tree.WithTree, arg1: P): R
          public visitYield(arg0: jdk.nashorn.api.tree.YieldTree, arg1: P): R
          public visitUnknown(arg0: jdk.nashorn.api.tree.Tree, arg1: P): R
        }

      }
    }
  }
}
