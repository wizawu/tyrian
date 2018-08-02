declare namespace javax {
    namespace naming {
        namespace ldap {
            class InitialLdapContext extends javax.naming.directory.InitialDirContext implements javax.naming.ldap.LdapContext {
                public constructor()
                public constructor(arg0: java.util.Hashtable<any, any>, arg1: javax.naming.ldap.Control[])
                public extendedOperation(arg0: javax.naming.ldap.ExtendedRequest): javax.naming.ldap.ExtendedResponse
                public newInstance(arg0: javax.naming.ldap.Control[]): javax.naming.ldap.LdapContext
                public reconnect(arg0: javax.naming.ldap.Control[]): void
                public getConnectControls(): javax.naming.ldap.Control[]
                public setRequestControls(arg0: javax.naming.ldap.Control[]): void
                public getRequestControls(): javax.naming.ldap.Control[]
                public getResponseControls(): javax.naming.ldap.Control[]
                public static class: java.lang.Class<any>
            }
        }
    }
}