declare namespace java {
    namespace security {
        class AccessController {
            public static doPrivileged<T>(arg0: java.security.PrivilegedAction<T> | java.security.PrivilegedAction$$Lambda<T>): T
            public static doPrivilegedWithCombiner<T>(arg0: java.security.PrivilegedAction<T> | java.security.PrivilegedAction$$Lambda<T>): T
            public static doPrivileged<T>(arg0: java.security.PrivilegedAction<T> | java.security.PrivilegedAction$$Lambda<T>, arg1: java.security.AccessControlContext): T
            public static doPrivileged<T>(arg0: java.security.PrivilegedAction<T> | java.security.PrivilegedAction$$Lambda<T>, arg1: java.security.AccessControlContext, ...arg2: java.security.Permission[]): T
            public static doPrivilegedWithCombiner<T>(arg0: java.security.PrivilegedAction<T> | java.security.PrivilegedAction$$Lambda<T>, arg1: java.security.AccessControlContext, ...arg2: java.security.Permission[]): T
            public static doPrivileged<T>(arg0: java.security.PrivilegedExceptionAction<T> | java.security.PrivilegedExceptionAction$$Lambda<T>): T
            public static doPrivilegedWithCombiner<T>(arg0: java.security.PrivilegedExceptionAction<T> | java.security.PrivilegedExceptionAction$$Lambda<T>): T
            public static doPrivileged<T>(arg0: java.security.PrivilegedExceptionAction<T> | java.security.PrivilegedExceptionAction$$Lambda<T>, arg1: java.security.AccessControlContext): T
            public static doPrivileged<T>(arg0: java.security.PrivilegedExceptionAction<T> | java.security.PrivilegedExceptionAction$$Lambda<T>, arg1: java.security.AccessControlContext, ...arg2: java.security.Permission[]): T
            public static doPrivilegedWithCombiner<T>(arg0: java.security.PrivilegedExceptionAction<T> | java.security.PrivilegedExceptionAction$$Lambda<T>, arg1: java.security.AccessControlContext, ...arg2: java.security.Permission[]): T
            public static getContext<T>(): java.security.AccessControlContext
            public static checkPermission<T>(arg0: java.security.Permission): void
            public static class: java.lang.Class<any>
        }
    }
}