declare namespace sun {
    namespace security {
        namespace ssl {
            namespace krb5 {
                class Krb5ProxyImpl implements sun.security.ssl.Krb5Proxy {
                    public constructor()
                    public getClientSubject(arg0: java.security.AccessControlContext): javax.security.auth.Subject
                    public getServerSubject(arg0: java.security.AccessControlContext): javax.security.auth.Subject
                    public getServiceCreds(arg0: java.security.AccessControlContext): java.lang.Object
                    public getServerPrincipalName(arg0: java.lang.Object): string
                    public getPrincipalHostName(arg0: java.security.Principal): string
                    public getServicePermission(arg0: java.lang.String | string, arg1: java.lang.String | string): java.security.Permission
                    public isRelated(arg0: javax.security.auth.Subject, arg1: java.security.Principal): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}