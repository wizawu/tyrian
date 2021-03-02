declare namespace java {
  namespace io {

    class WriteAbortedException extends java.io.ObjectStreamException {
      public detail: java.lang.Exception
      public constructor(arg0: java.lang.String, arg1: java.lang.Exception)
      public getMessage(): java.lang.String
      public getCause(): java.lang.Throwable
    }

  }
}
