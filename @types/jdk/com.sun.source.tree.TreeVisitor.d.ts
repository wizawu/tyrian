declare namespace com {
  namespace sun {
    namespace source {
      namespace tree {

        interface TreeVisitor<R,P> {
          visitAnnotatedType(arg0: com.sun.source.tree.AnnotatedTypeTree, arg1: P): R
          visitAnnotation(arg0: com.sun.source.tree.AnnotationTree, arg1: P): R
          visitMethodInvocation(arg0: com.sun.source.tree.MethodInvocationTree, arg1: P): R
          visitAssert(arg0: com.sun.source.tree.AssertTree, arg1: P): R
          visitAssignment(arg0: com.sun.source.tree.AssignmentTree, arg1: P): R
          visitCompoundAssignment(arg0: com.sun.source.tree.CompoundAssignmentTree, arg1: P): R
          visitBinary(arg0: com.sun.source.tree.BinaryTree, arg1: P): R
          visitBlock(arg0: com.sun.source.tree.BlockTree, arg1: P): R
          visitBreak(arg0: com.sun.source.tree.BreakTree, arg1: P): R
          visitCase(arg0: com.sun.source.tree.CaseTree, arg1: P): R
          visitCatch(arg0: com.sun.source.tree.CatchTree, arg1: P): R
          visitClass(arg0: com.sun.source.tree.ClassTree, arg1: P): R
          visitConditionalExpression(arg0: com.sun.source.tree.ConditionalExpressionTree, arg1: P): R
          visitContinue(arg0: com.sun.source.tree.ContinueTree, arg1: P): R
          visitDoWhileLoop(arg0: com.sun.source.tree.DoWhileLoopTree, arg1: P): R
          visitErroneous(arg0: com.sun.source.tree.ErroneousTree, arg1: P): R
          visitExpressionStatement(arg0: com.sun.source.tree.ExpressionStatementTree, arg1: P): R
          visitEnhancedForLoop(arg0: com.sun.source.tree.EnhancedForLoopTree, arg1: P): R
          visitForLoop(arg0: com.sun.source.tree.ForLoopTree, arg1: P): R
          visitIdentifier(arg0: com.sun.source.tree.IdentifierTree, arg1: P): R
          visitIf(arg0: com.sun.source.tree.IfTree, arg1: P): R
          visitImport(arg0: com.sun.source.tree.ImportTree, arg1: P): R
          visitArrayAccess(arg0: com.sun.source.tree.ArrayAccessTree, arg1: P): R
          visitLabeledStatement(arg0: com.sun.source.tree.LabeledStatementTree, arg1: P): R
          visitLiteral(arg0: com.sun.source.tree.LiteralTree, arg1: P): R
          visitMethod(arg0: com.sun.source.tree.MethodTree, arg1: P): R
          visitModifiers(arg0: com.sun.source.tree.ModifiersTree, arg1: P): R
          visitNewArray(arg0: com.sun.source.tree.NewArrayTree, arg1: P): R
          visitNewClass(arg0: com.sun.source.tree.NewClassTree, arg1: P): R
          visitLambdaExpression(arg0: com.sun.source.tree.LambdaExpressionTree, arg1: P): R
          visitPackage(arg0: com.sun.source.tree.PackageTree, arg1: P): R
          visitParenthesized(arg0: com.sun.source.tree.ParenthesizedTree, arg1: P): R
          visitReturn(arg0: com.sun.source.tree.ReturnTree, arg1: P): R
          visitMemberSelect(arg0: com.sun.source.tree.MemberSelectTree, arg1: P): R
          visitMemberReference(arg0: com.sun.source.tree.MemberReferenceTree, arg1: P): R
          visitEmptyStatement(arg0: com.sun.source.tree.EmptyStatementTree, arg1: P): R
          visitSwitch(arg0: com.sun.source.tree.SwitchTree, arg1: P): R
          visitSynchronized(arg0: com.sun.source.tree.SynchronizedTree, arg1: P): R
          visitThrow(arg0: com.sun.source.tree.ThrowTree, arg1: P): R
          visitCompilationUnit(arg0: com.sun.source.tree.CompilationUnitTree, arg1: P): R
          visitTry(arg0: com.sun.source.tree.TryTree, arg1: P): R
          visitParameterizedType(arg0: com.sun.source.tree.ParameterizedTypeTree, arg1: P): R
          visitUnionType(arg0: com.sun.source.tree.UnionTypeTree, arg1: P): R
          visitIntersectionType(arg0: com.sun.source.tree.IntersectionTypeTree, arg1: P): R
          visitArrayType(arg0: com.sun.source.tree.ArrayTypeTree, arg1: P): R
          visitTypeCast(arg0: com.sun.source.tree.TypeCastTree, arg1: P): R
          visitPrimitiveType(arg0: com.sun.source.tree.PrimitiveTypeTree, arg1: P): R
          visitTypeParameter(arg0: com.sun.source.tree.TypeParameterTree, arg1: P): R
          visitInstanceOf(arg0: com.sun.source.tree.InstanceOfTree, arg1: P): R
          visitUnary(arg0: com.sun.source.tree.UnaryTree, arg1: P): R
          visitVariable(arg0: com.sun.source.tree.VariableTree, arg1: P): R
          visitWhileLoop(arg0: com.sun.source.tree.WhileLoopTree, arg1: P): R
          visitWildcard(arg0: com.sun.source.tree.WildcardTree, arg1: P): R
          visitModule(arg0: com.sun.source.tree.ModuleTree, arg1: P): R
          visitExports(arg0: com.sun.source.tree.ExportsTree, arg1: P): R
          visitOpens(arg0: com.sun.source.tree.OpensTree, arg1: P): R
          visitProvides(arg0: com.sun.source.tree.ProvidesTree, arg1: P): R
          visitRequires(arg0: com.sun.source.tree.RequiresTree, arg1: P): R
          visitUses(arg0: com.sun.source.tree.UsesTree, arg1: P): R
          visitOther(arg0: com.sun.source.tree.Tree, arg1: P): R
        }

      }
    }
  }
}
