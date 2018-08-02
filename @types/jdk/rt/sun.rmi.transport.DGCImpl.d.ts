declare namespace sun {
    namespace rmi {
        namespace transport {
            class DGCImpl implements java.rmi.dgc.DGC {
                public dirty(arg0: java.rmi.server.ObjID[], arg1: long, arg2: java.rmi.dgc.Lease): java.rmi.dgc.Lease
                public clean(arg0: java.rmi.server.ObjID[], arg1: long, arg2: java.rmi.dgc.VMID, arg3: boolean): void
                public static class: java.lang.Class<any>
            }
        }
    }
}