declare namespace java {
    namespace util {
        namespace concurrent {
            namespace locks {
class LockSupport {
    public static unpark(arg0: java.lang.Thread | java.lang.Thread$$Lambda): void
    public static park(arg0: java.lang.Object): void
    public static parkNanos(arg0: java.lang.Object, arg1: long): void
    public static parkUntil(arg0: java.lang.Object, arg1: long): void
    public static getBlocker(arg0: java.lang.Thread | java.lang.Thread$$Lambda): java.lang.Object
    public static park(): void
    public static parkNanos(arg0: long): void
    public static parkUntil(arg0: long): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}