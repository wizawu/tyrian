declare namespace javax {
  namespace naming {

    class LinkException extends javax.naming.NamingException {
      protected linkResolvedName: javax.naming.Name
      protected linkResolvedObj: java.lang.Object
      protected linkRemainingName: javax.naming.Name
      protected linkExplanation: java.lang.String
      public constructor(arg0: java.lang.String)
      public constructor()
      public getLinkResolvedName(): javax.naming.Name
      public getLinkRemainingName(): javax.naming.Name
      public getLinkResolvedObj(): java.lang.Object
      public getLinkExplanation(): java.lang.String
      public setLinkExplanation(arg0: java.lang.String): void
      public setLinkResolvedName(arg0: javax.naming.Name): void
      public setLinkRemainingName(arg0: javax.naming.Name): void
      public setLinkResolvedObj(arg0: java.lang.Object): void
      public toString(): java.lang.String
      public toString(arg0: boolean): java.lang.String
    }

  }
}
