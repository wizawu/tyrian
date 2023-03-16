declare namespace com {
  namespace sun {
    namespace source {
      namespace doctree {
        interface DocTreeVisitor<R, P> {
          visitAttribute(arg0: com.sun.source.doctree.AttributeTree, arg1: P): R
          visitAuthor(arg0: com.sun.source.doctree.AuthorTree, arg1: P): R
          visitComment(arg0: com.sun.source.doctree.CommentTree, arg1: P): R
          visitDeprecated(arg0: com.sun.source.doctree.DeprecatedTree, arg1: P): R
          visitDocComment(arg0: com.sun.source.doctree.DocCommentTree, arg1: P): R
          visitDocRoot(arg0: com.sun.source.doctree.DocRootTree, arg1: P): R
          visitDocType?(arg0: com.sun.source.doctree.DocTypeTree, arg1: P): R
          visitEndElement(arg0: com.sun.source.doctree.EndElementTree, arg1: P): R
          visitEntity(arg0: com.sun.source.doctree.EntityTree, arg1: P): R
          visitErroneous(arg0: com.sun.source.doctree.ErroneousTree, arg1: P): R
          visitHidden?(arg0: com.sun.source.doctree.HiddenTree, arg1: P): R
          visitIdentifier(arg0: com.sun.source.doctree.IdentifierTree, arg1: P): R
          visitIndex?(arg0: com.sun.source.doctree.IndexTree, arg1: P): R
          visitInheritDoc(arg0: com.sun.source.doctree.InheritDocTree, arg1: P): R
          visitLink(arg0: com.sun.source.doctree.LinkTree, arg1: P): R
          visitLiteral(arg0: com.sun.source.doctree.LiteralTree, arg1: P): R
          visitParam(arg0: com.sun.source.doctree.ParamTree, arg1: P): R
          visitProvides?(arg0: com.sun.source.doctree.ProvidesTree, arg1: P): R
          visitReference(arg0: com.sun.source.doctree.ReferenceTree, arg1: P): R
          visitReturn(arg0: com.sun.source.doctree.ReturnTree, arg1: P): R
          visitSee(arg0: com.sun.source.doctree.SeeTree, arg1: P): R
          visitSerial(arg0: com.sun.source.doctree.SerialTree, arg1: P): R
          visitSerialData(arg0: com.sun.source.doctree.SerialDataTree, arg1: P): R
          visitSerialField(arg0: com.sun.source.doctree.SerialFieldTree, arg1: P): R
          visitSince(arg0: com.sun.source.doctree.SinceTree, arg1: P): R
          visitStartElement(arg0: com.sun.source.doctree.StartElementTree, arg1: P): R
          visitSummary?(arg0: com.sun.source.doctree.SummaryTree, arg1: P): R
          visitText(arg0: com.sun.source.doctree.TextTree, arg1: P): R
          visitThrows(arg0: com.sun.source.doctree.ThrowsTree, arg1: P): R
          visitUnknownBlockTag(arg0: com.sun.source.doctree.UnknownBlockTagTree, arg1: P): R
          visitUnknownInlineTag(arg0: com.sun.source.doctree.UnknownInlineTagTree, arg1: P): R
          visitUses?(arg0: com.sun.source.doctree.UsesTree, arg1: P): R
          visitValue(arg0: com.sun.source.doctree.ValueTree, arg1: P): R
          visitVersion(arg0: com.sun.source.doctree.VersionTree, arg1: P): R
          visitOther(arg0: com.sun.source.doctree.DocTree, arg1: P): R
        }
      }
    }
  }
}
