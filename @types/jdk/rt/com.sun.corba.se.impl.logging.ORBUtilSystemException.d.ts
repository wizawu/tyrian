declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace logging {
                        class ORBUtilSystemException extends com.sun.corba.se.spi.logging.LogWrapperBase {
                            public static readonly ADAPTER_ID_NOT_AVAILABLE: int
                            public static readonly SERVER_ID_NOT_AVAILABLE: int
                            public static readonly ORB_ID_NOT_AVAILABLE: int
                            public static readonly OBJECT_ADAPTER_ID_NOT_AVAILABLE: int
                            public static readonly CONNECTING_SERVANT: int
                            public static readonly EXTRACT_WRONG_TYPE: int
                            public static readonly EXTRACT_WRONG_TYPE_LIST: int
                            public static readonly BAD_STRING_BOUNDS: int
                            public static readonly INSERT_OBJECT_INCOMPATIBLE: int
                            public static readonly INSERT_OBJECT_FAILED: int
                            public static readonly EXTRACT_OBJECT_INCOMPATIBLE: int
                            public static readonly FIXED_NOT_MATCH: int
                            public static readonly FIXED_BAD_TYPECODE: int
                            public static readonly SET_EXCEPTION_CALLED_NULL_ARGS: int
                            public static readonly SET_EXCEPTION_CALLED_BAD_TYPE: int
                            public static readonly CONTEXT_CALLED_OUT_OF_ORDER: int
                            public static readonly BAD_ORB_CONFIGURATOR: int
                            public static readonly ORB_CONFIGURATOR_ERROR: int
                            public static readonly ORB_DESTROYED: int
                            public static readonly NEGATIVE_BOUNDS: int
                            public static readonly EXTRACT_NOT_INITIALIZED: int
                            public static readonly EXTRACT_OBJECT_FAILED: int
                            public static readonly METHOD_NOT_FOUND_IN_TIE: int
                            public static readonly CLASS_NOT_FOUND1: int
                            public static readonly CLASS_NOT_FOUND2: int
                            public static readonly CLASS_NOT_FOUND3: int
                            public static readonly GET_DELEGATE_SERVANT_NOT_ACTIVE: int
                            public static readonly GET_DELEGATE_WRONG_POLICY: int
                            public static readonly SET_DELEGATE_REQUIRES_STUB: int
                            public static readonly GET_DELEGATE_REQUIRES_STUB: int
                            public static readonly GET_TYPE_IDS_REQUIRES_STUB: int
                            public static readonly GET_ORB_REQUIRES_STUB: int
                            public static readonly CONNECT_REQUIRES_STUB: int
                            public static readonly IS_LOCAL_REQUIRES_STUB: int
                            public static readonly REQUEST_REQUIRES_STUB: int
                            public static readonly BAD_ACTIVATE_TIE_CALL: int
                            public static readonly IO_EXCEPTION_ON_CLOSE: int
                            public static readonly NULL_PARAM: int
                            public static readonly UNABLE_FIND_VALUE_FACTORY: int
                            public static readonly ABSTRACT_FROM_NON_ABSTRACT: int
                            public static readonly INVALID_TAGGED_PROFILE: int
                            public static readonly OBJREF_FROM_FOREIGN_ORB: int
                            public static readonly LOCAL_OBJECT_NOT_ALLOWED: int
                            public static readonly NULL_OBJECT_REFERENCE: int
                            public static readonly COULD_NOT_LOAD_CLASS: int
                            public static readonly BAD_URL: int
                            public static readonly FIELD_NOT_FOUND: int
                            public static readonly ERROR_SETTING_FIELD: int
                            public static readonly BOUNDS_ERROR_IN_DII_REQUEST: int
                            public static readonly PERSISTENT_SERVER_INIT_ERROR: int
                            public static readonly COULD_NOT_CREATE_ARRAY: int
                            public static readonly COULD_NOT_SET_ARRAY: int
                            public static readonly ILLEGAL_BOOTSTRAP_OPERATION: int
                            public static readonly BOOTSTRAP_RUNTIME_EXCEPTION: int
                            public static readonly BOOTSTRAP_EXCEPTION: int
                            public static readonly STRING_EXPECTED: int
                            public static readonly INVALID_TYPECODE_KIND: int
                            public static readonly SOCKET_FACTORY_AND_CONTACT_INFO_LIST_AT_SAME_TIME: int
                            public static readonly ACCEPTORS_AND_LEGACY_SOCKET_FACTORY_AT_SAME_TIME: int
                            public static readonly BAD_ORB_FOR_SERVANT: int
                            public static readonly INVALID_REQUEST_PARTITIONING_POLICY_VALUE: int
                            public static readonly INVALID_REQUEST_PARTITIONING_COMPONENT_VALUE: int
                            public static readonly INVALID_REQUEST_PARTITIONING_ID: int
                            public static readonly ERROR_IN_SETTING_DYNAMIC_STUB_FACTORY_FACTORY: int
                            public static readonly DSIMETHOD_NOTCALLED: int
                            public static readonly ARGUMENTS_CALLED_MULTIPLE: int
                            public static readonly ARGUMENTS_CALLED_AFTER_EXCEPTION: int
                            public static readonly ARGUMENTS_CALLED_NULL_ARGS: int
                            public static readonly ARGUMENTS_NOT_CALLED: int
                            public static readonly SET_RESULT_CALLED_MULTIPLE: int
                            public static readonly SET_RESULT_AFTER_EXCEPTION: int
                            public static readonly SET_RESULT_CALLED_NULL_ARGS: int
                            public static readonly BAD_REMOTE_TYPECODE: int
                            public static readonly UNRESOLVED_RECURSIVE_TYPECODE: int
                            public static readonly CONNECT_FAILURE: int
                            public static readonly CONNECTION_CLOSE_REBIND: int
                            public static readonly WRITE_ERROR_SEND: int
                            public static readonly GET_PROPERTIES_ERROR: int
                            public static readonly BOOTSTRAP_SERVER_NOT_AVAIL: int
                            public static readonly INVOKE_ERROR: int
                            public static readonly DEFAULT_CREATE_SERVER_SOCKET_GIVEN_NON_IIOP_CLEAR_TEXT: int
                            public static readonly CONNECTION_ABORT: int
                            public static readonly CONNECTION_REBIND: int
                            public static readonly RECV_MSG_ERROR: int
                            public static readonly IOEXCEPTION_WHEN_READING_CONNECTION: int
                            public static readonly SELECTION_KEY_INVALID: int
                            public static readonly EXCEPTION_IN_ACCEPT: int
                            public static readonly SECURITY_EXCEPTION_IN_ACCEPT: int
                            public static readonly TRANSPORT_READ_TIMEOUT_EXCEEDED: int
                            public static readonly CREATE_LISTENER_FAILED: int
                            public static readonly BUFFER_READ_MANAGER_TIMEOUT: int
                            public static readonly BAD_STRINGIFIED_IOR_LEN: int
                            public static readonly BAD_STRINGIFIED_IOR: int
                            public static readonly BAD_MODIFIER: int
                            public static readonly CODESET_INCOMPATIBLE: int
                            public static readonly BAD_HEX_DIGIT: int
                            public static readonly BAD_UNICODE_PAIR: int
                            public static readonly BTC_RESULT_MORE_THAN_ONE_CHAR: int
                            public static readonly BAD_CODESETS_FROM_CLIENT: int
                            public static readonly INVALID_SINGLE_CHAR_CTB: int
                            public static readonly BAD_GIOP_1_1_CTB: int
                            public static readonly BAD_SEQUENCE_BOUNDS: int
                            public static readonly ILLEGAL_SOCKET_FACTORY_TYPE: int
                            public static readonly BAD_CUSTOM_SOCKET_FACTORY: int
                            public static readonly FRAGMENT_SIZE_MINIMUM: int
                            public static readonly FRAGMENT_SIZE_DIV: int
                            public static readonly ORB_INITIALIZER_FAILURE: int
                            public static readonly ORB_INITIALIZER_TYPE: int
                            public static readonly ORB_INITIALREFERENCE_SYNTAX: int
                            public static readonly ACCEPTOR_INSTANTIATION_FAILURE: int
                            public static readonly ACCEPTOR_INSTANTIATION_TYPE_FAILURE: int
                            public static readonly ILLEGAL_CONTACT_INFO_LIST_FACTORY_TYPE: int
                            public static readonly BAD_CONTACT_INFO_LIST_FACTORY: int
                            public static readonly ILLEGAL_IOR_TO_SOCKET_INFO_TYPE: int
                            public static readonly BAD_CUSTOM_IOR_TO_SOCKET_INFO: int
                            public static readonly ILLEGAL_IIOP_PRIMARY_TO_CONTACT_INFO_TYPE: int
                            public static readonly BAD_CUSTOM_IIOP_PRIMARY_TO_CONTACT_INFO: int
                            public static readonly BAD_CORBALOC_STRING: int
                            public static readonly NO_PROFILE_PRESENT: int
                            public static readonly CANNOT_CREATE_ORBID_DB: int
                            public static readonly CANNOT_READ_ORBID_DB: int
                            public static readonly CANNOT_WRITE_ORBID_DB: int
                            public static readonly GET_SERVER_PORT_CALLED_BEFORE_ENDPOINTS_INITIALIZED: int
                            public static readonly PERSISTENT_SERVERPORT_NOT_SET: int
                            public static readonly PERSISTENT_SERVERID_NOT_SET: int
                            public static readonly NON_EXISTENT_ORBID: int
                            public static readonly NO_SERVER_SUBCONTRACT: int
                            public static readonly SERVER_SC_TEMP_SIZE: int
                            public static readonly NO_CLIENT_SC_CLASS: int
                            public static readonly SERVER_SC_NO_IIOP_PROFILE: int
                            public static readonly GET_SYSTEM_EX_RETURNED_NULL: int
                            public static readonly PEEKSTRING_FAILED: int
                            public static readonly GET_LOCAL_HOST_FAILED: int
                            public static readonly BAD_LOCATE_REQUEST_STATUS: int
                            public static readonly STRINGIFY_WRITE_ERROR: int
                            public static readonly BAD_GIOP_REQUEST_TYPE: int
                            public static readonly ERROR_UNMARSHALING_USEREXC: int
                            public static readonly RequestDispatcherRegistry_ERROR: int
                            public static readonly LOCATIONFORWARD_ERROR: int
                            public static readonly WRONG_CLIENTSC: int
                            public static readonly BAD_SERVANT_READ_OBJECT: int
                            public static readonly MULT_IIOP_PROF_NOT_SUPPORTED: int
                            public static readonly GIOP_MAGIC_ERROR: int
                            public static readonly GIOP_VERSION_ERROR: int
                            public static readonly ILLEGAL_REPLY_STATUS: int
                            public static readonly ILLEGAL_GIOP_MSG_TYPE: int
                            public static readonly FRAGMENTATION_DISALLOWED: int
                            public static readonly BAD_REPLYSTATUS: int
                            public static readonly CTB_CONVERTER_FAILURE: int
                            public static readonly BTC_CONVERTER_FAILURE: int
                            public static readonly WCHAR_ARRAY_UNSUPPORTED_ENCODING: int
                            public static readonly ILLEGAL_TARGET_ADDRESS_DISPOSITION: int
                            public static readonly NULL_REPLY_IN_GET_ADDR_DISPOSITION: int
                            public static readonly ORB_TARGET_ADDR_PREFERENCE_IN_EXTRACT_OBJECTKEY_INVALID: int
                            public static readonly INVALID_ISSTREAMED_TCKIND: int
                            public static readonly INVALID_JDK1_3_1_PATCH_LEVEL: int
                            public static readonly SVCCTX_UNMARSHAL_ERROR: int
                            public static readonly NULL_IOR: int
                            public static readonly UNSUPPORTED_GIOP_VERSION: int
                            public static readonly APPLICATION_EXCEPTION_IN_SPECIAL_METHOD: int
                            public static readonly STATEMENT_NOT_REACHABLE1: int
                            public static readonly STATEMENT_NOT_REACHABLE2: int
                            public static readonly STATEMENT_NOT_REACHABLE3: int
                            public static readonly STATEMENT_NOT_REACHABLE4: int
                            public static readonly STATEMENT_NOT_REACHABLE5: int
                            public static readonly STATEMENT_NOT_REACHABLE6: int
                            public static readonly UNEXPECTED_DII_EXCEPTION: int
                            public static readonly METHOD_SHOULD_NOT_BE_CALLED: int
                            public static readonly CANCEL_NOT_SUPPORTED: int
                            public static readonly EMPTY_STACK_RUN_SERVANT_POST_INVOKE: int
                            public static readonly PROBLEM_WITH_EXCEPTION_TYPECODE: int
                            public static readonly ILLEGAL_SUBCONTRACT_ID: int
                            public static readonly BAD_SYSTEM_EXCEPTION_IN_LOCATE_REPLY: int
                            public static readonly BAD_SYSTEM_EXCEPTION_IN_REPLY: int
                            public static readonly BAD_COMPLETION_STATUS_IN_LOCATE_REPLY: int
                            public static readonly BAD_COMPLETION_STATUS_IN_REPLY: int
                            public static readonly BADKIND_CANNOT_OCCUR: int
                            public static readonly ERROR_RESOLVING_ALIAS: int
                            public static readonly TK_LONG_DOUBLE_NOT_SUPPORTED: int
                            public static readonly TYPECODE_NOT_SUPPORTED: int
                            public static readonly BOUNDS_CANNOT_OCCUR: int
                            public static readonly NUM_INVOCATIONS_ALREADY_ZERO: int
                            public static readonly ERROR_INIT_BADSERVERIDHANDLER: int
                            public static readonly NO_TOA: int
                            public static readonly NO_POA: int
                            public static readonly INVOCATION_INFO_STACK_EMPTY: int
                            public static readonly BAD_CODE_SET_STRING: int
                            public static readonly UNKNOWN_NATIVE_CODESET: int
                            public static readonly UNKNOWN_CONVERSION_CODE_SET: int
                            public static readonly INVALID_CODE_SET_NUMBER: int
                            public static readonly INVALID_CODE_SET_STRING: int
                            public static readonly INVALID_CTB_CONVERTER_NAME: int
                            public static readonly INVALID_BTC_CONVERTER_NAME: int
                            public static readonly COULD_NOT_DUPLICATE_CDR_INPUT_STREAM: int
                            public static readonly BOOTSTRAP_APPLICATION_EXCEPTION: int
                            public static readonly DUPLICATE_INDIRECTION_OFFSET: int
                            public static readonly BAD_MESSAGE_TYPE_FOR_CANCEL: int
                            public static readonly DUPLICATE_EXCEPTION_DETAIL_MESSAGE: int
                            public static readonly BAD_EXCEPTION_DETAIL_MESSAGE_SERVICE_CONTEXT_TYPE: int
                            public static readonly UNEXPECTED_DIRECT_BYTE_BUFFER_WITH_NON_CHANNEL_SOCKET: int
                            public static readonly UNEXPECTED_NON_DIRECT_BYTE_BUFFER_WITH_CHANNEL_SOCKET: int
                            public static readonly INVALID_CONTACT_INFO_LIST_ITERATOR_FAILURE_EXCEPTION: int
                            public static readonly REMARSHAL_WITH_NOWHERE_TO_GO: int
                            public static readonly EXCEPTION_WHEN_SENDING_CLOSE_CONNECTION: int
                            public static readonly INVOCATION_ERROR_IN_REFLECTIVE_TIE: int
                            public static readonly BAD_HELPER_WRITE_METHOD: int
                            public static readonly BAD_HELPER_READ_METHOD: int
                            public static readonly BAD_HELPER_ID_METHOD: int
                            public static readonly WRITE_UNDECLARED_EXCEPTION: int
                            public static readonly READ_UNDECLARED_EXCEPTION: int
                            public static readonly UNABLE_TO_SET_SOCKET_FACTORY_ORB: int
                            public static readonly UNEXPECTED_EXCEPTION: int
                            public static readonly NO_INVOCATION_HANDLER: int
                            public static readonly INVALID_BUFF_MGR_STRATEGY: int
                            public static readonly JAVA_STREAM_INIT_FAILED: int
                            public static readonly DUPLICATE_ORB_VERSION_SERVICE_CONTEXT: int
                            public static readonly DUPLICATE_SENDING_CONTEXT_SERVICE_CONTEXT: int
                            public static readonly WORK_QUEUE_THREAD_INTERRUPTED: int
                            public static readonly WORKER_THREAD_CREATED: int
                            public static readonly WORKER_THREAD_THROWABLE_FROM_REQUEST_WORK: int
                            public static readonly WORKER_THREAD_NOT_NEEDED: int
                            public static readonly WORKER_THREAD_DO_WORK_THROWABLE: int
                            public static readonly WORKER_THREAD_CAUGHT_UNEXPECTED_THROWABLE: int
                            public static readonly WORKER_THREAD_CREATION_FAILURE: int
                            public static readonly WORKER_THREAD_SET_NAME_FAILURE: int
                            public static readonly WORK_QUEUE_REQUEST_WORK_NO_WORK_FOUND: int
                            public static readonly THREAD_POOL_CLOSE_ERROR: int
                            public static readonly THREAD_GROUP_IS_DESTROYED: int
                            public static readonly THREAD_GROUP_HAS_ACTIVE_THREADS_IN_CLOSE: int
                            public static readonly THREAD_GROUP_HAS_SUB_GROUPS_IN_CLOSE: int
                            public static readonly THREAD_GROUP_DESTROY_FAILED: int
                            public static readonly INTERRUPTED_JOIN_CALL_WHILE_CLOSING_THREAD_POOL: int
                            public static readonly CHUNK_OVERFLOW: int
                            public static readonly UNEXPECTED_EOF: int
                            public static readonly READ_OBJECT_EXCEPTION: int
                            public static readonly CHARACTER_OUTOFRANGE: int
                            public static readonly DSI_RESULT_EXCEPTION: int
                            public static readonly IIOPINPUTSTREAM_GROW: int
                            public static readonly END_OF_STREAM: int
                            public static readonly INVALID_OBJECT_KEY: int
                            public static readonly MALFORMED_URL: int
                            public static readonly VALUEHANDLER_READ_ERROR: int
                            public static readonly VALUEHANDLER_READ_EXCEPTION: int
                            public static readonly BAD_KIND: int
                            public static readonly CNFE_READ_CLASS: int
                            public static readonly BAD_REP_ID_INDIRECTION: int
                            public static readonly BAD_CODEBASE_INDIRECTION: int
                            public static readonly UNKNOWN_CODESET: int
                            public static readonly WCHAR_DATA_IN_GIOP_1_0: int
                            public static readonly NEGATIVE_STRING_LENGTH: int
                            public static readonly EXPECTED_TYPE_NULL_AND_NO_REP_ID: int
                            public static readonly READ_VALUE_AND_NO_REP_ID: int
                            public static readonly UNEXPECTED_ENCLOSING_VALUETYPE: int
                            public static readonly POSITIVE_END_TAG: int
                            public static readonly NULL_OUT_CALL: int
                            public static readonly WRITE_LOCAL_OBJECT: int
                            public static readonly BAD_INSERTOBJ_PARAM: int
                            public static readonly CUSTOM_WRAPPER_WITH_CODEBASE: int
                            public static readonly CUSTOM_WRAPPER_INDIRECTION: int
                            public static readonly CUSTOM_WRAPPER_NOT_SINGLE_REPID: int
                            public static readonly BAD_VALUE_TAG: int
                            public static readonly BAD_TYPECODE_FOR_CUSTOM_VALUE: int
                            public static readonly ERROR_INVOKING_HELPER_WRITE: int
                            public static readonly BAD_DIGIT_IN_FIXED: int
                            public static readonly REF_TYPE_INDIR_TYPE: int
                            public static readonly BAD_RESERVED_LENGTH: int
                            public static readonly NULL_NOT_ALLOWED: int
                            public static readonly UNION_DISCRIMINATOR_ERROR: int
                            public static readonly CANNOT_MARSHAL_NATIVE: int
                            public static readonly CANNOT_MARSHAL_BAD_TCKIND: int
                            public static readonly INVALID_INDIRECTION: int
                            public static readonly INDIRECTION_NOT_FOUND: int
                            public static readonly RECURSIVE_TYPECODE_ERROR: int
                            public static readonly INVALID_SIMPLE_TYPECODE: int
                            public static readonly INVALID_COMPLEX_TYPECODE: int
                            public static readonly INVALID_TYPECODE_KIND_MARSHAL: int
                            public static readonly UNEXPECTED_UNION_DEFAULT: int
                            public static readonly ILLEGAL_UNION_DISCRIMINATOR_TYPE: int
                            public static readonly COULD_NOT_SKIP_BYTES: int
                            public static readonly BAD_CHUNK_LENGTH: int
                            public static readonly UNABLE_TO_LOCATE_REP_ID_ARRAY: int
                            public static readonly BAD_FIXED: int
                            public static readonly READ_OBJECT_LOAD_CLASS_FAILURE: int
                            public static readonly COULD_NOT_INSTANTIATE_HELPER: int
                            public static readonly BAD_TOA_OAID: int
                            public static readonly COULD_NOT_INVOKE_HELPER_READ_METHOD: int
                            public static readonly COULD_NOT_FIND_CLASS: int
                            public static readonly BAD_ARGUMENTS_NVLIST: int
                            public static readonly STUB_CREATE_ERROR: int
                            public static readonly JAVA_SERIALIZATION_EXCEPTION: int
                            public static readonly GENERIC_NO_IMPL: int
                            public static readonly CONTEXT_NOT_IMPLEMENTED: int
                            public static readonly GETINTERFACE_NOT_IMPLEMENTED: int
                            public static readonly SEND_DEFERRED_NOTIMPLEMENTED: int
                            public static readonly LONG_DOUBLE_NOT_IMPLEMENTED: int
                            public static readonly NO_SERVER_SC_IN_DISPATCH: int
                            public static readonly ORB_CONNECT_ERROR: int
                            public static readonly ADAPTER_INACTIVE_IN_ACTIVATION: int
                            public static readonly LOCATE_UNKNOWN_OBJECT: int
                            public static readonly BAD_SERVER_ID: int
                            public static readonly BAD_SKELETON: int
                            public static readonly SERVANT_NOT_FOUND: int
                            public static readonly NO_OBJECT_ADAPTER_FACTORY: int
                            public static readonly BAD_ADAPTER_ID: int
                            public static readonly DYN_ANY_DESTROYED: int
                            public static readonly REQUEST_CANCELED: int
                            public static readonly UNKNOWN_CORBA_EXC: int
                            public static readonly RUNTIMEEXCEPTION: int
                            public static readonly UNKNOWN_SERVER_ERROR: int
                            public static readonly UNKNOWN_DSI_SYSEX: int
                            public static readonly UNKNOWN_SYSEX: int
                            public static readonly WRONG_INTERFACE_DEF: int
                            public static readonly NO_INTERFACE_DEF_STUB: int
                            public static readonly UNKNOWN_EXCEPTION_IN_DISPATCH: int
                            public constructor(arg0: java.util.logging.Logger)
                            public static get(arg0: com.sun.corba.se.spi.orb.ORB, arg1: java.lang.String | string): com.sun.corba.se.impl.logging.ORBUtilSystemException
                            public static get(arg0: java.lang.String | string): com.sun.corba.se.impl.logging.ORBUtilSystemException
                            public adapterIdNotAvailable(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public adapterIdNotAvailable(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public adapterIdNotAvailable(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public adapterIdNotAvailable(): org.omg.CORBA.BAD_OPERATION
                            public serverIdNotAvailable(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public serverIdNotAvailable(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public serverIdNotAvailable(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public serverIdNotAvailable(): org.omg.CORBA.BAD_OPERATION
                            public orbIdNotAvailable(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public orbIdNotAvailable(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public orbIdNotAvailable(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public orbIdNotAvailable(): org.omg.CORBA.BAD_OPERATION
                            public objectAdapterIdNotAvailable(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public objectAdapterIdNotAvailable(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public objectAdapterIdNotAvailable(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public objectAdapterIdNotAvailable(): org.omg.CORBA.BAD_OPERATION
                            public connectingServant(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public connectingServant(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public connectingServant(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public connectingServant(): org.omg.CORBA.BAD_OPERATION
                            public extractWrongType(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public extractWrongType(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public extractWrongType(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public extractWrongType(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public extractWrongTypeList(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public extractWrongTypeList(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public extractWrongTypeList(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public extractWrongTypeList(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public badStringBounds(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public badStringBounds(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public badStringBounds(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public badStringBounds(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public insertObjectIncompatible(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public insertObjectIncompatible(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public insertObjectIncompatible(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public insertObjectIncompatible(): org.omg.CORBA.BAD_OPERATION
                            public insertObjectFailed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public insertObjectFailed(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public insertObjectFailed(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public insertObjectFailed(): org.omg.CORBA.BAD_OPERATION
                            public extractObjectIncompatible(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public extractObjectIncompatible(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public extractObjectIncompatible(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public extractObjectIncompatible(): org.omg.CORBA.BAD_OPERATION
                            public fixedNotMatch(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public fixedNotMatch(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public fixedNotMatch(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public fixedNotMatch(): org.omg.CORBA.BAD_OPERATION
                            public fixedBadTypecode(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public fixedBadTypecode(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public fixedBadTypecode(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public fixedBadTypecode(): org.omg.CORBA.BAD_OPERATION
                            public setExceptionCalledNullArgs(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public setExceptionCalledNullArgs(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public setExceptionCalledNullArgs(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public setExceptionCalledNullArgs(): org.omg.CORBA.BAD_OPERATION
                            public setExceptionCalledBadType(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public setExceptionCalledBadType(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public setExceptionCalledBadType(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public setExceptionCalledBadType(): org.omg.CORBA.BAD_OPERATION
                            public contextCalledOutOfOrder(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public contextCalledOutOfOrder(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public contextCalledOutOfOrder(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public contextCalledOutOfOrder(): org.omg.CORBA.BAD_OPERATION
                            public badOrbConfigurator(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public badOrbConfigurator(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public badOrbConfigurator(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public badOrbConfigurator(arg0: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public orbConfiguratorError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public orbConfiguratorError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public orbConfiguratorError(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public orbConfiguratorError(): org.omg.CORBA.BAD_OPERATION
                            public orbDestroyed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public orbDestroyed(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public orbDestroyed(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public orbDestroyed(): org.omg.CORBA.BAD_OPERATION
                            public negativeBounds(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public negativeBounds(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public negativeBounds(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public negativeBounds(): org.omg.CORBA.BAD_OPERATION
                            public extractNotInitialized(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public extractNotInitialized(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public extractNotInitialized(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public extractNotInitialized(): org.omg.CORBA.BAD_OPERATION
                            public extractObjectFailed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public extractObjectFailed(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public extractObjectFailed(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public extractObjectFailed(): org.omg.CORBA.BAD_OPERATION
                            public methodNotFoundInTie(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public methodNotFoundInTie(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public methodNotFoundInTie(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public methodNotFoundInTie(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public classNotFound1(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public classNotFound1(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public classNotFound1(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public classNotFound1(arg0: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public classNotFound2(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public classNotFound2(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public classNotFound2(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public classNotFound2(arg0: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public classNotFound3(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public classNotFound3(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public classNotFound3(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public classNotFound3(arg0: java.lang.Object): org.omg.CORBA.BAD_OPERATION
                            public getDelegateServantNotActive(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public getDelegateServantNotActive(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public getDelegateServantNotActive(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public getDelegateServantNotActive(): org.omg.CORBA.BAD_OPERATION
                            public getDelegateWrongPolicy(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public getDelegateWrongPolicy(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public getDelegateWrongPolicy(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public getDelegateWrongPolicy(): org.omg.CORBA.BAD_OPERATION
                            public setDelegateRequiresStub(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public setDelegateRequiresStub(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public setDelegateRequiresStub(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public setDelegateRequiresStub(): org.omg.CORBA.BAD_OPERATION
                            public getDelegateRequiresStub(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public getDelegateRequiresStub(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public getDelegateRequiresStub(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public getDelegateRequiresStub(): org.omg.CORBA.BAD_OPERATION
                            public getTypeIdsRequiresStub(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public getTypeIdsRequiresStub(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public getTypeIdsRequiresStub(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public getTypeIdsRequiresStub(): org.omg.CORBA.BAD_OPERATION
                            public getOrbRequiresStub(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public getOrbRequiresStub(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public getOrbRequiresStub(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public getOrbRequiresStub(): org.omg.CORBA.BAD_OPERATION
                            public connectRequiresStub(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public connectRequiresStub(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public connectRequiresStub(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public connectRequiresStub(): org.omg.CORBA.BAD_OPERATION
                            public isLocalRequiresStub(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public isLocalRequiresStub(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public isLocalRequiresStub(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public isLocalRequiresStub(): org.omg.CORBA.BAD_OPERATION
                            public requestRequiresStub(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public requestRequiresStub(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public requestRequiresStub(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public requestRequiresStub(): org.omg.CORBA.BAD_OPERATION
                            public badActivateTieCall(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public badActivateTieCall(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public badActivateTieCall(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public badActivateTieCall(): org.omg.CORBA.BAD_OPERATION
                            public ioExceptionOnClose(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public ioExceptionOnClose(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
                            public ioExceptionOnClose(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
                            public ioExceptionOnClose(): org.omg.CORBA.BAD_OPERATION
                            public nullParam(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public nullParam(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public nullParam(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public nullParam(): org.omg.CORBA.BAD_PARAM
                            public unableFindValueFactory(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public unableFindValueFactory(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public unableFindValueFactory(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public unableFindValueFactory(): org.omg.CORBA.BAD_PARAM
                            public abstractFromNonAbstract(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public abstractFromNonAbstract(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public abstractFromNonAbstract(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public abstractFromNonAbstract(): org.omg.CORBA.BAD_PARAM
                            public invalidTaggedProfile(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public invalidTaggedProfile(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public invalidTaggedProfile(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public invalidTaggedProfile(): org.omg.CORBA.BAD_PARAM
                            public objrefFromForeignOrb(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public objrefFromForeignOrb(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public objrefFromForeignOrb(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public objrefFromForeignOrb(): org.omg.CORBA.BAD_PARAM
                            public localObjectNotAllowed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public localObjectNotAllowed(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public localObjectNotAllowed(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public localObjectNotAllowed(): org.omg.CORBA.BAD_PARAM
                            public nullObjectReference(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public nullObjectReference(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public nullObjectReference(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public nullObjectReference(): org.omg.CORBA.BAD_PARAM
                            public couldNotLoadClass(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public couldNotLoadClass(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public couldNotLoadClass(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public couldNotLoadClass(arg0: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public badUrl(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public badUrl(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public badUrl(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public badUrl(arg0: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public fieldNotFound(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public fieldNotFound(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public fieldNotFound(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public fieldNotFound(arg0: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public errorSettingField(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public errorSettingField(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public errorSettingField(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public errorSettingField(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public boundsErrorInDiiRequest(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public boundsErrorInDiiRequest(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public boundsErrorInDiiRequest(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public boundsErrorInDiiRequest(): org.omg.CORBA.BAD_PARAM
                            public persistentServerInitError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public persistentServerInitError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public persistentServerInitError(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public persistentServerInitError(): org.omg.CORBA.BAD_PARAM
                            public couldNotCreateArray(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object, arg4: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public couldNotCreateArray(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public couldNotCreateArray(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public couldNotCreateArray(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public couldNotSetArray(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object, arg4: java.lang.Object, arg5: java.lang.Object, arg6: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public couldNotSetArray(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object, arg4: java.lang.Object, arg5: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public couldNotSetArray(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object, arg4: java.lang.Object, arg5: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public couldNotSetArray(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object, arg4: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public illegalBootstrapOperation(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public illegalBootstrapOperation(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public illegalBootstrapOperation(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public illegalBootstrapOperation(arg0: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public bootstrapRuntimeException(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public bootstrapRuntimeException(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public bootstrapRuntimeException(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public bootstrapRuntimeException(): org.omg.CORBA.BAD_PARAM
                            public bootstrapException(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public bootstrapException(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public bootstrapException(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public bootstrapException(): org.omg.CORBA.BAD_PARAM
                            public stringExpected(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public stringExpected(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public stringExpected(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public stringExpected(): org.omg.CORBA.BAD_PARAM
                            public invalidTypecodeKind(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public invalidTypecodeKind(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public invalidTypecodeKind(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public invalidTypecodeKind(arg0: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public socketFactoryAndContactInfoListAtSameTime(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public socketFactoryAndContactInfoListAtSameTime(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public socketFactoryAndContactInfoListAtSameTime(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public socketFactoryAndContactInfoListAtSameTime(): org.omg.CORBA.BAD_PARAM
                            public acceptorsAndLegacySocketFactoryAtSameTime(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public acceptorsAndLegacySocketFactoryAtSameTime(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public acceptorsAndLegacySocketFactoryAtSameTime(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public acceptorsAndLegacySocketFactoryAtSameTime(): org.omg.CORBA.BAD_PARAM
                            public badOrbForServant(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public badOrbForServant(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
                            public badOrbForServant(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
                            public badOrbForServant(): org.omg.CORBA.BAD_PARAM
                            public invalidRequestPartitioningPolicyValue(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object, arg4: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public invalidRequestPartitioningPolicyValue(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public invalidRequestPartitioningPolicyValue(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public invalidRequestPartitioningPolicyValue(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public invalidRequestPartitioningComponentValue(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object, arg4: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public invalidRequestPartitioningComponentValue(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public invalidRequestPartitioningComponentValue(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public invalidRequestPartitioningComponentValue(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public invalidRequestPartitioningId(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object, arg4: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public invalidRequestPartitioningId(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public invalidRequestPartitioningId(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public invalidRequestPartitioningId(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public errorInSettingDynamicStubFactoryFactory(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public errorInSettingDynamicStubFactoryFactory(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public errorInSettingDynamicStubFactoryFactory(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public errorInSettingDynamicStubFactoryFactory(arg0: java.lang.Object): org.omg.CORBA.BAD_PARAM
                            public dsimethodNotcalled(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public dsimethodNotcalled(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public dsimethodNotcalled(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public dsimethodNotcalled(): org.omg.CORBA.BAD_INV_ORDER
                            public argumentsCalledMultiple(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public argumentsCalledMultiple(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public argumentsCalledMultiple(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public argumentsCalledMultiple(): org.omg.CORBA.BAD_INV_ORDER
                            public argumentsCalledAfterException(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public argumentsCalledAfterException(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public argumentsCalledAfterException(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public argumentsCalledAfterException(): org.omg.CORBA.BAD_INV_ORDER
                            public argumentsCalledNullArgs(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public argumentsCalledNullArgs(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public argumentsCalledNullArgs(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public argumentsCalledNullArgs(): org.omg.CORBA.BAD_INV_ORDER
                            public argumentsNotCalled(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public argumentsNotCalled(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public argumentsNotCalled(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public argumentsNotCalled(): org.omg.CORBA.BAD_INV_ORDER
                            public setResultCalledMultiple(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public setResultCalledMultiple(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public setResultCalledMultiple(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public setResultCalledMultiple(): org.omg.CORBA.BAD_INV_ORDER
                            public setResultAfterException(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public setResultAfterException(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public setResultAfterException(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public setResultAfterException(): org.omg.CORBA.BAD_INV_ORDER
                            public setResultCalledNullArgs(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public setResultCalledNullArgs(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_INV_ORDER
                            public setResultCalledNullArgs(arg0: java.lang.Throwable): org.omg.CORBA.BAD_INV_ORDER
                            public setResultCalledNullArgs(): org.omg.CORBA.BAD_INV_ORDER
                            public badRemoteTypecode(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_TYPECODE
                            public badRemoteTypecode(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_TYPECODE
                            public badRemoteTypecode(arg0: java.lang.Throwable): org.omg.CORBA.BAD_TYPECODE
                            public badRemoteTypecode(): org.omg.CORBA.BAD_TYPECODE
                            public unresolvedRecursiveTypecode(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_TYPECODE
                            public unresolvedRecursiveTypecode(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_TYPECODE
                            public unresolvedRecursiveTypecode(arg0: java.lang.Throwable): org.omg.CORBA.BAD_TYPECODE
                            public unresolvedRecursiveTypecode(): org.omg.CORBA.BAD_TYPECODE
                            public connectFailure(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object, arg4: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public connectFailure(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public connectFailure(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public connectFailure(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public connectionCloseRebind(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.COMM_FAILURE
                            public connectionCloseRebind(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.COMM_FAILURE
                            public connectionCloseRebind(arg0: java.lang.Throwable): org.omg.CORBA.COMM_FAILURE
                            public connectionCloseRebind(): org.omg.CORBA.COMM_FAILURE
                            public writeErrorSend(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.COMM_FAILURE
                            public writeErrorSend(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.COMM_FAILURE
                            public writeErrorSend(arg0: java.lang.Throwable): org.omg.CORBA.COMM_FAILURE
                            public writeErrorSend(): org.omg.CORBA.COMM_FAILURE
                            public getPropertiesError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.COMM_FAILURE
                            public getPropertiesError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.COMM_FAILURE
                            public getPropertiesError(arg0: java.lang.Throwable): org.omg.CORBA.COMM_FAILURE
                            public getPropertiesError(): org.omg.CORBA.COMM_FAILURE
                            public bootstrapServerNotAvail(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.COMM_FAILURE
                            public bootstrapServerNotAvail(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.COMM_FAILURE
                            public bootstrapServerNotAvail(arg0: java.lang.Throwable): org.omg.CORBA.COMM_FAILURE
                            public bootstrapServerNotAvail(): org.omg.CORBA.COMM_FAILURE
                            public invokeError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.COMM_FAILURE
                            public invokeError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.COMM_FAILURE
                            public invokeError(arg0: java.lang.Throwable): org.omg.CORBA.COMM_FAILURE
                            public invokeError(): org.omg.CORBA.COMM_FAILURE
                            public defaultCreateServerSocketGivenNonIiopClearText(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public defaultCreateServerSocketGivenNonIiopClearText(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public defaultCreateServerSocketGivenNonIiopClearText(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public defaultCreateServerSocketGivenNonIiopClearText(arg0: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public connectionAbort(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.COMM_FAILURE
                            public connectionAbort(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.COMM_FAILURE
                            public connectionAbort(arg0: java.lang.Throwable): org.omg.CORBA.COMM_FAILURE
                            public connectionAbort(): org.omg.CORBA.COMM_FAILURE
                            public connectionRebind(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.COMM_FAILURE
                            public connectionRebind(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.COMM_FAILURE
                            public connectionRebind(arg0: java.lang.Throwable): org.omg.CORBA.COMM_FAILURE
                            public connectionRebind(): org.omg.CORBA.COMM_FAILURE
                            public recvMsgError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.COMM_FAILURE
                            public recvMsgError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.COMM_FAILURE
                            public recvMsgError(arg0: java.lang.Throwable): org.omg.CORBA.COMM_FAILURE
                            public recvMsgError(): org.omg.CORBA.COMM_FAILURE
                            public ioexceptionWhenReadingConnection(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.COMM_FAILURE
                            public ioexceptionWhenReadingConnection(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.COMM_FAILURE
                            public ioexceptionWhenReadingConnection(arg0: java.lang.Throwable): org.omg.CORBA.COMM_FAILURE
                            public ioexceptionWhenReadingConnection(): org.omg.CORBA.COMM_FAILURE
                            public selectionKeyInvalid(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public selectionKeyInvalid(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public selectionKeyInvalid(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public selectionKeyInvalid(arg0: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public exceptionInAccept(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public exceptionInAccept(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public exceptionInAccept(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public exceptionInAccept(arg0: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public securityExceptionInAccept(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public securityExceptionInAccept(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public securityExceptionInAccept(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public securityExceptionInAccept(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public transportReadTimeoutExceeded(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object, arg4: java.lang.Object, arg5: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public transportReadTimeoutExceeded(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object, arg4: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public transportReadTimeoutExceeded(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object, arg4: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public transportReadTimeoutExceeded(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public createListenerFailed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public createListenerFailed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public createListenerFailed(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public createListenerFailed(arg0: java.lang.Object): org.omg.CORBA.COMM_FAILURE
                            public bufferReadManagerTimeout(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.COMM_FAILURE
                            public bufferReadManagerTimeout(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.COMM_FAILURE
                            public bufferReadManagerTimeout(arg0: java.lang.Throwable): org.omg.CORBA.COMM_FAILURE
                            public bufferReadManagerTimeout(): org.omg.CORBA.COMM_FAILURE
                            public badStringifiedIorLen(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
                            public badStringifiedIorLen(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.DATA_CONVERSION
                            public badStringifiedIorLen(arg0: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
                            public badStringifiedIorLen(): org.omg.CORBA.DATA_CONVERSION
                            public badStringifiedIor(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
                            public badStringifiedIor(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.DATA_CONVERSION
                            public badStringifiedIor(arg0: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
                            public badStringifiedIor(): org.omg.CORBA.DATA_CONVERSION
                            public badModifier(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
                            public badModifier(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.DATA_CONVERSION
                            public badModifier(arg0: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
                            public badModifier(): org.omg.CORBA.DATA_CONVERSION
                            public codesetIncompatible(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
                            public codesetIncompatible(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.DATA_CONVERSION
                            public codesetIncompatible(arg0: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
                            public codesetIncompatible(): org.omg.CORBA.DATA_CONVERSION
                            public badHexDigit(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
                            public badHexDigit(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.DATA_CONVERSION
                            public badHexDigit(arg0: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
                            public badHexDigit(): org.omg.CORBA.DATA_CONVERSION
                            public badUnicodePair(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
                            public badUnicodePair(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.DATA_CONVERSION
                            public badUnicodePair(arg0: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
                            public badUnicodePair(): org.omg.CORBA.DATA_CONVERSION
                            public btcResultMoreThanOneChar(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
                            public btcResultMoreThanOneChar(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.DATA_CONVERSION
                            public btcResultMoreThanOneChar(arg0: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
                            public btcResultMoreThanOneChar(): org.omg.CORBA.DATA_CONVERSION
                            public badCodesetsFromClient(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
                            public badCodesetsFromClient(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.DATA_CONVERSION
                            public badCodesetsFromClient(arg0: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
                            public badCodesetsFromClient(): org.omg.CORBA.DATA_CONVERSION
                            public invalidSingleCharCtb(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
                            public invalidSingleCharCtb(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.DATA_CONVERSION
                            public invalidSingleCharCtb(arg0: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
                            public invalidSingleCharCtb(): org.omg.CORBA.DATA_CONVERSION
                            public badGiop11Ctb(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
                            public badGiop11Ctb(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.DATA_CONVERSION
                            public badGiop11Ctb(arg0: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
                            public badGiop11Ctb(): org.omg.CORBA.DATA_CONVERSION
                            public badSequenceBounds(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public badSequenceBounds(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public badSequenceBounds(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public badSequenceBounds(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public illegalSocketFactoryType(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public illegalSocketFactoryType(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public illegalSocketFactoryType(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public illegalSocketFactoryType(arg0: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public badCustomSocketFactory(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public badCustomSocketFactory(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public badCustomSocketFactory(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public badCustomSocketFactory(arg0: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public fragmentSizeMinimum(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public fragmentSizeMinimum(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public fragmentSizeMinimum(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public fragmentSizeMinimum(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public fragmentSizeDiv(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public fragmentSizeDiv(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public fragmentSizeDiv(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public fragmentSizeDiv(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public orbInitializerFailure(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public orbInitializerFailure(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public orbInitializerFailure(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public orbInitializerFailure(arg0: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public orbInitializerType(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public orbInitializerType(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public orbInitializerType(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public orbInitializerType(arg0: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public orbInitialreferenceSyntax(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
                            public orbInitialreferenceSyntax(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.DATA_CONVERSION
                            public orbInitialreferenceSyntax(arg0: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
                            public orbInitialreferenceSyntax(): org.omg.CORBA.DATA_CONVERSION
                            public acceptorInstantiationFailure(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public acceptorInstantiationFailure(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public acceptorInstantiationFailure(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public acceptorInstantiationFailure(arg0: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public acceptorInstantiationTypeFailure(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public acceptorInstantiationTypeFailure(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public acceptorInstantiationTypeFailure(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public acceptorInstantiationTypeFailure(arg0: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public illegalContactInfoListFactoryType(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public illegalContactInfoListFactoryType(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public illegalContactInfoListFactoryType(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public illegalContactInfoListFactoryType(arg0: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public badContactInfoListFactory(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public badContactInfoListFactory(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public badContactInfoListFactory(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public badContactInfoListFactory(arg0: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public illegalIorToSocketInfoType(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public illegalIorToSocketInfoType(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public illegalIorToSocketInfoType(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public illegalIorToSocketInfoType(arg0: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public badCustomIorToSocketInfo(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public badCustomIorToSocketInfo(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public badCustomIorToSocketInfo(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public badCustomIorToSocketInfo(arg0: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public illegalIiopPrimaryToContactInfoType(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public illegalIiopPrimaryToContactInfoType(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public illegalIiopPrimaryToContactInfoType(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public illegalIiopPrimaryToContactInfoType(arg0: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public badCustomIiopPrimaryToContactInfo(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public badCustomIiopPrimaryToContactInfo(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public badCustomIiopPrimaryToContactInfo(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public badCustomIiopPrimaryToContactInfo(arg0: java.lang.Object): org.omg.CORBA.DATA_CONVERSION
                            public badCorbalocString(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INV_OBJREF
                            public badCorbalocString(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INV_OBJREF
                            public badCorbalocString(arg0: java.lang.Throwable): org.omg.CORBA.INV_OBJREF
                            public badCorbalocString(): org.omg.CORBA.INV_OBJREF
                            public noProfilePresent(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INV_OBJREF
                            public noProfilePresent(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INV_OBJREF
                            public noProfilePresent(arg0: java.lang.Throwable): org.omg.CORBA.INV_OBJREF
                            public noProfilePresent(): org.omg.CORBA.INV_OBJREF
                            public cannotCreateOrbidDb(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public cannotCreateOrbidDb(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INITIALIZE
                            public cannotCreateOrbidDb(arg0: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public cannotCreateOrbidDb(): org.omg.CORBA.INITIALIZE
                            public cannotReadOrbidDb(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public cannotReadOrbidDb(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INITIALIZE
                            public cannotReadOrbidDb(arg0: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public cannotReadOrbidDb(): org.omg.CORBA.INITIALIZE
                            public cannotWriteOrbidDb(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public cannotWriteOrbidDb(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INITIALIZE
                            public cannotWriteOrbidDb(arg0: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public cannotWriteOrbidDb(): org.omg.CORBA.INITIALIZE
                            public getServerPortCalledBeforeEndpointsInitialized(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public getServerPortCalledBeforeEndpointsInitialized(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INITIALIZE
                            public getServerPortCalledBeforeEndpointsInitialized(arg0: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public getServerPortCalledBeforeEndpointsInitialized(): org.omg.CORBA.INITIALIZE
                            public persistentServerportNotSet(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public persistentServerportNotSet(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INITIALIZE
                            public persistentServerportNotSet(arg0: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public persistentServerportNotSet(): org.omg.CORBA.INITIALIZE
                            public persistentServeridNotSet(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public persistentServeridNotSet(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INITIALIZE
                            public persistentServeridNotSet(arg0: java.lang.Throwable): org.omg.CORBA.INITIALIZE
                            public persistentServeridNotSet(): org.omg.CORBA.INITIALIZE
                            public nonExistentOrbid(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public nonExistentOrbid(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public nonExistentOrbid(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public nonExistentOrbid(): org.omg.CORBA.INTERNAL
                            public noServerSubcontract(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public noServerSubcontract(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public noServerSubcontract(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public noServerSubcontract(): org.omg.CORBA.INTERNAL
                            public serverScTempSize(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public serverScTempSize(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public serverScTempSize(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public serverScTempSize(): org.omg.CORBA.INTERNAL
                            public noClientScClass(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public noClientScClass(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public noClientScClass(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public noClientScClass(): org.omg.CORBA.INTERNAL
                            public serverScNoIiopProfile(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public serverScNoIiopProfile(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public serverScNoIiopProfile(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public serverScNoIiopProfile(): org.omg.CORBA.INTERNAL
                            public getSystemExReturnedNull(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public getSystemExReturnedNull(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public getSystemExReturnedNull(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public getSystemExReturnedNull(): org.omg.CORBA.INTERNAL
                            public peekstringFailed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public peekstringFailed(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public peekstringFailed(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public peekstringFailed(): org.omg.CORBA.INTERNAL
                            public getLocalHostFailed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public getLocalHostFailed(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public getLocalHostFailed(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public getLocalHostFailed(): org.omg.CORBA.INTERNAL
                            public badLocateRequestStatus(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public badLocateRequestStatus(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public badLocateRequestStatus(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public badLocateRequestStatus(): org.omg.CORBA.INTERNAL
                            public stringifyWriteError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public stringifyWriteError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public stringifyWriteError(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public stringifyWriteError(): org.omg.CORBA.INTERNAL
                            public badGiopRequestType(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public badGiopRequestType(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public badGiopRequestType(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public badGiopRequestType(): org.omg.CORBA.INTERNAL
                            public errorUnmarshalingUserexc(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public errorUnmarshalingUserexc(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public errorUnmarshalingUserexc(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public errorUnmarshalingUserexc(): org.omg.CORBA.INTERNAL
                            public requestdispatcherregistryError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public requestdispatcherregistryError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public requestdispatcherregistryError(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public requestdispatcherregistryError(): org.omg.CORBA.INTERNAL
                            public locationforwardError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public locationforwardError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public locationforwardError(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public locationforwardError(): org.omg.CORBA.INTERNAL
                            public wrongClientsc(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public wrongClientsc(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public wrongClientsc(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public wrongClientsc(): org.omg.CORBA.INTERNAL
                            public badServantReadObject(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public badServantReadObject(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public badServantReadObject(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public badServantReadObject(): org.omg.CORBA.INTERNAL
                            public multIiopProfNotSupported(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public multIiopProfNotSupported(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public multIiopProfNotSupported(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public multIiopProfNotSupported(): org.omg.CORBA.INTERNAL
                            public giopMagicError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public giopMagicError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public giopMagicError(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public giopMagicError(): org.omg.CORBA.INTERNAL
                            public giopVersionError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public giopVersionError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public giopVersionError(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public giopVersionError(): org.omg.CORBA.INTERNAL
                            public illegalReplyStatus(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public illegalReplyStatus(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public illegalReplyStatus(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public illegalReplyStatus(): org.omg.CORBA.INTERNAL
                            public illegalGiopMsgType(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public illegalGiopMsgType(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public illegalGiopMsgType(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public illegalGiopMsgType(): org.omg.CORBA.INTERNAL
                            public fragmentationDisallowed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public fragmentationDisallowed(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public fragmentationDisallowed(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public fragmentationDisallowed(): org.omg.CORBA.INTERNAL
                            public badReplystatus(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public badReplystatus(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public badReplystatus(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public badReplystatus(): org.omg.CORBA.INTERNAL
                            public ctbConverterFailure(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public ctbConverterFailure(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public ctbConverterFailure(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public ctbConverterFailure(): org.omg.CORBA.INTERNAL
                            public btcConverterFailure(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public btcConverterFailure(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public btcConverterFailure(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public btcConverterFailure(): org.omg.CORBA.INTERNAL
                            public wcharArrayUnsupportedEncoding(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public wcharArrayUnsupportedEncoding(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public wcharArrayUnsupportedEncoding(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public wcharArrayUnsupportedEncoding(): org.omg.CORBA.INTERNAL
                            public illegalTargetAddressDisposition(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public illegalTargetAddressDisposition(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public illegalTargetAddressDisposition(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public illegalTargetAddressDisposition(): org.omg.CORBA.INTERNAL
                            public nullReplyInGetAddrDisposition(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public nullReplyInGetAddrDisposition(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public nullReplyInGetAddrDisposition(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public nullReplyInGetAddrDisposition(): org.omg.CORBA.INTERNAL
                            public orbTargetAddrPreferenceInExtractObjectkeyInvalid(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public orbTargetAddrPreferenceInExtractObjectkeyInvalid(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public orbTargetAddrPreferenceInExtractObjectkeyInvalid(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public orbTargetAddrPreferenceInExtractObjectkeyInvalid(): org.omg.CORBA.INTERNAL
                            public invalidIsstreamedTckind(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public invalidIsstreamedTckind(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public invalidIsstreamedTckind(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public invalidIsstreamedTckind(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
                            public invalidJdk131PatchLevel(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public invalidJdk131PatchLevel(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public invalidJdk131PatchLevel(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public invalidJdk131PatchLevel(): org.omg.CORBA.INTERNAL
                            public svcctxUnmarshalError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public svcctxUnmarshalError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public svcctxUnmarshalError(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public svcctxUnmarshalError(): org.omg.CORBA.INTERNAL
                            public nullIor(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public nullIor(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public nullIor(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public nullIor(): org.omg.CORBA.INTERNAL
                            public unsupportedGiopVersion(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public unsupportedGiopVersion(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public unsupportedGiopVersion(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public unsupportedGiopVersion(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
                            public applicationExceptionInSpecialMethod(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public applicationExceptionInSpecialMethod(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public applicationExceptionInSpecialMethod(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public applicationExceptionInSpecialMethod(): org.omg.CORBA.INTERNAL
                            public statementNotReachable1(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public statementNotReachable1(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public statementNotReachable1(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public statementNotReachable1(): org.omg.CORBA.INTERNAL
                            public statementNotReachable2(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public statementNotReachable2(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public statementNotReachable2(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public statementNotReachable2(): org.omg.CORBA.INTERNAL
                            public statementNotReachable3(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public statementNotReachable3(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public statementNotReachable3(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public statementNotReachable3(): org.omg.CORBA.INTERNAL
                            public statementNotReachable4(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public statementNotReachable4(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public statementNotReachable4(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public statementNotReachable4(): org.omg.CORBA.INTERNAL
                            public statementNotReachable5(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public statementNotReachable5(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public statementNotReachable5(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public statementNotReachable5(): org.omg.CORBA.INTERNAL
                            public statementNotReachable6(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public statementNotReachable6(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public statementNotReachable6(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public statementNotReachable6(): org.omg.CORBA.INTERNAL
                            public unexpectedDiiException(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public unexpectedDiiException(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public unexpectedDiiException(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public unexpectedDiiException(): org.omg.CORBA.INTERNAL
                            public methodShouldNotBeCalled(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public methodShouldNotBeCalled(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public methodShouldNotBeCalled(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public methodShouldNotBeCalled(): org.omg.CORBA.INTERNAL
                            public cancelNotSupported(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public cancelNotSupported(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public cancelNotSupported(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public cancelNotSupported(): org.omg.CORBA.INTERNAL
                            public emptyStackRunServantPostInvoke(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public emptyStackRunServantPostInvoke(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public emptyStackRunServantPostInvoke(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public emptyStackRunServantPostInvoke(): org.omg.CORBA.INTERNAL
                            public problemWithExceptionTypecode(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public problemWithExceptionTypecode(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public problemWithExceptionTypecode(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public problemWithExceptionTypecode(): org.omg.CORBA.INTERNAL
                            public illegalSubcontractId(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public illegalSubcontractId(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public illegalSubcontractId(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public illegalSubcontractId(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
                            public badSystemExceptionInLocateReply(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public badSystemExceptionInLocateReply(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public badSystemExceptionInLocateReply(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public badSystemExceptionInLocateReply(): org.omg.CORBA.INTERNAL
                            public badSystemExceptionInReply(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public badSystemExceptionInReply(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public badSystemExceptionInReply(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public badSystemExceptionInReply(): org.omg.CORBA.INTERNAL
                            public badCompletionStatusInLocateReply(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public badCompletionStatusInLocateReply(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public badCompletionStatusInLocateReply(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public badCompletionStatusInLocateReply(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
                            public badCompletionStatusInReply(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public badCompletionStatusInReply(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public badCompletionStatusInReply(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public badCompletionStatusInReply(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
                            public badkindCannotOccur(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public badkindCannotOccur(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public badkindCannotOccur(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public badkindCannotOccur(): org.omg.CORBA.INTERNAL
                            public errorResolvingAlias(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public errorResolvingAlias(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public errorResolvingAlias(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public errorResolvingAlias(): org.omg.CORBA.INTERNAL
                            public tkLongDoubleNotSupported(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public tkLongDoubleNotSupported(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public tkLongDoubleNotSupported(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public tkLongDoubleNotSupported(): org.omg.CORBA.INTERNAL
                            public typecodeNotSupported(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public typecodeNotSupported(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public typecodeNotSupported(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public typecodeNotSupported(): org.omg.CORBA.INTERNAL
                            public boundsCannotOccur(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public boundsCannotOccur(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public boundsCannotOccur(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public boundsCannotOccur(): org.omg.CORBA.INTERNAL
                            public numInvocationsAlreadyZero(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public numInvocationsAlreadyZero(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public numInvocationsAlreadyZero(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public numInvocationsAlreadyZero(): org.omg.CORBA.INTERNAL
                            public errorInitBadserveridhandler(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public errorInitBadserveridhandler(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public errorInitBadserveridhandler(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public errorInitBadserveridhandler(): org.omg.CORBA.INTERNAL
                            public noToa(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public noToa(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public noToa(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public noToa(): org.omg.CORBA.INTERNAL
                            public noPoa(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public noPoa(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public noPoa(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public noPoa(): org.omg.CORBA.INTERNAL
                            public invocationInfoStackEmpty(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public invocationInfoStackEmpty(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public invocationInfoStackEmpty(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public invocationInfoStackEmpty(): org.omg.CORBA.INTERNAL
                            public badCodeSetString(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public badCodeSetString(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public badCodeSetString(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public badCodeSetString(): org.omg.CORBA.INTERNAL
                            public unknownNativeCodeset(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public unknownNativeCodeset(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public unknownNativeCodeset(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public unknownNativeCodeset(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
                            public unknownConversionCodeSet(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public unknownConversionCodeSet(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public unknownConversionCodeSet(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public unknownConversionCodeSet(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
                            public invalidCodeSetNumber(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public invalidCodeSetNumber(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public invalidCodeSetNumber(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public invalidCodeSetNumber(): org.omg.CORBA.INTERNAL
                            public invalidCodeSetString(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public invalidCodeSetString(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public invalidCodeSetString(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public invalidCodeSetString(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
                            public invalidCtbConverterName(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public invalidCtbConverterName(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public invalidCtbConverterName(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public invalidCtbConverterName(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
                            public invalidBtcConverterName(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public invalidBtcConverterName(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public invalidBtcConverterName(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public invalidBtcConverterName(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
                            public couldNotDuplicateCdrInputStream(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public couldNotDuplicateCdrInputStream(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public couldNotDuplicateCdrInputStream(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public couldNotDuplicateCdrInputStream(): org.omg.CORBA.INTERNAL
                            public bootstrapApplicationException(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public bootstrapApplicationException(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public bootstrapApplicationException(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public bootstrapApplicationException(): org.omg.CORBA.INTERNAL
                            public duplicateIndirectionOffset(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public duplicateIndirectionOffset(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public duplicateIndirectionOffset(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public duplicateIndirectionOffset(): org.omg.CORBA.INTERNAL
                            public badMessageTypeForCancel(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public badMessageTypeForCancel(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public badMessageTypeForCancel(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public badMessageTypeForCancel(): org.omg.CORBA.INTERNAL
                            public duplicateExceptionDetailMessage(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public duplicateExceptionDetailMessage(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public duplicateExceptionDetailMessage(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public duplicateExceptionDetailMessage(): org.omg.CORBA.INTERNAL
                            public badExceptionDetailMessageServiceContextType(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public badExceptionDetailMessageServiceContextType(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public badExceptionDetailMessageServiceContextType(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public badExceptionDetailMessageServiceContextType(): org.omg.CORBA.INTERNAL
                            public unexpectedDirectByteBufferWithNonChannelSocket(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public unexpectedDirectByteBufferWithNonChannelSocket(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public unexpectedDirectByteBufferWithNonChannelSocket(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public unexpectedDirectByteBufferWithNonChannelSocket(): org.omg.CORBA.INTERNAL
                            public unexpectedNonDirectByteBufferWithChannelSocket(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public unexpectedNonDirectByteBufferWithChannelSocket(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public unexpectedNonDirectByteBufferWithChannelSocket(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public unexpectedNonDirectByteBufferWithChannelSocket(): org.omg.CORBA.INTERNAL
                            public invalidContactInfoListIteratorFailureException(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public invalidContactInfoListIteratorFailureException(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public invalidContactInfoListIteratorFailureException(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public invalidContactInfoListIteratorFailureException(): org.omg.CORBA.INTERNAL
                            public remarshalWithNowhereToGo(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public remarshalWithNowhereToGo(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public remarshalWithNowhereToGo(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public remarshalWithNowhereToGo(): org.omg.CORBA.INTERNAL
                            public exceptionWhenSendingCloseConnection(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public exceptionWhenSendingCloseConnection(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public exceptionWhenSendingCloseConnection(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public exceptionWhenSendingCloseConnection(): org.omg.CORBA.INTERNAL
                            public invocationErrorInReflectiveTie(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
                            public invocationErrorInReflectiveTie(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public invocationErrorInReflectiveTie(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public invocationErrorInReflectiveTie(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public badHelperWriteMethod(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public badHelperWriteMethod(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public badHelperWriteMethod(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public badHelperWriteMethod(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
                            public badHelperReadMethod(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public badHelperReadMethod(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public badHelperReadMethod(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public badHelperReadMethod(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
                            public badHelperIdMethod(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public badHelperIdMethod(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public badHelperIdMethod(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public badHelperIdMethod(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
                            public writeUndeclaredException(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public writeUndeclaredException(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public writeUndeclaredException(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public writeUndeclaredException(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
                            public readUndeclaredException(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public readUndeclaredException(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public readUndeclaredException(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public readUndeclaredException(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
                            public unableToSetSocketFactoryOrb(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public unableToSetSocketFactoryOrb(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public unableToSetSocketFactoryOrb(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public unableToSetSocketFactoryOrb(): org.omg.CORBA.INTERNAL
                            public unexpectedException(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public unexpectedException(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public unexpectedException(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public unexpectedException(): org.omg.CORBA.INTERNAL
                            public noInvocationHandler(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public noInvocationHandler(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public noInvocationHandler(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public noInvocationHandler(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
                            public invalidBuffMgrStrategy(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public invalidBuffMgrStrategy(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public invalidBuffMgrStrategy(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public invalidBuffMgrStrategy(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
                            public javaStreamInitFailed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public javaStreamInitFailed(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public javaStreamInitFailed(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public javaStreamInitFailed(): org.omg.CORBA.INTERNAL
                            public duplicateOrbVersionServiceContext(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public duplicateOrbVersionServiceContext(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public duplicateOrbVersionServiceContext(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public duplicateOrbVersionServiceContext(): org.omg.CORBA.INTERNAL
                            public duplicateSendingContextServiceContext(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public duplicateSendingContextServiceContext(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public duplicateSendingContextServiceContext(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public duplicateSendingContextServiceContext(): org.omg.CORBA.INTERNAL
                            public workQueueThreadInterrupted(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workQueueThreadInterrupted(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workQueueThreadInterrupted(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workQueueThreadInterrupted(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadCreated(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadCreated(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadCreated(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadCreated(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadThrowableFromRequestWork(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object, arg4: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadThrowableFromRequestWork(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadThrowableFromRequestWork(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadThrowableFromRequestWork(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadNotNeeded(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object, arg4: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadNotNeeded(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadNotNeeded(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadNotNeeded(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadDoWorkThrowable(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadDoWorkThrowable(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadDoWorkThrowable(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadDoWorkThrowable(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadCaughtUnexpectedThrowable(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadCaughtUnexpectedThrowable(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadCaughtUnexpectedThrowable(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadCaughtUnexpectedThrowable(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadCreationFailure(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadCreationFailure(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadCreationFailure(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadCreationFailure(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadSetNameFailure(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object, arg4: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadSetNameFailure(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadSetNameFailure(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workerThreadSetNameFailure(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workQueueRequestWorkNoWorkFound(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workQueueRequestWorkNoWorkFound(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workQueueRequestWorkNoWorkFound(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public workQueueRequestWorkNoWorkFound(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public threadPoolCloseError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public threadPoolCloseError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
                            public threadPoolCloseError(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
                            public threadPoolCloseError(): org.omg.CORBA.INTERNAL
                            public threadGroupIsDestroyed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public threadGroupIsDestroyed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public threadGroupIsDestroyed(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public threadGroupIsDestroyed(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
                            public threadGroupHasActiveThreadsInClose(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
                            public threadGroupHasActiveThreadsInClose(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public threadGroupHasActiveThreadsInClose(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public threadGroupHasActiveThreadsInClose(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public threadGroupHasSubGroupsInClose(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
                            public threadGroupHasSubGroupsInClose(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public threadGroupHasSubGroupsInClose(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public threadGroupHasSubGroupsInClose(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public threadGroupDestroyFailed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public threadGroupDestroyFailed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public threadGroupDestroyFailed(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public threadGroupDestroyFailed(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
                            public interruptedJoinCallWhileClosingThreadPool(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
                            public interruptedJoinCallWhileClosingThreadPool(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public interruptedJoinCallWhileClosingThreadPool(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
                            public interruptedJoinCallWhileClosingThreadPool(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
                            public chunkOverflow(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public chunkOverflow(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public chunkOverflow(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public chunkOverflow(): org.omg.CORBA.MARSHAL
                            public unexpectedEof(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public unexpectedEof(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public unexpectedEof(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public unexpectedEof(): org.omg.CORBA.MARSHAL
                            public readObjectException(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public readObjectException(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public readObjectException(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public readObjectException(): org.omg.CORBA.MARSHAL
                            public characterOutofrange(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public characterOutofrange(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public characterOutofrange(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public characterOutofrange(): org.omg.CORBA.MARSHAL
                            public dsiResultException(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public dsiResultException(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public dsiResultException(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public dsiResultException(): org.omg.CORBA.MARSHAL
                            public iiopinputstreamGrow(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public iiopinputstreamGrow(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public iiopinputstreamGrow(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public iiopinputstreamGrow(): org.omg.CORBA.MARSHAL
                            public endOfStream(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public endOfStream(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public endOfStream(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public endOfStream(): org.omg.CORBA.MARSHAL
                            public invalidObjectKey(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public invalidObjectKey(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public invalidObjectKey(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public invalidObjectKey(): org.omg.CORBA.MARSHAL
                            public malformedUrl(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.MARSHAL
                            public malformedUrl(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public malformedUrl(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public malformedUrl(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public valuehandlerReadError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public valuehandlerReadError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public valuehandlerReadError(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public valuehandlerReadError(): org.omg.CORBA.MARSHAL
                            public valuehandlerReadException(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public valuehandlerReadException(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public valuehandlerReadException(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public valuehandlerReadException(): org.omg.CORBA.MARSHAL
                            public badKind(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public badKind(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public badKind(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public badKind(): org.omg.CORBA.MARSHAL
                            public cnfeReadClass(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public cnfeReadClass(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public cnfeReadClass(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public cnfeReadClass(arg0: java.lang.Object): org.omg.CORBA.MARSHAL
                            public badRepIdIndirection(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public badRepIdIndirection(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public badRepIdIndirection(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public badRepIdIndirection(arg0: java.lang.Object): org.omg.CORBA.MARSHAL
                            public badCodebaseIndirection(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public badCodebaseIndirection(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public badCodebaseIndirection(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public badCodebaseIndirection(arg0: java.lang.Object): org.omg.CORBA.MARSHAL
                            public unknownCodeset(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public unknownCodeset(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public unknownCodeset(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public unknownCodeset(arg0: java.lang.Object): org.omg.CORBA.MARSHAL
                            public wcharDataInGiop10(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public wcharDataInGiop10(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public wcharDataInGiop10(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public wcharDataInGiop10(): org.omg.CORBA.MARSHAL
                            public negativeStringLength(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public negativeStringLength(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public negativeStringLength(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public negativeStringLength(arg0: java.lang.Object): org.omg.CORBA.MARSHAL
                            public expectedTypeNullAndNoRepId(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public expectedTypeNullAndNoRepId(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public expectedTypeNullAndNoRepId(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public expectedTypeNullAndNoRepId(): org.omg.CORBA.MARSHAL
                            public readValueAndNoRepId(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public readValueAndNoRepId(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public readValueAndNoRepId(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public readValueAndNoRepId(): org.omg.CORBA.MARSHAL
                            public unexpectedEnclosingValuetype(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.MARSHAL
                            public unexpectedEnclosingValuetype(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public unexpectedEnclosingValuetype(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public unexpectedEnclosingValuetype(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public positiveEndTag(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.MARSHAL
                            public positiveEndTag(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public positiveEndTag(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public positiveEndTag(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public nullOutCall(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public nullOutCall(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public nullOutCall(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public nullOutCall(): org.omg.CORBA.MARSHAL
                            public writeLocalObject(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public writeLocalObject(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public writeLocalObject(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public writeLocalObject(): org.omg.CORBA.MARSHAL
                            public badInsertobjParam(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public badInsertobjParam(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public badInsertobjParam(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public badInsertobjParam(arg0: java.lang.Object): org.omg.CORBA.MARSHAL
                            public customWrapperWithCodebase(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public customWrapperWithCodebase(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public customWrapperWithCodebase(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public customWrapperWithCodebase(): org.omg.CORBA.MARSHAL
                            public customWrapperIndirection(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public customWrapperIndirection(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public customWrapperIndirection(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public customWrapperIndirection(): org.omg.CORBA.MARSHAL
                            public customWrapperNotSingleRepid(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public customWrapperNotSingleRepid(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public customWrapperNotSingleRepid(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public customWrapperNotSingleRepid(): org.omg.CORBA.MARSHAL
                            public badValueTag(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public badValueTag(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public badValueTag(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public badValueTag(arg0: java.lang.Object): org.omg.CORBA.MARSHAL
                            public badTypecodeForCustomValue(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public badTypecodeForCustomValue(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public badTypecodeForCustomValue(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public badTypecodeForCustomValue(): org.omg.CORBA.MARSHAL
                            public errorInvokingHelperWrite(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public errorInvokingHelperWrite(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public errorInvokingHelperWrite(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public errorInvokingHelperWrite(): org.omg.CORBA.MARSHAL
                            public badDigitInFixed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public badDigitInFixed(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public badDigitInFixed(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public badDigitInFixed(): org.omg.CORBA.MARSHAL
                            public refTypeIndirType(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public refTypeIndirType(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public refTypeIndirType(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public refTypeIndirType(): org.omg.CORBA.MARSHAL
                            public badReservedLength(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public badReservedLength(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public badReservedLength(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public badReservedLength(): org.omg.CORBA.MARSHAL
                            public nullNotAllowed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public nullNotAllowed(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public nullNotAllowed(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public nullNotAllowed(): org.omg.CORBA.MARSHAL
                            public unionDiscriminatorError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public unionDiscriminatorError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public unionDiscriminatorError(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public unionDiscriminatorError(): org.omg.CORBA.MARSHAL
                            public cannotMarshalNative(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public cannotMarshalNative(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public cannotMarshalNative(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public cannotMarshalNative(): org.omg.CORBA.MARSHAL
                            public cannotMarshalBadTckind(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public cannotMarshalBadTckind(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public cannotMarshalBadTckind(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public cannotMarshalBadTckind(): org.omg.CORBA.MARSHAL
                            public invalidIndirection(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public invalidIndirection(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public invalidIndirection(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public invalidIndirection(arg0: java.lang.Object): org.omg.CORBA.MARSHAL
                            public indirectionNotFound(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public indirectionNotFound(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public indirectionNotFound(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public indirectionNotFound(arg0: java.lang.Object): org.omg.CORBA.MARSHAL
                            public recursiveTypecodeError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public recursiveTypecodeError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public recursiveTypecodeError(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public recursiveTypecodeError(): org.omg.CORBA.MARSHAL
                            public invalidSimpleTypecode(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public invalidSimpleTypecode(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public invalidSimpleTypecode(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public invalidSimpleTypecode(): org.omg.CORBA.MARSHAL
                            public invalidComplexTypecode(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public invalidComplexTypecode(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public invalidComplexTypecode(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public invalidComplexTypecode(): org.omg.CORBA.MARSHAL
                            public invalidTypecodeKindMarshal(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public invalidTypecodeKindMarshal(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public invalidTypecodeKindMarshal(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public invalidTypecodeKindMarshal(): org.omg.CORBA.MARSHAL
                            public unexpectedUnionDefault(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public unexpectedUnionDefault(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public unexpectedUnionDefault(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public unexpectedUnionDefault(): org.omg.CORBA.MARSHAL
                            public illegalUnionDiscriminatorType(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public illegalUnionDiscriminatorType(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public illegalUnionDiscriminatorType(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public illegalUnionDiscriminatorType(): org.omg.CORBA.MARSHAL
                            public couldNotSkipBytes(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.MARSHAL
                            public couldNotSkipBytes(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public couldNotSkipBytes(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public couldNotSkipBytes(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public badChunkLength(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.MARSHAL
                            public badChunkLength(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public badChunkLength(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public badChunkLength(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public unableToLocateRepIdArray(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public unableToLocateRepIdArray(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public unableToLocateRepIdArray(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public unableToLocateRepIdArray(arg0: java.lang.Object): org.omg.CORBA.MARSHAL
                            public badFixed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.MARSHAL
                            public badFixed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public badFixed(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public badFixed(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public readObjectLoadClassFailure(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.MARSHAL
                            public readObjectLoadClassFailure(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public readObjectLoadClassFailure(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public readObjectLoadClassFailure(arg0: java.lang.Object, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public couldNotInstantiateHelper(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public couldNotInstantiateHelper(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public couldNotInstantiateHelper(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public couldNotInstantiateHelper(arg0: java.lang.Object): org.omg.CORBA.MARSHAL
                            public badToaOaid(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public badToaOaid(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public badToaOaid(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public badToaOaid(): org.omg.CORBA.MARSHAL
                            public couldNotInvokeHelperReadMethod(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public couldNotInvokeHelperReadMethod(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public couldNotInvokeHelperReadMethod(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public couldNotInvokeHelperReadMethod(arg0: java.lang.Object): org.omg.CORBA.MARSHAL
                            public couldNotFindClass(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public couldNotFindClass(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public couldNotFindClass(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public couldNotFindClass(): org.omg.CORBA.MARSHAL
                            public badArgumentsNvlist(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public badArgumentsNvlist(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public badArgumentsNvlist(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public badArgumentsNvlist(): org.omg.CORBA.MARSHAL
                            public stubCreateError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public stubCreateError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
                            public stubCreateError(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
                            public stubCreateError(): org.omg.CORBA.MARSHAL
                            public javaSerializationException(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
                            public javaSerializationException(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public javaSerializationException(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
                            public javaSerializationException(arg0: java.lang.Object): org.omg.CORBA.MARSHAL
                            public genericNoImpl(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public genericNoImpl(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.NO_IMPLEMENT
                            public genericNoImpl(arg0: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public genericNoImpl(): org.omg.CORBA.NO_IMPLEMENT
                            public contextNotImplemented(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public contextNotImplemented(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.NO_IMPLEMENT
                            public contextNotImplemented(arg0: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public contextNotImplemented(): org.omg.CORBA.NO_IMPLEMENT
                            public getinterfaceNotImplemented(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public getinterfaceNotImplemented(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.NO_IMPLEMENT
                            public getinterfaceNotImplemented(arg0: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public getinterfaceNotImplemented(): org.omg.CORBA.NO_IMPLEMENT
                            public sendDeferredNotimplemented(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public sendDeferredNotimplemented(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.NO_IMPLEMENT
                            public sendDeferredNotimplemented(arg0: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public sendDeferredNotimplemented(): org.omg.CORBA.NO_IMPLEMENT
                            public longDoubleNotImplemented(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public longDoubleNotImplemented(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.NO_IMPLEMENT
                            public longDoubleNotImplemented(arg0: java.lang.Throwable): org.omg.CORBA.NO_IMPLEMENT
                            public longDoubleNotImplemented(): org.omg.CORBA.NO_IMPLEMENT
                            public noServerScInDispatch(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public noServerScInDispatch(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public noServerScInDispatch(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public noServerScInDispatch(): org.omg.CORBA.OBJ_ADAPTER
                            public orbConnectError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public orbConnectError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public orbConnectError(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public orbConnectError(): org.omg.CORBA.OBJ_ADAPTER
                            public adapterInactiveInActivation(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public adapterInactiveInActivation(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJ_ADAPTER
                            public adapterInactiveInActivation(arg0: java.lang.Throwable): org.omg.CORBA.OBJ_ADAPTER
                            public adapterInactiveInActivation(): org.omg.CORBA.OBJ_ADAPTER
                            public locateUnknownObject(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public locateUnknownObject(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJECT_NOT_EXIST
                            public locateUnknownObject(arg0: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public locateUnknownObject(): org.omg.CORBA.OBJECT_NOT_EXIST
                            public badServerId(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public badServerId(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJECT_NOT_EXIST
                            public badServerId(arg0: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public badServerId(): org.omg.CORBA.OBJECT_NOT_EXIST
                            public badSkeleton(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public badSkeleton(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJECT_NOT_EXIST
                            public badSkeleton(arg0: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public badSkeleton(): org.omg.CORBA.OBJECT_NOT_EXIST
                            public servantNotFound(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public servantNotFound(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJECT_NOT_EXIST
                            public servantNotFound(arg0: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public servantNotFound(): org.omg.CORBA.OBJECT_NOT_EXIST
                            public noObjectAdapterFactory(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public noObjectAdapterFactory(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJECT_NOT_EXIST
                            public noObjectAdapterFactory(arg0: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public noObjectAdapterFactory(): org.omg.CORBA.OBJECT_NOT_EXIST
                            public badAdapterId(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public badAdapterId(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJECT_NOT_EXIST
                            public badAdapterId(arg0: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public badAdapterId(): org.omg.CORBA.OBJECT_NOT_EXIST
                            public dynAnyDestroyed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public dynAnyDestroyed(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.OBJECT_NOT_EXIST
                            public dynAnyDestroyed(arg0: java.lang.Throwable): org.omg.CORBA.OBJECT_NOT_EXIST
                            public dynAnyDestroyed(): org.omg.CORBA.OBJECT_NOT_EXIST
                            public requestCanceled(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.TRANSIENT
                            public requestCanceled(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.TRANSIENT
                            public requestCanceled(arg0: java.lang.Throwable): org.omg.CORBA.TRANSIENT
                            public requestCanceled(): org.omg.CORBA.TRANSIENT
                            public unknownCorbaExc(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public unknownCorbaExc(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.UNKNOWN
                            public unknownCorbaExc(arg0: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public unknownCorbaExc(): org.omg.CORBA.UNKNOWN
                            public runtimeexception(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public runtimeexception(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.UNKNOWN
                            public runtimeexception(arg0: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public runtimeexception(): org.omg.CORBA.UNKNOWN
                            public unknownServerError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public unknownServerError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.UNKNOWN
                            public unknownServerError(arg0: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public unknownServerError(): org.omg.CORBA.UNKNOWN
                            public unknownDsiSysex(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public unknownDsiSysex(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.UNKNOWN
                            public unknownDsiSysex(arg0: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public unknownDsiSysex(): org.omg.CORBA.UNKNOWN
                            public unknownSysex(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public unknownSysex(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.UNKNOWN
                            public unknownSysex(arg0: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public unknownSysex(): org.omg.CORBA.UNKNOWN
                            public wrongInterfaceDef(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public wrongInterfaceDef(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.UNKNOWN
                            public wrongInterfaceDef(arg0: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public wrongInterfaceDef(): org.omg.CORBA.UNKNOWN
                            public noInterfaceDefStub(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public noInterfaceDefStub(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.UNKNOWN
                            public noInterfaceDefStub(arg0: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public noInterfaceDefStub(): org.omg.CORBA.UNKNOWN
                            public unknownExceptionInDispatch(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public unknownExceptionInDispatch(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.UNKNOWN
                            public unknownExceptionInDispatch(arg0: java.lang.Throwable): org.omg.CORBA.UNKNOWN
                            public unknownExceptionInDispatch(): org.omg.CORBA.UNKNOWN
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}