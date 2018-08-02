declare namespace com {
    namespace sun {
        namespace jmx {
            namespace remote {
                namespace util {
class EnvHelp {
    public static CREDENTIAL_TYPES: string
    public static CREDENTIALS_FILTER_PATTERN: string
    public static SERIAL_FILTER_PATTERN: string
    public static BUFFER_SIZE_PROPERTY: string
    public static MAX_FETCH_NOTIFS: string
    public static FETCH_TIMEOUT: string
    public static NOTIF_ACCESS_CONTROLLER: string
    public static DEFAULT_ORB: string
    public static HIDDEN_ATTRIBUTES: string
    public static DEFAULT_HIDDEN_ATTRIBUTES: string
    public static SERVER_CONNECTION_TIMEOUT: string
    public static CLIENT_CONNECTION_CHECK_PERIOD: string
    public static JMX_SERVER_DAEMON: string
    public constructor()
    public static resolveServerClassLoader(arg0: java.util.Map<java.lang.String, any>, arg1: javax.management.MBeanServer): java.lang.ClassLoader
    public static resolveClientClassLoader(arg0: java.util.Map<java.lang.String, any>): java.lang.ClassLoader
    public static initCause<T extends java.lang.Throwable>(arg0: T, arg1: java.lang.Throwable): T
    public static getCause(arg0: java.lang.Throwable): java.lang.Throwable
    public static getNotifBufferSize(arg0: java.util.Map<java.lang.String, any>): int
    public static getMaxFetchNotifNumber(arg0: java.util.Map<java.lang.String, any>): int
    public static getFetchTimeout(arg0: java.util.Map<java.lang.String, any>): long
    public static getNotificationAccessController(arg0: java.util.Map<java.lang.String, any>): com.sun.jmx.remote.security.NotificationAccessController
    public static getIntegerAttribute(arg0: java.util.Map<java.lang.String, any>, arg1: java.lang.String | string, arg2: long, arg3: long, arg4: long): long
    public static checkAttributes(arg0: java.util.Map<any, any>): void
    public static filterAttributes<V>(arg0: java.util.Map<java.lang.String, V>): java.util.Map<java.lang.String, V>
    public static getServerConnectionTimeout(arg0: java.util.Map<java.lang.String, any>): long
    public static getConnectionCheckPeriod(arg0: java.util.Map<java.lang.String, any>): long
    public static computeBooleanFromString(arg0: java.lang.String | string): boolean
    public static computeBooleanFromString(arg0: java.lang.String | string, arg1: boolean): boolean
    public static mapToHashtable<K, V>(arg0: java.util.Map<K, V>): java.util.Hashtable<K, V>
    public static isServerDaemon(arg0: java.util.Map<java.lang.String, any>): boolean
    public static class: java.lang.Class<any>
}

                }
            }
        }
    }
}