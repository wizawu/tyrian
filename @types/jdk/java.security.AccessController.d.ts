declare namespace java {
  namespace security {

    class AccessController {
      public static doPrivileged<T>(arg0: java.security.PrivilegedAction<T> | java.security.PrivilegedAction$$lambda<T>): T
      public static doPrivilegedWithCombiner<T>(arg0: java.security.PrivilegedAction<T> | java.security.PrivilegedAction$$lambda<T>): T
      public static doPrivileged<T>(arg0: java.security.PrivilegedAction<T> | java.security.PrivilegedAction$$lambda<T>, arg1: java.security.AccessControlContext): T
      public static doPrivileged<T>(arg0: java.security.PrivilegedAction<T> | java.security.PrivilegedAction$$lambda<T>, arg1: java.security.AccessControlContext, ...vargs: (java.security.Permission)[]): T
      public static doPrivilegedWithCombiner<T>(arg0: java.security.PrivilegedAction<T> | java.security.PrivilegedAction$$lambda<T>, arg1: java.security.AccessControlContext, ...vargs: (java.security.Permission)[]): T
      public static doPrivileged<T>(arg0: java.security.PrivilegedExceptionAction<T> | java.security.PrivilegedExceptionAction$$lambda<T>): T
      public static doPrivilegedWithCombiner<T>(arg0: java.security.PrivilegedExceptionAction<T> | java.security.PrivilegedExceptionAction$$lambda<T>): T
      public static doPrivileged<T>(arg0: java.security.PrivilegedExceptionAction<T> | java.security.PrivilegedExceptionAction$$lambda<T>, arg1: java.security.AccessControlContext): T
      public static doPrivileged<T>(arg0: java.security.PrivilegedExceptionAction<T> | java.security.PrivilegedExceptionAction$$lambda<T>, arg1: java.security.AccessControlContext, ...vargs: (java.security.Permission)[]): T
      public static doPrivilegedWithCombiner<T>(arg0: java.security.PrivilegedExceptionAction<T> | java.security.PrivilegedExceptionAction$$lambda<T>, arg1: java.security.AccessControlContext, ...vargs: (java.security.Permission)[]): T
      static getInheritedAccessControlContext(): java.security.AccessControlContext
      public static getContext(): java.security.AccessControlContext
      public static checkPermission(arg0: java.security.Permission): void
    }

  }
}
