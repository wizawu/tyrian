declare namespace javax {
    namespace rmi {
class PortableRemoteObject {
    protected constructor()
    public static exportObject(arg0: java.rmi.Remote): void
    public static toStub(arg0: java.rmi.Remote): java.rmi.Remote
    public static unexportObject(arg0: java.rmi.Remote): void
    public static narrow(arg0: java.lang.Object, arg1: java.lang.Class): java.lang.Object
    public static connect(arg0: java.rmi.Remote, arg1: java.rmi.Remote): void
    public static class: java.lang.Class<any>
}

    }
}