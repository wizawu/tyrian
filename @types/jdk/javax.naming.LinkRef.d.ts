declare namespace javax {
  namespace naming {

    class LinkRef extends javax.naming.Reference {
      static readonly linkClassName: java.lang.String
      static readonly linkAddrType: java.lang.String
      public constructor(arg0: javax.naming.Name)
      public constructor(arg0: java.lang.String | string)
      public getLinkName(): java.lang.String
    }

  }
}
