declare namespace sun {
    namespace security {
        namespace ssl {
interface Krb5Proxy {
    getClientSubject(arg0: java.security.AccessControlContext): javax.security.auth.Subject
    getServerSubject(arg0: java.security.AccessControlContext): javax.security.auth.Subject
    getServiceCreds(arg0: java.security.AccessControlContext): java.lang.Object
    getServerPrincipalName(arg0: java.lang.Object): string
    getPrincipalHostName(arg0: java.security.Principal): string
    getServicePermission(arg0: java.lang.String | string, arg1: java.lang.String | string): java.security.Permission
    isRelated(arg0: javax.security.auth.Subject, arg1: java.security.Principal): boolean
}

        }
    }
}