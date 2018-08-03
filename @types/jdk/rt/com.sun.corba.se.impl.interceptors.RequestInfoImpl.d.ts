declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace interceptors {
                        abstract class RequestInfoImpl extends org.omg.CORBA.LocalObject implements org.omg.PortableInterceptor.RequestInfo , com.sun.corba.se.spi.legacy.interceptor.RequestInfoExt {
                            protected myORB: com.sun.corba.se.spi.orb.ORB
                            protected wrapper: com.sun.corba.se.impl.logging.InterceptorsSystemException
                            protected stdWrapper: com.sun.corba.se.impl.logging.OMGSystemException
                            protected flowStackIndex: int
                            protected startingPointCall: int
                            protected intermediatePointCall: int
                            protected endingPointCall: int
                            protected replyStatus: short
                            protected static readonly UNINITIALIZED: short
                            protected currentExecutionPoint: int
                            protected static readonly EXECUTION_POINT_STARTING: int
                            protected static readonly EXECUTION_POINT_INTERMEDIATE: int
                            protected static readonly EXECUTION_POINT_ENDING: int
                            protected alreadyExecuted: boolean
                            protected connection: com.sun.corba.se.spi.legacy.connection.Connection
                            protected serviceContexts: com.sun.corba.se.spi.servicecontext.ServiceContexts
                            protected forwardRequest: org.omg.PortableInterceptor.ForwardRequest
                            protected forwardRequestIOR: com.sun.corba.se.spi.ior.IOR
                            protected slotTable: com.sun.corba.se.impl.interceptors.SlotTable
                            protected exception: java.lang.Exception
                            protected static readonly MID_REQUEST_ID: int
                            protected static readonly MID_OPERATION: int
                            protected static readonly MID_ARGUMENTS: int
                            protected static readonly MID_EXCEPTIONS: int
                            protected static readonly MID_CONTEXTS: int
                            protected static readonly MID_OPERATION_CONTEXT: int
                            protected static readonly MID_RESULT: int
                            protected static readonly MID_RESPONSE_EXPECTED: int
                            protected static readonly MID_SYNC_SCOPE: int
                            protected static readonly MID_REPLY_STATUS: int
                            protected static readonly MID_FORWARD_REFERENCE: int
                            protected static readonly MID_GET_SLOT: int
                            protected static readonly MID_GET_REQUEST_SERVICE_CONTEXT: int
                            protected static readonly MID_GET_REPLY_SERVICE_CONTEXT: int
                            protected static readonly MID_RI_LAST: int
                            public constructor(arg0: com.sun.corba.se.spi.orb.ORB)
                            public abstract request_id(): int
                            public abstract operation(): string
                            public abstract arguments(): org.omg.Dynamic.Parameter[]
                            public abstract exceptions(): org.omg.CORBA.TypeCode[]
                            public abstract contexts(): java.lang.String[]
                            public abstract operation_context(): java.lang.String[]
                            public abstract result(): org.omg.CORBA.Any
                            public abstract response_expected(): boolean
                            public sync_scope(): short
                            public reply_status(): short
                            public abstract forward_reference(): org.omg.CORBA.Object
                            public get_slot(arg0: int): org.omg.CORBA.Any
                            public abstract get_request_service_context(arg0: int): org.omg.IOP.ServiceContext
                            public abstract get_reply_service_context(arg0: int): org.omg.IOP.ServiceContext
                            public connection(): com.sun.corba.se.spi.legacy.connection.Connection
                            protected nvListToParameterArray(arg0: org.omg.CORBA.NVList): org.omg.Dynamic.Parameter[]
                            protected exceptionToAny(arg0: java.lang.Exception): org.omg.CORBA.Any
                            protected getServiceContext(arg0: java.util.HashMap, arg1: com.sun.corba.se.spi.servicecontext.ServiceContexts, arg2: int): org.omg.IOP.ServiceContext
                            protected addServiceContext(arg0: java.util.HashMap, arg1: com.sun.corba.se.spi.servicecontext.ServiceContexts, arg2: org.omg.IOP.ServiceContext, arg3: boolean): void
                            protected setFlowStackIndex(arg0: int): void
                            protected getFlowStackIndex(): int
                            protected setEndingPointCall(arg0: int): void
                            protected getEndingPointCall(): int
                            protected setIntermediatePointCall(arg0: int): void
                            protected getIntermediatePointCall(): int
                            protected setStartingPointCall(arg0: int): void
                            protected getStartingPointCall(): int
                            protected getAlreadyExecuted(): boolean
                            protected setAlreadyExecuted(arg0: boolean): void
                            protected setReplyStatus(arg0: short): void
                            protected getReplyStatus(): short
                            protected setForwardRequest(arg0: org.omg.PortableInterceptor.ForwardRequest): void
                            protected setForwardRequest(arg0: com.sun.corba.se.spi.ior.IOR): void
                            protected getForwardRequestException(): org.omg.PortableInterceptor.ForwardRequest
                            protected getForwardRequestIOR(): com.sun.corba.se.spi.ior.IOR
                            protected setException(arg0: java.lang.Exception): void
                            protected setCurrentExecutionPoint(arg0: int): void
                            protected abstract checkAccess(arg0: int): void
                            protected iorToObject(arg0: com.sun.corba.se.spi.ior.IOR): org.omg.CORBA.Object
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}