declare namespace javax {
  namespace management {
    class MBeanPermission extends java.security.Permission {
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
      public constructor(
        arg0: java.lang.String | string,
        arg1: java.lang.String | string,
        arg2: javax.management.ObjectName,
        arg3: java.lang.String | string
      )
      public getActions(): java.lang.String
      public hashCode(): number
      public implies(arg0: java.security.Permission): boolean
      public equals(arg0: java.lang.Object | any): boolean
    }
  }
}
