declare namespace java {
  namespace util {
    namespace concurrent {
      namespace locks {
        class LockSupport {
          public static unpark(arg0: java.lang.Thread): void
          public static park(arg0: java.lang.Object | any): void
          public static parkNanos(arg0: java.lang.Object | any, arg1: number | java.lang.Long): void
          public static parkUntil(arg0: java.lang.Object | any, arg1: number | java.lang.Long): void
          public static getBlocker(arg0: java.lang.Thread): java.lang.Object
          public static park(): void
          public static parkNanos(arg0: number | java.lang.Long): void
          public static parkUntil(arg0: number | java.lang.Long): void
          static nextSecondarySeed(): number
          static getThreadId(arg0: java.lang.Thread): number
        }
      }
    }
  }
}
