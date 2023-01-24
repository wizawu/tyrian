declare namespace java {
  namespace awt {
    namespace event {
      class InvocationEvent extends java.awt.AWTEvent implements java.awt.ActiveEvent {
        public static readonly INVOCATION_FIRST: int
        public static readonly INVOCATION_DEFAULT: int
        public static readonly INVOCATION_LAST: int
        protected runnable: java.lang.Runnable
        protected notifier: java.lang.Object
        protected catchExceptions: boolean
        public constructor(arg0: java.lang.Object | any, arg1: java.lang.Runnable | java.lang.Runnable$$lambda)
        public constructor(
          arg0: java.lang.Object | any,
          arg1: java.lang.Runnable | java.lang.Runnable$$lambda,
          arg2: java.lang.Object | any,
          arg3: boolean | java.lang.Boolean
        )
        public constructor(
          arg0: java.lang.Object | any,
          arg1: java.lang.Runnable | java.lang.Runnable$$lambda,
          arg2: java.lang.Runnable | java.lang.Runnable$$lambda,
          arg3: boolean | java.lang.Boolean
        )
        protected constructor(
          arg0: java.lang.Object | any,
          arg1: number | java.lang.Integer,
          arg2: java.lang.Runnable | java.lang.Runnable$$lambda,
          arg3: java.lang.Object | any,
          arg4: boolean | java.lang.Boolean
        )
        public dispatch(): void
        public getException(): java.lang.Exception
        public getThrowable(): java.lang.Throwable
        public getWhen(): number
        public isDispatched(): boolean
        public paramString(): java.lang.String
      }
    }
  }
}
