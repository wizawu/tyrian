declare namespace javax {
    namespace security {
        namespace auth {
class Subject implements java.io.Serializable {
    public constructor()
    public constructor(arg0: boolean, arg1: java.util.Set<java.security.Principal>, arg2: java.util.Set<any>, arg3: java.util.Set<any>)
    public setReadOnly(): void
    public isReadOnly(): boolean
    public static getSubject(arg0: java.security.AccessControlContext): javax.security.auth.Subject
    public static doAs<T>(arg0: javax.security.auth.Subject, arg1: java.security.PrivilegedAction<T> | java.security.PrivilegedAction$$Lambda<T>): T
    public static doAs<T>(arg0: javax.security.auth.Subject, arg1: java.security.PrivilegedExceptionAction<T> | java.security.PrivilegedExceptionAction$$Lambda<T>): T
    public static doAsPrivileged<T>(arg0: javax.security.auth.Subject, arg1: java.security.PrivilegedAction<T> | java.security.PrivilegedAction$$Lambda<T>, arg2: java.security.AccessControlContext): T
    public static doAsPrivileged<T>(arg0: javax.security.auth.Subject, arg1: java.security.PrivilegedExceptionAction<T> | java.security.PrivilegedExceptionAction$$Lambda<T>, arg2: java.security.AccessControlContext): T
    public getPrincipals(): java.util.Set<java.security.Principal>
    public getPrincipals<T extends java.security.Principal>(arg0: java.lang.Class<T>): java.util.Set<T>
    public getPublicCredentials<T extends java.security.Principal>(): java.util.Set<java.lang.Object>
    public getPrivateCredentials<T extends java.security.Principal>(): java.util.Set<java.lang.Object>
    public getPublicCredentials<T>(arg0: java.lang.Class<T>): java.util.Set<T>
    public getPrivateCredentials<T>(arg0: java.lang.Class<T>): java.util.Set<T>
    public equals<T>(arg0: java.lang.Object): boolean
    public toString<T>(): string
    public hashCode<T>(): int
    public static class: java.lang.Class<any>
}

        }
    }
}