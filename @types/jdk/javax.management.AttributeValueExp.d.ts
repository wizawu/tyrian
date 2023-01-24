declare namespace javax {
  namespace management {
    class AttributeValueExp implements javax.management.ValueExp {
      public constructor()
      public constructor(arg0: java.lang.String | string)
      public getAttributeName(): java.lang.String
      public apply(arg0: javax.management.ObjectName): javax.management.ValueExp
      public toString(): java.lang.String
      public setMBeanServer(arg0: javax.management.MBeanServer): void
      protected getAttribute(arg0: javax.management.ObjectName): java.lang.Object
    }
  }
}
