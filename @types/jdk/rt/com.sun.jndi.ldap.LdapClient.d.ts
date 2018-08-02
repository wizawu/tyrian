declare namespace com {
    namespace sun {
        namespace jndi {
            namespace ldap {
                class LdapClient implements com.sun.jndi.ldap.pool.PooledConnection {
                    public ldapBind(arg0: java.lang.String | string, arg1: byte[], arg2: javax.naming.ldap.Control[], arg3: java.lang.String | string, arg4: boolean): com.sun.jndi.ldap.LdapResult
                    protected finalize(): void
                    public closeConnection(): void
                    public static class: java.lang.Class<any>
                }
                class LdapClient$$Lambda implements com.sun.jndi.ldap.pool.PooledConnection {
                    public (arg0: java.lang.String | string, arg1: byte[], arg2: javax.naming.ldap.Control[], arg3: java.lang.String | string, arg4: boolean): com.sun.jndi.ldap.LdapResult
                }
            }
        }
    }
}