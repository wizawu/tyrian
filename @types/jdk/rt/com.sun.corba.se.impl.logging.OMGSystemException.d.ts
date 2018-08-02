declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace logging {
                        class OMGSystemException extends com.sun.corba.se.spi.logging.LogWrapperBase {
                            public static IDL_CONTEXT_NOT_FOUND: int
                            public static NO_MATCHING_IDL_CONTEXT: int
                            public static DEP_PREVENT_DESTRUCTION: int
                            public static DESTROY_INDESTRUCTIBLE: int
                            public static SHUTDOWN_WAIT_FOR_COMPLETION_DEADLOCK: int
                            public static BAD_OPERATION_AFTER_SHUTDOWN: int
                            public static BAD_INVOKE: int
                            public static BAD_SET_SERVANT_MANAGER: int
                            public static BAD_ARGUMENTS_CALL: int
                            public static BAD_CTX_CALL: int
                            public static BAD_RESULT_CALL: int
                            public static BAD_SEND: int
                            public static BAD_POLL_BEFORE: int
                            public static BAD_POLL_AFTER: int
                            public static BAD_POLL_SYNC: int
                            public static INVALID_PI_CALL1: int
                            public static INVALID_PI_CALL2: int
                            public static INVALID_PI_CALL3: int
                            public static INVALID_PI_CALL4: int
                            public static SERVICE_CONTEXT_ADD_FAILED: int
                            public static POLICY_FACTORY_REG_FAILED: int
                            public static CREATE_POA_DESTROY: int
                            public static PRIORITY_REASSIGN: int
                            public static XA_START_OUTSIZE: int
                            public static XA_START_PROTO: int
                            public static BAD_SERVANT_MANAGER_TYPE: int
                            public static OPERATION_UNKNOWN_TO_TARGET: int
                            public static UNABLE_REGISTER_VALUE_FACTORY: int
                            public static RID_ALREADY_DEFINED: int
                            public static NAME_USED_IFR: int
                            public static TARGET_NOT_CONTAINER: int
                            public static NAME_CLASH: int
                            public static NOT_SERIALIZABLE: int
                            public static SO_BAD_SCHEME_NAME: int
                            public static SO_BAD_ADDRESS: int
                            public static SO_BAD_SCHEMA_SPECIFIC: int
                            public static SO_NON_SPECIFIC: int
                            public static IR_DERIVE_ABS_INT_BASE: int
                            public static IR_VALUE_SUPPORT: int
                            public static INCOMPLETE_TYPECODE: int
                            public static INVALID_OBJECT_ID: int
                            public static TYPECODE_BAD_NAME: int
                            public static TYPECODE_BAD_REPID: int
                            public static TYPECODE_INV_MEMBER: int
                            public static TC_UNION_DUP_LABEL: int
                            public static TC_UNION_INCOMPATIBLE: int
                            public static TC_UNION_BAD_DISC: int
                            public static SET_EXCEPTION_BAD_ANY: int
                            public static SET_EXCEPTION_UNLISTED: int
                            public static NO_CLIENT_WCHAR_CODESET_CTX: int
                            public static ILLEGAL_SERVICE_CONTEXT: int
                            public static ENUM_OUT_OF_RANGE: int
                            public static INVALID_SERVICE_CONTEXT_ID: int
                            public static RIR_WITH_NULL_OBJECT: int
                            public static INVALID_COMPONENT_ID: int
                            public static INVALID_PROFILE_ID: int
                            public static POLICY_TYPE_DUPLICATE: int
                            public static BAD_ONEWAY_DEFINITION: int
                            public static DII_FOR_IMPLICIT_OPERATION: int
                            public static XA_CALL_INVAL: int
                            public static UNION_BAD_DISCRIMINATOR: int
                            public static CTX_ILLEGAL_PROPERTY_NAME: int
                            public static CTX_ILLEGAL_SEARCH_STRING: int
                            public static CTX_ILLEGAL_NAME: int
                            public static CTX_NON_EMPTY: int
                            public static INVALID_STREAM_FORMAT_VERSION: int
                            public static NOT_A_VALUEOUTPUTSTREAM: int
                            public static NOT_A_VALUEINPUTSTREAM: int
                            public static MARSHALL_INCOMPLETE_TYPECODE: int
                            public static BAD_MEMBER_TYPECODE: int
                            public static ILLEGAL_PARAMETER: int
                            public static CHAR_NOT_IN_CODESET: int
                            public static PRIORITY_MAP_FAILRE: int
                            public static NO_USABLE_PROFILE: int
                            public static PRIORITY_RANGE_RESTRICT: int
                            public static NO_SERVER_WCHAR_CODESET_CMP: int
                            public static CODESET_COMPONENT_REQUIRED: int
                            public static IOR_POLICY_RECONCILE_ERROR: int
                            public static POLICY_UNKNOWN: int
                            public static NO_POLICY_FACTORY: int
                            public static XA_RMERR: int
                            public static XA_RMFAIL: int
                            public static NO_IR: int
                            public static NO_INTERFACE_IN_IR: int
                            public static UNABLE_LOCATE_VALUE_FACTORY: int
                            public static SET_RESULT_BEFORE_CTX: int
                            public static BAD_NVLIST: int
                            public static NOT_AN_OBJECT_IMPL: int
                            public static WCHAR_BAD_GIOP_VERSION_SENT: int
                            public static WCHAR_BAD_GIOP_VERSION_RETURNED: int
                            public static UNSUPPORTED_FORMAT_VERSION: int
                            public static RMIIIOP_OPTIONAL_DATA_INCOMPATIBLE1: int
                            public static RMIIIOP_OPTIONAL_DATA_INCOMPATIBLE2: int
                            public static RMIIIOP_OPTIONAL_DATA_INCOMPATIBLE3: int
                            public static MISSING_LOCAL_VALUE_IMPL: int
                            public static INCOMPATIBLE_VALUE_IMPL: int
                            public static NO_USABLE_PROFILE_2: int
                            public static DII_LOCAL_OBJECT: int
                            public static BIO_RESET: int
                            public static BIO_META_NOT_AVAILABLE: int
                            public static BIO_GENOMIC_NO_ITERATOR: int
                            public static PI_OPERATION_NOT_SUPPORTED1: int
                            public static PI_OPERATION_NOT_SUPPORTED2: int
                            public static PI_OPERATION_NOT_SUPPORTED3: int
                            public static PI_OPERATION_NOT_SUPPORTED4: int
                            public static PI_OPERATION_NOT_SUPPORTED5: int
                            public static PI_OPERATION_NOT_SUPPORTED6: int
                            public static PI_OPERATION_NOT_SUPPORTED7: int
                            public static PI_OPERATION_NOT_SUPPORTED8: int
                            public static NO_CONNECTION_PRIORITY: int
                            public static XA_RB: int
                            public static XA_NOTA: int
                            public static XA_END_TRUE_ROLLBACK_DEFERRED: int
                            public static POA_REQUEST_DISCARD: int
                            public static NO_USABLE_PROFILE_3: int
                            public static REQUEST_CANCELLED: int
                            public static POA_DESTROYED: int
                            public static UNREGISTERED_VALUE_AS_OBJREF: int
                            public static NO_OBJECT_ADAPTOR: int
                            public static BIO_NOT_AVAILABLE: int
                            public static OBJECT_ADAPTER_INACTIVE: int
                            public static ADAPTER_ACTIVATOR_EXCEPTION: int
                            public static BAD_SERVANT_TYPE: int
                            public static NO_DEFAULT_SERVANT: int
                            public static NO_SERVANT_MANAGER: int
                            public static BAD_POLICY_INCARNATE: int
                            public static PI_EXC_COMP_ESTABLISHED: int
                            public static NULL_SERVANT_RETURNED: int
                            public static UNKNOWN_USER_EXCEPTION: int
                            public static UNSUPPORTED_SYSTEM_EXCEPTION: int
                            public static PI_UNKNOWN_USER_EXCEPTION: int
                            public constructor(arg0: java.util.logging.Logger)
                            public static get(arg0: com.sun.corba.se.spi.orb.ORB, arg1: java.lang.String | string): com.sun.corba.se.impl.logging.OMGSystemException
                            public static get(arg0: java.lang.String | string): com.sun.corba.se.impl.logging.OMGSystemException
                            public idlContextNotFound(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_CONTEXT
                            public idlContextNotFound(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_CONTEXT
                            public idlContextNotFound(arg0: java.lang.Throwable): org.omg.CORBA.BAD_CONTEXT
                            public idlContextNotFound(): org.omg.CORBA.BAD_CONTEXT
                            public noMatchingIdlContext(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_CONTEXT
                            public noMatchingIdlContext(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_CONTEXT
                            public noMatchingIdlContext(arg0: java.lang.Throwable): org.omg.CORBA.BAD_CONTEXT
                            public noMatchingIdlContext(): org.omg.CORBA.BAD_CONTEXT
                            public depPreventDestruction(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public depPreventDestruction(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public depPreventDestruction(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public depPreventDestruction(): org.omg.CORBA.BAD_INV_ORDER
                            public destroyIndestructible(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public destroyIndestructible(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public destroyIndestructible(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public destroyIndestructible(): org.omg.CORBA.BAD_INV_ORDER
                            public shutdownWaitForCompletionDeadlock(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public shutdownWaitForCompletionDeadlock(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public shutdownWaitForCompletionDeadlock(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public shutdownWaitForCompletionDeadlock(): org.omg.CORBA.BAD_INV_ORDER
                            public badOperationAfterShutdown(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public badOperationAfterShutdown(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public badOperationAfterShutdown(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public badOperationAfterShutdown(): org.omg.CORBA.BAD_INV_ORDER
                            public badInvoke(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public badInvoke(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public badInvoke(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public badInvoke(): org.omg.CORBA.BAD_INV_ORDER
                            public badSetServantManager(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public badSetServantManager(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public badSetServantManager(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public badSetServantManager(): org.omg.CORBA.BAD_INV_ORDER
                            public badArgumentsCall(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public badArgumentsCall(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public badArgumentsCall(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public badArgumentsCall(): org.omg.CORBA.BAD_INV_ORDER
                            public badCtxCall(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public badCtxCall(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public badCtxCall(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public badCtxCall(): org.omg.CORBA.BAD_INV_ORDER
                            public badResultCall(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public badResultCall(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public badResultCall(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public badResultCall(): org.omg.CORBA.BAD_INV_ORDER
                            public badSend(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public badSend(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public badSend(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public badSend(): org.omg.CORBA.BAD_INV_ORDER
                            public badPollBefore(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public badPollBefore(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public badPollBefore(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public badPollBefore(): org.omg.CORBA.BAD_INV_ORDER
                            public badPollAfter(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public badPollAfter(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public badPollAfter(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public badPollAfter(): org.omg.CORBA.BAD_INV_ORDER
                            public badPollSync(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public badPollSync(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public badPollSync(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public badPollSync(): org.omg.CORBA.BAD_INV_ORDER
                            public invalidPiCall1(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public invalidPiCall1(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public invalidPiCall1(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public invalidPiCall1(): org.omg.CORBA.BAD_INV_ORDER
                            public invalidPiCall2(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public invalidPiCall2(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public invalidPiCall2(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public invalidPiCall2(): org.omg.CORBA.BAD_INV_ORDER
                            public invalidPiCall3(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public invalidPiCall3(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public invalidPiCall3(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public invalidPiCall3(): org.omg.CORBA.BAD_INV_ORDER
                            public invalidPiCall4(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public invalidPiCall4(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public invalidPiCall4(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public invalidPiCall4(): org.omg.CORBA.BAD_INV_ORDER
                            public serviceContextAddFailed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.BAD_INV_ORDER
                            public serviceContextAddFailed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.BAD_INV_ORDER
                            public serviceContextAddFailed(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.BAD_INV_ORDER
                            public serviceContextAddFailed(arg0: java.lang.Object): org.omg.CORBA.BAD_INV_ORDER
                            public policyFactoryRegFailed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.BAD_INV_ORDER
                            public policyFactoryRegFailed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.BAD_INV_ORDER
                            public policyFactoryRegFailed(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.BAD_INV_ORDER
                            public policyFactoryRegFailed(arg0: java.lang.Object): org.omg.CORBA.BAD_INV_ORDER
                            public createPoaDestroy(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public createPoaDestroy(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public createPoaDestroy(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public createPoaDestroy(): org.omg.CORBA.BAD_INV_ORDER
                            public priorityReassign(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public priorityReassign(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public priorityReassign(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public priorityReassign(): org.omg.CORBA.BAD_INV_ORDER
                            public xaStartOutsize(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public xaStartOutsize(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public xaStartOutsize(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public xaStartOutsize(): org.omg.CORBA.BAD_INV_ORDER
                            public xaStartProto(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public xaStartProto(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public xaStartProto(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public xaStartProto(): org.omg.CORBA.BAD_INV_ORDER
                            public badServantManagerType(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public badServantManagerType(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public badServantManagerType(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public badServantManagerType(): org.omg.CORBA.BAD_OPERATION
                            public operationUnknownToTarget(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public operationUnknownToTarget(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public operationUnknownToTarget(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public operationUnknownToTarget(): org.omg.CORBA.BAD_OPERATION
                            public unableRegisterValueFactory(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public unableRegisterValueFactory(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public unableRegisterValueFactory(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public unableRegisterValueFactory(): org.omg.CORBA.BAD_PARAM
                            public ridAlreadyDefined(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public ridAlreadyDefined(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public ridAlreadyDefined(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public ridAlreadyDefined(): org.omg.CORBA.BAD_PARAM
                            public nameUsedIfr(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public nameUsedIfr(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public nameUsedIfr(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public nameUsedIfr(): org.omg.CORBA.BAD_PARAM
                            public targetNotContainer(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public targetNotContainer(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public targetNotContainer(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public targetNotContainer(): org.omg.CORBA.BAD_PARAM
                            public nameClash(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public nameClash(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public nameClash(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public nameClash(): org.omg.CORBA.BAD_PARAM
                            public notSerializable(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public notSerializable(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public notSerializable(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public notSerializable(arg0: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public soBadSchemeName(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public soBadSchemeName(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public soBadSchemeName(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public soBadSchemeName(): org.omg.CORBA.BAD_PARAM
                            public soBadAddress(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public soBadAddress(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public soBadAddress(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public soBadAddress(): org.omg.CORBA.BAD_PARAM
                            public soBadSchemaSpecific(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public soBadSchemaSpecific(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public soBadSchemaSpecific(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public soBadSchemaSpecific(): org.omg.CORBA.BAD_PARAM
                            public soNonSpecific(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public soNonSpecific(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public soNonSpecific(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public soNonSpecific(): org.omg.CORBA.BAD_PARAM
                            public irDeriveAbsIntBase(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public irDeriveAbsIntBase(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public irDeriveAbsIntBase(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public irDeriveAbsIntBase(): org.omg.CORBA.BAD_PARAM
                            public irValueSupport(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public irValueSupport(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public irValueSupport(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public irValueSupport(): org.omg.CORBA.BAD_PARAM
                            public incompleteTypecode(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public incompleteTypecode(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public incompleteTypecode(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public incompleteTypecode(): org.omg.CORBA.BAD_PARAM
                            public invalidObjectId(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public invalidObjectId(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public invalidObjectId(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public invalidObjectId(): org.omg.CORBA.BAD_PARAM
                            public typecodeBadName(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public typecodeBadName(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public typecodeBadName(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public typecodeBadName(): org.omg.CORBA.BAD_PARAM
                            public typecodeBadRepid(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public typecodeBadRepid(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public typecodeBadRepid(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public typecodeBadRepid(): org.omg.CORBA.BAD_PARAM
                            public typecodeInvMember(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public typecodeInvMember(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public typecodeInvMember(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public typecodeInvMember(): org.omg.CORBA.BAD_PARAM
                            public tcUnionDupLabel(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public tcUnionDupLabel(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public tcUnionDupLabel(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public tcUnionDupLabel(): org.omg.CORBA.BAD_PARAM
                            public tcUnionIncompatible(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public tcUnionIncompatible(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public tcUnionIncompatible(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public tcUnionIncompatible(): org.omg.CORBA.BAD_PARAM
                            public tcUnionBadDisc(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public tcUnionBadDisc(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public tcUnionBadDisc(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public tcUnionBadDisc(): org.omg.CORBA.BAD_PARAM
                            public setExceptionBadAny(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public setExceptionBadAny(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public setExceptionBadAny(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public setExceptionBadAny(): org.omg.CORBA.BAD_PARAM
                            public setExceptionUnlisted(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public setExceptionUnlisted(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public setExceptionUnlisted(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public setExceptionUnlisted(): org.omg.CORBA.BAD_PARAM
                            public noClientWcharCodesetCtx(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public noClientWcharCodesetCtx(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public noClientWcharCodesetCtx(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public noClientWcharCodesetCtx(): org.omg.CORBA.BAD_PARAM
                            public illegalServiceContext(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public illegalServiceContext(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public illegalServiceContext(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public illegalServiceContext(): org.omg.CORBA.BAD_PARAM
                            public enumOutOfRange(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public enumOutOfRange(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public enumOutOfRange(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public enumOutOfRange(): org.omg.CORBA.BAD_PARAM
                            public invalidServiceContextId(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public invalidServiceContextId(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public invalidServiceContextId(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public invalidServiceContextId(): org.omg.CORBA.BAD_PARAM
                            public rirWithNullObject(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public rirWithNullObject(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public rirWithNullObject(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public rirWithNullObject(): org.omg.CORBA.BAD_PARAM
                            public invalidComponentId(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public invalidComponentId(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public invalidComponentId(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public invalidComponentId(arg0: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public invalidProfileId(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public invalidProfileId(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public invalidProfileId(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public invalidProfileId(): org.omg.CORBA.BAD_PARAM
                            public policyTypeDuplicate(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public policyTypeDuplicate(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public policyTypeDuplicate(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public policyTypeDuplicate(): org.omg.CORBA.BAD_PARAM
                            public badOnewayDefinition(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public badOnewayDefinition(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public badOnewayDefinition(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public badOnewayDefinition(): org.omg.CORBA.BAD_PARAM
                            public diiForImplicitOperation(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public diiForImplicitOperation(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public diiForImplicitOperation(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public diiForImplicitOperation(): org.omg.CORBA.BAD_PARAM
                            public xaCallInval(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public xaCallInval(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public xaCallInval(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public xaCallInval(): org.omg.CORBA.BAD_PARAM
                            public unionBadDiscriminator(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public unionBadDiscriminator(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public unionBadDiscriminator(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public unionBadDiscriminator(): org.omg.CORBA.BAD_PARAM
                            public ctxIllegalPropertyName(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public ctxIllegalPropertyName(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public ctxIllegalPropertyName(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public ctxIllegalPropertyName(): org.omg.CORBA.BAD_PARAM
                            public ctxIllegalSearchString(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public ctxIllegalSearchString(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public ctxIllegalSearchString(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public ctxIllegalSearchString(): org.omg.CORBA.BAD_PARAM
                            public ctxIllegalName(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public ctxIllegalName(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public ctxIllegalName(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public ctxIllegalName(): org.omg.CORBA.BAD_PARAM
                            public ctxNonEmpty(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public ctxNonEmpty(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public ctxNonEmpty(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public ctxNonEmpty(): org.omg.CORBA.BAD_PARAM
                            public invalidStreamFormatVersion(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public invalidStreamFormatVersion(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public invalidStreamFormatVersion(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public invalidStreamFormatVersion(arg0: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public notAValueoutputstream(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public notAValueoutputstream(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public notAValueoutputstream(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public notAValueoutputstream(): org.omg.CORBA.BAD_PARAM
                            public notAValueinputstream(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public notAValueinputstream(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public notAValueinputstream(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public notAValueinputstream(): org.omg.CORBA.BAD_PARAM
                            public marshallIncompleteTypecode(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_TYPECODE
                            public marshallIncompleteTypecode(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_TYPECODE
                            public marshallIncompleteTypecode(arg0: java.lang.Throwable): org.omg.CORBA.BAD_TYPECODE
                            public marshallIncompleteTypecode(): org.omg.CORBA.BAD_TYPECODE
                            public badMemberTypecode(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_TYPECODE
                            public badMemberTypecode(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_TYPECODE
                            public badMemberTypecode(arg0: java.lang.Throwable): org.omg.CORBA.BAD_TYPECODE
                            public badMemberTypecode(): org.omg.CORBA.BAD_TYPECODE
                            public illegalParameter(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_TYPECODE
                            public illegalParameter(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_TYPECODE
                            public illegalParameter(arg0: java.lang.Throwable): org.omg.CORBA.BAD_TYPECODE
                            public illegalParameter(): org.omg.CORBA.BAD_TYPECODE
                            public charNotInCodeset(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
                            public charNotInCodeset(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.DATA_CONVERSION
                            public charNotInCodeset(arg0: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
                            public charNotInCodeset(): org.omg.CORBA.DATA_CONVERSION
                            public priorityMapFailre(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
                            public priorityMapFailre(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.DATA_CONVERSION
                            public priorityMapFailre(arg0: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
                            public priorityMapFailre(): org.omg.CORBA.DATA_CONVERSION
                            public noUsableProfile(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.IMP_LIMIT
                            public noUsableProfile(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.IMP_LIMIT
                            public noUsableProfile(arg0: java.lang.Throwable): org.omg.CORBA.IMP_LIMIT
                            public noUsableProfile(): org.omg.CORBA.IMP_LIMIT
                            public priorityRangeRestrict(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public priorityRangeRestrict(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INITIALIZE
                            public priorityRangeRestrict(arg0: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public priorityRangeRestrict(): org.omg.CORBA.INITIALIZE
                            public noServerWcharCodesetCmp(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INV_OBJREF
                            public noServerWcharCodesetCmp(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INV_OBJREF
                            public noServerWcharCodesetCmp(arg0: java.lang.Throwable): org.omg.CORBA.INV_OBJREF
                            public noServerWcharCodesetCmp(): org.omg.CORBA.INV_OBJREF
                            public codesetComponentRequired(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INV_OBJREF
                            public codesetComponentRequired(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INV_OBJREF
                            public codesetComponentRequired(arg0: java.lang.Throwable): org.omg.CORBA.INV_OBJREF
                            public codesetComponentRequired(): org.omg.CORBA.INV_OBJREF
                            public iorPolicyReconcileError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INV_POLICY
                            public iorPolicyReconcileError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INV_POLICY
                            public iorPolicyReconcileError(arg0: java.lang.Throwable): org.omg.CORBA.INV_POLICY
                            public iorPolicyReconcileError(): org.omg.CORBA.INV_POLICY
                            public policyUnknown(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INV_POLICY
                            public policyUnknown(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INV_POLICY
                            public policyUnknown(arg0: java.lang.Throwable): org.omg.CORBA.INV_POLICY
                            public policyUnknown(): org.omg.CORBA.INV_POLICY
                            public noPolicyFactory(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INV_POLICY
                            public noPolicyFactory(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INV_POLICY
                            public noPolicyFactory(arg0: java.lang.Throwable): org.omg.CORBA.INV_POLICY
                            public noPolicyFactory(): org.omg.CORBA.INV_POLICY
                            public xaRmerr(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public xaRmerr(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public xaRmerr(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public xaRmerr(): org.omg.CORBA.INTERNAL
                            public xaRmfail(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public xaRmfail(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public xaRmfail(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public xaRmfail(): org.omg.CORBA.INTERNAL
                            public noIr(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTF_REPOS
                            public noIr(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTF_REPOS
                            public noIr(arg0: java.lang.Throwable): org.omg.CORBA.INTF_REPOS
                            public noIr(): org.omg.CORBA.INTF_REPOS
                            public noInterfaceInIr(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTF_REPOS
                            public noInterfaceInIr(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTF_REPOS
                            public noInterfaceInIr(arg0: java.lang.Throwable): org.omg.CORBA.INTF_REPOS
                            public noInterfaceInIr(): org.omg.CORBA.INTF_REPOS
                            public unableLocateValueFactory(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public unableLocateValueFactory(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public unableLocateValueFactory(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public unableLocateValueFactory(): org.omg.CORBA.MARSHAL
                            public setResultBeforeCtx(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public setResultBeforeCtx(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public setResultBeforeCtx(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public setResultBeforeCtx(): org.omg.CORBA.MARSHAL
                            public badNvlist(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public badNvlist(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public badNvlist(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public badNvlist(): org.omg.CORBA.MARSHAL
                            public notAnObjectImpl(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public notAnObjectImpl(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public notAnObjectImpl(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public notAnObjectImpl(): org.omg.CORBA.MARSHAL
                            public wcharBadGiopVersionSent(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public wcharBadGiopVersionSent(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public wcharBadGiopVersionSent(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public wcharBadGiopVersionSent(): org.omg.CORBA.MARSHAL
                            public wcharBadGiopVersionReturned(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public wcharBadGiopVersionReturned(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public wcharBadGiopVersionReturned(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public wcharBadGiopVersionReturned(): org.omg.CORBA.MARSHAL
                            public unsupportedFormatVersion(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public unsupportedFormatVersion(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public unsupportedFormatVersion(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public unsupportedFormatVersion(): org.omg.CORBA.MARSHAL
                            public rmiiiopOptionalDataIncompatible1(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public rmiiiopOptionalDataIncompatible1(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public rmiiiopOptionalDataIncompatible1(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public rmiiiopOptionalDataIncompatible1(): org.omg.CORBA.MARSHAL
                            public rmiiiopOptionalDataIncompatible2(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public rmiiiopOptionalDataIncompatible2(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public rmiiiopOptionalDataIncompatible2(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public rmiiiopOptionalDataIncompatible2(): org.omg.CORBA.MARSHAL
                            public rmiiiopOptionalDataIncompatible3(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public rmiiiopOptionalDataIncompatible3(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public rmiiiopOptionalDataIncompatible3(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public rmiiiopOptionalDataIncompatible3(): org.omg.CORBA.MARSHAL
                            public missingLocalValueImpl(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public missingLocalValueImpl(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.NO_IMPLEMENT
                            public missingLocalValueImpl(arg0: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public missingLocalValueImpl(): org.omg.CORBA.NO_IMPLEMENT
                            public incompatibleValueImpl(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public incompatibleValueImpl(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.NO_IMPLEMENT
                            public incompatibleValueImpl(arg0: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public incompatibleValueImpl(): org.omg.CORBA.NO_IMPLEMENT
                            public noUsableProfile2(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public noUsableProfile2(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.NO_IMPLEMENT
                            public noUsableProfile2(arg0: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public noUsableProfile2(): org.omg.CORBA.NO_IMPLEMENT
                            public diiLocalObject(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public diiLocalObject(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.NO_IMPLEMENT
                            public diiLocalObject(arg0: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public diiLocalObject(): org.omg.CORBA.NO_IMPLEMENT
                            public bioReset(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public bioReset(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.NO_IMPLEMENT
                            public bioReset(arg0: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public bioReset(): org.omg.CORBA.NO_IMPLEMENT
                            public bioMetaNotAvailable(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public bioMetaNotAvailable(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.NO_IMPLEMENT
                            public bioMetaNotAvailable(arg0: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public bioMetaNotAvailable(): org.omg.CORBA.NO_IMPLEMENT
                            public bioGenomicNoIterator(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public bioGenomicNoIterator(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.NO_IMPLEMENT
                            public bioGenomicNoIterator(arg0: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public bioGenomicNoIterator(): org.omg.CORBA.NO_IMPLEMENT
                            public piOperationNotSupported1(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported1(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported1(arg0: java.lang.Throwable): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported1(): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported2(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported2(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported2(arg0: java.lang.Throwable): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported2(): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported3(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported3(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported3(arg0: java.lang.Throwable): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported3(): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported4(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported4(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported4(arg0: java.lang.Throwable): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported4(): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported5(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported5(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported5(arg0: java.lang.Throwable): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported5(): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported6(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported6(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported6(arg0: java.lang.Throwable): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported6(): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported7(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported7(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported7(arg0: java.lang.Throwable): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported7(): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported8(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported8(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported8(arg0: java.lang.Throwable): org.omg.CORBA.NO_RESOURCES
                            public piOperationNotSupported8(): org.omg.CORBA.NO_RESOURCES
                            public noConnectionPriority(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.NO_RESOURCES
                            public noConnectionPriority(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.NO_RESOURCES
                            public noConnectionPriority(arg0: java.lang.Throwable): org.omg.CORBA.NO_RESOURCES
                            public noConnectionPriority(): org.omg.CORBA.NO_RESOURCES
                            public xaRb(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.TRANSACTION_ROLLEDBACK
                            public xaRb(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.TRANSACTION_ROLLEDBACK
                            public xaRb(arg0: java.lang.Throwable): org.omg.CORBA.TRANSACTION_ROLLEDBACK
                            public xaRb(): org.omg.CORBA.TRANSACTION_ROLLEDBACK
                            public xaNota(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.TRANSACTION_ROLLEDBACK
                            public xaNota(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.TRANSACTION_ROLLEDBACK
                            public xaNota(arg0: java.lang.Throwable): org.omg.CORBA.TRANSACTION_ROLLEDBACK
                            public xaNota(): org.omg.CORBA.TRANSACTION_ROLLEDBACK
                            public xaEndTrueRollbackDeferred(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.TRANSACTION_ROLLEDBACK
                            public xaEndTrueRollbackDeferred(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.TRANSACTION_ROLLEDBACK
                            public xaEndTrueRollbackDeferred(arg0: java.lang.Throwable): org.omg.CORBA.TRANSACTION_ROLLEDBACK
                            public xaEndTrueRollbackDeferred(): org.omg.CORBA.TRANSACTION_ROLLEDBACK
                            public poaRequestDiscard(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.TRANSIENT
                            public poaRequestDiscard(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.TRANSIENT
                            public poaRequestDiscard(arg0: java.lang.Throwable): org.omg.CORBA.TRANSIENT
                            public poaRequestDiscard(): org.omg.CORBA.TRANSIENT
                            public noUsableProfile3(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.TRANSIENT
                            public noUsableProfile3(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.TRANSIENT
                            public noUsableProfile3(arg0: java.lang.Throwable): org.omg.CORBA.TRANSIENT
                            public noUsableProfile3(): org.omg.CORBA.TRANSIENT
                            public requestCancelled(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.TRANSIENT
                            public requestCancelled(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.TRANSIENT
                            public requestCancelled(arg0: java.lang.Throwable): org.omg.CORBA.TRANSIENT
                            public requestCancelled(): org.omg.CORBA.TRANSIENT
                            public poaDestroyed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.TRANSIENT
                            public poaDestroyed(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.TRANSIENT
                            public poaDestroyed(arg0: java.lang.Throwable): org.omg.CORBA.TRANSIENT
                            public poaDestroyed(): org.omg.CORBA.TRANSIENT
                            public unregisteredValueAsObjref(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public unregisteredValueAsObjref(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJECT_NOT_EXIST
                            public unregisteredValueAsObjref(arg0: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public unregisteredValueAsObjref(): org.omg.CORBA.OBJECT_NOT_EXIST
                            public noObjectAdaptor(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public noObjectAdaptor(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJECT_NOT_EXIST
                            public noObjectAdaptor(arg0: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public noObjectAdaptor(): org.omg.CORBA.OBJECT_NOT_EXIST
                            public bioNotAvailable(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public bioNotAvailable(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJECT_NOT_EXIST
                            public bioNotAvailable(arg0: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public bioNotAvailable(): org.omg.CORBA.OBJECT_NOT_EXIST
                            public objectAdapterInactive(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public objectAdapterInactive(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJECT_NOT_EXIST
                            public objectAdapterInactive(arg0: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public objectAdapterInactive(): org.omg.CORBA.OBJECT_NOT_EXIST
                            public adapterActivatorException(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.OBJ_ADAPTER
                            public adapterActivatorException(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.OBJ_ADAPTER
                            public adapterActivatorException(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.OBJ_ADAPTER
                            public adapterActivatorException(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.OBJ_ADAPTER
                            public badServantType(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public badServantType(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public badServantType(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public badServantType(): org.omg.CORBA.OBJ_ADAPTER
                            public noDefaultServant(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public noDefaultServant(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public noDefaultServant(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public noDefaultServant(): org.omg.CORBA.OBJ_ADAPTER
                            public noServantManager(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public noServantManager(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public noServantManager(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public noServantManager(): org.omg.CORBA.OBJ_ADAPTER
                            public badPolicyIncarnate(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public badPolicyIncarnate(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public badPolicyIncarnate(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public badPolicyIncarnate(): org.omg.CORBA.OBJ_ADAPTER
                            public piExcCompEstablished(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public piExcCompEstablished(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public piExcCompEstablished(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public piExcCompEstablished(): org.omg.CORBA.OBJ_ADAPTER
                            public nullServantReturned(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public nullServantReturned(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public nullServantReturned(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public nullServantReturned(): org.omg.CORBA.OBJ_ADAPTER
                            public unknownUserException(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public unknownUserException(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.UNKNOWN
                            public unknownUserException(arg0: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public unknownUserException(): org.omg.CORBA.UNKNOWN
                            public unsupportedSystemException(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public unsupportedSystemException(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.UNKNOWN
                            public unsupportedSystemException(arg0: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public unsupportedSystemException(): org.omg.CORBA.UNKNOWN
                            public piUnknownUserException(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public piUnknownUserException(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.UNKNOWN
                            public piUnknownUserException(arg0: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public piUnknownUserException(): org.omg.CORBA.UNKNOWN
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}