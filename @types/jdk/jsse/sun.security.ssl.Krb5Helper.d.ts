declare namespace sun {
    namespace security {
        namespace ssl {
class Krb5Helper {
    public static isAvailable(): boolean
    public static getClientSubject(arg0: java.security.AccessControlContext): javax.security.auth.Subject
    public static getServerSubject(arg0: java.security.AccessControlContext): javax.security.auth.Subject
    public static getServiceCreds(arg0: java.security.AccessControlContext): java.lang.Object
    public static getServerPrincipalName(arg0: java.lang.Object): string
    public static getPrincipalHostName(arg0: java.security.Principal): string
    public static getServicePermission(arg0: java.lang.String | string, arg1: java.lang.String | string): java.security.Permission
    public static isRelated(arg0: javax.security.auth.Subject, arg1: java.security.Principal): boolean
    public static class: java.lang.Class<any>
}

        }
    }
}