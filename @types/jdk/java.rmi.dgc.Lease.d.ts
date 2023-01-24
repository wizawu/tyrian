declare namespace java {
  namespace rmi {
    namespace dgc {
      class Lease implements java.io.Serializable {
        public constructor(arg0: java.rmi.dgc.VMID, arg1: number | java.lang.Long)
        public getVMID(): java.rmi.dgc.VMID
        public getValue(): number
      }
    }
  }
}
