declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace transport {
                        class SocketOrChannelContactInfoImpl extends com.sun.corba.se.impl.transport.CorbaContactInfoBase implements com.sun.corba.se.spi.transport.SocketInfo {
                            protected isHashCodeCached: boolean
                            protected cachedHashCode: int
                            protected socketType: string
                            protected hostname: string
                            protected port: int
                            protected constructor()
                            protected constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.transport.CorbaContactInfoList)
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.transport.CorbaContactInfoList, arg2: java.lang.String | string, arg3: java.lang.String | string, arg4: int)
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.transport.CorbaContactInfoList, arg2: com.sun.corba.se.spi.ior.IOR, arg3: short, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: int)
                            public isConnectionBased(): boolean
                            public shouldCacheConnection(): boolean
                            public getConnectionCacheType(): string
                            public createConnection(): com.sun.corba.se.pept.transport.Connection
                            public getMonitoringName(): string
                            public getType(): string
                            public getHost(): string
                            public getPort(): int
                            public hashCode(): int
                            public equals(arg0: java.lang.Object): boolean
                            public toString(): string
                            protected dprint(arg0: java.lang.String | string): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}