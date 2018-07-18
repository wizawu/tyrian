declare namespace com {
    namespace sun {
        namespace jndi {
            namespace ldap {
                namespace ext {
                    class StartTlsResponseImpl extends javax.naming.ldap.StartTlsResponse {
                        public constructor()
                        public setEnabledCipherSuites(arg0: java.lang.String[]): void
                        public setHostnameVerifier(arg0: javax.net.ssl.HostnameVerifier | javax.net.ssl.HostnameVerifier$$Lambda): void
                        public negotiate(): javax.net.ssl.SSLSession
                        public negotiate(arg0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.SSLSession
                        public close(): void
                        public setConnection(arg0: com.sun.jndi.ldap.Connection | com.sun.jndi.ldap.Connection$$Lambda, arg1: java.lang.String | string): void
                        public static class: java.lang.Class<any>
                    }
                }
                namespace pool {
                    class ConnectionDesc {
                        public equals(arg0: java.lang.Object): boolean
                        public hashCode(): int
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                    class Connections implements com.sun.jndi.ldap.pool.PoolCallback {
                        public releasePooledConnection(arg0: com.sun.jndi.ldap.pool.PooledConnection | com.sun.jndi.ldap.pool.PooledConnection$$Lambda): boolean
                        public removePooledConnection(arg0: com.sun.jndi.ldap.pool.PooledConnection | com.sun.jndi.ldap.pool.PooledConnection$$Lambda): boolean
                        public static class: java.lang.Class<any>
                    }
                    class ConnectionsRef {
                        public static class: java.lang.Class<any>
                    }
                    class ConnectionsWeakRef extends java.lang.ref.WeakReference<com.sun.jndi.ldap.pool.ConnectionsRef> {
                        public static class: java.lang.Class<any>
                    }
                    class Pool {
                        public constructor(arg0: int, arg1: int, arg2: int)
                        public getPooledConnection(arg0: java.lang.Object, arg1: long, arg2: com.sun.jndi.ldap.pool.PooledConnectionFactory | com.sun.jndi.ldap.pool.PooledConnectionFactory$$Lambda): com.sun.jndi.ldap.pool.PooledConnection
                        public expire(arg0: long): void
                        public showStats(arg0: java.io.PrintStream): void
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                    interface PoolCallback {
                        releasePooledConnection(arg0: com.sun.jndi.ldap.pool.PooledConnection | com.sun.jndi.ldap.pool.PooledConnection$$Lambda): boolean
                        removePooledConnection(arg0: com.sun.jndi.ldap.pool.PooledConnection | com.sun.jndi.ldap.pool.PooledConnection$$Lambda): boolean
                    }
                    class PoolCleaner extends java.lang.Thread {
                        public constructor(arg0: long, arg1: com.sun.jndi.ldap.pool.Pool[])
                        public run(): void
                        public static class: java.lang.Class<any>
                    }
                    interface PooledConnection {
                        closeConnection(): void
                    }
                    interface PooledConnection$$Lambda {
                        (): void
                    }
                    interface PooledConnectionFactory {
                        createPooledConnection(arg0: com.sun.jndi.ldap.pool.PoolCallback): com.sun.jndi.ldap.pool.PooledConnection
                    }
                    interface PooledConnectionFactory$$Lambda {
                        (arg0: com.sun.jndi.ldap.pool.PoolCallback): com.sun.jndi.ldap.pool.PooledConnection
                    }
                }
                namespace sasl {
                    class DefaultCallbackHandler implements javax.security.auth.callback.CallbackHandler {
                        public handle(arg0: javax.security.auth.callback.Callback[]): void
                        protected finalize(): void
                        public static class: java.lang.Class<any>
                    }
                    class DefaultCallbackHandler$$Lambda implements javax.security.auth.callback.CallbackHandler {
                        public (arg0: javax.security.auth.callback.Callback[]): void
                    }
                    class LdapSasl {
                        public static saslBind(arg0: com.sun.jndi.ldap.LdapClient | com.sun.jndi.ldap.LdapClient$$Lambda, arg1: com.sun.jndi.ldap.Connection | com.sun.jndi.ldap.Connection$$Lambda, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: java.lang.Object, arg5: java.lang.String | string, arg6: java.util.Hashtable<any, any>, arg7: javax.naming.ldap.Control[]): com.sun.jndi.ldap.LdapResult
                        public static class: java.lang.Class<any>
                    }
                    class SaslInputStream extends java.io.InputStream {
                        public read(): int
                        public read(arg0: byte[], arg1: int, arg2: int): int
                        public available(): int
                        public close(): void
                        public static class: java.lang.Class<any>
                    }
                    class SaslOutputStream extends java.io.FilterOutputStream {
                        public write(arg0: int): void
                        public write(arg0: byte[], arg1: int, arg2: int): void
                        public close(): void
                        public static class: java.lang.Class<any>
                    }
                }
                abstract class AbstractLdapNamingEnumeration<T extends javax.naming.NameClassPair> implements javax.naming.NamingEnumeration<T> , com.sun.jndi.ldap.ReferralEnumeration<T> {
                    protected listArg: javax.naming.Name
                    protected homeCtx: com.sun.jndi.ldap.LdapCtx
                    public nextElement(): T
                    public hasMoreElements(): boolean
                    public hasMore(): boolean
                    public next(): T
                    protected getAtom(arg0: java.lang.String | string): string
                    protected createItem(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes, arg2: java.util.Vector<javax.naming.ldap.Control>): T
                    public appendUnprocessedReferrals(arg0: com.sun.jndi.ldap.LdapReferralException): void
                    protected getReferredResults(arg0: com.sun.jndi.ldap.LdapReferralContext): com.sun.jndi.ldap.AbstractLdapNamingEnumeration<javax.naming.NameClassPair>
                    protected hasMoreReferrals(): boolean
                    protected update(arg0: com.sun.jndi.ldap.AbstractLdapNamingEnumeration<javax.naming.NameClassPair>): void
                    protected finalize(): void
                    protected cleanup(): void
                    public close(): void
                    public next(): java.lang.Object
                    public nextElement(): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class BasicControl implements javax.naming.ldap.Control {
                    protected id: string
                    protected criticality: boolean
                    protected value: byte[]
                    public constructor(arg0: java.lang.String | string)
                    public constructor(arg0: java.lang.String | string, arg1: boolean, arg2: byte[])
                    public getID(): string
                    public isCritical(): boolean
                    public getEncodedValue(): byte[]
                    public static class: java.lang.Class<any>
                }
                abstract class Ber {
                    protected buf: byte[]
                    protected offset: int
                    protected bufsize: int
                    public static ASN_BOOLEAN: int
                    public static ASN_INTEGER: int
                    public static ASN_BIT_STRING: int
                    public static ASN_SIMPLE_STRING: int
                    public static ASN_OCTET_STR: int
                    public static ASN_NULL: int
                    public static ASN_OBJECT_ID: int
                    public static ASN_SEQUENCE: int
                    public static ASN_SET: int
                    public static ASN_PRIMITIVE: int
                    public static ASN_UNIVERSAL: int
                    public static ASN_CONSTRUCTOR: int
                    public static ASN_APPLICATION: int
                    public static ASN_CONTEXT: int
                    public static ASN_PRIVATE: int
                    public static ASN_ENUMERATED: int
                    protected constructor()
                    public static dumpBER(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda, arg1: java.lang.String | string, arg2: byte[], arg3: int, arg4: int): void
                    public static class: java.lang.Class<any>
                }
                class BerDecoder extends com.sun.jndi.ldap.Ber {
                    public constructor(arg0: byte[], arg1: int, arg2: int)
                    public reset(): void
                    public getParsePosition(): int
                    public parseLength(): int
                    public parseSeq(arg0: int[]): int
                    public parseByte(): int
                    public peekByte(): int
                    public parseBoolean(): boolean
                    public parseEnumeration(): int
                    public parseInt(): int
                    public parseString(arg0: boolean): string
                    public parseStringWithTag(arg0: int, arg1: boolean, arg2: int[]): string
                    public parseOctetString(arg0: int, arg1: int[]): byte[]
                    public bytesLeft(): int
                    public static class: java.lang.Class<any>
                }
                class BerEncoder extends com.sun.jndi.ldap.Ber {
                    public constructor()
                    public constructor(arg0: int)
                    public reset(): void
                    public getDataLen(): int
                    public getBuf(): byte[]
                    public getTrimmedBuf(): byte[]
                    public beginSeq(arg0: int): void
                    public endSeq(): void
                    public encodeByte(arg0: int): void
                    public encodeInt(arg0: int): void
                    public encodeInt(arg0: int, arg1: int): void
                    public encodeBoolean(arg0: boolean): void
                    public encodeBoolean(arg0: boolean, arg1: int): void
                    public encodeString(arg0: java.lang.String | string, arg1: boolean): void
                    public encodeString(arg0: java.lang.String | string, arg1: int, arg2: boolean): void
                    public encodeOctetString(arg0: byte[], arg1: int, arg2: int, arg3: int): void
                    public encodeOctetString(arg0: byte[], arg1: int): void
                    public encodeStringArray(arg0: java.lang.String[], arg1: boolean): void
                    public static class: java.lang.Class<any>
                }
                class BindingWithControls extends javax.naming.Binding implements javax.naming.ldap.HasControls {
                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.ldap.Control[])
                    public getControls(): javax.naming.ldap.Control[]
                    public static class: java.lang.Class<any>
                }
                class BindingWithControls$$Lambda extends javax.naming.Binding implements javax.naming.ldap.HasControls {
                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.ldap.Control[])
                }
                class ClientId {
                    public static debug: boolean
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class Connection implements java.lang.Runnable {
                    public host: string
                    public port: int
                    public inStream: java.io.InputStream
                    public outStream: java.io.OutputStream
                    public sock: java.net.Socket
                    public replaceStreams(arg0: java.io.InputStream, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                    public run(): void
                    public static class: java.lang.Class<any>
                }
                class Connection$$Lambda implements java.lang.Runnable {
                    public host: string
                }
                class DefaultResponseControlFactory extends javax.naming.ldap.ControlFactory {
                    public constructor()
                    public getControlInstance(arg0: javax.naming.ldap.Control): javax.naming.ldap.Control
                    public static class: java.lang.Class<any>
                }
                class DigestClientId extends com.sun.jndi.ldap.SimpleClientId {
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class EntryChangeResponseControl extends com.sun.jndi.ldap.BasicControl {
                    public static OID: string
                    public static ADD: int
                    public static DELETE: int
                    public static MODIFY: int
                    public static RENAME: int
                    public constructor(arg0: java.lang.String | string, arg1: boolean, arg2: byte[])
                    public getChangeType(): int
                    public getPreviousDN(): string
                    public getChangeNumber(): long
                    public static class: java.lang.Class<any>
                }
                class EventQueue implements java.lang.Runnable {
                    public run(): void
                    public static class: java.lang.Class<any>
                }
                class EventQueue$$Lambda implements java.lang.Runnable {
                    public (): void
                }
                class EventSupport {
                    public static class: java.lang.Class<any>
                }
                class Filter {
                    public static class: java.lang.Class<any>
                }
                class LdapAttribute extends javax.naming.directory.BasicAttribute {
                    public clone(): java.lang.Object
                    public add(arg0: java.lang.Object): boolean
                    public getAttributeSyntaxDefinition(): javax.naming.directory.DirContext
                    public getAttributeDefinition(): javax.naming.directory.DirContext
                    public static class: java.lang.Class<any>
                }
                class LdapBindingEnumeration extends com.sun.jndi.ldap.AbstractLdapNamingEnumeration<javax.naming.Binding> {
                    protected createItem(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes, arg2: java.util.Vector<javax.naming.ldap.Control>): javax.naming.Binding
                    protected getReferredResults(arg0: com.sun.jndi.ldap.LdapReferralContext): com.sun.jndi.ldap.AbstractLdapNamingEnumeration<javax.naming.NameClassPair>
                    protected createItem(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes, arg2: java.util.Vector): javax.naming.NameClassPair
                    public static class: java.lang.Class<any>
                }
                class LdapClient implements com.sun.jndi.ldap.pool.PooledConnection {
                    public ldapBind(arg0: java.lang.String | string, arg1: byte[], arg2: javax.naming.ldap.Control[], arg3: java.lang.String | string, arg4: boolean): com.sun.jndi.ldap.LdapResult
                    protected finalize(): void
                    public closeConnection(): void
                    public static class: java.lang.Class<any>
                }
                class LdapClient$$Lambda implements com.sun.jndi.ldap.pool.PooledConnection {
                    public (arg0: java.lang.String | string, arg1: byte[], arg2: javax.naming.ldap.Control[], arg3: java.lang.String | string, arg4: boolean): com.sun.jndi.ldap.LdapResult
                }
                class LdapClientFactory implements com.sun.jndi.ldap.pool.PooledConnectionFactory {
                    public createPooledConnection(arg0: com.sun.jndi.ldap.pool.PoolCallback): com.sun.jndi.ldap.pool.PooledConnection
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class LdapClientFactory$$Lambda implements com.sun.jndi.ldap.pool.PooledConnectionFactory {
                    public (arg0: com.sun.jndi.ldap.pool.PoolCallback): com.sun.jndi.ldap.pool.PooledConnection
                }
                class LdapCtx extends com.sun.jndi.toolkit.ctx.ComponentDirContext implements javax.naming.event.EventDirContext , javax.naming.ldap.LdapContext {
                    public static DEFAULT_PORT: int
                    public static DEFAULT_SSL_PORT: int
                    public static DEFAULT_HOST: string
                    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int, arg3: java.util.Hashtable<any, any>, arg4: boolean)
                    public newInstance(arg0: javax.naming.ldap.Control[]): javax.naming.ldap.LdapContext
                    protected c_bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                    protected c_bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                    protected c_rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                    protected c_rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                    protected c_unbind(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                    protected c_rename(arg0: javax.naming.Name, arg1: javax.naming.Name, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                    protected c_createSubcontext(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.Context
                    protected c_createSubcontext(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                    protected c_destroySubcontext(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                    protected c_lookupLink(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                    protected c_lookup(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                    protected c_list(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                    protected c_listBindings(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>
                    protected c_getNameParser(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NameParser
                    public getNameInNamespace(): string
                    public composeName(arg0: javax.naming.Name, arg1: javax.naming.Name): javax.naming.Name
                    protected c_getAttributes(arg0: javax.naming.Name, arg1: java.lang.String[], arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.Attributes
                    protected c_modifyAttributes(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                    protected c_modifyAttributes(arg0: javax.naming.Name, arg1: javax.naming.directory.ModificationItem[], arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                    protected c_getSchema(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                    protected c_getSchemaClassDefinition(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                    protected c_search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                    protected c_search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[], arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                    protected c_search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls, arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                    protected c_search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls, arg4: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                    protected p_getEnvironment(): java.util.Hashtable<java.lang.String, java.lang.Object>
                    public getEnvironment(): java.util.Hashtable<java.lang.String, java.lang.Object>
                    public removeFromEnvironment(arg0: java.lang.String | string): java.lang.Object
                    public addToEnvironment(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
                    protected finalize(): void
                    public close(): void
                    public reconnect(arg0: javax.naming.ldap.Control[]): void
                    protected processReturnCode(arg0: com.sun.jndi.ldap.LdapResult): void
                    protected processReturnCode(arg0: com.sun.jndi.ldap.LdapResult, arg1: javax.naming.Name, arg2: java.lang.Object, arg3: javax.naming.Name, arg4: java.util.Hashtable<any, any>, arg5: java.lang.String | string): void
                    public static mapErrorCode(arg0: int, arg1: java.lang.String | string): javax.naming.NamingException
                    public extendedOperation(arg0: javax.naming.ldap.ExtendedRequest): javax.naming.ldap.ExtendedResponse
                    public setRequestControls(arg0: javax.naming.ldap.Control[]): void
                    public getRequestControls(): javax.naming.ldap.Control[]
                    public getConnectControls(): javax.naming.ldap.Control[]
                    public getResponseControls(): javax.naming.ldap.Control[]
                    public addNamingListener(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.event.NamingListener): void
                    public addNamingListener(arg0: java.lang.String | string, arg1: int, arg2: javax.naming.event.NamingListener): void
                    public removeNamingListener(arg0: javax.naming.event.NamingListener): void
                    public addNamingListener(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls, arg3: javax.naming.event.NamingListener): void
                    public addNamingListener(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls, arg3: javax.naming.event.NamingListener): void
                    public addNamingListener(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls, arg4: javax.naming.event.NamingListener): void
                    public addNamingListener(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls, arg4: javax.naming.event.NamingListener): void
                    public targetMustExist(): boolean
                    public static class: java.lang.Class<any>
                }
                class LdapCtxFactory implements javax.naming.spi.ObjectFactory , javax.naming.spi.InitialContextFactory {
                    public static ADDRESS_TYPE: string
                    public constructor()
                    public getObjectInstance(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<any, any>): java.lang.Object
                    public getInitialContext(arg0: java.util.Hashtable<any, any>): javax.naming.Context
                    public static getLdapCtxInstance(arg0: java.lang.Object, arg1: java.util.Hashtable<any, any>): javax.naming.directory.DirContext
                    public static createTypeNameAttr(arg0: java.lang.Class<any>): javax.naming.directory.Attribute
                    public static class: java.lang.Class<any>
                }
                class LdapCtxFactory$$Lambda implements javax.naming.spi.ObjectFactory , javax.naming.spi.InitialContextFactory {
                    public static ADDRESS_TYPE: string
                }
                class LdapEntry {
                    public static class: java.lang.Class<any>
                }
                class LdapName implements javax.naming.Name {
                    public constructor(arg0: java.lang.String | string)
                    public clone(): java.lang.Object
                    public toString(): string
                    public equals(arg0: java.lang.Object): boolean
                    public compareTo(arg0: java.lang.Object): int
                    public hashCode(): int
                    public size(): int
                    public isEmpty(): boolean
                    public getAll(): java.util.Enumeration<java.lang.String>
                    public get(arg0: int): string
                    public getPrefix(arg0: int): javax.naming.Name
                    public getSuffix(arg0: int): javax.naming.Name
                    public startsWith(arg0: javax.naming.Name): boolean
                    public endsWith(arg0: javax.naming.Name): boolean
                    public setValuesCaseSensitive(arg0: boolean): void
                    public addAll(arg0: javax.naming.Name): javax.naming.Name
                    public addAll(arg0: int, arg1: javax.naming.Name): javax.naming.Name
                    public add(arg0: java.lang.String | string): javax.naming.Name
                    public add(arg0: int, arg1: java.lang.String | string): javax.naming.Name
                    public remove(arg0: int): java.lang.Object
                    public static escapeAttributeValue(arg0: java.lang.Object): string
                    public static unescapeAttributeValue(arg0: java.lang.String | string): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                class LdapNameParser implements javax.naming.NameParser {
                    public constructor()
                    public parse(arg0: java.lang.String | string): javax.naming.Name
                    public static class: java.lang.Class<any>
                }
                class LdapNameParser$$Lambda implements javax.naming.NameParser {
                    public constructor()
                }
                class LdapNamingEnumeration extends com.sun.jndi.ldap.AbstractLdapNamingEnumeration<javax.naming.NameClassPair> {
                    protected createItem(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes, arg2: java.util.Vector<javax.naming.ldap.Control>): javax.naming.NameClassPair
                    protected getReferredResults(arg0: com.sun.jndi.ldap.LdapReferralContext): com.sun.jndi.ldap.AbstractLdapNamingEnumeration<javax.naming.NameClassPair>
                    public static class: java.lang.Class<any>
                }
                class LdapPoolManager {
                    public static debug: boolean
                    public static trace: boolean
                    public static showStats(arg0: java.io.PrintStream): void
                    public static expire(arg0: long): void
                    public static class: java.lang.Class<any>
                }
                class LdapReferralContext implements javax.naming.directory.DirContext , javax.naming.ldap.LdapContext {
                    public close(): void
                    public lookup(arg0: java.lang.String | string): java.lang.Object
                    public lookup(arg0: javax.naming.Name): java.lang.Object
                    public bind(arg0: java.lang.String | string, arg1: java.lang.Object): void
                    public bind(arg0: javax.naming.Name, arg1: java.lang.Object): void
                    public rebind(arg0: java.lang.String | string, arg1: java.lang.Object): void
                    public rebind(arg0: javax.naming.Name, arg1: java.lang.Object): void
                    public unbind(arg0: java.lang.String | string): void
                    public unbind(arg0: javax.naming.Name): void
                    public rename(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                    public rename(arg0: javax.naming.Name, arg1: javax.naming.Name): void
                    public list(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                    public list(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                    public listBindings(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.Binding>
                    public listBindings(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.Binding>
                    public destroySubcontext(arg0: java.lang.String | string): void
                    public destroySubcontext(arg0: javax.naming.Name): void
                    public createSubcontext(arg0: java.lang.String | string): javax.naming.Context
                    public createSubcontext(arg0: javax.naming.Name): javax.naming.Context
                    public lookupLink(arg0: java.lang.String | string): java.lang.Object
                    public lookupLink(arg0: javax.naming.Name): java.lang.Object
                    public getNameParser(arg0: java.lang.String | string): javax.naming.NameParser
                    public getNameParser(arg0: javax.naming.Name): javax.naming.NameParser
                    public composeName(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                    public composeName(arg0: javax.naming.Name, arg1: javax.naming.Name): javax.naming.Name
                    public addToEnvironment(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
                    public removeFromEnvironment(arg0: java.lang.String | string): java.lang.Object
                    public getEnvironment(): java.util.Hashtable<any, any>
                    public getAttributes(arg0: java.lang.String | string): javax.naming.directory.Attributes
                    public getAttributes(arg0: javax.naming.Name): javax.naming.directory.Attributes
                    public getAttributes(arg0: java.lang.String | string, arg1: java.lang.String[]): javax.naming.directory.Attributes
                    public getAttributes(arg0: javax.naming.Name, arg1: java.lang.String[]): javax.naming.directory.Attributes
                    public modifyAttributes(arg0: java.lang.String | string, arg1: int, arg2: javax.naming.directory.Attributes): void
                    public modifyAttributes(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.directory.Attributes): void
                    public modifyAttributes(arg0: java.lang.String | string, arg1: javax.naming.directory.ModificationItem[]): void
                    public modifyAttributes(arg0: javax.naming.Name, arg1: javax.naming.directory.ModificationItem[]): void
                    public bind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                    public bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                    public rebind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                    public rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                    public createSubcontext(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes): javax.naming.directory.DirContext
                    public createSubcontext(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.directory.DirContext
                    public getSchema(arg0: java.lang.String | string): javax.naming.directory.DirContext
                    public getSchema(arg0: javax.naming.Name): javax.naming.directory.DirContext
                    public getSchemaClassDefinition(arg0: java.lang.String | string): javax.naming.directory.DirContext
                    public getSchemaClassDefinition(arg0: javax.naming.Name): javax.naming.directory.DirContext
                    public search(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                    public search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                    public search(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                    public search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                    public search(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                    public search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                    public search(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                    public search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                    public getNameInNamespace(): string
                    public extendedOperation(arg0: javax.naming.ldap.ExtendedRequest): javax.naming.ldap.ExtendedResponse
                    public newInstance(arg0: javax.naming.ldap.Control[]): javax.naming.ldap.LdapContext
                    public reconnect(arg0: javax.naming.ldap.Control[]): void
                    public getConnectControls(): javax.naming.ldap.Control[]
                    public setRequestControls(arg0: javax.naming.ldap.Control[]): void
                    public getRequestControls(): javax.naming.ldap.Control[]
                    public getResponseControls(): javax.naming.ldap.Control[]
                    public static class: java.lang.Class<any>
                }
                class LdapReferralException extends javax.naming.ldap.LdapReferralException {
                    public getReferralContext(): javax.naming.Context
                    public getReferralContext(arg0: java.util.Hashtable<any, any>): javax.naming.Context
                    public getReferralContext(arg0: java.util.Hashtable<any, any>, arg1: javax.naming.ldap.Control[]): javax.naming.Context
                    public getReferralInfo(): java.lang.Object
                    public retryReferral(): void
                    public skipReferral(): boolean
                    public static class: java.lang.Class<any>
                }
                class LdapRequest {
                    public static class: java.lang.Class<any>
                }
                class LdapResult {
                    public status: int
                    public serverCreds: byte[]
                    public constructor()
                    public static class: java.lang.Class<any>
                }
                class LdapSchemaCtx extends com.sun.jndi.toolkit.dir.HierMemDirCtx {
                    public close(): void
                    public bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                    protected doBind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: boolean): void
                    public rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                    protected doRebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: boolean): void
                    protected doUnbind(arg0: javax.naming.Name): void
                    protected doRename(arg0: javax.naming.Name, arg1: javax.naming.Name): void
                    protected doDestroySubcontext(arg0: javax.naming.Name): void
                    protected doCreateSubcontext(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.directory.DirContext
                    protected doModifyAttributes(arg0: javax.naming.directory.ModificationItem[]): void
                    protected createNewCtx(): com.sun.jndi.toolkit.dir.HierMemDirCtx
                    public static class: java.lang.Class<any>
                }
                class LdapSchemaParser {
                    public static class: java.lang.Class<any>
                }
                class LdapSearchEnumeration extends com.sun.jndi.ldap.AbstractLdapNamingEnumeration<javax.naming.directory.SearchResult> {
                    protected createItem(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes, arg2: java.util.Vector<javax.naming.ldap.Control>): javax.naming.directory.SearchResult
                    public appendUnprocessedReferrals(arg0: com.sun.jndi.ldap.LdapReferralException): void
                    protected getReferredResults(arg0: com.sun.jndi.ldap.LdapReferralContext): com.sun.jndi.ldap.AbstractLdapNamingEnumeration<javax.naming.NameClassPair>
                    protected update(arg0: com.sun.jndi.ldap.AbstractLdapNamingEnumeration<javax.naming.NameClassPair>): void
                    protected createItem(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes, arg2: java.util.Vector): javax.naming.NameClassPair
                    public static class: java.lang.Class<any>
                }
                class LdapURL extends com.sun.jndi.toolkit.url.Uri {
                    public constructor(arg0: java.lang.String | string)
                    public useSsl(): boolean
                    public getDN(): string
                    public getAttributes(): string
                    public getScope(): string
                    public getFilter(): string
                    public getExtensions(): string
                    public static fromList(arg0: java.lang.String | string): java.lang.String[]
                    public static hasQueryComponents(arg0: java.lang.String | string): boolean
                    public static class: java.lang.Class<any>
                }
                class ManageReferralControl extends com.sun.jndi.ldap.BasicControl {
                    public static OID: string
                    public constructor()
                    public constructor(arg0: boolean)
                    public static class: java.lang.Class<any>
                }
                class NameClassPairWithControls extends javax.naming.NameClassPair implements javax.naming.ldap.HasControls {
                    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.naming.ldap.Control[])
                    public getControls(): javax.naming.ldap.Control[]
                    public static class: java.lang.Class<any>
                }
                class NameClassPairWithControls$$Lambda extends javax.naming.NameClassPair implements javax.naming.ldap.HasControls {
                    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.naming.ldap.Control[])
                }
                class NamingEventNotifier implements java.lang.Runnable {
                    public run(): void
                    public static class: java.lang.Class<any>
                }
                class NamingEventNotifier$$Lambda implements java.lang.Runnable {
                    public (): void
                }
                class NotifierArgs {
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public static class: java.lang.Class<any>
                }
                class Obj {
                    public static class: java.lang.Class<any>
                }
                class PersistentSearchControl extends com.sun.jndi.ldap.BasicControl {
                    public static OID: string
                    public static ADD: int
                    public static DELETE: int
                    public static MODIFY: int
                    public static RENAME: int
                    public static ANY: int
                    public constructor()
                    public constructor(arg0: int, arg1: boolean, arg2: boolean, arg3: boolean)
                    public static class: java.lang.Class<any>
                }
                interface ReferralEnumeration<T> extends javax.naming.NamingEnumeration<T> {
                    appendUnprocessedReferrals(arg0: com.sun.jndi.ldap.LdapReferralException): void
                }
                class SearchResultWithControls extends javax.naming.directory.SearchResult implements javax.naming.ldap.HasControls {
                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: boolean, arg4: javax.naming.ldap.Control[])
                    public getControls(): javax.naming.ldap.Control[]
                    public static class: java.lang.Class<any>
                }
                class SearchResultWithControls$$Lambda extends javax.naming.directory.SearchResult implements javax.naming.ldap.HasControls {
                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: boolean, arg4: javax.naming.ldap.Control[])
                }
                class ServiceLocator {
                    public static class: java.lang.Class<any>
                }
                class SimpleClientId extends com.sun.jndi.ldap.ClientId {
                    public equals(arg0: java.lang.Object): boolean
                    public hashCode(): int
                    public toString(): string
                    public static class: java.lang.Class<any>
                }
                class UnsolicitedResponseImpl implements javax.naming.ldap.UnsolicitedNotification {
                    public getID(): string
                    public getEncodedValue(): byte[]
                    public getReferrals(): java.lang.String[]
                    public getException(): javax.naming.NamingException
                    public getControls(): javax.naming.ldap.Control[]
                    public static class: java.lang.Class<any>
                }
                abstract class VersionHelper {
                    protected static getUrlArray(arg0: java.lang.String[]): java.net.URL[]
                    public static class: java.lang.Class<any>
                }
            }
            namespace toolkit {
                namespace ctx {
                    abstract class AtomicContext extends com.sun.jndi.toolkit.ctx.ComponentContext {
                        protected constructor()
                        protected a_lookup(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected a_lookupLink(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected a_list(arg0: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        protected a_listBindings(arg0: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>
                        protected a_bind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_rebind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_unbind(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_destroySubcontext(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_createSubcontext(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.Context
                        protected a_rename(arg0: java.lang.String | string, arg1: javax.naming.Name, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_getNameParser(arg0: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NameParser
                        protected c_parseComponent(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): com.sun.jndi.toolkit.ctx.StringHeadTail
                        protected a_resolveIntermediate_nns(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected a_lookup_nns(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected a_lookupLink_nns(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected a_list_nns(arg0: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        protected a_listBindings_nns(arg0: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>
                        protected a_bind_nns(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_rebind_nns(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_unbind_nns(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_createSubcontext_nns(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.Context
                        protected a_destroySubcontext_nns(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_rename_nns(arg0: java.lang.String | string, arg1: javax.naming.Name, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_getNameParser_nns(arg0: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NameParser
                        protected isEmpty(arg0: java.lang.String | string): boolean
                        protected c_lookup(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected c_lookupLink(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected c_list(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        protected c_listBindings(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>
                        protected c_bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_unbind(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_destroySubcontext(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_createSubcontext(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.Context
                        protected c_rename(arg0: javax.naming.Name, arg1: javax.naming.Name, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_getNameParser(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NameParser
                        protected c_resolveIntermediate_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected c_lookup_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected c_lookupLink_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected c_list_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        protected c_listBindings_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>
                        protected c_bind_nns(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_rebind_nns(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_unbind_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_createSubcontext_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.Context
                        protected c_destroySubcontext_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_rename_nns(arg0: javax.naming.Name, arg1: javax.naming.Name, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_getNameParser_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NameParser
                        protected a_processJunction_nns(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_processJunction_nns(arg0: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected resolve_to_context(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): boolean
                        protected resolve_to_penultimate_context(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): boolean
                        protected resolve_to_penultimate_context_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): boolean
                        protected resolve_to_nns_and_continue(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        public static class: java.lang.Class<any>
                    }
                    abstract class AtomicDirContext extends com.sun.jndi.toolkit.ctx.ComponentDirContext {
                        protected constructor()
                        protected a_getAttributes(arg0: java.lang.String | string, arg1: java.lang.String[], arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.Attributes
                        protected a_modifyAttributes(arg0: java.lang.String | string, arg1: int, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_modifyAttributes(arg0: java.lang.String | string, arg1: javax.naming.directory.ModificationItem[], arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_bind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_rebind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_createSubcontext(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes, arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                        protected a_search(arg0: javax.naming.directory.Attributes, arg1: java.lang.String[], arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected a_search(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls, arg4: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected a_search(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls, arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected a_getSchema(arg0: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                        protected a_getSchemaClassDefinition(arg0: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                        protected a_getAttributes_nns(arg0: java.lang.String | string, arg1: java.lang.String[], arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.Attributes
                        protected a_modifyAttributes_nns(arg0: java.lang.String | string, arg1: int, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_modifyAttributes_nns(arg0: java.lang.String | string, arg1: javax.naming.directory.ModificationItem[], arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_bind_nns(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_rebind_nns(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_createSubcontext_nns(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes, arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                        protected a_search_nns(arg0: javax.naming.directory.Attributes, arg1: java.lang.String[], arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected a_search_nns(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls, arg4: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected a_search_nns(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls, arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected a_getSchema_nns(arg0: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                        protected a_getSchemaDefinition_nns(arg0: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                        protected c_getAttributes(arg0: javax.naming.Name, arg1: java.lang.String[], arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.Attributes
                        protected c_modifyAttributes(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_modifyAttributes(arg0: javax.naming.Name, arg1: javax.naming.directory.ModificationItem[], arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_createSubcontext(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                        protected c_search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[], arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected c_search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls, arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected c_search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls, arg4: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected c_getSchema(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                        protected c_getSchemaClassDefinition(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                        protected c_getAttributes_nns(arg0: javax.naming.Name, arg1: java.lang.String[], arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.Attributes
                        protected c_modifyAttributes_nns(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_modifyAttributes_nns(arg0: javax.naming.Name, arg1: javax.naming.directory.ModificationItem[], arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_bind_nns(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_rebind_nns(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_createSubcontext_nns(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                        protected c_search_nns(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[], arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected c_search_nns(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls, arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected c_search_nns(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls, arg4: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected c_getSchema_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                        protected c_getSchemaClassDefinition_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                        public static class: java.lang.Class<any>
                    }
                    abstract class ComponentContext extends com.sun.jndi.toolkit.ctx.PartialCompositeContext {
                        protected static USE_CONTINUATION: byte
                        protected static TERMINAL_COMPONENT: byte
                        protected static TERMINAL_NNS_COMPONENT: byte
                        protected constructor()
                        protected c_lookup(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected c_lookupLink(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected c_list(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        protected c_listBindings(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>
                        protected c_bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_unbind(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_destroySubcontext(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_createSubcontext(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.Context
                        protected c_rename(arg0: javax.naming.Name, arg1: javax.naming.Name, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_getNameParser(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NameParser
                        protected p_parseComponent(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): com.sun.jndi.toolkit.ctx.HeadTail
                        protected c_resolveIntermediate_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected c_lookup_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected c_lookupLink_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected c_list_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        protected c_listBindings_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>
                        protected c_bind_nns(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_rebind_nns(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_unbind_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_createSubcontext_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.Context
                        protected c_destroySubcontext_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_rename_nns(arg0: javax.naming.Name, arg1: javax.naming.Name, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_getNameParser_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NameParser
                        protected c_processJunction_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected p_resolveIntermediate(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): com.sun.jndi.toolkit.ctx.HeadTail
                        protected isAllEmpty(arg0: javax.naming.Name): boolean
                        protected p_resolveToClass(arg0: javax.naming.Name, arg1: java.lang.Class<any>, arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.spi.ResolveResult
                        protected p_lookup(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected p_list(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        protected p_listBindings(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>
                        protected p_bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected p_rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected p_unbind(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected p_destroySubcontext(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected p_createSubcontext(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.Context
                        protected p_rename(arg0: javax.naming.Name, arg1: javax.naming.Name, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected p_getNameParser(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NameParser
                        protected p_lookupLink(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    abstract class ComponentDirContext extends com.sun.jndi.toolkit.ctx.PartialCompositeDirContext {
                        protected constructor()
                        protected c_getAttributes(arg0: javax.naming.Name, arg1: java.lang.String[], arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.Attributes
                        protected c_modifyAttributes(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_modifyAttributes(arg0: javax.naming.Name, arg1: javax.naming.directory.ModificationItem[], arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_createSubcontext(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                        protected c_search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[], arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected c_search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls, arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected c_search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls, arg4: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected c_getSchema(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                        protected c_getSchemaClassDefinition(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                        protected c_getAttributes_nns(arg0: javax.naming.Name, arg1: java.lang.String[], arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.Attributes
                        protected c_modifyAttributes_nns(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_modifyAttributes_nns(arg0: javax.naming.Name, arg1: javax.naming.directory.ModificationItem[], arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_bind_nns(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_rebind_nns(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected c_createSubcontext_nns(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                        protected c_search_nns(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[], arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected c_search_nns(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls, arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected c_search_nns(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls, arg4: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected c_getSchema_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                        protected c_getSchemaClassDefinition_nns(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                        protected p_getAttributes(arg0: javax.naming.Name, arg1: java.lang.String[], arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.Attributes
                        protected p_modifyAttributes(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected p_modifyAttributes(arg0: javax.naming.Name, arg1: javax.naming.directory.ModificationItem[], arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected p_bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected p_rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected p_createSubcontext(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                        protected p_search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[], arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected p_search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls, arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected p_search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls, arg4: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected p_getSchema(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                        protected p_getSchemaClassDefinition(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                        public static class: java.lang.Class<any>
                    }
                    class Continuation extends javax.naming.spi.ResolveResult {
                        protected starter: javax.naming.Name
                        protected followingLink: java.lang.Object
                        protected environment: java.util.Hashtable<any, any>
                        protected continuing: boolean
                        protected resolvedContext: javax.naming.Context
                        protected relativeResolvedName: javax.naming.Name
                        public constructor()
                        public constructor(arg0: javax.naming.Name, arg1: java.util.Hashtable<any, any>)
                        public isContinue(): boolean
                        public setSuccess(): void
                        public fillInException(arg0: javax.naming.NamingException): javax.naming.NamingException
                        public setErrorNNS(arg0: java.lang.Object, arg1: javax.naming.Name): void
                        public setErrorNNS(arg0: java.lang.Object, arg1: java.lang.String | string): void
                        public setError(arg0: java.lang.Object, arg1: javax.naming.Name): void
                        public setError(arg0: java.lang.Object, arg1: java.lang.String | string): void
                        public setContinueNNS(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context): void
                        public setContinueNNS(arg0: java.lang.Object, arg1: java.lang.String | string, arg2: javax.naming.Context): void
                        public setContinue(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context): void
                        public setContinue(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: javax.naming.Name): void
                        public setContinue(arg0: java.lang.Object, arg1: java.lang.String | string, arg2: javax.naming.Context, arg3: java.lang.String | string): void
                        public setContinue(arg0: java.lang.Object, arg1: java.lang.Object): void
                        public toString(): string
                        public toString(arg0: boolean): string
                        public static class: java.lang.Class<any>
                    }
                    class HeadTail {
                        public constructor(arg0: javax.naming.Name, arg1: javax.naming.Name)
                        public constructor(arg0: javax.naming.Name, arg1: javax.naming.Name, arg2: int)
                        public setStatus(arg0: int): void
                        public getHead(): javax.naming.Name
                        public getTail(): javax.naming.Name
                        public getStatus(): int
                        public static class: java.lang.Class<any>
                    }
                    abstract class PartialCompositeContext implements javax.naming.Context , javax.naming.spi.Resolver {
                        protected static _PARTIAL: int
                        protected static _COMPONENT: int
                        protected static _ATOMIC: int
                        protected _contextType: int
                        protected constructor()
                        protected p_resolveToClass(arg0: javax.naming.Name, arg1: java.lang.Class<any>, arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.spi.ResolveResult
                        protected p_lookup(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected p_lookupLink(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected p_list(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        protected p_listBindings(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>
                        protected p_bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected p_rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected p_unbind(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected p_destroySubcontext(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected p_createSubcontext(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.Context
                        protected p_rename(arg0: javax.naming.Name, arg1: javax.naming.Name, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected p_getNameParser(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NameParser
                        protected p_getEnvironment(): java.util.Hashtable<any, any>
                        public resolveToClass(arg0: java.lang.String | string, arg1: java.lang.Class<javax.naming.Context>): javax.naming.spi.ResolveResult
                        public resolveToClass(arg0: javax.naming.Name, arg1: java.lang.Class<javax.naming.Context>): javax.naming.spi.ResolveResult
                        public lookup(arg0: java.lang.String | string): java.lang.Object
                        public lookup(arg0: javax.naming.Name): java.lang.Object
                        public bind(arg0: java.lang.String | string, arg1: java.lang.Object): void
                        public bind(arg0: javax.naming.Name, arg1: java.lang.Object): void
                        public rebind(arg0: java.lang.String | string, arg1: java.lang.Object): void
                        public rebind(arg0: javax.naming.Name, arg1: java.lang.Object): void
                        public unbind(arg0: java.lang.String | string): void
                        public unbind(arg0: javax.naming.Name): void
                        public rename(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        public rename(arg0: javax.naming.Name, arg1: javax.naming.Name): void
                        public list(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        public list(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        public listBindings(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.Binding>
                        public listBindings(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.Binding>
                        public destroySubcontext(arg0: java.lang.String | string): void
                        public destroySubcontext(arg0: javax.naming.Name): void
                        public createSubcontext(arg0: java.lang.String | string): javax.naming.Context
                        public createSubcontext(arg0: javax.naming.Name): javax.naming.Context
                        public lookupLink(arg0: java.lang.String | string): java.lang.Object
                        public lookupLink(arg0: javax.naming.Name): java.lang.Object
                        public getNameParser(arg0: java.lang.String | string): javax.naming.NameParser
                        public getNameParser(arg0: javax.naming.Name): javax.naming.NameParser
                        public composeName(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                        public composeName(arg0: javax.naming.Name, arg1: javax.naming.Name): javax.naming.Name
                        protected static allEmpty(arg0: javax.naming.Name): boolean
                        protected static getPCContext(arg0: com.sun.jndi.toolkit.ctx.Continuation): com.sun.jndi.toolkit.ctx.PartialCompositeContext
                        public static class: java.lang.Class<any>
                    }
                    abstract class PartialCompositeDirContext extends com.sun.jndi.toolkit.ctx.AtomicContext implements javax.naming.directory.DirContext {
                        protected constructor()
                        protected p_getAttributes(arg0: javax.naming.Name, arg1: java.lang.String[], arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.Attributes
                        protected p_modifyAttributes(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected p_modifyAttributes(arg0: javax.naming.Name, arg1: javax.naming.directory.ModificationItem[], arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected p_bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected p_rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected p_createSubcontext(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                        protected p_search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[], arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected p_search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls, arg3: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected p_search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls, arg4: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected p_getSchema(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                        protected p_getSchemaClassDefinition(arg0: javax.naming.Name, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.directory.DirContext
                        public getAttributes(arg0: java.lang.String | string): javax.naming.directory.Attributes
                        public getAttributes(arg0: javax.naming.Name): javax.naming.directory.Attributes
                        public getAttributes(arg0: java.lang.String | string, arg1: java.lang.String[]): javax.naming.directory.Attributes
                        public getAttributes(arg0: javax.naming.Name, arg1: java.lang.String[]): javax.naming.directory.Attributes
                        public modifyAttributes(arg0: java.lang.String | string, arg1: int, arg2: javax.naming.directory.Attributes): void
                        public modifyAttributes(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.directory.Attributes): void
                        public modifyAttributes(arg0: java.lang.String | string, arg1: javax.naming.directory.ModificationItem[]): void
                        public modifyAttributes(arg0: javax.naming.Name, arg1: javax.naming.directory.ModificationItem[]): void
                        public bind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                        public bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                        public rebind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                        public rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                        public createSubcontext(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes): javax.naming.directory.DirContext
                        public createSubcontext(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.directory.DirContext
                        public search(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public getSchema(arg0: java.lang.String | string): javax.naming.directory.DirContext
                        public getSchema(arg0: javax.naming.Name): javax.naming.directory.DirContext
                        public getSchemaClassDefinition(arg0: java.lang.String | string): javax.naming.directory.DirContext
                        public getSchemaClassDefinition(arg0: javax.naming.Name): javax.naming.directory.DirContext
                        protected static getPCDirContext(arg0: com.sun.jndi.toolkit.ctx.Continuation): com.sun.jndi.toolkit.ctx.PartialCompositeDirContext
                        protected c_parseComponent(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): com.sun.jndi.toolkit.ctx.StringHeadTail
                        protected a_lookup(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected a_lookupLink(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): java.lang.Object
                        protected a_list(arg0: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        protected a_listBindings(arg0: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NamingEnumeration<javax.naming.Binding>
                        protected a_bind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_rebind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_unbind(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_destroySubcontext(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_createSubcontext(arg0: java.lang.String | string, arg1: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.Context
                        protected a_rename(arg0: java.lang.String | string, arg1: javax.naming.Name, arg2: com.sun.jndi.toolkit.ctx.Continuation): void
                        protected a_getNameParser(arg0: com.sun.jndi.toolkit.ctx.Continuation): javax.naming.NameParser
                        public static class: java.lang.Class<any>
                    }
                    class StringHeadTail {
                        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: int)
                        public setStatus(arg0: int): void
                        public getHead(): string
                        public getTail(): string
                        public getStatus(): int
                        public static class: java.lang.Class<any>
                    }
                }
                namespace dir {
                    interface AttrFilter {
                        check(arg0: javax.naming.directory.Attributes): boolean
                    }
                    interface AttrFilter$$Lambda {
                        (arg0: javax.naming.directory.Attributes): boolean
                    }
                    class ContainmentFilter implements com.sun.jndi.toolkit.dir.AttrFilter {
                        public constructor(arg0: javax.naming.directory.Attributes)
                        public check(arg0: javax.naming.directory.Attributes): boolean
                        public static contains(arg0: javax.naming.directory.Attributes, arg1: javax.naming.directory.Attributes): boolean
                        public static class: java.lang.Class<any>
                    }
                    class ContainmentFilter$$Lambda implements com.sun.jndi.toolkit.dir.AttrFilter {
                        public constructor(arg0: javax.naming.directory.Attributes)
                    }
                    class ContextEnumerator implements javax.naming.NamingEnumeration<javax.naming.Binding> {
                        public constructor(arg0: javax.naming.Context)
                        public constructor(arg0: javax.naming.Context, arg1: int)
                        protected constructor(arg0: javax.naming.Context, arg1: int, arg2: java.lang.String | string, arg3: boolean)
                        protected getImmediateChildren(arg0: javax.naming.Context): javax.naming.NamingEnumeration<javax.naming.Binding>
                        protected newEnumerator(arg0: javax.naming.Context, arg1: int, arg2: java.lang.String | string, arg3: boolean): com.sun.jndi.toolkit.dir.ContextEnumerator
                        public hasMore(): boolean
                        public hasMoreElements(): boolean
                        public nextElement(): javax.naming.Binding
                        public next(): javax.naming.Binding
                        public close(): void
                        public next(): java.lang.Object
                        public nextElement(): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    class DirSearch {
                        public constructor()
                        public static search(arg0: javax.naming.directory.DirContext, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public static search(arg0: javax.naming.directory.DirContext, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public static search(arg0: javax.naming.directory.DirContext, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public static class: java.lang.Class<any>
                    }
                    class HierMemDirCtx implements javax.naming.directory.DirContext {
                        protected myEnv: java.util.Hashtable<java.lang.String, java.lang.Object>
                        protected bindings: java.util.Hashtable<javax.naming.Name, java.lang.Object>
                        protected attrs: javax.naming.directory.Attributes
                        protected ignoreCase: boolean
                        protected readOnlyEx: javax.naming.NamingException
                        protected myParser: javax.naming.NameParser
                        public close(): void
                        public getNameInNamespace(): string
                        public constructor()
                        public constructor(arg0: boolean)
                        public constructor(arg0: java.util.Hashtable<java.lang.String, java.lang.Object>, arg1: boolean)
                        protected constructor(arg0: java.util.Hashtable<java.lang.String, java.lang.Object>, arg1: boolean, arg2: boolean)
                        public lookup(arg0: java.lang.String | string): java.lang.Object
                        public lookup(arg0: javax.naming.Name): java.lang.Object
                        public doLookup(arg0: javax.naming.Name, arg1: boolean): java.lang.Object
                        public bind(arg0: java.lang.String | string, arg1: java.lang.Object): void
                        public bind(arg0: javax.naming.Name, arg1: java.lang.Object): void
                        public bind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                        public bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                        protected doBind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: boolean): void
                        protected doBindAux(arg0: javax.naming.Name, arg1: java.lang.Object): void
                        public rebind(arg0: java.lang.String | string, arg1: java.lang.Object): void
                        public rebind(arg0: javax.naming.Name, arg1: java.lang.Object): void
                        public rebind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                        public rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                        protected doRebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: boolean): void
                        protected doRebindAux(arg0: javax.naming.Name, arg1: java.lang.Object): void
                        public unbind(arg0: java.lang.String | string): void
                        public unbind(arg0: javax.naming.Name): void
                        protected doUnbind(arg0: javax.naming.Name): void
                        public rename(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        public rename(arg0: javax.naming.Name, arg1: javax.naming.Name): void
                        protected doRename(arg0: javax.naming.Name, arg1: javax.naming.Name): void
                        public list(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        public list(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        protected doList(): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        public listBindings(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.Binding>
                        public listBindings(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.Binding>
                        protected doListBindings(arg0: boolean): javax.naming.NamingEnumeration<javax.naming.Binding>
                        public destroySubcontext(arg0: java.lang.String | string): void
                        public destroySubcontext(arg0: javax.naming.Name): void
                        protected doDestroySubcontext(arg0: javax.naming.Name): void
                        public createSubcontext(arg0: java.lang.String | string): javax.naming.Context
                        public createSubcontext(arg0: javax.naming.Name): javax.naming.Context
                        public createSubcontext(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes): javax.naming.directory.DirContext
                        public createSubcontext(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.directory.DirContext
                        protected doCreateSubcontext(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.directory.DirContext
                        public lookupLink(arg0: java.lang.String | string): java.lang.Object
                        public lookupLink(arg0: javax.naming.Name): java.lang.Object
                        public getNameParser(arg0: java.lang.String | string): javax.naming.NameParser
                        public getNameParser(arg0: javax.naming.Name): javax.naming.NameParser
                        public composeName(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                        public composeName(arg0: javax.naming.Name, arg1: javax.naming.Name): javax.naming.Name
                        public addToEnvironment(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
                        public removeFromEnvironment(arg0: java.lang.String | string): java.lang.Object
                        public getEnvironment(): java.util.Hashtable<java.lang.String, java.lang.Object>
                        public getAttributes(arg0: java.lang.String | string): javax.naming.directory.Attributes
                        public getAttributes(arg0: javax.naming.Name): javax.naming.directory.Attributes
                        protected doGetAttributes(): javax.naming.directory.Attributes
                        public getAttributes(arg0: java.lang.String | string, arg1: java.lang.String[]): javax.naming.directory.Attributes
                        public getAttributes(arg0: javax.naming.Name, arg1: java.lang.String[]): javax.naming.directory.Attributes
                        protected doGetAttributes(arg0: java.lang.String[]): javax.naming.directory.Attributes
                        public modifyAttributes(arg0: java.lang.String | string, arg1: int, arg2: javax.naming.directory.Attributes): void
                        public modifyAttributes(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.directory.Attributes): void
                        public modifyAttributes(arg0: java.lang.String | string, arg1: javax.naming.directory.ModificationItem[]): void
                        public modifyAttributes(arg0: javax.naming.Name, arg1: javax.naming.directory.ModificationItem[]): void
                        protected doModifyAttributes(arg0: javax.naming.directory.ModificationItem[]): void
                        protected static applyMods(arg0: javax.naming.directory.ModificationItem[], arg1: javax.naming.directory.Attributes): javax.naming.directory.Attributes
                        public search(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        protected createNewCtx(): com.sun.jndi.toolkit.dir.HierMemDirCtx
                        protected canonizeName(arg0: javax.naming.Name): javax.naming.Name
                        protected getInternalName(arg0: javax.naming.Name): javax.naming.Name
                        protected getLeafName(arg0: javax.naming.Name): javax.naming.Name
                        public getSchema(arg0: java.lang.String | string): javax.naming.directory.DirContext
                        public getSchema(arg0: javax.naming.Name): javax.naming.directory.DirContext
                        public getSchemaClassDefinition(arg0: java.lang.String | string): javax.naming.directory.DirContext
                        public getSchemaClassDefinition(arg0: javax.naming.Name): javax.naming.directory.DirContext
                        public setReadOnly(arg0: javax.naming.NamingException): void
                        public setIgnoreCase(arg0: boolean): void
                        public setNameParser(arg0: javax.naming.NameParser | javax.naming.NameParser$$Lambda): void
                        public static class: java.lang.Class<any>
                    }
                    class LazySearchEnumerationImpl implements javax.naming.NamingEnumeration<javax.naming.directory.SearchResult> {
                        public constructor(arg0: javax.naming.NamingEnumeration<javax.naming.Binding>, arg1: com.sun.jndi.toolkit.dir.AttrFilter | com.sun.jndi.toolkit.dir.AttrFilter$$Lambda, arg2: javax.naming.directory.SearchControls)
                        public constructor(arg0: javax.naming.NamingEnumeration<javax.naming.Binding>, arg1: com.sun.jndi.toolkit.dir.AttrFilter | com.sun.jndi.toolkit.dir.AttrFilter$$Lambda, arg2: javax.naming.directory.SearchControls, arg3: javax.naming.Context, arg4: java.util.Hashtable<java.lang.String, java.lang.Object>, arg5: boolean)
                        public constructor(arg0: javax.naming.NamingEnumeration<javax.naming.Binding>, arg1: com.sun.jndi.toolkit.dir.AttrFilter | com.sun.jndi.toolkit.dir.AttrFilter$$Lambda, arg2: javax.naming.directory.SearchControls, arg3: javax.naming.Context, arg4: java.util.Hashtable<java.lang.String, java.lang.Object>)
                        public hasMore(): boolean
                        public hasMoreElements(): boolean
                        public nextElement(): javax.naming.directory.SearchResult
                        public next(): javax.naming.directory.SearchResult
                        public close(): void
                        public next(): java.lang.Object
                        public nextElement(): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    class SearchFilter implements com.sun.jndi.toolkit.dir.AttrFilter {
                        protected static debug: boolean
                        protected static BEGIN_FILTER_TOKEN: char
                        protected static END_FILTER_TOKEN: char
                        protected static AND_TOKEN: char
                        protected static OR_TOKEN: char
                        protected static NOT_TOKEN: char
                        protected static EQUAL_TOKEN: char
                        protected static APPROX_TOKEN: char
                        protected static LESS_TOKEN: char
                        protected static GREATER_TOKEN: char
                        protected static EXTEND_TOKEN: char
                        protected static WILDCARD_TOKEN: char
                        public constructor(arg0: java.lang.String | string)
                        public check(arg0: javax.naming.directory.Attributes): boolean
                        protected normalizeFilter(): void
                        protected createNextFilter(): com.sun.jndi.toolkit.dir.SearchFilter$StringFilter
                        protected getCurrentChar(): char
                        protected relCharAt(arg0: int): char
                        protected consumeChar(): void
                        protected consumeChars(arg0: int): void
                        protected relIndexOf(arg0: int): int
                        protected relSubstring(arg0: int, arg1: int): string
                        public static format(arg0: javax.naming.directory.Attributes): string
                        public static findUnescaped(arg0: char, arg1: java.lang.String | string, arg2: int): int
                        public static format(arg0: java.lang.String | string, arg1: java.lang.Object[]): string
                        public static selectAttributes(arg0: javax.naming.directory.Attributes, arg1: java.lang.String[]): javax.naming.directory.Attributes
                        public static class: java.lang.Class<any>
                    }
                    class SearchFilter$$Lambda implements com.sun.jndi.toolkit.dir.AttrFilter {
                        protected static debug: boolean
                    }
                }
                namespace url {
                    abstract class GenericURLContext implements javax.naming.Context {
                        protected myEnv: java.util.Hashtable<java.lang.String, java.lang.Object>
                        public constructor(arg0: java.util.Hashtable<any, any>)
                        public close(): void
                        public getNameInNamespace(): string
                        protected getRootURLContext(arg0: java.lang.String | string, arg1: java.util.Hashtable<any, any>): javax.naming.spi.ResolveResult
                        protected getURLSuffix(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.naming.Name
                        protected getURLPrefix(arg0: java.lang.String | string): string
                        protected urlEquals(arg0: java.lang.String | string, arg1: java.lang.String | string): boolean
                        protected getContinuationContext(arg0: javax.naming.Name): javax.naming.Context
                        public lookup(arg0: java.lang.String | string): java.lang.Object
                        public lookup(arg0: javax.naming.Name): java.lang.Object
                        public bind(arg0: java.lang.String | string, arg1: java.lang.Object): void
                        public bind(arg0: javax.naming.Name, arg1: java.lang.Object): void
                        public rebind(arg0: java.lang.String | string, arg1: java.lang.Object): void
                        public rebind(arg0: javax.naming.Name, arg1: java.lang.Object): void
                        public unbind(arg0: java.lang.String | string): void
                        public unbind(arg0: javax.naming.Name): void
                        public rename(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        public rename(arg0: javax.naming.Name, arg1: javax.naming.Name): void
                        public list(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        public list(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        public listBindings(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.Binding>
                        public listBindings(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.Binding>
                        public destroySubcontext(arg0: java.lang.String | string): void
                        public destroySubcontext(arg0: javax.naming.Name): void
                        public createSubcontext(arg0: java.lang.String | string): javax.naming.Context
                        public createSubcontext(arg0: javax.naming.Name): javax.naming.Context
                        public lookupLink(arg0: java.lang.String | string): java.lang.Object
                        public lookupLink(arg0: javax.naming.Name): java.lang.Object
                        public getNameParser(arg0: java.lang.String | string): javax.naming.NameParser
                        public getNameParser(arg0: javax.naming.Name): javax.naming.NameParser
                        public composeName(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                        public composeName(arg0: javax.naming.Name, arg1: javax.naming.Name): javax.naming.Name
                        public removeFromEnvironment(arg0: java.lang.String | string): java.lang.Object
                        public addToEnvironment(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
                        public getEnvironment(): java.util.Hashtable<java.lang.String, java.lang.Object>
                        public static class: java.lang.Class<any>
                    }
                    abstract class GenericURLDirContext extends com.sun.jndi.toolkit.url.GenericURLContext implements javax.naming.directory.DirContext {
                        protected constructor(arg0: java.util.Hashtable<any, any>)
                        protected getContinuationDirContext(arg0: javax.naming.Name): javax.naming.directory.DirContext
                        public getAttributes(arg0: java.lang.String | string): javax.naming.directory.Attributes
                        public getAttributes(arg0: javax.naming.Name): javax.naming.directory.Attributes
                        public getAttributes(arg0: java.lang.String | string, arg1: java.lang.String[]): javax.naming.directory.Attributes
                        public getAttributes(arg0: javax.naming.Name, arg1: java.lang.String[]): javax.naming.directory.Attributes
                        public modifyAttributes(arg0: java.lang.String | string, arg1: int, arg2: javax.naming.directory.Attributes): void
                        public modifyAttributes(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.directory.Attributes): void
                        public modifyAttributes(arg0: java.lang.String | string, arg1: javax.naming.directory.ModificationItem[]): void
                        public modifyAttributes(arg0: javax.naming.Name, arg1: javax.naming.directory.ModificationItem[]): void
                        public bind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                        public bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                        public rebind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                        public rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                        public createSubcontext(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes): javax.naming.directory.DirContext
                        public createSubcontext(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.directory.DirContext
                        public getSchema(arg0: java.lang.String | string): javax.naming.directory.DirContext
                        public getSchema(arg0: javax.naming.Name): javax.naming.directory.DirContext
                        public getSchemaClassDefinition(arg0: java.lang.String | string): javax.naming.directory.DirContext
                        public getSchemaClassDefinition(arg0: javax.naming.Name): javax.naming.directory.DirContext
                        public search(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public static class: java.lang.Class<any>
                    }
                    class Uri {
                        protected uri: string
                        protected scheme: string
                        protected host: string
                        protected port: int
                        protected hasAuthority: boolean
                        protected path: string
                        protected query: string
                        public constructor(arg0: java.lang.String | string)
                        protected constructor()
                        protected init(arg0: java.lang.String | string): void
                        public getScheme(): string
                        public getHost(): string
                        public getPort(): int
                        public getPath(): string
                        public getQuery(): string
                        public toString(): string
                        public static class: java.lang.Class<any>
                    }
                    class UrlUtil {
                        public static decode(arg0: java.lang.String | string): string
                        public static decode(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                        public static encode(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                        public static class: java.lang.Class<any>
                    }
                }
            }
            namespace url {
                namespace ldap {
                    class ldapURLContext extends com.sun.jndi.toolkit.url.GenericURLDirContext {
                        protected getRootURLContext(arg0: java.lang.String | string, arg1: java.util.Hashtable<any, any>): javax.naming.spi.ResolveResult
                        protected getURLSuffix(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.naming.Name
                        public lookup(arg0: java.lang.String | string): java.lang.Object
                        public lookup(arg0: javax.naming.Name): java.lang.Object
                        public bind(arg0: java.lang.String | string, arg1: java.lang.Object): void
                        public bind(arg0: javax.naming.Name, arg1: java.lang.Object): void
                        public rebind(arg0: java.lang.String | string, arg1: java.lang.Object): void
                        public rebind(arg0: javax.naming.Name, arg1: java.lang.Object): void
                        public unbind(arg0: java.lang.String | string): void
                        public unbind(arg0: javax.naming.Name): void
                        public rename(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                        public rename(arg0: javax.naming.Name, arg1: javax.naming.Name): void
                        public list(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        public list(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                        public listBindings(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.Binding>
                        public listBindings(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.Binding>
                        public destroySubcontext(arg0: java.lang.String | string): void
                        public destroySubcontext(arg0: javax.naming.Name): void
                        public createSubcontext(arg0: java.lang.String | string): javax.naming.Context
                        public createSubcontext(arg0: javax.naming.Name): javax.naming.Context
                        public lookupLink(arg0: java.lang.String | string): java.lang.Object
                        public lookupLink(arg0: javax.naming.Name): java.lang.Object
                        public getNameParser(arg0: java.lang.String | string): javax.naming.NameParser
                        public getNameParser(arg0: javax.naming.Name): javax.naming.NameParser
                        public composeName(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                        public composeName(arg0: javax.naming.Name, arg1: javax.naming.Name): javax.naming.Name
                        public getAttributes(arg0: java.lang.String | string): javax.naming.directory.Attributes
                        public getAttributes(arg0: javax.naming.Name): javax.naming.directory.Attributes
                        public getAttributes(arg0: java.lang.String | string, arg1: java.lang.String[]): javax.naming.directory.Attributes
                        public getAttributes(arg0: javax.naming.Name, arg1: java.lang.String[]): javax.naming.directory.Attributes
                        public modifyAttributes(arg0: java.lang.String | string, arg1: int, arg2: javax.naming.directory.Attributes): void
                        public modifyAttributes(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.directory.Attributes): void
                        public modifyAttributes(arg0: java.lang.String | string, arg1: javax.naming.directory.ModificationItem[]): void
                        public modifyAttributes(arg0: javax.naming.Name, arg1: javax.naming.directory.ModificationItem[]): void
                        public bind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                        public bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                        public rebind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                        public rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                        public createSubcontext(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes): javax.naming.directory.DirContext
                        public createSubcontext(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.directory.DirContext
                        public getSchema(arg0: java.lang.String | string): javax.naming.directory.DirContext
                        public getSchema(arg0: javax.naming.Name): javax.naming.directory.DirContext
                        public getSchemaClassDefinition(arg0: java.lang.String | string): javax.naming.directory.DirContext
                        public getSchemaClassDefinition(arg0: javax.naming.Name): javax.naming.directory.DirContext
                        public search(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                        public static class: java.lang.Class<any>
                    }
                    class ldapURLContextFactory implements javax.naming.spi.ObjectFactory {
                        public constructor()
                        public getObjectInstance(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<any, any>): java.lang.Object
                        public static class: java.lang.Class<any>
                    }
                    class ldapURLContextFactory$$Lambda implements javax.naming.spi.ObjectFactory {
                        public constructor()
                    }
                }
                namespace ldaps {
                    class ldapsURLContextFactory extends com.sun.jndi.url.ldap.ldapURLContextFactory {
                        public constructor()
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
        namespace naming {
            namespace internal {
                class FactoryEnumeration {
                    public next(): java.lang.Object
                    public hasMore(): boolean
                    public static class: java.lang.Class<any>
                }
                class NamedWeakReference<T> extends java.lang.ref.WeakReference<T> {
                    public static class: java.lang.Class<any>
                }
                class ResourceManager {
                    public static getInitialEnvironment(arg0: java.util.Hashtable<any, any>): java.util.Hashtable<any, any>
                    public static getProperty(arg0: java.lang.String | string, arg1: java.util.Hashtable<any, any>, arg2: javax.naming.Context, arg3: boolean): string
                    public static getFactories(arg0: java.lang.String | string, arg1: java.util.Hashtable<any, any>, arg2: javax.naming.Context): com.sun.naming.internal.FactoryEnumeration
                    public static getFactory(arg0: java.lang.String | string, arg1: java.util.Hashtable<any, any>, arg2: javax.naming.Context, arg3: java.lang.String | string, arg4: java.lang.String | string): java.lang.Object
                    public static class: java.lang.Class<any>
                }
                abstract class VersionHelper {
                    public static INITIAL_CONTEXT_FACTORY: int
                    public static OBJECT_FACTORIES: int
                    public static URL_PKG_PREFIXES: int
                    public static STATE_FACTORIES: int
                    public static PROVIDER_URL: int
                    public static DNS_URL: int
                    public static CONTROL_FACTORIES: int
                    public static getVersionHelper(): com.sun.naming.internal.VersionHelper
                    public loadClass(arg0: java.lang.String | string): java.lang.Class<any>
                    public loadClass(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Class<any>
                    protected static getUrlArray(arg0: java.lang.String | string): java.net.URL[]
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}
declare namespace javax {
    namespace naming {
        namespace directory {
            interface Attribute extends java.lang.Cloneable , java.io.Serializable {
                serialVersionUID: long
                getAll(): javax.naming.NamingEnumeration<any>
                get(): java.lang.Object
                size(): int
                getID(): string
                contains(arg0: java.lang.Object): boolean
                add(arg0: java.lang.Object): boolean
                remove(arg0: java.lang.Object): boolean
                clear(): void
                getAttributeSyntaxDefinition(): javax.naming.directory.DirContext
                getAttributeDefinition(): javax.naming.directory.DirContext
                clone(): java.lang.Object
                isOrdered(): boolean
                get(arg0: int): java.lang.Object
                remove(arg0: int): java.lang.Object
                add(arg0: int, arg1: java.lang.Object): void
                set(arg0: int, arg1: java.lang.Object): java.lang.Object
            }
            class AttributeInUseException extends javax.naming.NamingException {
                public constructor(arg0: java.lang.String | string)
                public constructor()
                public static class: java.lang.Class<any>
            }
            class AttributeModificationException extends javax.naming.NamingException {
                public constructor(arg0: java.lang.String | string)
                public constructor()
                public setUnexecutedModifications(arg0: javax.naming.directory.ModificationItem[]): void
                public getUnexecutedModifications(): javax.naming.directory.ModificationItem[]
                public toString(): string
                public static class: java.lang.Class<any>
            }
            interface Attributes extends java.lang.Cloneable , java.io.Serializable {
                isCaseIgnored(): boolean
                size(): int
                get(arg0: java.lang.String | string): javax.naming.directory.Attribute
                getAll(): javax.naming.NamingEnumeration<javax.naming.directory.Attribute>
                getIDs(): javax.naming.NamingEnumeration<java.lang.String>
                put(arg0: java.lang.String | string, arg1: java.lang.Object): javax.naming.directory.Attribute
                put(arg0: javax.naming.directory.Attribute): javax.naming.directory.Attribute
                remove(arg0: java.lang.String | string): javax.naming.directory.Attribute
                clone(): java.lang.Object
            }
            class BasicAttribute implements javax.naming.directory.Attribute {
                protected attrID: string
                protected values: java.util.Vector<java.lang.Object>
                protected ordered: boolean
                public clone(): java.lang.Object
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toString(): string
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Object)
                public constructor(arg0: java.lang.String | string, arg1: boolean)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: boolean)
                public getAll(): javax.naming.NamingEnumeration<any>
                public get(): java.lang.Object
                public size(): int
                public getID(): string
                public contains(arg0: java.lang.Object): boolean
                public add(arg0: java.lang.Object): boolean
                public remove(arg0: java.lang.Object): boolean
                public clear(): void
                public isOrdered(): boolean
                public get(arg0: int): java.lang.Object
                public remove(arg0: int): java.lang.Object
                public add(arg0: int, arg1: java.lang.Object): void
                public set(arg0: int, arg1: java.lang.Object): java.lang.Object
                public getAttributeSyntaxDefinition(): javax.naming.directory.DirContext
                public getAttributeDefinition(): javax.naming.directory.DirContext
                public static class: java.lang.Class<any>
            }
            class BasicAttributes implements javax.naming.directory.Attributes {
                public constructor()
                public constructor(arg0: boolean)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Object)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: boolean)
                public clone(): java.lang.Object
                public isCaseIgnored(): boolean
                public size(): int
                public get(arg0: java.lang.String | string): javax.naming.directory.Attribute
                public getAll(): javax.naming.NamingEnumeration<javax.naming.directory.Attribute>
                public getIDs(): javax.naming.NamingEnumeration<java.lang.String>
                public put(arg0: java.lang.String | string, arg1: java.lang.Object): javax.naming.directory.Attribute
                public put(arg0: javax.naming.directory.Attribute): javax.naming.directory.Attribute
                public remove(arg0: java.lang.String | string): javax.naming.directory.Attribute
                public toString(): string
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
            interface DirContext extends javax.naming.Context {
                ADD_ATTRIBUTE: int
                REPLACE_ATTRIBUTE: int
                REMOVE_ATTRIBUTE: int
                getAttributes(arg0: javax.naming.Name): javax.naming.directory.Attributes
                getAttributes(arg0: java.lang.String | string): javax.naming.directory.Attributes
                getAttributes(arg0: javax.naming.Name, arg1: java.lang.String[]): javax.naming.directory.Attributes
                getAttributes(arg0: java.lang.String | string, arg1: java.lang.String[]): javax.naming.directory.Attributes
                modifyAttributes(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.directory.Attributes): void
                modifyAttributes(arg0: java.lang.String | string, arg1: int, arg2: javax.naming.directory.Attributes): void
                modifyAttributes(arg0: javax.naming.Name, arg1: javax.naming.directory.ModificationItem[]): void
                modifyAttributes(arg0: java.lang.String | string, arg1: javax.naming.directory.ModificationItem[]): void
                bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                bind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                rebind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                createSubcontext(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.directory.DirContext
                createSubcontext(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes): javax.naming.directory.DirContext
                getSchema(arg0: javax.naming.Name): javax.naming.directory.DirContext
                getSchema(arg0: java.lang.String | string): javax.naming.directory.DirContext
                getSchemaClassDefinition(arg0: javax.naming.Name): javax.naming.directory.DirContext
                getSchemaClassDefinition(arg0: java.lang.String | string): javax.naming.directory.DirContext
                search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                search(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                search(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                search(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                search(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
            }
            class InitialDirContext extends javax.naming.InitialContext implements javax.naming.directory.DirContext {
                protected constructor(arg0: boolean)
                public constructor()
                public constructor(arg0: java.util.Hashtable<any, any>)
                public getAttributes(arg0: java.lang.String | string): javax.naming.directory.Attributes
                public getAttributes(arg0: java.lang.String | string, arg1: java.lang.String[]): javax.naming.directory.Attributes
                public getAttributes(arg0: javax.naming.Name): javax.naming.directory.Attributes
                public getAttributes(arg0: javax.naming.Name, arg1: java.lang.String[]): javax.naming.directory.Attributes
                public modifyAttributes(arg0: java.lang.String | string, arg1: int, arg2: javax.naming.directory.Attributes): void
                public modifyAttributes(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.directory.Attributes): void
                public modifyAttributes(arg0: java.lang.String | string, arg1: javax.naming.directory.ModificationItem[]): void
                public modifyAttributes(arg0: javax.naming.Name, arg1: javax.naming.directory.ModificationItem[]): void
                public bind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                public bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                public rebind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                public rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                public createSubcontext(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes): javax.naming.directory.DirContext
                public createSubcontext(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.directory.DirContext
                public getSchema(arg0: java.lang.String | string): javax.naming.directory.DirContext
                public getSchema(arg0: javax.naming.Name): javax.naming.directory.DirContext
                public getSchemaClassDefinition(arg0: java.lang.String | string): javax.naming.directory.DirContext
                public getSchemaClassDefinition(arg0: javax.naming.Name): javax.naming.directory.DirContext
                public search(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                public search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                public search(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                public search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                public search(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                public search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                public search(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                public search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                public static class: java.lang.Class<any>
            }
            class InvalidAttributeIdentifierException extends javax.naming.NamingException {
                public constructor(arg0: java.lang.String | string)
                public constructor()
                public static class: java.lang.Class<any>
            }
            class InvalidAttributeValueException extends javax.naming.NamingException {
                public constructor(arg0: java.lang.String | string)
                public constructor()
                public static class: java.lang.Class<any>
            }
            class InvalidAttributesException extends javax.naming.NamingException {
                public constructor(arg0: java.lang.String | string)
                public constructor()
                public static class: java.lang.Class<any>
            }
            class InvalidSearchControlsException extends javax.naming.NamingException {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class InvalidSearchFilterException extends javax.naming.NamingException {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class ModificationItem implements java.io.Serializable {
                public constructor(arg0: int, arg1: javax.naming.directory.Attribute)
                public getModificationOp(): int
                public getAttribute(): javax.naming.directory.Attribute
                public toString(): string
                public static class: java.lang.Class<any>
            }
            class NoSuchAttributeException extends javax.naming.NamingException {
                public constructor(arg0: java.lang.String | string)
                public constructor()
                public static class: java.lang.Class<any>
            }
            class SchemaViolationException extends javax.naming.NamingException {
                public constructor()
                public constructor(arg0: java.lang.String | string)
                public static class: java.lang.Class<any>
            }
            class SearchControls implements java.io.Serializable {
                public static OBJECT_SCOPE: int
                public static ONELEVEL_SCOPE: int
                public static SUBTREE_SCOPE: int
                public constructor()
                public constructor(arg0: int, arg1: long, arg2: int, arg3: java.lang.String[], arg4: boolean, arg5: boolean)
                public getSearchScope(): int
                public getTimeLimit(): int
                public getDerefLinkFlag(): boolean
                public getReturningObjFlag(): boolean
                public getCountLimit(): long
                public getReturningAttributes(): java.lang.String[]
                public setSearchScope(arg0: int): void
                public setTimeLimit(arg0: int): void
                public setDerefLinkFlag(arg0: boolean): void
                public setReturningObjFlag(arg0: boolean): void
                public setCountLimit(arg0: long): void
                public setReturningAttributes(arg0: java.lang.String[]): void
                public static class: java.lang.Class<any>
            }
            class SearchResult extends javax.naming.Binding {
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: boolean)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object, arg3: javax.naming.directory.Attributes)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object, arg3: javax.naming.directory.Attributes, arg4: boolean)
                public getAttributes(): javax.naming.directory.Attributes
                public setAttributes(arg0: javax.naming.directory.Attributes): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
        namespace event {
            interface EventContext extends javax.naming.Context {
                OBJECT_SCOPE: int
                ONELEVEL_SCOPE: int
                SUBTREE_SCOPE: int
                addNamingListener(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.event.NamingListener): void
                addNamingListener(arg0: java.lang.String | string, arg1: int, arg2: javax.naming.event.NamingListener): void
                removeNamingListener(arg0: javax.naming.event.NamingListener): void
                targetMustExist(): boolean
            }
            interface EventDirContext extends javax.naming.event.EventContext , javax.naming.directory.DirContext {
                addNamingListener(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls, arg3: javax.naming.event.NamingListener): void
                addNamingListener(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls, arg3: javax.naming.event.NamingListener): void
                addNamingListener(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls, arg4: javax.naming.event.NamingListener): void
                addNamingListener(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls, arg4: javax.naming.event.NamingListener): void
            }
            interface NamespaceChangeListener extends javax.naming.event.NamingListener {
                objectAdded(arg0: javax.naming.event.NamingEvent): void
                objectRemoved(arg0: javax.naming.event.NamingEvent): void
                objectRenamed(arg0: javax.naming.event.NamingEvent): void
            }
            class NamingEvent extends java.util.EventObject {
                public static OBJECT_ADDED: int
                public static OBJECT_REMOVED: int
                public static OBJECT_RENAMED: int
                public static OBJECT_CHANGED: int
                protected changeInfo: java.lang.Object
                protected type: int
                protected oldBinding: javax.naming.Binding
                protected newBinding: javax.naming.Binding
                public constructor(arg0: javax.naming.event.EventContext, arg1: int, arg2: javax.naming.Binding, arg3: javax.naming.Binding, arg4: java.lang.Object)
                public getType(): int
                public getEventContext(): javax.naming.event.EventContext
                public getOldBinding(): javax.naming.Binding
                public getNewBinding(): javax.naming.Binding
                public getChangeInfo(): java.lang.Object
                public dispatch(arg0: javax.naming.event.NamingListener): void
                public static class: java.lang.Class<any>
            }
            class NamingExceptionEvent extends java.util.EventObject {
                public constructor(arg0: javax.naming.event.EventContext, arg1: javax.naming.NamingException)
                public getException(): javax.naming.NamingException
                public getEventContext(): javax.naming.event.EventContext
                public dispatch(arg0: javax.naming.event.NamingListener): void
                public static class: java.lang.Class<any>
            }
            interface NamingListener extends java.util.EventListener {
                namingExceptionThrown(arg0: javax.naming.event.NamingExceptionEvent): void
            }
            interface ObjectChangeListener extends javax.naming.event.NamingListener {
                objectChanged(arg0: javax.naming.event.NamingEvent): void
            }
        }
        namespace ldap {
            class BasicControl implements javax.naming.ldap.Control {
                protected id: string
                protected criticality: boolean
                protected value: byte[]
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: boolean, arg2: byte[])
                public getID(): string
                public isCritical(): boolean
                public getEncodedValue(): byte[]
                public static class: java.lang.Class<any>
            }
            interface Control extends java.io.Serializable {
                CRITICAL: boolean
                NONCRITICAL: boolean
                getID(): string
                isCritical(): boolean
                getEncodedValue(): byte[]
            }
            abstract class ControlFactory {
                protected constructor()
                public getControlInstance(arg0: javax.naming.ldap.Control): javax.naming.ldap.Control
                public static getControlInstance(arg0: javax.naming.ldap.Control, arg1: javax.naming.Context, arg2: java.util.Hashtable<any, any>): javax.naming.ldap.Control
                public static class: java.lang.Class<any>
            }
            interface ExtendedRequest extends java.io.Serializable {
                getID(): string
                getEncodedValue(): byte[]
                createExtendedResponse(arg0: java.lang.String | string, arg1: byte[], arg2: int, arg3: int): javax.naming.ldap.ExtendedResponse
            }
            interface ExtendedResponse extends java.io.Serializable {
                getID(): string
                getEncodedValue(): byte[]
            }
            interface HasControls {
                getControls(): javax.naming.ldap.Control[]
            }
            interface HasControls$$Lambda {
                (): javax.naming.ldap.Control[]
            }
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
            class LdapName implements javax.naming.Name {
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.util.List<javax.naming.ldap.Rdn>)
                public size(): int
                public isEmpty(): boolean
                public getAll(): java.util.Enumeration<java.lang.String>
                public get(arg0: int): string
                public getRdn(arg0: int): javax.naming.ldap.Rdn
                public getPrefix(arg0: int): javax.naming.Name
                public getSuffix(arg0: int): javax.naming.Name
                public startsWith(arg0: javax.naming.Name): boolean
                public startsWith(arg0: java.util.List<javax.naming.ldap.Rdn>): boolean
                public endsWith(arg0: javax.naming.Name): boolean
                public endsWith(arg0: java.util.List<javax.naming.ldap.Rdn>): boolean
                public addAll(arg0: javax.naming.Name): javax.naming.Name
                public addAll(arg0: java.util.List<javax.naming.ldap.Rdn>): javax.naming.Name
                public addAll(arg0: int, arg1: javax.naming.Name): javax.naming.Name
                public addAll(arg0: int, arg1: java.util.List<javax.naming.ldap.Rdn>): javax.naming.Name
                public add(arg0: java.lang.String | string): javax.naming.Name
                public add(arg0: javax.naming.ldap.Rdn): javax.naming.Name
                public add(arg0: int, arg1: java.lang.String | string): javax.naming.Name
                public add(arg0: int, arg1: javax.naming.ldap.Rdn): javax.naming.Name
                public remove(arg0: int): java.lang.Object
                public getRdns(): java.util.List<javax.naming.ldap.Rdn>
                public clone(): java.lang.Object
                public toString(): string
                public equals(arg0: java.lang.Object): boolean
                public compareTo(arg0: java.lang.Object): int
                public hashCode(): int
                public static class: java.lang.Class<any>
            }
            abstract class LdapReferralException extends javax.naming.ReferralException {
                protected constructor(arg0: java.lang.String | string)
                protected constructor()
                public getReferralContext(): javax.naming.Context
                public getReferralContext(arg0: java.util.Hashtable<any, any>): javax.naming.Context
                public getReferralContext(arg0: java.util.Hashtable<any, any>, arg1: javax.naming.ldap.Control[]): javax.naming.Context
                public static class: java.lang.Class<any>
            }
            class ManageReferralControl extends javax.naming.ldap.BasicControl {
                public static OID: string
                public constructor()
                public constructor(arg0: boolean)
                public static class: java.lang.Class<any>
            }
            class PagedResultsControl extends javax.naming.ldap.BasicControl {
                public static OID: string
                public constructor(arg0: int, arg1: boolean)
                public constructor(arg0: int, arg1: byte[], arg2: boolean)
                public static class: java.lang.Class<any>
            }
            class PagedResultsResponseControl extends javax.naming.ldap.BasicControl {
                public static OID: string
                public constructor(arg0: java.lang.String | string, arg1: boolean, arg2: byte[])
                public getResultSize(): int
                public getCookie(): byte[]
                public static class: java.lang.Class<any>
            }
            class Rdn implements java.io.Serializable , java.lang.Comparable<java.lang.Object> {
                public constructor(arg0: javax.naming.directory.Attributes)
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: javax.naming.ldap.Rdn)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Object)
                public getValue(): java.lang.Object
                public getType(): string
                public toString(): string
                public compareTo(arg0: java.lang.Object): int
                public equals(arg0: java.lang.Object): boolean
                public hashCode(): int
                public toAttributes(): javax.naming.directory.Attributes
                public size(): int
                public static escapeValue(arg0: java.lang.Object): string
                public static unescapeValue(arg0: java.lang.String | string): java.lang.Object
                public static class: java.lang.Class<any>
            }
            class Rfc2253Parser {
                public static class: java.lang.Class<any>
            }
            class SortControl extends javax.naming.ldap.BasicControl {
                public static OID: string
                public constructor(arg0: java.lang.String | string, arg1: boolean)
                public constructor(arg0: java.lang.String[], arg1: boolean)
                public constructor(arg0: javax.naming.ldap.SortKey[], arg1: boolean)
                public static class: java.lang.Class<any>
            }
            class SortKey {
                public constructor(arg0: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: boolean, arg2: java.lang.String | string)
                public getAttributeID(): string
                public isAscending(): boolean
                public getMatchingRuleID(): string
                public static class: java.lang.Class<any>
            }
            class SortResponseControl extends javax.naming.ldap.BasicControl {
                public static OID: string
                public constructor(arg0: java.lang.String | string, arg1: boolean, arg2: byte[])
                public isSorted(): boolean
                public getResultCode(): int
                public getAttributeID(): string
                public getException(): javax.naming.NamingException
                public static class: java.lang.Class<any>
            }
            class StartTlsRequest implements javax.naming.ldap.ExtendedRequest {
                public static OID: string
                public constructor()
                public getID(): string
                public getEncodedValue(): byte[]
                public createExtendedResponse(arg0: java.lang.String | string, arg1: byte[], arg2: int, arg3: int): javax.naming.ldap.ExtendedResponse
                public static class: java.lang.Class<any>
            }
            abstract class StartTlsResponse implements javax.naming.ldap.ExtendedResponse {
                public static OID: string
                protected constructor()
                public getID(): string
                public getEncodedValue(): byte[]
                public setEnabledCipherSuites(arg0: java.lang.String[]): void
                public setHostnameVerifier(arg0: javax.net.ssl.HostnameVerifier | javax.net.ssl.HostnameVerifier$$Lambda): void
                public negotiate(): javax.net.ssl.SSLSession
                public negotiate(arg0: javax.net.ssl.SSLSocketFactory): javax.net.ssl.SSLSession
                public close(): void
                public static class: java.lang.Class<any>
            }
            interface UnsolicitedNotification extends javax.naming.ldap.ExtendedResponse , javax.naming.ldap.HasControls {
                getReferrals(): java.lang.String[]
                getException(): javax.naming.NamingException
            }
            class UnsolicitedNotificationEvent extends java.util.EventObject {
                public constructor(arg0: java.lang.Object, arg1: javax.naming.ldap.UnsolicitedNotification)
                public getNotification(): javax.naming.ldap.UnsolicitedNotification
                public dispatch(arg0: javax.naming.ldap.UnsolicitedNotificationListener): void
                public static class: java.lang.Class<any>
            }
            interface UnsolicitedNotificationListener extends javax.naming.event.NamingListener {
                notificationReceived(arg0: javax.naming.ldap.UnsolicitedNotificationEvent): void
            }
        }
        namespace spi {
            class ContinuationContext implements javax.naming.Context , javax.naming.spi.Resolver {
                protected cpe: javax.naming.CannotProceedException
                protected env: java.util.Hashtable<any, any>
                protected contCtx: javax.naming.Context
                protected constructor(arg0: javax.naming.CannotProceedException, arg1: java.util.Hashtable<any, any>)
                protected getTargetContext(): javax.naming.Context
                public lookup(arg0: javax.naming.Name): java.lang.Object
                public lookup(arg0: java.lang.String | string): java.lang.Object
                public bind(arg0: javax.naming.Name, arg1: java.lang.Object): void
                public bind(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public rebind(arg0: javax.naming.Name, arg1: java.lang.Object): void
                public rebind(arg0: java.lang.String | string, arg1: java.lang.Object): void
                public unbind(arg0: javax.naming.Name): void
                public unbind(arg0: java.lang.String | string): void
                public rename(arg0: javax.naming.Name, arg1: javax.naming.Name): void
                public rename(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                public list(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                public list(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
                public listBindings(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.Binding>
                public listBindings(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.Binding>
                public destroySubcontext(arg0: javax.naming.Name): void
                public destroySubcontext(arg0: java.lang.String | string): void
                public createSubcontext(arg0: javax.naming.Name): javax.naming.Context
                public createSubcontext(arg0: java.lang.String | string): javax.naming.Context
                public lookupLink(arg0: javax.naming.Name): java.lang.Object
                public lookupLink(arg0: java.lang.String | string): java.lang.Object
                public getNameParser(arg0: javax.naming.Name): javax.naming.NameParser
                public getNameParser(arg0: java.lang.String | string): javax.naming.NameParser
                public composeName(arg0: javax.naming.Name, arg1: javax.naming.Name): javax.naming.Name
                public composeName(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                public addToEnvironment(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
                public removeFromEnvironment(arg0: java.lang.String | string): java.lang.Object
                public getEnvironment(): java.util.Hashtable<any, any>
                public getNameInNamespace(): string
                public resolveToClass(arg0: javax.naming.Name, arg1: java.lang.Class<javax.naming.Context>): javax.naming.spi.ResolveResult
                public resolveToClass(arg0: java.lang.String | string, arg1: java.lang.Class<javax.naming.Context>): javax.naming.spi.ResolveResult
                public close(): void
                public static class: java.lang.Class<any>
            }
            class ContinuationDirContext extends javax.naming.spi.ContinuationContext implements javax.naming.directory.DirContext {
                protected getTargetContext(arg0: javax.naming.Name): javax.naming.spi.DirContextNamePair
                protected getTargetContext(arg0: java.lang.String | string): javax.naming.spi.DirContextStringPair
                public getAttributes(arg0: java.lang.String | string): javax.naming.directory.Attributes
                public getAttributes(arg0: java.lang.String | string, arg1: java.lang.String[]): javax.naming.directory.Attributes
                public getAttributes(arg0: javax.naming.Name): javax.naming.directory.Attributes
                public getAttributes(arg0: javax.naming.Name, arg1: java.lang.String[]): javax.naming.directory.Attributes
                public modifyAttributes(arg0: javax.naming.Name, arg1: int, arg2: javax.naming.directory.Attributes): void
                public modifyAttributes(arg0: java.lang.String | string, arg1: int, arg2: javax.naming.directory.Attributes): void
                public modifyAttributes(arg0: javax.naming.Name, arg1: javax.naming.directory.ModificationItem[]): void
                public modifyAttributes(arg0: java.lang.String | string, arg1: javax.naming.directory.ModificationItem[]): void
                public bind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                public bind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                public rebind(arg0: javax.naming.Name, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                public rebind(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes): void
                public createSubcontext(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.directory.DirContext
                public createSubcontext(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes): javax.naming.directory.DirContext
                public search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                public search(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes, arg2: java.lang.String[]): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                public search(arg0: javax.naming.Name, arg1: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                public search(arg0: java.lang.String | string, arg1: javax.naming.directory.Attributes): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                public search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                public search(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                public search(arg0: javax.naming.Name, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                public search(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object[], arg3: javax.naming.directory.SearchControls): javax.naming.NamingEnumeration<javax.naming.directory.SearchResult>
                public getSchema(arg0: java.lang.String | string): javax.naming.directory.DirContext
                public getSchema(arg0: javax.naming.Name): javax.naming.directory.DirContext
                public getSchemaClassDefinition(arg0: java.lang.String | string): javax.naming.directory.DirContext
                public getSchemaClassDefinition(arg0: javax.naming.Name): javax.naming.directory.DirContext
                public static class: java.lang.Class<any>
            }
            interface DirObjectFactory extends javax.naming.spi.ObjectFactory {
                getObjectInstance(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<any, any>, arg4: javax.naming.directory.Attributes): java.lang.Object
            }
            interface DirStateFactory extends javax.naming.spi.StateFactory {
                getStateToBind(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<any, any>, arg4: javax.naming.directory.Attributes): javax.naming.spi.DirStateFactory$Result
            }
            class DirectoryManager extends javax.naming.spi.NamingManager {
                public static getContinuationDirContext(arg0: javax.naming.CannotProceedException): javax.naming.directory.DirContext
                public static getObjectInstance(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<any, any>, arg4: javax.naming.directory.Attributes): java.lang.Object
                public static getStateToBind(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<any, any>, arg4: javax.naming.directory.Attributes): javax.naming.spi.DirStateFactory$Result
                public static class: java.lang.Class<any>
            }
            interface InitialContextFactory {
                getInitialContext(arg0: java.util.Hashtable<any, any>): javax.naming.Context
            }
            interface InitialContextFactory$$Lambda {
                (arg0: java.util.Hashtable<any, any>): javax.naming.Context
            }
            interface InitialContextFactoryBuilder {
                createInitialContextFactory(arg0: java.util.Hashtable<any, any>): javax.naming.spi.InitialContextFactory
            }
            interface InitialContextFactoryBuilder$$Lambda {
                (arg0: java.util.Hashtable<any, any>): javax.naming.spi.InitialContextFactory
            }
            class NamingManager {
                public static CPE: string
                public static setObjectFactoryBuilder(arg0: javax.naming.spi.ObjectFactoryBuilder | javax.naming.spi.ObjectFactoryBuilder$$Lambda): void
                public static getObjectInstance(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<any, any>): java.lang.Object
                public static getURLContext(arg0: java.lang.String | string, arg1: java.util.Hashtable<any, any>): javax.naming.Context
                public static getInitialContext(arg0: java.util.Hashtable<any, any>): javax.naming.Context
                public static setInitialContextFactoryBuilder(arg0: javax.naming.spi.InitialContextFactoryBuilder | javax.naming.spi.InitialContextFactoryBuilder$$Lambda): void
                public static hasInitialContextFactoryBuilder(): boolean
                public static getContinuationContext(arg0: javax.naming.CannotProceedException): javax.naming.Context
                public static getStateToBind(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<any, any>): java.lang.Object
                public static class: java.lang.Class<any>
            }
            interface ObjectFactory {
                getObjectInstance(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<any, any>): java.lang.Object
            }
            interface ObjectFactory$$Lambda {
                (arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<any, any>): java.lang.Object
            }
            interface ObjectFactoryBuilder {
                createObjectFactory(arg0: java.lang.Object, arg1: java.util.Hashtable<any, any>): javax.naming.spi.ObjectFactory
            }
            interface ObjectFactoryBuilder$$Lambda {
                (arg0: java.lang.Object, arg1: java.util.Hashtable<any, any>): javax.naming.spi.ObjectFactory
            }
            class ResolveResult implements java.io.Serializable {
                protected resolvedObj: java.lang.Object
                protected remainingName: javax.naming.Name
                protected constructor()
                public constructor(arg0: java.lang.Object, arg1: java.lang.String | string)
                public constructor(arg0: java.lang.Object, arg1: javax.naming.Name)
                public getRemainingName(): javax.naming.Name
                public getResolvedObj(): java.lang.Object
                public setRemainingName(arg0: javax.naming.Name): void
                public appendRemainingName(arg0: javax.naming.Name): void
                public appendRemainingComponent(arg0: java.lang.String | string): void
                public setResolvedObj(arg0: java.lang.Object): void
                public static class: java.lang.Class<any>
            }
            interface Resolver {
                resolveToClass(arg0: javax.naming.Name, arg1: java.lang.Class<javax.naming.Context>): javax.naming.spi.ResolveResult
                resolveToClass(arg0: java.lang.String | string, arg1: java.lang.Class<javax.naming.Context>): javax.naming.spi.ResolveResult
            }
            interface StateFactory {
                getStateToBind(arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<any, any>): java.lang.Object
            }
            interface StateFactory$$Lambda {
                (arg0: java.lang.Object, arg1: javax.naming.Name, arg2: javax.naming.Context, arg3: java.util.Hashtable<any, any>): java.lang.Object
            }
        }
        class AuthenticationException extends javax.naming.NamingSecurityException {
            public constructor(arg0: java.lang.String | string)
            public constructor()
            public static class: java.lang.Class<any>
        }
        class AuthenticationNotSupportedException extends javax.naming.NamingSecurityException {
            public constructor(arg0: java.lang.String | string)
            public constructor()
            public static class: java.lang.Class<any>
        }
        class BinaryRefAddr extends javax.naming.RefAddr {
            public constructor(arg0: java.lang.String | string, arg1: byte[])
            public constructor(arg0: java.lang.String | string, arg1: byte[], arg2: int, arg3: int)
            public getContent(): java.lang.Object
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public toString(): string
            public static class: java.lang.Class<any>
        }
        class Binding extends javax.naming.NameClassPair {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Object)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: boolean)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.Object, arg3: boolean)
            public getClassName(): string
            public getObject(): java.lang.Object
            public setObject(arg0: java.lang.Object): void
            public toString(): string
            public static class: java.lang.Class<any>
        }
        class CannotProceedException extends javax.naming.NamingException {
            protected remainingNewName: javax.naming.Name
            protected environment: java.util.Hashtable<any, any>
            protected altName: javax.naming.Name
            protected altNameCtx: javax.naming.Context
            public constructor(arg0: java.lang.String | string)
            public constructor()
            public getEnvironment(): java.util.Hashtable<any, any>
            public setEnvironment(arg0: java.util.Hashtable<any, any>): void
            public getRemainingNewName(): javax.naming.Name
            public setRemainingNewName(arg0: javax.naming.Name): void
            public getAltName(): javax.naming.Name
            public setAltName(arg0: javax.naming.Name): void
            public getAltNameCtx(): javax.naming.Context
            public setAltNameCtx(arg0: javax.naming.Context): void
            public static class: java.lang.Class<any>
        }
        class CommunicationException extends javax.naming.NamingException {
            public constructor(arg0: java.lang.String | string)
            public constructor()
            public static class: java.lang.Class<any>
        }
        class CompositeName implements javax.naming.Name {
            protected constructor(arg0: java.util.Enumeration<java.lang.String>)
            public constructor(arg0: java.lang.String | string)
            public constructor()
            public toString(): string
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public compareTo(arg0: java.lang.Object): int
            public clone(): java.lang.Object
            public size(): int
            public isEmpty(): boolean
            public getAll(): java.util.Enumeration<java.lang.String>
            public get(arg0: int): string
            public getPrefix(arg0: int): javax.naming.Name
            public getSuffix(arg0: int): javax.naming.Name
            public startsWith(arg0: javax.naming.Name): boolean
            public endsWith(arg0: javax.naming.Name): boolean
            public addAll(arg0: javax.naming.Name): javax.naming.Name
            public addAll(arg0: int, arg1: javax.naming.Name): javax.naming.Name
            public add(arg0: java.lang.String | string): javax.naming.Name
            public add(arg0: int, arg1: java.lang.String | string): javax.naming.Name
            public remove(arg0: int): java.lang.Object
            public static class: java.lang.Class<any>
        }
        class CompoundName implements javax.naming.Name {
            protected impl: javax.naming.NameImpl
            protected mySyntax: java.util.Properties
            protected constructor(arg0: java.util.Enumeration<java.lang.String>, arg1: java.util.Properties)
            public constructor(arg0: java.lang.String | string, arg1: java.util.Properties)
            public toString(): string
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public clone(): java.lang.Object
            public compareTo(arg0: java.lang.Object): int
            public size(): int
            public isEmpty(): boolean
            public getAll(): java.util.Enumeration<java.lang.String>
            public get(arg0: int): string
            public getPrefix(arg0: int): javax.naming.Name
            public getSuffix(arg0: int): javax.naming.Name
            public startsWith(arg0: javax.naming.Name): boolean
            public endsWith(arg0: javax.naming.Name): boolean
            public addAll(arg0: javax.naming.Name): javax.naming.Name
            public addAll(arg0: int, arg1: javax.naming.Name): javax.naming.Name
            public add(arg0: java.lang.String | string): javax.naming.Name
            public add(arg0: int, arg1: java.lang.String | string): javax.naming.Name
            public remove(arg0: int): java.lang.Object
            public static class: java.lang.Class<any>
        }
        class ConfigurationException extends javax.naming.NamingException {
            public constructor(arg0: java.lang.String | string)
            public constructor()
            public static class: java.lang.Class<any>
        }
        interface Context {
            INITIAL_CONTEXT_FACTORY: string
            OBJECT_FACTORIES: string
            STATE_FACTORIES: string
            URL_PKG_PREFIXES: string
            PROVIDER_URL: string
            DNS_URL: string
            AUTHORITATIVE: string
            BATCHSIZE: string
            REFERRAL: string
            SECURITY_PROTOCOL: string
            SECURITY_AUTHENTICATION: string
            SECURITY_PRINCIPAL: string
            SECURITY_CREDENTIALS: string
            LANGUAGE: string
            APPLET: string
            lookup(arg0: javax.naming.Name): java.lang.Object
            lookup(arg0: java.lang.String | string): java.lang.Object
            bind(arg0: javax.naming.Name, arg1: java.lang.Object): void
            bind(arg0: java.lang.String | string, arg1: java.lang.Object): void
            rebind(arg0: javax.naming.Name, arg1: java.lang.Object): void
            rebind(arg0: java.lang.String | string, arg1: java.lang.Object): void
            unbind(arg0: javax.naming.Name): void
            unbind(arg0: java.lang.String | string): void
            rename(arg0: javax.naming.Name, arg1: javax.naming.Name): void
            rename(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            list(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
            list(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
            listBindings(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.Binding>
            listBindings(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.Binding>
            destroySubcontext(arg0: javax.naming.Name): void
            destroySubcontext(arg0: java.lang.String | string): void
            createSubcontext(arg0: javax.naming.Name): javax.naming.Context
            createSubcontext(arg0: java.lang.String | string): javax.naming.Context
            lookupLink(arg0: javax.naming.Name): java.lang.Object
            lookupLink(arg0: java.lang.String | string): java.lang.Object
            getNameParser(arg0: javax.naming.Name): javax.naming.NameParser
            getNameParser(arg0: java.lang.String | string): javax.naming.NameParser
            composeName(arg0: javax.naming.Name, arg1: javax.naming.Name): javax.naming.Name
            composeName(arg0: java.lang.String | string, arg1: java.lang.String | string): string
            addToEnvironment(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
            removeFromEnvironment(arg0: java.lang.String | string): java.lang.Object
            getEnvironment(): java.util.Hashtable<any, any>
            close(): void
            getNameInNamespace(): string
        }
        class ContextNotEmptyException extends javax.naming.NamingException {
            public constructor(arg0: java.lang.String | string)
            public constructor()
            public static class: java.lang.Class<any>
        }
        class InitialContext implements javax.naming.Context {
            protected myProps: java.util.Hashtable<java.lang.Object, java.lang.Object>
            protected defaultInitCtx: javax.naming.Context
            protected gotDefault: boolean
            protected constructor(arg0: boolean)
            public constructor()
            public constructor(arg0: java.util.Hashtable<any, any>)
            protected init(arg0: java.util.Hashtable<any, any>): void
            public static doLookup<T>(arg0: javax.naming.Name): T
            public static doLookup<T>(arg0: java.lang.String | string): T
            protected getDefaultInitCtx(): javax.naming.Context
            protected getURLOrDefaultInitCtx(arg0: java.lang.String | string): javax.naming.Context
            protected getURLOrDefaultInitCtx(arg0: javax.naming.Name): javax.naming.Context
            public lookup(arg0: java.lang.String | string): java.lang.Object
            public lookup(arg0: javax.naming.Name): java.lang.Object
            public bind(arg0: java.lang.String | string, arg1: java.lang.Object): void
            public bind(arg0: javax.naming.Name, arg1: java.lang.Object): void
            public rebind(arg0: java.lang.String | string, arg1: java.lang.Object): void
            public rebind(arg0: javax.naming.Name, arg1: java.lang.Object): void
            public unbind(arg0: java.lang.String | string): void
            public unbind(arg0: javax.naming.Name): void
            public rename(arg0: java.lang.String | string, arg1: java.lang.String | string): void
            public rename(arg0: javax.naming.Name, arg1: javax.naming.Name): void
            public list(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
            public list(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.NameClassPair>
            public listBindings(arg0: java.lang.String | string): javax.naming.NamingEnumeration<javax.naming.Binding>
            public listBindings(arg0: javax.naming.Name): javax.naming.NamingEnumeration<javax.naming.Binding>
            public destroySubcontext(arg0: java.lang.String | string): void
            public destroySubcontext(arg0: javax.naming.Name): void
            public createSubcontext(arg0: java.lang.String | string): javax.naming.Context
            public createSubcontext(arg0: javax.naming.Name): javax.naming.Context
            public lookupLink(arg0: java.lang.String | string): java.lang.Object
            public lookupLink(arg0: javax.naming.Name): java.lang.Object
            public getNameParser(arg0: java.lang.String | string): javax.naming.NameParser
            public getNameParser(arg0: javax.naming.Name): javax.naming.NameParser
            public composeName(arg0: java.lang.String | string, arg1: java.lang.String | string): string
            public composeName(arg0: javax.naming.Name, arg1: javax.naming.Name): javax.naming.Name
            public addToEnvironment(arg0: java.lang.String | string, arg1: java.lang.Object): java.lang.Object
            public removeFromEnvironment(arg0: java.lang.String | string): java.lang.Object
            public getEnvironment(): java.util.Hashtable<any, any>
            public close(): void
            public getNameInNamespace(): string
            public static class: java.lang.Class<any>
        }
        class InsufficientResourcesException extends javax.naming.NamingException {
            public constructor(arg0: java.lang.String | string)
            public constructor()
            public static class: java.lang.Class<any>
        }
        class InterruptedNamingException extends javax.naming.NamingException {
            public constructor(arg0: java.lang.String | string)
            public constructor()
            public static class: java.lang.Class<any>
        }
        class InvalidNameException extends javax.naming.NamingException {
            public constructor(arg0: java.lang.String | string)
            public constructor()
            public static class: java.lang.Class<any>
        }
        class LimitExceededException extends javax.naming.NamingException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public static class: java.lang.Class<any>
        }
        class LinkException extends javax.naming.NamingException {
            protected linkResolvedName: javax.naming.Name
            protected linkResolvedObj: java.lang.Object
            protected linkRemainingName: javax.naming.Name
            protected linkExplanation: string
            public constructor(arg0: java.lang.String | string)
            public constructor()
            public getLinkResolvedName(): javax.naming.Name
            public getLinkRemainingName(): javax.naming.Name
            public getLinkResolvedObj(): java.lang.Object
            public getLinkExplanation(): string
            public setLinkExplanation(arg0: java.lang.String | string): void
            public setLinkResolvedName(arg0: javax.naming.Name): void
            public setLinkRemainingName(arg0: javax.naming.Name): void
            public setLinkResolvedObj(arg0: java.lang.Object): void
            public toString(): string
            public toString(arg0: boolean): string
            public static class: java.lang.Class<any>
        }
        class LinkLoopException extends javax.naming.LinkException {
            public constructor(arg0: java.lang.String | string)
            public constructor()
            public static class: java.lang.Class<any>
        }
        class LinkRef extends javax.naming.Reference {
            public constructor(arg0: javax.naming.Name)
            public constructor(arg0: java.lang.String | string)
            public getLinkName(): string
            public static class: java.lang.Class<any>
        }
        class MalformedLinkException extends javax.naming.LinkException {
            public constructor(arg0: java.lang.String | string)
            public constructor()
            public static class: java.lang.Class<any>
        }
        interface Name extends java.lang.Cloneable , java.io.Serializable , java.lang.Comparable<java.lang.Object> {
            serialVersionUID: long
            clone(): java.lang.Object
            compareTo(arg0: java.lang.Object): int
            size(): int
            isEmpty(): boolean
            getAll(): java.util.Enumeration<java.lang.String>
            get(arg0: int): string
            getPrefix(arg0: int): javax.naming.Name
            getSuffix(arg0: int): javax.naming.Name
            startsWith(arg0: javax.naming.Name): boolean
            endsWith(arg0: javax.naming.Name): boolean
            addAll(arg0: javax.naming.Name): javax.naming.Name
            addAll(arg0: int, arg1: javax.naming.Name): javax.naming.Name
            add(arg0: java.lang.String | string): javax.naming.Name
            add(arg0: int, arg1: java.lang.String | string): javax.naming.Name
            remove(arg0: int): java.lang.Object
        }
        class NameAlreadyBoundException extends javax.naming.NamingException {
            public constructor(arg0: java.lang.String | string)
            public constructor()
            public static class: java.lang.Class<any>
        }
        class NameClassPair implements java.io.Serializable {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean)
            public getClassName(): string
            public getName(): string
            public setName(arg0: java.lang.String | string): void
            public setClassName(arg0: java.lang.String | string): void
            public isRelative(): boolean
            public setRelative(arg0: boolean): void
            public getNameInNamespace(): string
            public setNameInNamespace(arg0: java.lang.String | string): void
            public toString(): string
            public static class: java.lang.Class<any>
        }
        class NameImpl {
            public toString(): string
            public equals(arg0: java.lang.Object): boolean
            public compareTo(arg0: javax.naming.NameImpl): int
            public size(): int
            public getAll(): java.util.Enumeration<java.lang.String>
            public get(arg0: int): string
            public getPrefix(arg0: int): java.util.Enumeration<java.lang.String>
            public getSuffix(arg0: int): java.util.Enumeration<java.lang.String>
            public isEmpty(): boolean
            public startsWith(arg0: int, arg1: java.util.Enumeration<java.lang.String>): boolean
            public endsWith(arg0: int, arg1: java.util.Enumeration<java.lang.String>): boolean
            public addAll(arg0: java.util.Enumeration<java.lang.String>): boolean
            public addAll(arg0: int, arg1: java.util.Enumeration<java.lang.String>): boolean
            public add(arg0: java.lang.String | string): void
            public add(arg0: int, arg1: java.lang.String | string): void
            public remove(arg0: int): java.lang.Object
            public hashCode(): int
            public static class: java.lang.Class<any>
        }
        class NameNotFoundException extends javax.naming.NamingException {
            public constructor(arg0: java.lang.String | string)
            public constructor()
            public static class: java.lang.Class<any>
        }
        interface NameParser {
            parse(arg0: java.lang.String | string): javax.naming.Name
        }
        interface NameParser$$Lambda {
            (arg0: java.lang.String | string): javax.naming.Name
        }
        interface NamingEnumeration<T> extends java.util.Enumeration<T> {
            next(): T
            hasMore(): boolean
            close(): void
        }
        class NamingException extends java.lang.Exception {
            protected resolvedName: javax.naming.Name
            protected resolvedObj: java.lang.Object
            protected remainingName: javax.naming.Name
            protected rootException: java.lang.Throwable
            public constructor(arg0: java.lang.String | string)
            public constructor()
            public getResolvedName(): javax.naming.Name
            public getRemainingName(): javax.naming.Name
            public getResolvedObj(): java.lang.Object
            public getExplanation(): string
            public setResolvedName(arg0: javax.naming.Name): void
            public setRemainingName(arg0: javax.naming.Name): void
            public setResolvedObj(arg0: java.lang.Object): void
            public appendRemainingComponent(arg0: java.lang.String | string): void
            public appendRemainingName(arg0: javax.naming.Name): void
            public getRootCause(): java.lang.Throwable
            public setRootCause(arg0: java.lang.Throwable): void
            public getCause(): java.lang.Throwable
            public initCause(arg0: java.lang.Throwable): java.lang.Throwable
            public toString(): string
            public toString(arg0: boolean): string
            public static class: java.lang.Class<any>
        }
        abstract class NamingSecurityException extends javax.naming.NamingException {
            public constructor(arg0: java.lang.String | string)
            public constructor()
            public static class: java.lang.Class<any>
        }
        class NoInitialContextException extends javax.naming.NamingException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public static class: java.lang.Class<any>
        }
        class NoPermissionException extends javax.naming.NamingSecurityException {
            public constructor(arg0: java.lang.String | string)
            public constructor()
            public static class: java.lang.Class<any>
        }
        class NotContextException extends javax.naming.NamingException {
            public constructor(arg0: java.lang.String | string)
            public constructor()
            public static class: java.lang.Class<any>
        }
        class OperationNotSupportedException extends javax.naming.NamingException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public static class: java.lang.Class<any>
        }
        class PartialResultException extends javax.naming.NamingException {
            public constructor(arg0: java.lang.String | string)
            public constructor()
            public static class: java.lang.Class<any>
        }
        abstract class RefAddr implements java.io.Serializable {
            protected addrType: string
            protected constructor(arg0: java.lang.String | string)
            public getType(): string
            public getContent(): java.lang.Object
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public toString(): string
            public static class: java.lang.Class<any>
        }
        class Reference implements java.lang.Cloneable , java.io.Serializable {
            protected className: string
            protected addrs: java.util.Vector<javax.naming.RefAddr>
            protected classFactory: string
            protected classFactoryLocation: string
            public constructor(arg0: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: javax.naming.RefAddr)
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string)
            public constructor(arg0: java.lang.String | string, arg1: javax.naming.RefAddr, arg2: java.lang.String | string, arg3: java.lang.String | string)
            public getClassName(): string
            public getFactoryClassName(): string
            public getFactoryClassLocation(): string
            public get(arg0: java.lang.String | string): javax.naming.RefAddr
            public get(arg0: int): javax.naming.RefAddr
            public getAll(): java.util.Enumeration<javax.naming.RefAddr>
            public size(): int
            public add(arg0: javax.naming.RefAddr): void
            public add(arg0: int, arg1: javax.naming.RefAddr): void
            public remove(arg0: int): java.lang.Object
            public clear(): void
            public equals(arg0: java.lang.Object): boolean
            public hashCode(): int
            public toString(): string
            public clone(): java.lang.Object
            public static class: java.lang.Class<any>
        }
        interface Referenceable {
            getReference(): javax.naming.Reference
        }
        interface Referenceable$$Lambda {
            (): javax.naming.Reference
        }
        abstract class ReferralException extends javax.naming.NamingException {
            protected constructor(arg0: java.lang.String | string)
            protected constructor()
            public getReferralInfo(): java.lang.Object
            public getReferralContext(): javax.naming.Context
            public getReferralContext(arg0: java.util.Hashtable<any, any>): javax.naming.Context
            public skipReferral(): boolean
            public retryReferral(): void
            public static class: java.lang.Class<any>
        }
        class ServiceUnavailableException extends javax.naming.NamingException {
            public constructor(arg0: java.lang.String | string)
            public constructor()
            public static class: java.lang.Class<any>
        }
        class SizeLimitExceededException extends javax.naming.LimitExceededException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public static class: java.lang.Class<any>
        }
        class StringRefAddr extends javax.naming.RefAddr {
            public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
            public getContent(): java.lang.Object
            public static class: java.lang.Class<any>
        }
        class TimeLimitExceededException extends javax.naming.LimitExceededException {
            public constructor()
            public constructor(arg0: java.lang.String | string)
            public static class: java.lang.Class<any>
        }
    }
}
declare namespace sun {
    namespace security {
        namespace provider {
            namespace certpath {
                namespace ldap {
                    class LDAPCertStore extends java.security.cert.CertStoreSpi {
                        public constructor(arg0: java.security.cert.CertStoreParameters)
                        public engineGetCertificates(arg0: java.security.cert.CertSelector): java.util.Collection<java.security.cert.X509Certificate>
                        public engineGetCRLs(arg0: java.security.cert.CRLSelector): java.util.Collection<java.security.cert.X509CRL>
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}
