declare namespace javax {
  namespace management {
    class StringValueExp implements javax.management.ValueExp {
      public constructor()
      public constructor(arg0: java.lang.String | string)
      public getValue(): java.lang.String
      public toString(): java.lang.String
      public setMBeanServer(arg0: javax.management.MBeanServer): void
      public apply(arg0: javax.management.ObjectName): javax.management.ValueExp
    }
  }
}
