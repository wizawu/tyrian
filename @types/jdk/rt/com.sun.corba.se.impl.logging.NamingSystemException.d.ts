declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace logging {
                        class NamingSystemException extends com.sun.corba.se.spi.logging.LogWrapperBase {
                            public static readonly TRANSIENT_NAME_SERVER_BAD_PORT: int
                            public static readonly TRANSIENT_NAME_SERVER_BAD_HOST: int
                            public static readonly OBJECT_IS_NULL: int
                            public static readonly INS_BAD_ADDRESS: int
                            public static readonly BIND_UPDATE_CONTEXT_FAILED: int
                            public static readonly BIND_FAILURE: int
                            public static readonly RESOLVE_CONVERSION_FAILURE: int
                            public static readonly RESOLVE_FAILURE: int
                            public static readonly UNBIND_FAILURE: int
                            public static readonly TRANS_NS_CANNOT_CREATE_INITIAL_NC_SYS: int
                            public static readonly TRANS_NS_CANNOT_CREATE_INITIAL_NC: int
                            public static readonly NAMING_CTX_REBIND_ALREADY_BOUND: int
                            public static readonly NAMING_CTX_REBINDCTX_ALREADY_BOUND: int
                            public static readonly NAMING_CTX_BAD_BINDINGTYPE: int
                            public static readonly NAMING_CTX_RESOLVE_CANNOT_NARROW_TO_CTX: int
                            public static readonly NAMING_CTX_BINDING_ITERATOR_CREATE: int
                            public static readonly TRANS_NC_BIND_ALREADY_BOUND: int
                            public static readonly TRANS_NC_LIST_GOT_EXC: int
                            public static readonly TRANS_NC_NEWCTX_GOT_EXC: int
                            public static readonly TRANS_NC_DESTROY_GOT_EXC: int
                            public static readonly INS_BAD_SCHEME_NAME: int
                            public static readonly INS_BAD_SCHEME_SPECIFIC_PART: int
                            public static readonly INS_OTHER: int
                            public constructor(arg0: java.util.logging.Logger)
                            public static get(arg0: com.sun.corba.se.spi.orb.ORB, arg1: java.lang.String | string): com.sun.corba.se.impl.logging.NamingSystemException
                            public static get(arg0: java.lang.String | string): com.sun.corba.se.impl.logging.NamingSystemException
                            public transientNameServerBadPort(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public transientNameServerBadPort(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public transientNameServerBadPort(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public transientNameServerBadPort(): org.omg.CORBA.BAD_PARAM
                            public transientNameServerBadHost(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public transientNameServerBadHost(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public transientNameServerBadHost(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public transientNameServerBadHost(): org.omg.CORBA.BAD_PARAM
                            public objectIsNull(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public objectIsNull(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public objectIsNull(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public objectIsNull(): org.omg.CORBA.BAD_PARAM
                            public insBadAddress(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public insBadAddress(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public insBadAddress(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public insBadAddress(): org.omg.CORBA.BAD_PARAM
                            public bindUpdateContextFailed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public bindUpdateContextFailed(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.UNKNOWN
                            public bindUpdateContextFailed(arg0: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public bindUpdateContextFailed(): org.omg.CORBA.UNKNOWN
                            public bindFailure(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public bindFailure(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.UNKNOWN
                            public bindFailure(arg0: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public bindFailure(): org.omg.CORBA.UNKNOWN
                            public resolveConversionFailure(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public resolveConversionFailure(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.UNKNOWN
                            public resolveConversionFailure(arg0: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public resolveConversionFailure(): org.omg.CORBA.UNKNOWN
                            public resolveFailure(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public resolveFailure(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.UNKNOWN
                            public resolveFailure(arg0: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public resolveFailure(): org.omg.CORBA.UNKNOWN
                            public unbindFailure(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public unbindFailure(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.UNKNOWN
                            public unbindFailure(arg0: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public unbindFailure(): org.omg.CORBA.UNKNOWN
                            public transNsCannotCreateInitialNcSys(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public transNsCannotCreateInitialNcSys(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INITIALIZE
                            public transNsCannotCreateInitialNcSys(arg0: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public transNsCannotCreateInitialNcSys(): org.omg.CORBA.INITIALIZE
                            public transNsCannotCreateInitialNc(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public transNsCannotCreateInitialNc(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INITIALIZE
                            public transNsCannotCreateInitialNc(arg0: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public transNsCannotCreateInitialNc(): org.omg.CORBA.INITIALIZE
                            public namingCtxRebindAlreadyBound(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public namingCtxRebindAlreadyBound(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public namingCtxRebindAlreadyBound(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public namingCtxRebindAlreadyBound(): org.omg.CORBA.INTERNAL
                            public namingCtxRebindctxAlreadyBound(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public namingCtxRebindctxAlreadyBound(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public namingCtxRebindctxAlreadyBound(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public namingCtxRebindctxAlreadyBound(): org.omg.CORBA.INTERNAL
                            public namingCtxBadBindingtype(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public namingCtxBadBindingtype(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public namingCtxBadBindingtype(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public namingCtxBadBindingtype(): org.omg.CORBA.INTERNAL
                            public namingCtxResolveCannotNarrowToCtx(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public namingCtxResolveCannotNarrowToCtx(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public namingCtxResolveCannotNarrowToCtx(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public namingCtxResolveCannotNarrowToCtx(): org.omg.CORBA.INTERNAL
                            public namingCtxBindingIteratorCreate(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public namingCtxBindingIteratorCreate(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public namingCtxBindingIteratorCreate(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public namingCtxBindingIteratorCreate(): org.omg.CORBA.INTERNAL
                            public transNcBindAlreadyBound(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public transNcBindAlreadyBound(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public transNcBindAlreadyBound(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public transNcBindAlreadyBound(): org.omg.CORBA.INTERNAL
                            public transNcListGotExc(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public transNcListGotExc(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public transNcListGotExc(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public transNcListGotExc(): org.omg.CORBA.INTERNAL
                            public transNcNewctxGotExc(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public transNcNewctxGotExc(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public transNcNewctxGotExc(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public transNcNewctxGotExc(): org.omg.CORBA.INTERNAL
                            public transNcDestroyGotExc(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public transNcDestroyGotExc(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public transNcDestroyGotExc(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public transNcDestroyGotExc(): org.omg.CORBA.INTERNAL
                            public insBadSchemeName(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public insBadSchemeName(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public insBadSchemeName(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public insBadSchemeName(): org.omg.CORBA.INTERNAL
                            public insBadSchemeSpecificPart(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public insBadSchemeSpecificPart(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public insBadSchemeSpecificPart(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public insBadSchemeSpecificPart(): org.omg.CORBA.INTERNAL
                            public insOther(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public insOther(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public insOther(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public insOther(): org.omg.CORBA.INTERNAL
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}