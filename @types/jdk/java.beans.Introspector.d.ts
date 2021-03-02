declare namespace java {
  namespace beans {

    class Introspector {
      public static readonly USE_ALL_BEANINFO: int
      public static readonly IGNORE_IMMEDIATE_BEANINFO: int
      public static readonly IGNORE_ALL_BEANINFO: int
      static readonly ADD_PREFIX: java.lang.String
      static readonly REMOVE_PREFIX: java.lang.String
      static readonly GET_PREFIX: java.lang.String
      static readonly SET_PREFIX: java.lang.String
      static readonly IS_PREFIX: java.lang.String
      public static getBeanInfo(arg0: java.lang.Class<unknown>): java.beans.BeanInfo
      public static getBeanInfo(arg0: java.lang.Class<unknown>, arg1: int): java.beans.BeanInfo
      public static getBeanInfo(arg0: java.lang.Class<unknown>, arg1: java.lang.Class<unknown>): java.beans.BeanInfo
      public static getBeanInfo(arg0: java.lang.Class<unknown>, arg1: java.lang.Class<unknown>, arg2: int): java.beans.BeanInfo
      public static decapitalize(arg0: java.lang.String): java.lang.String
      public static getBeanInfoSearchPath(): java.lang.String[]
      public static setBeanInfoSearchPath(arg0: java.lang.String[]): void
      public static flushCaches(): void
      public static flushFromCaches(arg0: java.lang.Class<unknown>): void
      static findMethod(arg0: java.lang.Class<unknown>, arg1: java.lang.String, arg2: int): java.lang.reflect.Method
      static findMethod(arg0: java.lang.Class<unknown>, arg1: java.lang.String, arg2: int, arg3: java.lang.Class<unknown>[]): java.lang.reflect.Method
      static isSubclass(arg0: java.lang.Class<unknown>, arg1: java.lang.Class<unknown>): boolean
      static instantiate(arg0: java.lang.Class<unknown>, arg1: java.lang.String): java.lang.Object
    }

  }
}
