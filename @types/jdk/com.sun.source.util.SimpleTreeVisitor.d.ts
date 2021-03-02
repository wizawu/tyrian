declare namespace com {
  namespace sun {
    namespace source {
      namespace util {

        class SimpleTreeVisitor<R,P> implements com.sun.source.tree.TreeVisitor<R,P> {
          protected readonly DEFAULT_VALUE: R
          protected constructor()
          protected constructor(arg0: R)
          protected defaultAction(arg0: com.sun.source.tree.Tree, arg1: P): R
          public visit(arg0: com.sun.source.tree.Tree, arg1: P): R
          public visit(arg0: java.lang.Iterable<com.sun.source.tree.Tree>, arg1: P): R
          public visitCompilationUnit(arg0: com.sun.source.tree.CompilationUnitTree, arg1: P): R
          public visitPackage(arg0: com.sun.source.tree.PackageTree, arg1: P): R
          public visitImport(arg0: com.sun.source.tree.ImportTree, arg1: P): R
          public visitClass(arg0: com.sun.source.tree.ClassTree, arg1: P): R
          public visitMethod(arg0: com.sun.source.tree.MethodTree, arg1: P): R
          public visitVariable(arg0: com.sun.source.tree.VariableTree, arg1: P): R
          public visitEmptyStatement(arg0: com.sun.source.tree.EmptyStatementTree, arg1: P): R
          public visitBlock(arg0: com.sun.source.tree.BlockTree, arg1: P): R
          public visitDoWhileLoop(arg0: com.sun.source.tree.DoWhileLoopTree, arg1: P): R
          public visitWhileLoop(arg0: com.sun.source.tree.WhileLoopTree, arg1: P): R
          public visitForLoop(arg0: com.sun.source.tree.ForLoopTree, arg1: P): R
          public visitEnhancedForLoop(arg0: com.sun.source.tree.EnhancedForLoopTree, arg1: P): R
          public visitLabeledStatement(arg0: com.sun.source.tree.LabeledStatementTree, arg1: P): R
          public visitSwitch(arg0: com.sun.source.tree.SwitchTree, arg1: P): R
          public visitCase(arg0: com.sun.source.tree.CaseTree, arg1: P): R
          public visitSynchronized(arg0: com.sun.source.tree.SynchronizedTree, arg1: P): R
          public visitTry(arg0: com.sun.source.tree.TryTree, arg1: P): R
          public visitCatch(arg0: com.sun.source.tree.CatchTree, arg1: P): R
          public visitConditionalExpression(arg0: com.sun.source.tree.ConditionalExpressionTree, arg1: P): R
          public visitIf(arg0: com.sun.source.tree.IfTree, arg1: P): R
          public visitExpressionStatement(arg0: com.sun.source.tree.ExpressionStatementTree, arg1: P): R
          public visitBreak(arg0: com.sun.source.tree.BreakTree, arg1: P): R
          public visitContinue(arg0: com.sun.source.tree.ContinueTree, arg1: P): R
          public visitReturn(arg0: com.sun.source.tree.ReturnTree, arg1: P): R
          public visitThrow(arg0: com.sun.source.tree.ThrowTree, arg1: P): R
          public visitAssert(arg0: com.sun.source.tree.AssertTree, arg1: P): R
          public visitMethodInvocation(arg0: com.sun.source.tree.MethodInvocationTree, arg1: P): R
          public visitNewClass(arg0: com.sun.source.tree.NewClassTree, arg1: P): R
          public visitNewArray(arg0: com.sun.source.tree.NewArrayTree, arg1: P): R
          public visitLambdaExpression(arg0: com.sun.source.tree.LambdaExpressionTree, arg1: P): R
          public visitParenthesized(arg0: com.sun.source.tree.ParenthesizedTree, arg1: P): R
          public visitAssignment(arg0: com.sun.source.tree.AssignmentTree, arg1: P): R
          public visitCompoundAssignment(arg0: com.sun.source.tree.CompoundAssignmentTree, arg1: P): R
          public visitUnary(arg0: com.sun.source.tree.UnaryTree, arg1: P): R
          public visitBinary(arg0: com.sun.source.tree.BinaryTree, arg1: P): R
          public visitTypeCast(arg0: com.sun.source.tree.TypeCastTree, arg1: P): R
          public visitInstanceOf(arg0: com.sun.source.tree.InstanceOfTree, arg1: P): R
          public visitArrayAccess(arg0: com.sun.source.tree.ArrayAccessTree, arg1: P): R
          public visitMemberSelect(arg0: com.sun.source.tree.MemberSelectTree, arg1: P): R
          public visitMemberReference(arg0: com.sun.source.tree.MemberReferenceTree, arg1: P): R
          public visitIdentifier(arg0: com.sun.source.tree.IdentifierTree, arg1: P): R
          public visitLiteral(arg0: com.sun.source.tree.LiteralTree, arg1: P): R
          public visitPrimitiveType(arg0: com.sun.source.tree.PrimitiveTypeTree, arg1: P): R
          public visitArrayType(arg0: com.sun.source.tree.ArrayTypeTree, arg1: P): R
          public visitParameterizedType(arg0: com.sun.source.tree.ParameterizedTypeTree, arg1: P): R
          public visitUnionType(arg0: com.sun.source.tree.UnionTypeTree, arg1: P): R
          public visitIntersectionType(arg0: com.sun.source.tree.IntersectionTypeTree, arg1: P): R
          public visitTypeParameter(arg0: com.sun.source.tree.TypeParameterTree, arg1: P): R
          public visitWildcard(arg0: com.sun.source.tree.WildcardTree, arg1: P): R
          public visitModifiers(arg0: com.sun.source.tree.ModifiersTree, arg1: P): R
          public visitAnnotation(arg0: com.sun.source.tree.AnnotationTree, arg1: P): R
          public visitAnnotatedType(arg0: com.sun.source.tree.AnnotatedTypeTree, arg1: P): R
          public visitModule(arg0: com.sun.source.tree.ModuleTree, arg1: P): R
          public visitExports(arg0: com.sun.source.tree.ExportsTree, arg1: P): R
          public visitOpens(arg0: com.sun.source.tree.OpensTree, arg1: P): R
          public visitProvides(arg0: com.sun.source.tree.ProvidesTree, arg1: P): R
          public visitRequires(arg0: com.sun.source.tree.RequiresTree, arg1: P): R
          public visitUses(arg0: com.sun.source.tree.UsesTree, arg1: P): R
          public visitErroneous(arg0: com.sun.source.tree.ErroneousTree, arg1: P): R
          public visitOther(arg0: com.sun.source.tree.Tree, arg1: P): R
        }

      }
    }
  }
}
