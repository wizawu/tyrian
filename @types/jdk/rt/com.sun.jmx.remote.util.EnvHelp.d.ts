declare namespace com {
    namespace sun {
        namespace jmx {
            namespace remote {
                namespace util {
                    class EnvHelp {
                        public static readonly CREDENTIAL_TYPES: string
                        public static readonly BUFFER_SIZE_PROPERTY: string
                        public static readonly MAX_FETCH_NOTIFS: string
                        public static readonly FETCH_TIMEOUT: string
                        public static readonly NOTIF_ACCESS_CONTROLLER: string
                        public static readonly DEFAULT_ORB: string
                        public static readonly HIDDEN_ATTRIBUTES: string
                        public static readonly DEFAULT_HIDDEN_ATTRIBUTES: string
                        public static readonly SERVER_CONNECTION_TIMEOUT: string
                        public static readonly CLIENT_CONNECTION_CHECK_PERIOD: string
                        public static readonly JMX_SERVER_DAEMON: string
                        public constructor()
                        public static resolveServerClassLoader(arg0: java.util.Map<java.lang.String, any>, arg1: javax.management.MBeanServer): java.lang.ClassLoader
                        public static resolveClientClassLoader(arg0: java.util.Map<java.lang.String, any>): java.lang.ClassLoader
                        public static initCause<T extends java.lang.Throwable>(arg0: T, arg1: java.lang.Throwable): T
                        public static getCause<T extends java.lang.Throwable>(arg0: java.lang.Throwable): java.lang.Throwable
                        public static getNotifBufferSize<T extends java.lang.Throwable>(arg0: java.util.Map<java.lang.String, any>): int
                        public static getMaxFetchNotifNumber<T extends java.lang.Throwable>(arg0: java.util.Map<java.lang.String, any>): int
                        public static getFetchTimeout<T extends java.lang.Throwable>(arg0: java.util.Map<java.lang.String, any>): long
                        public static getNotificationAccessController<T extends java.lang.Throwable>(arg0: java.util.Map<java.lang.String, any>): com.sun.jmx.remote.security.NotificationAccessController
                        public static getIntegerAttribute<T extends java.lang.Throwable>(arg0: java.util.Map<java.lang.String, any>, arg1: java.lang.String | string, arg2: long, arg3: long, arg4: long): long
                        public static checkAttributes<T extends java.lang.Throwable>(arg0: java.util.Map<any, any>): void
                        public static filterAttributes<V>(arg0: java.util.Map<java.lang.String, V>): java.util.Map<java.lang.String, V>
                        public static getServerConnectionTimeout<V>(arg0: java.util.Map<java.lang.String, any>): long
                        public static getConnectionCheckPeriod<V>(arg0: java.util.Map<java.lang.String, any>): long
                        public static computeBooleanFromString<V>(arg0: java.lang.String | string): boolean
                        public static computeBooleanFromString<V>(arg0: java.lang.String | string, arg1: boolean): boolean
                        public static mapToHashtable<K, V>(arg0: java.util.Map<K, V>): java.util.Hashtable<K, V>
                        public static isServerDaemon<K, V>(arg0: java.util.Map<java.lang.String, any>): boolean
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}