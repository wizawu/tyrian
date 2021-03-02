declare namespace java {
  namespace beans {

    class EventHandler implements java.lang.reflect.InvocationHandler {
      public constructor(arg0: java.lang.Object, arg1: java.lang.String, arg2: java.lang.String, arg3: java.lang.String)
      public getTarget(): java.lang.Object
      public getAction(): java.lang.String
      public getEventPropertyName(): java.lang.String
      public getListenerMethodName(): java.lang.String
      public invoke(arg0: java.lang.Object, arg1: java.lang.reflect.Method, arg2: java.lang.Object[]): java.lang.Object
      public static create<T>(arg0: java.lang.Class<T>, arg1: java.lang.Object, arg2: java.lang.String): T
      public static create<T>(arg0: java.lang.Class<T>, arg1: java.lang.Object, arg2: java.lang.String, arg3: java.lang.String): T
      public static create<T>(arg0: java.lang.Class<T>, arg1: java.lang.Object, arg2: java.lang.String, arg3: java.lang.String, arg4: java.lang.String): T
    }

  }
}
