declare namespace javax {
    namespace naming {
        namespace ldap {
            interface LdapContext extends javax.naming.directory.DirContext {
                CONTROL_FACTORIES: string
                extendedOperation(arg0: javax.naming.ldap.ExtendedRequest): javax.naming.ldap.ExtendedResponse
                newInstance(arg0: javax.naming.ldap.Control[]): javax.naming.ldap.LdapContext
                reconnect(arg0: javax.naming.ldap.Control[]): void
                getConnectControls(): javax.naming.ldap.Control[]
                setRequestControls(arg0: javax.naming.ldap.Control[]): void
                getRequestControls(): javax.naming.ldap.Control[]
                getResponseControls(): javax.naming.ldap.Control[]
            }
        }
    }
}