declare namespace java {
  namespace beans {

    class EventHandler implements java.lang.reflect.InvocationHandler {
      public constructor(arg0: java.lang.Object | any, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string)
      public getTarget(): java.lang.Object
      public getAction(): java.lang.String
      public getEventPropertyName(): java.lang.String
      public getListenerMethodName(): java.lang.String
      public invoke(arg0: java.lang.Object | any, arg1: java.lang.reflect.Method, arg2: java.lang.Object[] | any[]): java.lang.Object
      public static create<T>(arg0: java.lang.Class<T>, arg1: java.lang.Object | any, arg2: java.lang.String | string): T
      public static create<T>(arg0: java.lang.Class<T>, arg1: java.lang.Object | any, arg2: java.lang.String | string, arg3: java.lang.String | string): T
      public static create<T>(arg0: java.lang.Class<T>, arg1: java.lang.Object | any, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string): T
    }

  }
}
