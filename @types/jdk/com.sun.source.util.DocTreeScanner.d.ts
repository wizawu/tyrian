declare namespace com {
  namespace sun {
    namespace source {
      namespace util {

        class DocTreeScanner<R,P> implements com.sun.source.doctree.DocTreeVisitor<R,P> {
          public constructor()
          public scan(arg0: com.sun.source.doctree.DocTree, arg1: P): R
          public scan(arg0: java.lang.Iterable<com.sun.source.doctree.DocTree>, arg1: P): R
          public reduce(arg0: R, arg1: R): R
          public visitAttribute(arg0: com.sun.source.doctree.AttributeTree, arg1: P): R
          public visitAuthor(arg0: com.sun.source.doctree.AuthorTree, arg1: P): R
          public visitComment(arg0: com.sun.source.doctree.CommentTree, arg1: P): R
          public visitDeprecated(arg0: com.sun.source.doctree.DeprecatedTree, arg1: P): R
          public visitDocComment(arg0: com.sun.source.doctree.DocCommentTree, arg1: P): R
          public visitDocRoot(arg0: com.sun.source.doctree.DocRootTree, arg1: P): R
          public visitDocType(arg0: com.sun.source.doctree.DocTypeTree, arg1: P): R
          public visitEndElement(arg0: com.sun.source.doctree.EndElementTree, arg1: P): R
          public visitEntity(arg0: com.sun.source.doctree.EntityTree, arg1: P): R
          public visitErroneous(arg0: com.sun.source.doctree.ErroneousTree, arg1: P): R
          public visitHidden(arg0: com.sun.source.doctree.HiddenTree, arg1: P): R
          public visitIdentifier(arg0: com.sun.source.doctree.IdentifierTree, arg1: P): R
          public visitIndex(arg0: com.sun.source.doctree.IndexTree, arg1: P): R
          public visitInheritDoc(arg0: com.sun.source.doctree.InheritDocTree, arg1: P): R
          public visitLink(arg0: com.sun.source.doctree.LinkTree, arg1: P): R
          public visitLiteral(arg0: com.sun.source.doctree.LiteralTree, arg1: P): R
          public visitParam(arg0: com.sun.source.doctree.ParamTree, arg1: P): R
          public visitProvides(arg0: com.sun.source.doctree.ProvidesTree, arg1: P): R
          public visitReference(arg0: com.sun.source.doctree.ReferenceTree, arg1: P): R
          public visitReturn(arg0: com.sun.source.doctree.ReturnTree, arg1: P): R
          public visitSee(arg0: com.sun.source.doctree.SeeTree, arg1: P): R
          public visitSerial(arg0: com.sun.source.doctree.SerialTree, arg1: P): R
          public visitSerialData(arg0: com.sun.source.doctree.SerialDataTree, arg1: P): R
          public visitSerialField(arg0: com.sun.source.doctree.SerialFieldTree, arg1: P): R
          public visitSince(arg0: com.sun.source.doctree.SinceTree, arg1: P): R
          public visitStartElement(arg0: com.sun.source.doctree.StartElementTree, arg1: P): R
          public visitSummary(arg0: com.sun.source.doctree.SummaryTree, arg1: P): R
          public visitText(arg0: com.sun.source.doctree.TextTree, arg1: P): R
          public visitThrows(arg0: com.sun.source.doctree.ThrowsTree, arg1: P): R
          public visitUnknownBlockTag(arg0: com.sun.source.doctree.UnknownBlockTagTree, arg1: P): R
          public visitUnknownInlineTag(arg0: com.sun.source.doctree.UnknownInlineTagTree, arg1: P): R
          public visitUses(arg0: com.sun.source.doctree.UsesTree, arg1: P): R
          public visitValue(arg0: com.sun.source.doctree.ValueTree, arg1: P): R
          public visitVersion(arg0: com.sun.source.doctree.VersionTree, arg1: P): R
          public visitOther(arg0: com.sun.source.doctree.DocTree, arg1: P): R
        }

      }
    }
  }
}
