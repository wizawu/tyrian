declare namespace java {
    namespace rmi {
        namespace registry {
interface Registry extends java.rmi.Remote {
    REGISTRY_PORT: int
    lookup(arg0: java.lang.String | string): java.rmi.Remote
    bind(arg0: java.lang.String | string, arg1: java.rmi.Remote): void
    unbind(arg0: java.lang.String | string): void
    rebind(arg0: java.lang.String | string, arg1: java.rmi.Remote): void
    list(): java.lang.String[]
}

        }
    }
}