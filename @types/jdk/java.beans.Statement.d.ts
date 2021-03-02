declare namespace java {
  namespace beans {

    class Statement {
      static defaultExceptionListener: java.beans.ExceptionListener
      loader: java.lang.ClassLoader
      public constructor(arg0: java.lang.Object | any, arg1: java.lang.String | string, arg2: java.lang.Object[])
      public getTarget(): java.lang.Object
      public getMethodName(): java.lang.String
      public getArguments(): java.lang.Object[]
      public execute(): void
      invoke(): java.lang.Object
      instanceName(arg0: java.lang.Object | any): java.lang.String
      public toString(): java.lang.String
      static getMethod(arg0: java.lang.Class<unknown>, arg1: java.lang.String | string, ...vargs: (java.lang.Class<unknown>)[]): java.lang.reflect.Method
    }

  }
}
