declare namespace java {
  namespace lang {

    class StackTraceElement implements java.io.Serializable {
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: number | java.lang.Integer)
      public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: number | java.lang.Integer)
      public getFileName(): java.lang.String
      public getLineNumber(): number
      public getModuleName(): java.lang.String
      public getModuleVersion(): java.lang.String
      public getClassLoaderName(): java.lang.String
      public getClassName(): java.lang.String
      public getMethodName(): java.lang.String
      public isNativeMethod(): boolean
      public toString(): java.lang.String
      public equals(arg0: java.lang.Object | any): boolean
      public hashCode(): number
      static of(arg0: java.lang.Throwable, arg1: number | java.lang.Integer): java.lang.StackTraceElement[]
      static of(arg0: java.lang.StackFrameInfo): java.lang.StackTraceElement
    }

  }
}
