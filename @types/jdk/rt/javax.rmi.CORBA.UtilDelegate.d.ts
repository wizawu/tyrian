declare namespace javax {
    namespace rmi {
        namespace CORBA {
            interface UtilDelegate {
                mapSystemException(arg0: org.omg.CORBA.SystemException): java.rmi.RemoteException
                writeAny(arg0: org.omg.CORBA.portable.OutputStream, arg1: java.lang.Object): void
                readAny(arg0: org.omg.CORBA.portable.InputStream): java.lang.Object
                writeRemoteObject(arg0: org.omg.CORBA.portable.OutputStream, arg1: java.lang.Object): void
                writeAbstractObject(arg0: org.omg.CORBA.portable.OutputStream, arg1: java.lang.Object): void
                registerTarget(arg0: javax.rmi.CORBA.Tie, arg1: java.rmi.Remote): void
                unexportObject(arg0: java.rmi.Remote): void
                getTie(arg0: java.rmi.Remote): javax.rmi.CORBA.Tie
                createValueHandler(): javax.rmi.CORBA.ValueHandler
                getCodebase(arg0: java.lang.Class): string
                loadClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.ClassLoader): java.lang.Class
                isLocal(arg0: javax.rmi.CORBA.Stub): boolean
                wrapException(arg0: java.lang.Throwable): java.rmi.RemoteException
                copyObject(arg0: java.lang.Object, arg1: org.omg.CORBA.ORB): java.lang.Object
                copyObjects(arg0: java.lang.Object[], arg1: org.omg.CORBA.ORB): java.lang.Object[]
            }
        }
    }
}