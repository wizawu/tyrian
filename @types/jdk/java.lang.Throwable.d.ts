declare namespace java {
  namespace lang {

    class Throwable implements java.io.Serializable {
      static readonly $assertionsDisabled: boolean
      public constructor()
      public constructor(arg0: java.lang.String)
      public constructor(arg0: java.lang.String, arg1: java.lang.Throwable)
      public constructor(arg0: java.lang.Throwable)
      protected constructor(arg0: java.lang.String, arg1: java.lang.Throwable, arg2: boolean, arg3: boolean)
      public getMessage(): java.lang.String
      public getLocalizedMessage(): java.lang.String
      public getCause(): java.lang.Throwable
      public initCause(arg0: java.lang.Throwable): java.lang.Throwable
      public toString(): java.lang.String
      public printStackTrace(): void
      public printStackTrace(arg0: java.io.PrintStream): void
      public printStackTrace(arg0: java.io.PrintWriter): void
      public fillInStackTrace(): java.lang.Throwable
      public getStackTrace(): java.lang.StackTraceElement[]
      public setStackTrace(arg0: java.lang.StackTraceElement[]): void
      public addSuppressed(arg0: java.lang.Throwable): void
      public getSuppressed(): java.lang.Throwable[]
    }

  }
}
