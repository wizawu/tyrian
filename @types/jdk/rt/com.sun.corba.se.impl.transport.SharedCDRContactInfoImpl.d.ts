declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace transport {
class SharedCDRContactInfoImpl extends com.sun.corba.se.impl.transport.CorbaContactInfoBase {
    protected wrapper: com.sun.corba.se.impl.logging.ORBUtilSystemException
    public constructor(arg0: com.sun.corba.se.spi.orb.ORB, arg1: com.sun.corba.se.spi.transport.CorbaContactInfoList, arg2: com.sun.corba.se.spi.ior.IOR, arg3: short)
    public getClientRequestDispatcher(): com.sun.corba.se.pept.protocol.ClientRequestDispatcher
    public isConnectionBased(): boolean
    public shouldCacheConnection(): boolean
    public getConnectionCacheType(): string
    public createConnection(): com.sun.corba.se.pept.transport.Connection
    public createMessageMediator(arg0: com.sun.corba.se.pept.broker.Broker, arg1: com.sun.corba.se.pept.transport.ContactInfo, arg2: com.sun.corba.se.pept.transport.Connection, arg3: java.lang.String | string, arg4: boolean): com.sun.corba.se.pept.protocol.MessageMediator
    public createOutputObject(arg0: com.sun.corba.se.pept.protocol.MessageMediator): com.sun.corba.se.pept.encoding.OutputObject
    public getMonitoringName(): string
    public toString(): string
    protected getWrapper(): com.sun.corba.se.impl.logging.ORBUtilSystemException
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}