declare namespace sun {
    namespace net {
        namespace spi {
            namespace nameservice {
                namespace dns {
                    class DNSNameService implements sun.net.spi.nameservice.NameService {
                        static $assertionsDisabled: boolean
                        public constructor()
                        public lookupAllHostAddr(arg0: java.lang.String): java.net.InetAddress[]
                        public getHostByAddr(arg0: byte[]): java.lang.String
                    }
                    class DNSNameService$2 implements java.security.PrivilegedExceptionAction<javax.naming.directory.Attributes> {
                        val$ctx: javax.naming.directory.DirContext
                        val$name: java.lang.String
                        val$ids: java.lang.String[]
                        this$0: sun.net.spi.nameservice.dns.DNSNameService
                        constructor(arg0: sun.net.spi.nameservice.dns.DNSNameService, arg1: javax.naming.directory.DirContext, arg2: java.lang.String, arg3: java.lang.String[])
                        run<T>(...args: any[]): any
                    }
                    class DNSNameService$1 implements java.security.PrivilegedExceptionAction<javax.naming.directory.DirContext> {
                        val$env: java.util.Hashtable
                        this$0: sun.net.spi.nameservice.dns.DNSNameService
                        constructor(arg0: sun.net.spi.nameservice.dns.DNSNameService, arg1: java.util.Hashtable)
                        run<T>(...args: any[]): any
                    }
                    class DNSNameService$ThreadContext {
                        public constructor(arg0: javax.naming.directory.DirContext, arg1: java.util.List<java.lang.String>)
                        public dirContext(): javax.naming.directory.DirContext
                        public nameservers(): java.util.List<java.lang.String>
                    }
                    class DNSNameServiceDescriptor implements sun.net.spi.nameservice.NameServiceDescriptor {
                        public constructor()
                        public createNameService(): sun.net.spi.nameservice.NameService
                        public getProviderName(): java.lang.String
                        public getType(): java.lang.String
                    }
                    
                }
                
            }
            
        }
        
    }
    
}
