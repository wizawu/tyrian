declare namespace com {
    namespace sun {
        namespace jndi {
            namespace dns {
                abstract class BaseNameClassPairEnumeration<T> implements javax.naming.NamingEnumeration<T> {
                    protected nodes: java.util.Enumeration<com.sun.jndi.dns.NameNode>
                    protected ctx: com.sun.jndi.dns.DnsContext
                    public close(): void
                    public hasMore(): boolean
                    public hasMoreElements(): boolean
                    public next(): T
                    public nextElement(): T
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}