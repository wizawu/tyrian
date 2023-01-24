declare namespace jdk {
  namespace nashorn {
    namespace api {
      namespace tree {
        interface TreeVisitor<R, P> {
          visitAssignment(arg0: jdk.nashorn.api.tree.AssignmentTree, arg1: P): R
          visitCompoundAssignment(arg0: jdk.nashorn.api.tree.CompoundAssignmentTree, arg1: P): R
          visitBinary(arg0: jdk.nashorn.api.tree.BinaryTree, arg1: P): R
          visitBlock(arg0: jdk.nashorn.api.tree.BlockTree, arg1: P): R
          visitBreak(arg0: jdk.nashorn.api.tree.BreakTree, arg1: P): R
          visitCase(arg0: jdk.nashorn.api.tree.CaseTree, arg1: P): R
          visitCatch(arg0: jdk.nashorn.api.tree.CatchTree, arg1: P): R
          visitClassDeclaration(arg0: jdk.nashorn.api.tree.ClassDeclarationTree, arg1: P): R
          visitClassExpression(arg0: jdk.nashorn.api.tree.ClassExpressionTree, arg1: P): R
          visitConditionalExpression(arg0: jdk.nashorn.api.tree.ConditionalExpressionTree, arg1: P): R
          visitContinue(arg0: jdk.nashorn.api.tree.ContinueTree, arg1: P): R
          visitDebugger(arg0: jdk.nashorn.api.tree.DebuggerTree, arg1: P): R
          visitDoWhileLoop(arg0: jdk.nashorn.api.tree.DoWhileLoopTree, arg1: P): R
          visitErroneous(arg0: jdk.nashorn.api.tree.ErroneousTree, arg1: P): R
          visitExpressionStatement(arg0: jdk.nashorn.api.tree.ExpressionStatementTree, arg1: P): R
          visitForLoop(arg0: jdk.nashorn.api.tree.ForLoopTree, arg1: P): R
          visitForInLoop(arg0: jdk.nashorn.api.tree.ForInLoopTree, arg1: P): R
          visitForOfLoop(arg0: jdk.nashorn.api.tree.ForOfLoopTree, arg1: P): R
          visitFunctionCall(arg0: jdk.nashorn.api.tree.FunctionCallTree, arg1: P): R
          visitFunctionDeclaration(arg0: jdk.nashorn.api.tree.FunctionDeclarationTree, arg1: P): R
          visitFunctionExpression(arg0: jdk.nashorn.api.tree.FunctionExpressionTree, arg1: P): R
          visitIdentifier(arg0: jdk.nashorn.api.tree.IdentifierTree, arg1: P): R
          visitIf(arg0: jdk.nashorn.api.tree.IfTree, arg1: P): R
          visitArrayAccess(arg0: jdk.nashorn.api.tree.ArrayAccessTree, arg1: P): R
          visitArrayLiteral(arg0: jdk.nashorn.api.tree.ArrayLiteralTree, arg1: P): R
          visitLabeledStatement(arg0: jdk.nashorn.api.tree.LabeledStatementTree, arg1: P): R
          visitLiteral(arg0: jdk.nashorn.api.tree.LiteralTree, arg1: P): R
          visitParenthesized(arg0: jdk.nashorn.api.tree.ParenthesizedTree, arg1: P): R
          visitReturn(arg0: jdk.nashorn.api.tree.ReturnTree, arg1: P): R
          visitMemberSelect(arg0: jdk.nashorn.api.tree.MemberSelectTree, arg1: P): R
          visitNew(arg0: jdk.nashorn.api.tree.NewTree, arg1: P): R
          visitObjectLiteral(arg0: jdk.nashorn.api.tree.ObjectLiteralTree, arg1: P): R
          visitProperty(arg0: jdk.nashorn.api.tree.PropertyTree, arg1: P): R
          visitRegExpLiteral(arg0: jdk.nashorn.api.tree.RegExpLiteralTree, arg1: P): R
          visitTemplateLiteral(arg0: jdk.nashorn.api.tree.TemplateLiteralTree, arg1: P): R
          visitEmptyStatement(arg0: jdk.nashorn.api.tree.EmptyStatementTree, arg1: P): R
          visitSpread(arg0: jdk.nashorn.api.tree.SpreadTree, arg1: P): R
          visitSwitch(arg0: jdk.nashorn.api.tree.SwitchTree, arg1: P): R
          visitThrow(arg0: jdk.nashorn.api.tree.ThrowTree, arg1: P): R
          visitCompilationUnit(arg0: jdk.nashorn.api.tree.CompilationUnitTree, arg1: P): R
          visitModule(arg0: jdk.nashorn.api.tree.ModuleTree, arg1: P): R
          visitExportEntry(arg0: jdk.nashorn.api.tree.ExportEntryTree, arg1: P): R
          visitImportEntry(arg0: jdk.nashorn.api.tree.ImportEntryTree, arg1: P): R
          visitTry(arg0: jdk.nashorn.api.tree.TryTree, arg1: P): R
          visitInstanceOf(arg0: jdk.nashorn.api.tree.InstanceOfTree, arg1: P): R
          visitUnary(arg0: jdk.nashorn.api.tree.UnaryTree, arg1: P): R
          visitVariable(arg0: jdk.nashorn.api.tree.VariableTree, arg1: P): R
          visitWhileLoop(arg0: jdk.nashorn.api.tree.WhileLoopTree, arg1: P): R
          visitWith(arg0: jdk.nashorn.api.tree.WithTree, arg1: P): R
          visitYield(arg0: jdk.nashorn.api.tree.YieldTree, arg1: P): R
          visitUnknown(arg0: jdk.nashorn.api.tree.Tree, arg1: P): R
        }
      }
    }
  }
}
