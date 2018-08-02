declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace io {
class ValueHandlerImpl implements javax.rmi.CORBA.ValueHandlerMultiFormat {
    public static FORMAT_VERSION_PROPERTY: string
    public static kRemoteType: short
    public static kAbstractType: short
    public static kValueType: short
    public getMaximumStreamFormatVersion(): byte
    public writeValue(arg0: org.omg.CORBA.portable.OutputStream, arg1: java.io.Serializable, arg2: byte): void
    public writeValue(arg0: org.omg.CORBA.portable.OutputStream, arg1: java.io.Serializable): void
    public readValue(arg0: org.omg.CORBA.portable.InputStream, arg1: int, arg2: java.lang.Class, arg3: java.lang.String | string, arg4: org.omg.SendingContext.RunTime): java.io.Serializable
    public getRMIRepositoryID(arg0: java.lang.Class): string
    public isCustomMarshaled(arg0: java.lang.Class): boolean
    public getRunTimeCodeBase(): org.omg.SendingContext.RunTime
    public useFullValueDescription(arg0: java.lang.Class, arg1: java.lang.String | string): boolean
    public getClassName(arg0: java.lang.String | string): string
    public getClassFromType(arg0: java.lang.String | string): java.lang.Class
    public getAnyClassFromType(arg0: java.lang.String | string): java.lang.Class
    public createForAnyType(arg0: java.lang.Class): string
    public getDefinedInId(arg0: java.lang.String | string): string
    public getUnqualifiedName(arg0: java.lang.String | string): string
    public getSerialVersionUID(arg0: java.lang.String | string): string
    public isAbstractBase(arg0: java.lang.Class): boolean
    public isSequence(arg0: java.lang.String | string): boolean
    public writeReplace(arg0: java.io.Serializable): java.io.Serializable
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}