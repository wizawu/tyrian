declare namespace javax {
  namespace naming {
    namespace ldap {

      class BasicControl implements javax.naming.ldap.Control {
        protected id: java.lang.String
        protected criticality: boolean
        protected value: byte[]
        public constructor(arg0: java.lang.String)
        public constructor(arg0: java.lang.String, arg1: boolean, arg2: byte[])
        public getID(): java.lang.String
        public isCritical(): boolean
        public getEncodedValue(): byte[]
      }

    }
  }
}
