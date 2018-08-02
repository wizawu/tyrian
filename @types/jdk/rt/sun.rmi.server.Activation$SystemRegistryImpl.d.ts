declare namespace sun {
    namespace rmi {
        namespace server {
            class Activation$SystemRegistryImpl extends sun.rmi.registry.RegistryImpl {
                public lookup(arg0: java.lang.String | string): java.rmi.Remote
                public list(): java.lang.String[]
                public bind(arg0: java.lang.String | string, arg1: java.rmi.Remote): void
                public unbind(arg0: java.lang.String | string): void
                public rebind(arg0: java.lang.String | string, arg1: java.rmi.Remote): void
                public static class: java.lang.Class<any>
            }
        }
    }
}