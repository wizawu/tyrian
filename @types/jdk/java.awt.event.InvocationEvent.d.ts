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
        public constructor(arg0: java.lang.Object, arg1: java.lang.Runnable)
        public constructor(arg0: java.lang.Object, arg1: java.lang.Runnable, arg2: java.lang.Object, arg3: boolean)
        public constructor(arg0: java.lang.Object, arg1: java.lang.Runnable, arg2: java.lang.Runnable, arg3: boolean)
        protected constructor(arg0: java.lang.Object, arg1: int, arg2: java.lang.Runnable, arg3: java.lang.Object, arg4: boolean)
        public dispatch(): void
        public getException(): java.lang.Exception
        public getThrowable(): java.lang.Throwable
        public getWhen(): long
        public isDispatched(): boolean
        public paramString(): java.lang.String
      }

    }
  }
}
