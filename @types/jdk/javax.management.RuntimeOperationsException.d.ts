declare namespace javax {
  namespace management {

    class RuntimeOperationsException extends javax.management.JMRuntimeException {
      public constructor(arg0: java.lang.RuntimeException)
      public constructor(arg0: java.lang.RuntimeException, arg1: java.lang.String)
      public getTargetException(): java.lang.RuntimeException
      public getCause(): java.lang.Throwable
    }

  }
}
