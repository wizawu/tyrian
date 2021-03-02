declare namespace java {
  namespace beans {

    class Beans {
      public constructor()
      public static instantiate(arg0: java.lang.ClassLoader, arg1: java.lang.String | string): java.lang.Object
      public static instantiate(arg0: java.lang.ClassLoader, arg1: java.lang.String | string, arg2: java.beans.beancontext.BeanContext): java.lang.Object
      public static instantiate(arg0: java.lang.ClassLoader, arg1: java.lang.String | string, arg2: java.beans.beancontext.BeanContext, arg3: java.beans.AppletInitializer): java.lang.Object
      public static getInstanceOf(arg0: java.lang.Object | any, arg1: java.lang.Class<unknown>): java.lang.Object
      public static isInstanceOf(arg0: java.lang.Object | any, arg1: java.lang.Class<unknown>): boolean
      public static isDesignTime(): boolean
      public static isGuiAvailable(): boolean
      public static setDesignTime(arg0: boolean | java.lang.Boolean): void
      public static setGuiAvailable(arg0: boolean | java.lang.Boolean): void
    }

  }
}
