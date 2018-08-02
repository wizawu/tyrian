declare namespace javax {
    namespace rmi {
        namespace CORBA {
interface StubDelegate {
    hashCode(arg0: javax.rmi.CORBA.Stub): int
    equals(arg0: javax.rmi.CORBA.Stub, arg1: java.lang.Object): boolean
    toString(arg0: javax.rmi.CORBA.Stub): string
    connect(arg0: javax.rmi.CORBA.Stub, arg1: org.omg.CORBA.ORB): void
    readObject(arg0: javax.rmi.CORBA.Stub, arg1: java.io.ObjectInputStream): void
    writeObject(arg0: javax.rmi.CORBA.Stub, arg1: java.io.ObjectOutputStream): void
}

        }
    }
}