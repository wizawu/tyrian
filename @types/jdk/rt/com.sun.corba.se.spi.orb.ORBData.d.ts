declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace orb {
                        interface ORBData {
                            getORBInitialHost(): string
                            getORBInitialPort(): int
                            getORBServerHost(): string
                            getORBServerPort(): int
                            getListenOnAllInterfaces(): string
                            getLegacySocketFactory(): com.sun.corba.se.spi.legacy.connection.ORBSocketFactory
                            getSocketFactory(): com.sun.corba.se.spi.transport.ORBSocketFactory
                            getUserSpecifiedListenPorts(): com.sun.corba.se.impl.legacy.connection.USLPort[]
                            getIORToSocketInfo(): com.sun.corba.se.spi.transport.IORToSocketInfo
                            getIIOPPrimaryToContactInfo(): com.sun.corba.se.spi.transport.IIOPPrimaryToContactInfo
                            getORBId(): string
                            getORBServerIdPropertySpecified(): boolean
                            isLocalOptimizationAllowed(): boolean
                            getGIOPVersion(): com.sun.corba.se.spi.ior.iiop.GIOPVersion
                            getHighWaterMark(): int
                            getLowWaterMark(): int
                            getNumberToReclaim(): int
                            getGIOPFragmentSize(): int
                            getGIOPBufferSize(): int
                            getGIOPBuffMgrStrategy(arg0: com.sun.corba.se.spi.ior.iiop.GIOPVersion): int
                            getGIOPTargetAddressPreference(): short
                            getGIOPAddressDisposition(): short
                            useByteOrderMarkers(): boolean
                            useByteOrderMarkersInEncapsulations(): boolean
                            alwaysSendCodeSetServiceContext(): boolean
                            getPersistentPortInitialized(): boolean
                            getPersistentServerPort(): int
                            getPersistentServerIdInitialized(): boolean
                            getPersistentServerId(): int
                            getServerIsORBActivated(): boolean
                            getBadServerIdHandler(): java.lang.Class
                            getCodeSetComponentInfo(): com.sun.corba.se.impl.encoding.CodeSetComponentInfo
                            getORBInitializers(): org.omg.PortableInterceptor.ORBInitializer[]
                            getORBInitialReferences(): com.sun.corba.se.spi.orb.StringPair[]
                            getORBDefaultInitialReference(): string
                            getORBDebugFlags(): java.lang.String[]
                            getAcceptors(): com.sun.corba.se.pept.transport.Acceptor[]
                            getCorbaContactInfoListFactory(): com.sun.corba.se.spi.transport.CorbaContactInfoListFactory
                            acceptorSocketType(): string
                            acceptorSocketUseSelectThreadToWait(): boolean
                            acceptorSocketUseWorkerThreadForEvent(): boolean
                            connectionSocketType(): string
                            connectionSocketUseSelectThreadToWait(): boolean
                            connectionSocketUseWorkerThreadForEvent(): boolean
                            getTransportTCPReadTimeouts(): com.sun.corba.se.spi.transport.ReadTimeouts
                            disableDirectByteBufferUse(): boolean
                            isJavaSerializationEnabled(): boolean
                            useRepId(): boolean
                        }
                    }
                }
            }
        }
    }
}