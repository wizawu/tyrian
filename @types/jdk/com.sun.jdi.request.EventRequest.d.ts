declare namespace com {
  namespace sun {
    namespace jdi {
      namespace request {

        interface EventRequest extends com.sun.jdi.Mirror {
          public static readonly SUSPEND_NONE: int
          public static readonly SUSPEND_EVENT_THREAD: int
          public static readonly SUSPEND_ALL: int
          isEnabled(): boolean
          setEnabled(arg0: boolean): void
          enable(): void
          disable(): void
          addCountFilter(arg0: int): void
          setSuspendPolicy(arg0: int): void
          suspendPolicy(): int
          putProperty(arg0: java.lang.Object, arg1: java.lang.Object): void
          getProperty(arg0: java.lang.Object): java.lang.Object
        }

      }
    }
  }
}
