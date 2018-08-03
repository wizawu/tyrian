declare namespace com {
    namespace sun {
        namespace jndi {
            namespace dns {
                class DnsContextFactory implements javax.naming.spi.InitialContextFactory {
                    public constructor()
                    public getInitialContext(arg0: java.util.Hashtable<any, any>): javax.naming.Context
                    public static getContext(arg0: java.lang.String | string, arg1: java.lang.String[], arg2: java.util.Hashtable<any, any>): com.sun.jndi.dns.DnsContext
                    public static getContext(arg0: java.lang.String | string, arg1: com.sun.jndi.dns.DnsUrl[], arg2: java.util.Hashtable<any, any>): com.sun.jndi.dns.DnsContext
                    public static platformServersAvailable(): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}