declare namespace javax {
  namespace management {

    class ReflectionException extends javax.management.JMException {
      public constructor(arg0: java.lang.Exception)
      public constructor(arg0: java.lang.Exception, arg1: java.lang.String)
      public getTargetException(): java.lang.Exception
      public getCause(): java.lang.Throwable
    }

  }
}
