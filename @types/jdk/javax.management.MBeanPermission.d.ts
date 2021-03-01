declare namespace javax {
  namespace management {

    class MBeanPermission extends java.security.Permission {

      public constructor(arg0: java.lang.String, arg1: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: javax.management.ObjectName, arg3: java.lang.String)
      public getActions(): java.lang.String
      public hashCode(): int
      public implies(arg0: java.security.Permission): boolean
      public equals(arg0: java.lang.Object): boolean
    }

  }
}
