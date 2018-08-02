declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace impl {
                    namespace javax {
                        namespace rmi {
                            namespace CORBA {
class Util implements javax.rmi.CORBA.UtilDelegate {
    public constructor()
    public static getInstance(): com.sun.corba.se.impl.javax.rmi.CORBA.Util
    public static isInstanceDefined(): boolean
    public unregisterTargetsForORB(arg0: org.omg.CORBA.ORB): void
    public mapSystemException(arg0: org.omg.CORBA.SystemException): java.rmi.RemoteException
    public writeAny(arg0: org.omg.CORBA.portable.OutputStream, arg1: java.lang.Object): void
    public readAny(arg0: org.omg.CORBA.portable.InputStream): java.lang.Object
    public writeRemoteObject(arg0: org.omg.CORBA.portable.OutputStream, arg1: java.lang.Object): void
    public writeAbstractObject(arg0: org.omg.CORBA.portable.OutputStream, arg1: java.lang.Object): void
    public registerTarget(arg0: javax.rmi.CORBA.Tie, arg1: java.rmi.Remote): void
    public unexportObject(arg0: java.rmi.Remote): void
    protected cleanUpTie(arg0: javax.rmi.CORBA.Tie): void
    public getTie(arg0: java.rmi.Remote): javax.rmi.CORBA.Tie
    public createValueHandler(): javax.rmi.CORBA.ValueHandler
    public getCodebase(arg0: java.lang.Class): string
    public loadClass(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.ClassLoader): java.lang.Class
    public isLocal(arg0: javax.rmi.CORBA.Stub): boolean
    public wrapException(arg0: java.lang.Throwable): java.rmi.RemoteException
    public copyObjects(arg0: java.lang.Object[], arg1: org.omg.CORBA.ORB): java.lang.Object[]
    public copyObject(arg0: java.lang.Object, arg1: org.omg.CORBA.ORB): java.lang.Object
    public static class: java.lang.Class<any>
}

                            }
                        }
                    }
                }
            }
        }
    }
}