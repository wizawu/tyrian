declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace orb {
                        class ORBDataParserImpl extends com.sun.corba.se.spi.orb.ParserImplTableBase implements com.sun.corba.se.spi.orb.ORBData {
                            public getORBInitialHost(): string
                            public getORBInitialPort(): int
                            public getORBServerHost(): string
                            public getListenOnAllInterfaces(): string
                            public getORBServerPort(): int
                            public getLegacySocketFactory(): com.sun.corba.se.spi.legacy.connection.ORBSocketFactory
                            public getSocketFactory(): com.sun.corba.se.spi.transport.ORBSocketFactory
                            public getUserSpecifiedListenPorts(): com.sun.corba.se.impl.legacy.connection.USLPort[]
                            public getIORToSocketInfo(): com.sun.corba.se.spi.transport.IORToSocketInfo
                            public getIIOPPrimaryToContactInfo(): com.sun.corba.se.spi.transport.IIOPPrimaryToContactInfo
                            public getORBId(): string
                            public getORBServerIdPropertySpecified(): boolean
                            public isLocalOptimizationAllowed(): boolean
                            public getGIOPVersion(): com.sun.corba.se.spi.ior.iiop.GIOPVersion
                            public getHighWaterMark(): int
                            public getLowWaterMark(): int
                            public getNumberToReclaim(): int
                            public getGIOPFragmentSize(): int
                            public getGIOPBufferSize(): int
                            public getGIOPBuffMgrStrategy(arg0: com.sun.corba.se.spi.ior.iiop.GIOPVersion): int
                            public getGIOPTargetAddressPreference(): short
                            public getGIOPAddressDisposition(): short
                            public useByteOrderMarkers(): boolean
                            public useByteOrderMarkersInEncapsulations(): boolean
                            public alwaysSendCodeSetServiceContext(): boolean
                            public getPersistentPortInitialized(): boolean
                            public getPersistentServerPort(): int
                            public getPersistentServerIdInitialized(): boolean
                            public getPersistentServerId(): int
                            public getServerIsORBActivated(): boolean
                            public getBadServerIdHandler(): java.lang.Class
                            public getCodeSetComponentInfo(): com.sun.corba.se.impl.encoding.CodeSetComponentInfo
                            public getORBInitializers(): org.omg.PortableInterceptor.ORBInitializer[]
                            public getORBInitialReferences(): com.sun.corba.se.spi.orb.StringPair[]
                            public getORBDefaultInitialReference(): string
                            public getORBDebugFlags(): java.lang.String[]
                            public getAcceptors(): com.sun.corba.se.pept.transport.Acceptor[]
                            public getCorbaContactInfoListFactory(): com.sun.corba.se.spi.transport.CorbaContactInfoListFactory
                            public acceptorSocketType(): string
                            public acceptorSocketUseSelectThreadToWait(): boolean
                            public acceptorSocketUseWorkerThreadForEvent(): boolean
                            public connectionSocketType(): string
                            public connectionSocketUseSelectThreadToWait(): boolean
                            public connectionSocketUseWorkerThreadForEvent(): boolean
                            public isJavaSerializationEnabled(): boolean
                            public getTransportTCPReadTimeouts(): com.sun.corba.se.spi.transport.ReadTimeouts
                            public disableDirectByteBufferUse(): boolean
                            public useRepId(): boolean
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.orb.DataCollector)
                            public complete(): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}