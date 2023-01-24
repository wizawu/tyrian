declare namespace com {
  namespace sun {
    namespace source {
      namespace util {
        interface DocTreeFactory {
          newAttributeTree(
            arg0: javax.lang.model.element.Name,
            arg1: com.sun.source.doctree.AttributeTree$ValueKind,
            arg2: java.util.List<com.sun.source.doctree.DocTree>
          ): com.sun.source.doctree.AttributeTree
          newAuthorTree(arg0: java.util.List<com.sun.source.doctree.DocTree>): com.sun.source.doctree.AuthorTree
          newCodeTree(arg0: com.sun.source.doctree.TextTree): com.sun.source.doctree.LiteralTree
          newCommentTree(arg0: java.lang.String | string): com.sun.source.doctree.CommentTree
          newDeprecatedTree(arg0: java.util.List<com.sun.source.doctree.DocTree>): com.sun.source.doctree.DeprecatedTree
          newDocCommentTree(
            arg0: java.util.List<com.sun.source.doctree.DocTree>,
            arg1: java.util.List<com.sun.source.doctree.DocTree>
          ): com.sun.source.doctree.DocCommentTree
          newDocCommentTree(
            arg0: java.util.List<com.sun.source.doctree.DocTree>,
            arg1: java.util.List<com.sun.source.doctree.DocTree>,
            arg2: java.util.List<com.sun.source.doctree.DocTree>,
            arg3: java.util.List<com.sun.source.doctree.DocTree>
          ): com.sun.source.doctree.DocCommentTree
          newDocRootTree(): com.sun.source.doctree.DocRootTree
          newDocTypeTree(arg0: java.lang.String | string): com.sun.source.doctree.DocTypeTree
          newEndElementTree(arg0: javax.lang.model.element.Name): com.sun.source.doctree.EndElementTree
          newEntityTree(arg0: javax.lang.model.element.Name): com.sun.source.doctree.EntityTree
          newErroneousTree(
            arg0: java.lang.String | string,
            arg1: javax.tools.Diagnostic<javax.tools.JavaFileObject>
          ): com.sun.source.doctree.ErroneousTree
          newExceptionTree(
            arg0: com.sun.source.doctree.ReferenceTree,
            arg1: java.util.List<com.sun.source.doctree.DocTree>
          ): com.sun.source.doctree.ThrowsTree
          newHiddenTree(arg0: java.util.List<com.sun.source.doctree.DocTree>): com.sun.source.doctree.HiddenTree
          newIdentifierTree(arg0: javax.lang.model.element.Name): com.sun.source.doctree.IdentifierTree
          newIndexTree(
            arg0: com.sun.source.doctree.DocTree,
            arg1: java.util.List<com.sun.source.doctree.DocTree>
          ): com.sun.source.doctree.IndexTree
          newInheritDocTree(): com.sun.source.doctree.InheritDocTree
          newLinkTree(
            arg0: com.sun.source.doctree.ReferenceTree,
            arg1: java.util.List<com.sun.source.doctree.DocTree>
          ): com.sun.source.doctree.LinkTree
          newLinkPlainTree(
            arg0: com.sun.source.doctree.ReferenceTree,
            arg1: java.util.List<com.sun.source.doctree.DocTree>
          ): com.sun.source.doctree.LinkTree
          newLiteralTree(arg0: com.sun.source.doctree.TextTree): com.sun.source.doctree.LiteralTree
          newParamTree(
            arg0: boolean | java.lang.Boolean,
            arg1: com.sun.source.doctree.IdentifierTree,
            arg2: java.util.List<com.sun.source.doctree.DocTree>
          ): com.sun.source.doctree.ParamTree
          newProvidesTree(
            arg0: com.sun.source.doctree.ReferenceTree,
            arg1: java.util.List<com.sun.source.doctree.DocTree>
          ): com.sun.source.doctree.ProvidesTree
          newReferenceTree(arg0: java.lang.String | string): com.sun.source.doctree.ReferenceTree
          newReturnTree(arg0: java.util.List<com.sun.source.doctree.DocTree>): com.sun.source.doctree.ReturnTree
          newSeeTree(arg0: java.util.List<com.sun.source.doctree.DocTree>): com.sun.source.doctree.SeeTree
          newSerialTree(arg0: java.util.List<com.sun.source.doctree.DocTree>): com.sun.source.doctree.SerialTree
          newSerialDataTree(arg0: java.util.List<com.sun.source.doctree.DocTree>): com.sun.source.doctree.SerialDataTree
          newSerialFieldTree(
            arg0: com.sun.source.doctree.IdentifierTree,
            arg1: com.sun.source.doctree.ReferenceTree,
            arg2: java.util.List<com.sun.source.doctree.DocTree>
          ): com.sun.source.doctree.SerialFieldTree
          newSinceTree(arg0: java.util.List<com.sun.source.doctree.DocTree>): com.sun.source.doctree.SinceTree
          newStartElementTree(
            arg0: javax.lang.model.element.Name,
            arg1: java.util.List<com.sun.source.doctree.DocTree>,
            arg2: boolean | java.lang.Boolean
          ): com.sun.source.doctree.StartElementTree
          newSummaryTree(arg0: java.util.List<com.sun.source.doctree.DocTree>): com.sun.source.doctree.SummaryTree
          newTextTree(arg0: java.lang.String | string): com.sun.source.doctree.TextTree
          newThrowsTree(
            arg0: com.sun.source.doctree.ReferenceTree,
            arg1: java.util.List<com.sun.source.doctree.DocTree>
          ): com.sun.source.doctree.ThrowsTree
          newUnknownBlockTagTree(
            arg0: javax.lang.model.element.Name,
            arg1: java.util.List<com.sun.source.doctree.DocTree>
          ): com.sun.source.doctree.UnknownBlockTagTree
          newUnknownInlineTagTree(
            arg0: javax.lang.model.element.Name,
            arg1: java.util.List<com.sun.source.doctree.DocTree>
          ): com.sun.source.doctree.UnknownInlineTagTree
          newUsesTree(
            arg0: com.sun.source.doctree.ReferenceTree,
            arg1: java.util.List<com.sun.source.doctree.DocTree>
          ): com.sun.source.doctree.UsesTree
          newValueTree(arg0: com.sun.source.doctree.ReferenceTree): com.sun.source.doctree.ValueTree
          newVersionTree(arg0: java.util.List<com.sun.source.doctree.DocTree>): com.sun.source.doctree.VersionTree
          at(arg0: number | java.lang.Integer): com.sun.source.util.DocTreeFactory
          getFirstSentence(
            arg0: java.util.List<com.sun.source.doctree.DocTree>
          ): java.util.List<com.sun.source.doctree.DocTree>
        }
      }
    }
  }
}
