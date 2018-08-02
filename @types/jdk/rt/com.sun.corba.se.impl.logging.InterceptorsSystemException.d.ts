declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace logging {
                        class InterceptorsSystemException extends com.sun.corba.se.spi.logging.LogWrapperBase {
                            public static TYPE_OUT_OF_RANGE: int
                            public static NAME_NULL: int
                            public static RIR_INVALID_PRE_INIT: int
                            public static BAD_STATE1: int
                            public static BAD_STATE2: int
                            public static IOEXCEPTION_DURING_CANCEL_REQUEST: int
                            public static EXCEPTION_WAS_NULL: int
                            public static OBJECT_HAS_NO_DELEGATE: int
                            public static DELEGATE_NOT_CLIENTSUB: int
                            public static OBJECT_NOT_OBJECTIMPL: int
                            public static EXCEPTION_INVALID: int
                            public static REPLY_STATUS_NOT_INIT: int
                            public static EXCEPTION_IN_ARGUMENTS: int
                            public static EXCEPTION_IN_EXCEPTIONS: int
                            public static EXCEPTION_IN_CONTEXTS: int
                            public static EXCEPTION_WAS_NULL_2: int
                            public static SERVANT_INVALID: int
                            public static CANT_POP_ONLY_PICURRENT: int
                            public static CANT_POP_ONLY_CURRENT_2: int
                            public static PI_DSI_RESULT_IS_NULL: int
                            public static PI_DII_RESULT_IS_NULL: int
                            public static EXCEPTION_UNAVAILABLE: int
                            public static CLIENT_INFO_STACK_NULL: int
                            public static SERVER_INFO_STACK_NULL: int
                            public static MARK_AND_RESET_FAILED: int
                            public static SLOT_TABLE_INVARIANT: int
                            public static INTERCEPTOR_LIST_LOCKED: int
                            public static SORT_SIZE_MISMATCH: int
                            public static PI_ORB_NOT_POLICY_BASED: int
                            public static ORBINITINFO_INVALID: int
                            public static UNKNOWN_REQUEST_INVOKE: int
                            public constructor(arg0: java.util.logging.Logger)
                            public static get(arg0: com.sun.corba.se.spi.orb.ORB, arg1: java.lang.String | string): com.sun.corba.se.impl.logging.InterceptorsSystemException
                            public static get(arg0: java.lang.String | string): com.sun.corba.se.impl.logging.InterceptorsSystemException
                            public typeOutOfRange(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public typeOutOfRange(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public typeOutOfRange(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public typeOutOfRange(arg0: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public nameNull(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public nameNull(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public nameNull(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public nameNull(): org.omg.CORBA.BAD_PARAM
                            public rirInvalidPreInit(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public rirInvalidPreInit(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public rirInvalidPreInit(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public rirInvalidPreInit(): org.omg.CORBA.BAD_INV_ORDER
                            public badState1(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.BAD_INV_ORDER
                            public badState1(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.BAD_INV_ORDER
                            public badState1(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.BAD_INV_ORDER
                            public badState1(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.BAD_INV_ORDER
                            public badState2(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object, arg4: java.lang.Object): org.omg.CORBA.BAD_INV_ORDER
                            public badState2(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.BAD_INV_ORDER
                            public badState2(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.BAD_INV_ORDER
                            public badState2(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.BAD_INV_ORDER
                            public ioexceptionDuringCancelRequest(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.COMM_FAILURE
                            public ioexceptionDuringCancelRequest(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.COMM_FAILURE
                            public ioexceptionDuringCancelRequest(arg0: java.lang.Throwable): org.omg.CORBA.COMM_FAILURE
                            public ioexceptionDuringCancelRequest(): org.omg.CORBA.COMM_FAILURE
                            public exceptionWasNull(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public exceptionWasNull(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public exceptionWasNull(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public exceptionWasNull(): org.omg.CORBA.INTERNAL
                            public objectHasNoDelegate(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public objectHasNoDelegate(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public objectHasNoDelegate(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public objectHasNoDelegate(): org.omg.CORBA.INTERNAL
                            public delegateNotClientsub(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public delegateNotClientsub(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public delegateNotClientsub(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public delegateNotClientsub(): org.omg.CORBA.INTERNAL
                            public objectNotObjectimpl(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public objectNotObjectimpl(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public objectNotObjectimpl(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public objectNotObjectimpl(): org.omg.CORBA.INTERNAL
                            public exceptionInvalid(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public exceptionInvalid(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public exceptionInvalid(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public exceptionInvalid(): org.omg.CORBA.INTERNAL
                            public replyStatusNotInit(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public replyStatusNotInit(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public replyStatusNotInit(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public replyStatusNotInit(): org.omg.CORBA.INTERNAL
                            public exceptionInArguments(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public exceptionInArguments(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public exceptionInArguments(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public exceptionInArguments(): org.omg.CORBA.INTERNAL
                            public exceptionInExceptions(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public exceptionInExceptions(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public exceptionInExceptions(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public exceptionInExceptions(): org.omg.CORBA.INTERNAL
                            public exceptionInContexts(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public exceptionInContexts(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public exceptionInContexts(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public exceptionInContexts(): org.omg.CORBA.INTERNAL
                            public exceptionWasNull2(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public exceptionWasNull2(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public exceptionWasNull2(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public exceptionWasNull2(): org.omg.CORBA.INTERNAL
                            public servantInvalid(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public servantInvalid(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public servantInvalid(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public servantInvalid(): org.omg.CORBA.INTERNAL
                            public cantPopOnlyPicurrent(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public cantPopOnlyPicurrent(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public cantPopOnlyPicurrent(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public cantPopOnlyPicurrent(): org.omg.CORBA.INTERNAL
                            public cantPopOnlyCurrent2(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public cantPopOnlyCurrent2(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public cantPopOnlyCurrent2(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public cantPopOnlyCurrent2(): org.omg.CORBA.INTERNAL
                            public piDsiResultIsNull(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public piDsiResultIsNull(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public piDsiResultIsNull(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public piDsiResultIsNull(): org.omg.CORBA.INTERNAL
                            public piDiiResultIsNull(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public piDiiResultIsNull(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public piDiiResultIsNull(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public piDiiResultIsNull(): org.omg.CORBA.INTERNAL
                            public exceptionUnavailable(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public exceptionUnavailable(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public exceptionUnavailable(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public exceptionUnavailable(): org.omg.CORBA.INTERNAL
                            public clientInfoStackNull(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public clientInfoStackNull(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public clientInfoStackNull(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public clientInfoStackNull(): org.omg.CORBA.INTERNAL
                            public serverInfoStackNull(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public serverInfoStackNull(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public serverInfoStackNull(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public serverInfoStackNull(): org.omg.CORBA.INTERNAL
                            public markAndResetFailed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public markAndResetFailed(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public markAndResetFailed(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public markAndResetFailed(): org.omg.CORBA.INTERNAL
                            public slotTableInvariant(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
                            public slotTableInvariant(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public slotTableInvariant(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public slotTableInvariant(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public interceptorListLocked(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public interceptorListLocked(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public interceptorListLocked(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public interceptorListLocked(): org.omg.CORBA.INTERNAL
                            public sortSizeMismatch(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public sortSizeMismatch(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public sortSizeMismatch(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public sortSizeMismatch(): org.omg.CORBA.INTERNAL
                            public piOrbNotPolicyBased(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public piOrbNotPolicyBased(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.NO_IMPLEMENT
                            public piOrbNotPolicyBased(arg0: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public piOrbNotPolicyBased(): org.omg.CORBA.NO_IMPLEMENT
                            public orbinitinfoInvalid(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public orbinitinfoInvalid(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJECT_NOT_EXIST
                            public orbinitinfoInvalid(arg0: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public orbinitinfoInvalid(): org.omg.CORBA.OBJECT_NOT_EXIST
                            public unknownRequestInvoke(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public unknownRequestInvoke(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.UNKNOWN
                            public unknownRequestInvoke(arg0: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public unknownRequestInvoke(): org.omg.CORBA.UNKNOWN
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}