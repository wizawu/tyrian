declare namespace java {
  namespace lang {

    class StackTraceElement implements java.io.Serializable {
      public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: int)
      public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String, arg3: java.lang.String, arg4: java.lang.String, arg5: java.lang.String, arg6: int)
      public getFileName(): java.lang.String
      public getLineNumber(): int
      public getModuleName(): java.lang.String
      public getModuleVersion(): java.lang.String
      public getClassLoaderName(): java.lang.String
      public getClassName(): java.lang.String
      public getMethodName(): java.lang.String
      public isNativeMethod(): boolean
      public toString(): java.lang.String
      public equals(arg0: java.lang.Object): boolean
      public hashCode(): int
      static of(arg0: java.lang.Throwable, arg1: int): java.lang.StackTraceElement[]
      static of(arg0: java.lang.StackFrameInfo): java.lang.StackTraceElement
    }

  }
}
