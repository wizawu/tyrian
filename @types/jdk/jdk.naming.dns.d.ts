declare namespace com {
    namespace sun {
        namespace jndi {
            namespace dns {
                class DNSDatagramSocketFactory {
                    public open(): java.net.DatagramSocket
                    public static class: java.lang.Class<any>
                }
                class DnsClient {
                    public constructor(arg0: java.lang.String[], arg1: int, arg2: int)
                    protected finalize(): void
                    public close(): void
                    public static class: java.lang.Class<any>
                }
                class DnsContext extends com.sun.jndi.toolkit.ctx.ComponentDirContext {
                    public constructor(arg0: java.lang.String | string, arg1: java.lang.String[], arg2: java.util.Hashtable<any, any>)
                    public close(): void
                    protected p_getEnvironment(): java.util.Hashtable<any, any>
                    public getEnvironment(): java.util.Hashtable<any, any>
                    public addToEnvironment(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
                    public removeFromEnvironment(arg0: java.lang.String | string): java.lang.Object
                    public c_lookup(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                    public c_lookupLink(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                    public c_list(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                    public c_listBindings(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>
                    public c_bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                    public c_rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                    public c_unbind(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                    public c_rename(arg0: javax.naming.Name, arg1: javax.naming.Name, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                    public c_createSubcontext(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.Context
                    public c_destroySubcontext(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                    public c_getNameParser(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NameParser
                    public c_bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                    public c_rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                    public c_createSubcontext(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                    public c_getAttributes(arg0: javax.naming.Name, arg1: java.lang.String[], arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.Attributes
                    public c_modifyAttributes(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                    public c_modifyAttributes(arg0: javax.naming.Name, arg1: javax.naming.directory.ModificationItem[], arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                    public c_search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[], arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                    public c_search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls, arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                    public c_search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls, arg4: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                    public c_getSchema(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                    public c_getSchemaClassDefinition(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                    public getNameInNamespace(): string
                    public composeName(arg0: javax.naming.Name, arg1: javax.naming.Name): javax.naming.Name
                    public static class: java.lang.Class<any>
                }
                class DnsContextFactory implements javax.naming.spi.InitialContextFactory {
                    public constructor()
                    public getInitialContext(arg0: java.util.Hashtable<any, any>): javax.naming.Context
                    public static getContext(arg0: java.lang.String | string, arg1: java.lang.String[], arg2: java.util.Hashtable<any, any>): com.sun.jndi.dns.DnsContext
                    public static getContext(arg0: java.lang.String | string, arg1: com.sun.jndi.dns.DnsUrl[], arg2: java.util.Hashtable<any, any>): com.sun.jndi.dns.DnsContext
                    public static platformServersAvailable(): boolean
                    public static class: java.lang.Class<any>
                }
                class DnsContextFactory$$Lambda implements javax.naming.spi.InitialContextFactory {
                    public constructor()
                }
                class DnsName implements javax.naming.Name {
                    public constructor()
                    public constructor(arg0: java.lang.String | string)
                    public toString(): string
                    public isHostName(): boolean
                    public getOctets(): short
                    public size(): int
                    public isEmpty(): boolean
                    public hashCode(): int
                    public equals(arg0: java.lang.Object): boolean
                    public compareTo(arg0: java.lang.Object): int
                    public startsWith(arg0: javax.naming.Name): boolean
                    public endsWith(arg0: javax.naming.Name): boolean
                    public get(arg0: int): string
                    public getAll(): java.util.Enumeration<java.lang.String>
                    public getPrefix(arg0: int): javax.naming.Name
                    public getSuffix(arg0: int): javax.naming.Name
                    public clone(): java.lang.Object
                    public remove(arg0: int): java.lang.Object
                    public add(arg0: java.lang.String | string): javax.naming.Name
                    public add(arg0: int, arg1: java.lang.String | string): javax.naming.Name
                    public addAll(arg0: javax.naming.Name): javax.naming.Name
                    public addAll(arg0: int, arg1: javax.naming.Name): javax.naming.Name
                    public static class: java.lang.Class<any>
                }
                class DnsNameParser implements javax.naming.NameParser {
                    public parse(arg0: java.lang.String | string): javax.naming.Name
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public static class: java.lang.Class<any>
                }
                class DnsNameParser$$Lambda implements javax.naming.NameParser {
                    public (arg0: java.lang.String | string): javax.naming.Name
                }
                class DnsUrl extends com.sun.jndi.toolkit.url.Uri {
                    public static fromList(arg0: java.lang.String | string): com.sun.jndi.dns.DnsUrl[]
                    public constructor(arg0: java.lang.String | string)
                    public getDomain(): string
                    public static class: java.lang.Class<any>
                }
                class Header {
                    public static class: java.lang.Class<any>
                }
                class NameNode {
                    protected newNameNode(arg0: java.lang.String | string): com.sun.jndi.dns.NameNode
                    public static class: java.lang.Class<any>
                }
                class Resolver {
                    public close(): void
                    public static class: java.lang.Class<any>
                }
                class ResourceRecord {
                    public toString(): string
                    public getName(): com.sun.jndi.dns.DnsName
                    public size(): int
                    public getType(): int
                    public getRrclass(): int
                    public getRdata(): java.lang.Object
                    public static getTypeName(arg0: int): string
                    public static getType(arg0: java.lang.String | string): int
                    public static getRrclassName(arg0: int): string
                    public static getRrclass(arg0: java.lang.String | string): int
                    public static compareSerialNumbers(arg0: long, arg1: long): int
                    public static class: java.lang.Class<any>
                }
                class ResourceRecords {
                    public static class: java.lang.Class<any>
                }
                class ZoneNode extends com.sun.jndi.dns.NameNode {
                    protected newNameNode(arg0: java.lang.String | string): com.sun.jndi.dns.NameNode
                    public static class: java.lang.Class<any>
                }
            }
            namespace url {
                namespace dns {
                    class dnsURLContext extends com.sun.jndi.toolkit.url.GenericURLDirContext {
                        public constructor(arg0: java.util.Hashtable<any, any>)
                        protected getRootURLContext(arg0: java.lang.String | string, arg1: java.util.Hashtable<any, any>): javax.naming.spi.ResolveResult
                        public static class: java.lang.Class<any>
                    }
                    class dnsURLContextFactory implements javax.naming.spi.ObjectFactory {
                        public constructor()
                        public getObjectInstance(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<any, any>): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    class dnsURLContextFactory$$Lambda implements javax.naming.spi.ObjectFactory {
                        public constructor()
                    }
                }
            }
        }
    }
}
