declare namespace javax {
  namespace security {
    namespace auth {

      class Subject implements java.io.Serializable {
        principals: java.util.Set<java.security.Principal>
        pubCredentials: java.util.Set<java.lang.Object>
        privCredentials: java.util.Set<java.lang.Object>
        public constructor()
        public constructor(arg0: boolean, arg1: java.util.Set<java.security.Principal>, arg2: java.util.Set<unknown>, arg3: java.util.Set<unknown>)
        public setReadOnly(): void
        public isReadOnly(): boolean
        public static getSubject(arg0: java.security.AccessControlContext): javax.security.auth.Subject
        public static doAs<T>(arg0: javax.security.auth.Subject, arg1: java.security.PrivilegedAction<T>): T
        public static doAs<T>(arg0: javax.security.auth.Subject, arg1: java.security.PrivilegedExceptionAction<T>): T
        public static doAsPrivileged<T>(arg0: javax.security.auth.Subject, arg1: java.security.PrivilegedAction<T>, arg2: java.security.AccessControlContext): T
        public static doAsPrivileged<T>(arg0: javax.security.auth.Subject, arg1: java.security.PrivilegedExceptionAction<T>, arg2: java.security.AccessControlContext): T
        public getPrincipals(): java.util.Set<java.security.Principal>
        public getPrincipals<T extends java.security.Principal>(arg0: java.lang.Class<T>): java.util.Set<T>
        public getPublicCredentials(): java.util.Set<java.lang.Object>
        public getPrivateCredentials(): java.util.Set<java.lang.Object>
        public getPublicCredentials<T>(arg0: java.lang.Class<T>): java.util.Set<T>
        public getPrivateCredentials<T>(arg0: java.lang.Class<T>): java.util.Set<T>
        public equals(arg0: java.lang.Object): boolean
        public toString(): java.lang.String
        toString(arg0: boolean): java.lang.String
        public hashCode(): int
      }

    }
  }
}
