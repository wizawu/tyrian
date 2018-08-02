declare namespace javax {
    namespace rmi {
        namespace CORBA {
interface PortableRemoteObjectDelegate {
    exportObject(arg0: java.rmi.Remote): void
    toStub(arg0: java.rmi.Remote): java.rmi.Remote
    unexportObject(arg0: java.rmi.Remote): void
    narrow(arg0: java.lang.Object, arg1: java.lang.Class): java.lang.Object
    connect(arg0: java.rmi.Remote, arg1: java.rmi.Remote): void
}

        }
    }
}