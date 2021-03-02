declare namespace java {
  namespace lang {

    interface StackWalker$StackFrame {
      getClassName(): java.lang.String
      getMethodName(): java.lang.String
      getDeclaringClass(): java.lang.Class<unknown>
      getMethodType(): java.lang.invoke.MethodType
      getDescriptor(): java.lang.String
      getByteCodeIndex(): int
      getFileName(): java.lang.String
      getLineNumber(): int
      isNativeMethod(): boolean
      toStackTraceElement(): java.lang.StackTraceElement
    }

  }
}
