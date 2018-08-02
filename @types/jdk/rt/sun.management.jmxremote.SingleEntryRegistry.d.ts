declare namespace sun {
    namespace management {
        namespace jmxremote {
            class SingleEntryRegistry extends sun.rmi.registry.RegistryImpl {
                public list(): java.lang.String[]
                public lookup(arg0: java.lang.String | string): java.rmi.Remote
                public bind(arg0: java.lang.String | string, arg1: java.rmi.Remote): void
                public rebind(arg0: java.lang.String | string, arg1: java.rmi.Remote): void
                public unbind(arg0: java.lang.String | string): void
                public static class: java.lang.Class<any>
            }
        }
    }
}