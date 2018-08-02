declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace logging {
class UtilSystemException extends com.sun.corba.se.spi.logging.LogWrapperBase {
    public static STUB_FACTORY_COULD_NOT_MAKE_STUB: int
    public static ERROR_IN_MAKE_STUB_FROM_REPOSITORY_ID: int
    public static CLASS_CAST_EXCEPTION_IN_LOAD_STUB: int
    public static EXCEPTION_IN_LOAD_STUB: int
    public static NO_POA: int
    public static CONNECT_WRONG_ORB: int
    public static CONNECT_NO_TIE: int
    public static CONNECT_TIE_WRONG_ORB: int
    public static CONNECT_TIE_NO_SERVANT: int
    public static LOAD_TIE_FAILED: int
    public static BAD_HEX_DIGIT: int
    public static UNABLE_LOCATE_VALUE_HELPER: int
    public static INVALID_INDIRECTION: int
    public static OBJECT_NOT_CONNECTED: int
    public static COULD_NOT_LOAD_STUB: int
    public static OBJECT_NOT_EXPORTED: int
    public static ERROR_SET_OBJECT_FIELD: int
    public static ERROR_SET_BOOLEAN_FIELD: int
    public static ERROR_SET_BYTE_FIELD: int
    public static ERROR_SET_CHAR_FIELD: int
    public static ERROR_SET_SHORT_FIELD: int
    public static ERROR_SET_INT_FIELD: int
    public static ERROR_SET_LONG_FIELD: int
    public static ERROR_SET_FLOAT_FIELD: int
    public static ERROR_SET_DOUBLE_FIELD: int
    public static ILLEGAL_FIELD_ACCESS: int
    public static BAD_BEGIN_UNMARSHAL_CUSTOM_VALUE: int
    public static CLASS_NOT_FOUND: int
    public static UNKNOWN_SYSEX: int
    public constructor(arg0: java.util.logging.Logger)
    public static get(arg0: com.sun.corba.se.spi.orb.ORB, arg1: java.lang.String | string): com.sun.corba.se.impl.logging.UtilSystemException
    public static get(arg0: java.lang.String | string): com.sun.corba.se.impl.logging.UtilSystemException
    public stubFactoryCouldNotMakeStub(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
    public stubFactoryCouldNotMakeStub(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
    public stubFactoryCouldNotMakeStub(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
    public stubFactoryCouldNotMakeStub(): org.omg.CORBA.BAD_OPERATION
    public errorInMakeStubFromRepositoryId(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
    public errorInMakeStubFromRepositoryId(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
    public errorInMakeStubFromRepositoryId(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
    public errorInMakeStubFromRepositoryId(): org.omg.CORBA.BAD_OPERATION
    public classCastExceptionInLoadStub(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
    public classCastExceptionInLoadStub(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
    public classCastExceptionInLoadStub(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
    public classCastExceptionInLoadStub(): org.omg.CORBA.BAD_OPERATION
    public exceptionInLoadStub(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
    public exceptionInLoadStub(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_OPERATION
    public exceptionInLoadStub(arg0: java.lang.Throwable): org.omg.CORBA.BAD_OPERATION
    public exceptionInLoadStub(): org.omg.CORBA.BAD_OPERATION
    public noPoa(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
    public noPoa(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
    public noPoa(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
    public noPoa(): org.omg.CORBA.BAD_PARAM
    public connectWrongOrb(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
    public connectWrongOrb(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
    public connectWrongOrb(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
    public connectWrongOrb(): org.omg.CORBA.BAD_PARAM
    public connectNoTie(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
    public connectNoTie(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
    public connectNoTie(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
    public connectNoTie(): org.omg.CORBA.BAD_PARAM
    public connectTieWrongOrb(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
    public connectTieWrongOrb(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
    public connectTieWrongOrb(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
    public connectTieWrongOrb(): org.omg.CORBA.BAD_PARAM
    public connectTieNoServant(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
    public connectTieNoServant(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.BAD_PARAM
    public connectTieNoServant(arg0: java.lang.Throwable): org.omg.CORBA.BAD_PARAM
    public connectTieNoServant(): org.omg.CORBA.BAD_PARAM
    public loadTieFailed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.BAD_PARAM
    public loadTieFailed(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.BAD_PARAM
    public loadTieFailed(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.BAD_PARAM
    public loadTieFailed(arg0: java.lang.Object): org.omg.CORBA.BAD_PARAM
    public badHexDigit(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
    public badHexDigit(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.DATA_CONVERSION
    public badHexDigit(arg0: java.lang.Throwable): org.omg.CORBA.DATA_CONVERSION
    public badHexDigit(): org.omg.CORBA.DATA_CONVERSION
    public unableLocateValueHelper(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.MARSHAL
    public unableLocateValueHelper(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.MARSHAL
    public unableLocateValueHelper(arg0: java.lang.Throwable): org.omg.CORBA.MARSHAL
    public unableLocateValueHelper(): org.omg.CORBA.MARSHAL
    public invalidIndirection(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.MARSHAL
    public invalidIndirection(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
    public invalidIndirection(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.MARSHAL
    public invalidIndirection(arg0: java.lang.Object): org.omg.CORBA.MARSHAL
    public objectNotConnected(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INV_OBJREF
    public objectNotConnected(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INV_OBJREF
    public objectNotConnected(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INV_OBJREF
    public objectNotConnected(arg0: java.lang.Object): org.omg.CORBA.INV_OBJREF
    public couldNotLoadStub(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INV_OBJREF
    public couldNotLoadStub(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INV_OBJREF
    public couldNotLoadStub(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INV_OBJREF
    public couldNotLoadStub(arg0: java.lang.Object): org.omg.CORBA.INV_OBJREF
    public objectNotExported(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INV_OBJREF
    public objectNotExported(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INV_OBJREF
    public objectNotExported(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INV_OBJREF
    public objectNotExported(arg0: java.lang.Object): org.omg.CORBA.INV_OBJREF
    public errorSetObjectField(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object, arg4: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetObjectField(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetObjectField(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetObjectField(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetBooleanField(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object, arg4: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetBooleanField(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetBooleanField(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetBooleanField(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetByteField(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object, arg4: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetByteField(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetByteField(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetByteField(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetCharField(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object, arg4: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetCharField(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetCharField(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetCharField(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetShortField(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object, arg4: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetShortField(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetShortField(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetShortField(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetIntField(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object, arg4: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetIntField(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetIntField(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetIntField(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetLongField(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object, arg4: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetLongField(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetLongField(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetLongField(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetFloatField(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object, arg4: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetFloatField(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetFloatField(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetFloatField(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetDoubleField(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object, arg3: java.lang.Object, arg4: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetDoubleField(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetDoubleField(arg0: java.lang.Throwable, arg1: java.lang.Object, arg2: java.lang.Object, arg3: java.lang.Object): org.omg.CORBA.INTERNAL
    public errorSetDoubleField(arg0: java.lang.Object, arg1: java.lang.Object, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
    public illegalFieldAccess(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
    public illegalFieldAccess(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
    public illegalFieldAccess(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
    public illegalFieldAccess(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
    public badBeginUnmarshalCustomValue(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.INTERNAL
    public badBeginUnmarshalCustomValue(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.INTERNAL
    public badBeginUnmarshalCustomValue(arg0: java.lang.Throwable): org.omg.CORBA.INTERNAL
    public badBeginUnmarshalCustomValue(): org.omg.CORBA.INTERNAL
    public classNotFound(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable, arg2: java.lang.Object): org.omg.CORBA.INTERNAL
    public classNotFound(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
    public classNotFound(arg0: java.lang.Throwable, arg1: java.lang.Object): org.omg.CORBA.INTERNAL
    public classNotFound(arg0: java.lang.Object): org.omg.CORBA.INTERNAL
    public unknownSysex(arg0: org.omg.CORBA.CompletionStatus, arg1: java.lang.Throwable): org.omg.CORBA.UNKNOWN
    public unknownSysex(arg0: org.omg.CORBA.CompletionStatus): org.omg.CORBA.UNKNOWN
    public unknownSysex(arg0: java.lang.Throwable): org.omg.CORBA.UNKNOWN
    public unknownSysex(): org.omg.CORBA.UNKNOWN
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}