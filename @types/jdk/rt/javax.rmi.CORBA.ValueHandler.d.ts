declare namespace javax {
    namespace rmi {
        namespace CORBA {
            interface ValueHandler {
                writeValue(arg0: org.omg.CORBA.portable.OutputStream, arg1: java.io.Serializable): void
                readValue(arg0: org.omg.CORBA.portable.InputStream, arg1: int, arg2: java.lang.Class, arg3: java.lang.String | string, arg4: org.omg.SendingContext.RunTime): java.io.Serializable
                getRMIRepositoryID(arg0: java.lang.Class): string
                isCustomMarshaled(arg0: java.lang.Class): boolean
                getRunTimeCodeBase(): org.omg.SendingContext.RunTime
                writeReplace(arg0: java.io.Serializable): java.io.Serializable
            }
        }
    }
}