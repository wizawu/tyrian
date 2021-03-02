declare namespace java {
  namespace rmi {
    namespace dgc {

      interface DGC extends java.rmi.Remote {
        dirty(arg0: java.rmi.server.ObjID[], arg1: long, arg2: java.rmi.dgc.Lease): java.rmi.dgc.Lease
        clean(arg0: java.rmi.server.ObjID[], arg1: long, arg2: java.rmi.dgc.VMID, arg3: boolean): void
      }

    }
  }
}
