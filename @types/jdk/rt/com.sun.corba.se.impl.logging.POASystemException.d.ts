declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace logging {
                        class POASystemException extends com.sun.corba.se.spi.logging.LogWrapperBase {
                            public static readonly SERVANT_MANAGER_ALREADY_SET: int
                            public static readonly DESTROY_DEADLOCK: int
                            public static readonly SERVANT_ORB: int
                            public static readonly BAD_SERVANT: int
                            public static readonly ILLEGAL_FORWARD_REQUEST: int
                            public static readonly BAD_TRANSACTION_CONTEXT: int
                            public static readonly BAD_REPOSITORY_ID: int
                            public static readonly INVOKESETUP: int
                            public static readonly BAD_LOCALREPLYSTATUS: int
                            public static readonly PERSISTENT_SERVERPORT_ERROR: int
                            public static readonly SERVANT_DISPATCH: int
                            public static readonly WRONG_CLIENTSC: int
                            public static readonly CANT_CLONE_TEMPLATE: int
                            public static readonly POACURRENT_UNBALANCED_STACK: int
                            public static readonly POACURRENT_NULL_FIELD: int
                            public static readonly POA_INTERNAL_GET_SERVANT_ERROR: int
                            public static readonly MAKE_FACTORY_NOT_POA: int
                            public static readonly DUPLICATE_ORB_VERSION_SC: int
                            public static readonly PREINVOKE_CLONE_ERROR: int
                            public static readonly PREINVOKE_POA_DESTROYED: int
                            public static readonly PMF_CREATE_RETAIN: int
                            public static readonly PMF_CREATE_NON_RETAIN: int
                            public static readonly POLICY_MEDIATOR_BAD_POLICY_IN_FACTORY: int
                            public static readonly SERVANT_TO_ID_OAA: int
                            public static readonly SERVANT_TO_ID_SAA: int
                            public static readonly SERVANT_TO_ID_WP: int
                            public static readonly CANT_RESOLVE_ROOT_POA: int
                            public static readonly SERVANT_MUST_BE_LOCAL: int
                            public static readonly NO_PROFILES_IN_IOR: int
                            public static readonly AOM_ENTRY_DEC_ZERO: int
                            public static readonly ADD_POA_INACTIVE: int
                            public static readonly ILLEGAL_POA_STATE_TRANS: int
                            public static readonly UNEXPECTED_EXCEPTION: int
                            public static readonly SINGLE_THREAD_NOT_SUPPORTED: int
                            public static readonly METHOD_NOT_IMPLEMENTED: int
                            public static readonly POA_LOOKUP_ERROR: int
                            public static readonly POA_INACTIVE: int
                            public static readonly POA_NO_SERVANT_MANAGER: int
                            public static readonly POA_NO_DEFAULT_SERVANT: int
                            public static readonly POA_SERVANT_NOT_UNIQUE: int
                            public static readonly POA_WRONG_POLICY: int
                            public static readonly FINDPOA_ERROR: int
                            public static readonly POA_SERVANT_ACTIVATOR_LOOKUP_FAILED: int
                            public static readonly POA_BAD_SERVANT_MANAGER: int
                            public static readonly POA_SERVANT_LOCATOR_LOOKUP_FAILED: int
                            public static readonly POA_UNKNOWN_POLICY: int
                            public static readonly POA_NOT_FOUND: int
                            public static readonly SERVANT_LOOKUP: int
                            public static readonly LOCAL_SERVANT_LOOKUP: int
                            public static readonly SERVANT_MANAGER_BAD_TYPE: int
                            public static readonly DEFAULT_POA_NOT_POAIMPL: int
                            public static readonly WRONG_POLICIES_FOR_THIS_OBJECT: int
                            public static readonly THIS_OBJECT_SERVANT_NOT_ACTIVE: int
                            public static readonly THIS_OBJECT_WRONG_POLICY: int
                            public static readonly NO_CONTEXT: int
                            public static readonly INCARNATE_RETURNED_NULL: int
                            public static readonly JTS_INIT_ERROR: int
                            public static readonly PERSISTENT_SERVERID_NOT_SET: int
                            public static readonly PERSISTENT_SERVERPORT_NOT_SET: int
                            public static readonly ORBD_ERROR: int
                            public static readonly BOOTSTRAP_ERROR: int
                            public static readonly POA_DISCARDING: int
                            public static readonly OTSHOOKEXCEPTION: int
                            public static readonly UNKNOWN_SERVER_EXCEPTION: int
                            public static readonly UNKNOWN_SERVERAPP_EXCEPTION: int
                            public static readonly UNKNOWN_LOCALINVOCATION_ERROR: int
                            public static readonly ADAPTER_ACTIVATOR_NONEXISTENT: int
                            public static readonly ADAPTER_ACTIVATOR_FAILED: int
                            public static readonly BAD_SKELETON: int
                            public static readonly NULL_SERVANT: int
                            public static readonly ADAPTER_DESTROYED: int
                            public constructor(arg0: java.util.logging.Logger)
                            public static get(arg0: com.sun.corba.se.spi.orb.ORB, arg1: java.lang.String | string): com.sun.corba.se.impl.logging.POASystemException
                            public static get(arg0: java.lang.String | string): com.sun.corba.se.impl.logging.POASystemException
                            public servantManagerAlreadySet(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public servantManagerAlreadySet(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public servantManagerAlreadySet(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public servantManagerAlreadySet(): org.omg.CORBA.BAD_INV_ORDER
                            public destroyDeadlock(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public destroyDeadlock(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public destroyDeadlock(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public destroyDeadlock(): org.omg.CORBA.BAD_INV_ORDER
                            public servantOrb(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public servantOrb(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public servantOrb(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public servantOrb(): org.omg.CORBA.BAD_OPERATION
                            public badServant(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public badServant(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public badServant(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public badServant(): org.omg.CORBA.BAD_OPERATION
                            public illegalForwardRequest(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public illegalForwardRequest(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public illegalForwardRequest(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public illegalForwardRequest(): org.omg.CORBA.BAD_OPERATION
                            public badTransactionContext(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public badTransactionContext(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public badTransactionContext(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public badTransactionContext(): org.omg.CORBA.BAD_PARAM
                            public badRepositoryId(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public badRepositoryId(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public badRepositoryId(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public badRepositoryId(): org.omg.CORBA.BAD_PARAM
                            public invokesetup(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public invokesetup(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public invokesetup(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public invokesetup(): org.omg.CORBA.INTERNAL
                            public badLocalreplystatus(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public badLocalreplystatus(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public badLocalreplystatus(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public badLocalreplystatus(): org.omg.CORBA.INTERNAL
                            public persistentServerportError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public persistentServerportError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public persistentServerportError(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public persistentServerportError(): org.omg.CORBA.INTERNAL
                            public servantDispatch(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public servantDispatch(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public servantDispatch(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public servantDispatch(): org.omg.CORBA.INTERNAL
                            public wrongClientsc(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public wrongClientsc(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public wrongClientsc(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public wrongClientsc(): org.omg.CORBA.INTERNAL
                            public cantCloneTemplate(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public cantCloneTemplate(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public cantCloneTemplate(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public cantCloneTemplate(): org.omg.CORBA.INTERNAL
                            public poacurrentUnbalancedStack(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public poacurrentUnbalancedStack(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public poacurrentUnbalancedStack(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public poacurrentUnbalancedStack(): org.omg.CORBA.INTERNAL
                            public poacurrentNullField(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public poacurrentNullField(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public poacurrentNullField(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public poacurrentNullField(): org.omg.CORBA.INTERNAL
                            public poaInternalGetServantError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public poaInternalGetServantError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public poaInternalGetServantError(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public poaInternalGetServantError(): org.omg.CORBA.INTERNAL
                            public makeFactoryNotPoa(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public makeFactoryNotPoa(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public makeFactoryNotPoa(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public makeFactoryNotPoa(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
                            public duplicateOrbVersionSc(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public duplicateOrbVersionSc(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public duplicateOrbVersionSc(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public duplicateOrbVersionSc(): org.omg.CORBA.INTERNAL
                            public preinvokeCloneError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public preinvokeCloneError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public preinvokeCloneError(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public preinvokeCloneError(): org.omg.CORBA.INTERNAL
                            public preinvokePoaDestroyed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public preinvokePoaDestroyed(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public preinvokePoaDestroyed(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public preinvokePoaDestroyed(): org.omg.CORBA.INTERNAL
                            public pmfCreateRetain(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public pmfCreateRetain(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public pmfCreateRetain(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public pmfCreateRetain(): org.omg.CORBA.INTERNAL
                            public pmfCreateNonRetain(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public pmfCreateNonRetain(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public pmfCreateNonRetain(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public pmfCreateNonRetain(): org.omg.CORBA.INTERNAL
                            public policyMediatorBadPolicyInFactory(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public policyMediatorBadPolicyInFactory(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public policyMediatorBadPolicyInFactory(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public policyMediatorBadPolicyInFactory(): org.omg.CORBA.INTERNAL
                            public servantToIdOaa(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public servantToIdOaa(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public servantToIdOaa(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public servantToIdOaa(): org.omg.CORBA.INTERNAL
                            public servantToIdSaa(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public servantToIdSaa(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public servantToIdSaa(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public servantToIdSaa(): org.omg.CORBA.INTERNAL
                            public servantToIdWp(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public servantToIdWp(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public servantToIdWp(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public servantToIdWp(): org.omg.CORBA.INTERNAL
                            public cantResolveRootPoa(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public cantResolveRootPoa(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public cantResolveRootPoa(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public cantResolveRootPoa(): org.omg.CORBA.INTERNAL
                            public servantMustBeLocal(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public servantMustBeLocal(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public servantMustBeLocal(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public servantMustBeLocal(): org.omg.CORBA.INTERNAL
                            public noProfilesInIor(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public noProfilesInIor(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public noProfilesInIor(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public noProfilesInIor(): org.omg.CORBA.INTERNAL
                            public aomEntryDecZero(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public aomEntryDecZero(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public aomEntryDecZero(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public aomEntryDecZero(): org.omg.CORBA.INTERNAL
                            public addPoaInactive(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public addPoaInactive(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public addPoaInactive(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public addPoaInactive(): org.omg.CORBA.INTERNAL
                            public illegalPoaStateTrans(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public illegalPoaStateTrans(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public illegalPoaStateTrans(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public illegalPoaStateTrans(): org.omg.CORBA.INTERNAL
                            public unexpectedException(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public unexpectedException(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public unexpectedException(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public unexpectedException(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
                            public singleThreadNotSupported(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public singleThreadNotSupported(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.NO_IMPLEMENT
                            public singleThreadNotSupported(arg0: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public singleThreadNotSupported(): org.omg.CORBA.NO_IMPLEMENT
                            public methodNotImplemented(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public methodNotImplemented(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.NO_IMPLEMENT
                            public methodNotImplemented(arg0: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public methodNotImplemented(): org.omg.CORBA.NO_IMPLEMENT
                            public poaLookupError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public poaLookupError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public poaLookupError(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public poaLookupError(): org.omg.CORBA.OBJ_ADAPTER
                            public poaInactive(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public poaInactive(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public poaInactive(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public poaInactive(): org.omg.CORBA.OBJ_ADAPTER
                            public poaNoServantManager(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public poaNoServantManager(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public poaNoServantManager(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public poaNoServantManager(): org.omg.CORBA.OBJ_ADAPTER
                            public poaNoDefaultServant(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public poaNoDefaultServant(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public poaNoDefaultServant(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public poaNoDefaultServant(): org.omg.CORBA.OBJ_ADAPTER
                            public poaServantNotUnique(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public poaServantNotUnique(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public poaServantNotUnique(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public poaServantNotUnique(): org.omg.CORBA.OBJ_ADAPTER
                            public poaWrongPolicy(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public poaWrongPolicy(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public poaWrongPolicy(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public poaWrongPolicy(): org.omg.CORBA.OBJ_ADAPTER
                            public findpoaError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public findpoaError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public findpoaError(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public findpoaError(): org.omg.CORBA.OBJ_ADAPTER
                            public poaServantActivatorLookupFailed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public poaServantActivatorLookupFailed(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public poaServantActivatorLookupFailed(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public poaServantActivatorLookupFailed(): org.omg.CORBA.OBJ_ADAPTER
                            public poaBadServantManager(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public poaBadServantManager(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public poaBadServantManager(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public poaBadServantManager(): org.omg.CORBA.OBJ_ADAPTER
                            public poaServantLocatorLookupFailed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public poaServantLocatorLookupFailed(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public poaServantLocatorLookupFailed(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public poaServantLocatorLookupFailed(): org.omg.CORBA.OBJ_ADAPTER
                            public poaUnknownPolicy(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public poaUnknownPolicy(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public poaUnknownPolicy(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public poaUnknownPolicy(): org.omg.CORBA.OBJ_ADAPTER
                            public poaNotFound(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public poaNotFound(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public poaNotFound(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public poaNotFound(): org.omg.CORBA.OBJ_ADAPTER
                            public servantLookup(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public servantLookup(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public servantLookup(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public servantLookup(): org.omg.CORBA.OBJ_ADAPTER
                            public localServantLookup(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public localServantLookup(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public localServantLookup(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public localServantLookup(): org.omg.CORBA.OBJ_ADAPTER
                            public servantManagerBadType(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public servantManagerBadType(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public servantManagerBadType(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public servantManagerBadType(): org.omg.CORBA.OBJ_ADAPTER
                            public defaultPoaNotPoaimpl(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public defaultPoaNotPoaimpl(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public defaultPoaNotPoaimpl(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public defaultPoaNotPoaimpl(): org.omg.CORBA.OBJ_ADAPTER
                            public wrongPoliciesForThisObject(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public wrongPoliciesForThisObject(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public wrongPoliciesForThisObject(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public wrongPoliciesForThisObject(): org.omg.CORBA.OBJ_ADAPTER
                            public thisObjectServantNotActive(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public thisObjectServantNotActive(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public thisObjectServantNotActive(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public thisObjectServantNotActive(): org.omg.CORBA.OBJ_ADAPTER
                            public thisObjectWrongPolicy(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public thisObjectWrongPolicy(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public thisObjectWrongPolicy(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public thisObjectWrongPolicy(): org.omg.CORBA.OBJ_ADAPTER
                            public noContext(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public noContext(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public noContext(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public noContext(): org.omg.CORBA.OBJ_ADAPTER
                            public incarnateReturnedNull(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public incarnateReturnedNull(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public incarnateReturnedNull(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public incarnateReturnedNull(): org.omg.CORBA.OBJ_ADAPTER
                            public jtsInitError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public jtsInitError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INITIALIZE
                            public jtsInitError(arg0: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public jtsInitError(): org.omg.CORBA.INITIALIZE
                            public persistentServeridNotSet(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public persistentServeridNotSet(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INITIALIZE
                            public persistentServeridNotSet(arg0: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public persistentServeridNotSet(): org.omg.CORBA.INITIALIZE
                            public persistentServerportNotSet(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public persistentServerportNotSet(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INITIALIZE
                            public persistentServerportNotSet(arg0: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public persistentServerportNotSet(): org.omg.CORBA.INITIALIZE
                            public orbdError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public orbdError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INITIALIZE
                            public orbdError(arg0: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public orbdError(): org.omg.CORBA.INITIALIZE
                            public bootstrapError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public bootstrapError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INITIALIZE
                            public bootstrapError(arg0: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public bootstrapError(): org.omg.CORBA.INITIALIZE
                            public poaDiscarding(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.TRANSIENT
                            public poaDiscarding(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.TRANSIENT
                            public poaDiscarding(arg0: java.lang.Throwable): org.omg.CORBA.TRANSIENT
                            public poaDiscarding(): org.omg.CORBA.TRANSIENT
                            public otshookexception(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public otshookexception(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.UNKNOWN
                            public otshookexception(arg0: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public otshookexception(): org.omg.CORBA.UNKNOWN
                            public unknownServerException(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public unknownServerException(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.UNKNOWN
                            public unknownServerException(arg0: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public unknownServerException(): org.omg.CORBA.UNKNOWN
                            public unknownServerappException(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public unknownServerappException(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.UNKNOWN
                            public unknownServerappException(arg0: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public unknownServerappException(): org.omg.CORBA.UNKNOWN
                            public unknownLocalinvocationError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public unknownLocalinvocationError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.UNKNOWN
                            public unknownLocalinvocationError(arg0: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public unknownLocalinvocationError(): org.omg.CORBA.UNKNOWN
                            public adapterActivatorNonexistent(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public adapterActivatorNonexistent(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJECT_NOT_EXIST
                            public adapterActivatorNonexistent(arg0: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public adapterActivatorNonexistent(): org.omg.CORBA.OBJECT_NOT_EXIST
                            public adapterActivatorFailed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public adapterActivatorFailed(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJECT_NOT_EXIST
                            public adapterActivatorFailed(arg0: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public adapterActivatorFailed(): org.omg.CORBA.OBJECT_NOT_EXIST
                            public badSkeleton(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public badSkeleton(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJECT_NOT_EXIST
                            public badSkeleton(arg0: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public badSkeleton(): org.omg.CORBA.OBJECT_NOT_EXIST
                            public nullServant(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public nullServant(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJECT_NOT_EXIST
                            public nullServant(arg0: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public nullServant(): org.omg.CORBA.OBJECT_NOT_EXIST
                            public adapterDestroyed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public adapterDestroyed(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJECT_NOT_EXIST
                            public adapterDestroyed(arg0: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public adapterDestroyed(): org.omg.CORBA.OBJECT_NOT_EXIST
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}