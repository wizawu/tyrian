declare namespace sun {
    namespace rmi {
        namespace transport {
class DGCImpl_Stub extends java.rmi.server.RemoteStub implements java.rmi.dgc.DGC {
    public constructor()
    public constructor(arg0: java.rmi.server.RemoteRef)
    public clean(arg0: java.rmi.server.ObjID[], arg1: long, arg2: java.rmi.dgc.VMID, arg3: boolean): void
    public dirty(arg0: java.rmi.server.ObjID[], arg1: long, arg2: java.rmi.dgc.Lease): java.rmi.dgc.Lease
    public static class: java.lang.Class<any>
}

        }
    }
}