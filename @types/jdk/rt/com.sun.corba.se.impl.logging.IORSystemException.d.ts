declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace logging {
class IORSystemException extends com.sun.corba.se.spi.logging.LogWrapperBase {
    public static ORT_NOT_INITIALIZED: int
    public static NULL_POA: int
    public static BAD_MAGIC: int
    public static STRINGIFY_WRITE_ERROR: int
    public static TAGGED_PROFILE_TEMPLATE_FACTORY_NOT_FOUND: int
    public static INVALID_JDK1_3_1_PATCH_LEVEL: int
    public static GET_LOCAL_SERVANT_FAILURE: int
    public static ADAPTER_ID_NOT_AVAILABLE: int
    public static SERVER_ID_NOT_AVAILABLE: int
    public static ORB_ID_NOT_AVAILABLE: int
    public static OBJECT_ADAPTER_ID_NOT_AVAILABLE: int
    public static BAD_OID_IN_IOR_TEMPLATE_LIST: int
    public static INVALID_TAGGED_PROFILE: int
    public static BAD_IIOP_ADDRESS_PORT: int
    public static IOR_MUST_HAVE_IIOP_PROFILE: int
    public constructor(arg0: java.util.logging.Logger)
    public static get(arg0: com.sun.corba.se.spi.orb.ORB, arg1: java.lang.String | string): com.sun.corba.se.impl.logging.IORSystemException
    public static get(arg0: java.lang.String | string): com.sun.corba.se.impl.logging.IORSystemException
    public ortNotInitialized(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
    public ortNotInitialized(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
    public ortNotInitialized(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
    public ortNotInitialized(): org.omg.CORBA.INTERNAL
    public nullPoa(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
    public nullPoa(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
    public nullPoa(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
    public nullPoa(): org.omg.CORBA.INTERNAL
    public badMagic(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
    public badMagic(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
    public badMagic(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
    public badMagic(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
    public stringifyWriteError(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
    public stringifyWriteError(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
    public stringifyWriteError(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
    public stringifyWriteError(): org.omg.CORBA.INTERNAL
    public taggedProfileTemplateFactoryNotFound(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
    public taggedProfileTemplateFactoryNotFound(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
    public taggedProfileTemplateFactoryNotFound(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
    public taggedProfileTemplateFactoryNotFound(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
    public invalidJdk131PatchLevel(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
    public invalidJdk131PatchLevel(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
    public invalidJdk131PatchLevel(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
    public invalidJdk131PatchLevel(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
    public getLocalServantFailure(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
    public getLocalServantFailure(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
    public getLocalServantFailure(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
    public getLocalServantFailure(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
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
    public badOidInIorTemplateList(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
    public badOidInIorTemplateList(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
    public badOidInIorTemplateList(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
    public badOidInIorTemplateList(): org.omg.CORBA.BAD_PARAM
    public invalidTaggedProfile(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
    public invalidTaggedProfile(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
    public invalidTaggedProfile(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
    public invalidTaggedProfile(): org.omg.CORBA.BAD_PARAM
    public badIiopAddressPort(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.BAD_PARAM
    public badIiopAddressPort(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.BAD_PARAM
    public badIiopAddressPort(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.BAD_PARAM
    public badIiopAddressPort(arg0: java.lang.Object): org.omg.CORBA.BAD_PARAM
    public iorMustHaveIiopProfile(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INV_OBJREF
    public iorMustHaveIiopProfile(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INV_OBJREF
    public iorMustHaveIiopProfile(arg0: java.lang.Throwable): org.omg.CORBA.INV_OBJREF
    public iorMustHaveIiopProfile(): org.omg.CORBA.INV_OBJREF
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}