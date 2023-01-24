declare namespace javax {
  namespace management {
    class RuntimeErrorException extends javax.management.JMRuntimeException {
      public constructor(arg0: java.lang.Error)
      public constructor(arg0: java.lang.Error, arg1: java.lang.String | string)
      public getTargetError(): java.lang.Error
      public getCause(): java.lang.Throwable
    }
  }
}
