declare namespace javax {
  namespace naming {
    namespace ldap {
      class BasicControl implements javax.naming.ldap.Control {
        protected id: java.lang.String
        protected criticality: boolean
        protected value: byte[]
        public constructor(arg0: java.lang.String | string)
        public constructor(
          arg0: java.lang.String | string,
          arg1: boolean | java.lang.Boolean,
          arg2: number[] | java.lang.Byte[]
        )
        public getID(): java.lang.String
        public isCritical(): boolean
        public getEncodedValue(): number[]
      }
    }
  }
}
