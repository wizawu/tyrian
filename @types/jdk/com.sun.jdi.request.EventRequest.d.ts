declare namespace com {
  namespace sun {
    namespace jdi {
      namespace request {

        interface EventRequest extends com.sun.jdi.Mirror {
          public static readonly SUSPEND_NONE: int
          public static readonly SUSPEND_EVENT_THREAD: int
          public static readonly SUSPEND_ALL: int
          isEnabled(): boolean
          setEnabled(arg0: boolean | java.lang.Boolean): void
          enable(): void
          disable(): void
          addCountFilter(arg0: number | java.lang.Integer): void
          setSuspendPolicy(arg0: number | java.lang.Integer): void
          suspendPolicy(): number
          putProperty(arg0: java.lang.Object | any, arg1: java.lang.Object | any): void
          getProperty(arg0: java.lang.Object | any): java.lang.Object
        }

      }
    }
  }
}
