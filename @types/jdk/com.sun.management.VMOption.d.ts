declare namespace com {
  namespace sun {
    namespace management {

      class VMOption {
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: boolean, arg3: com.sun.management.VMOption$Origin)
        public getName(): java.lang.String
        public getValue(): java.lang.String
        public getOrigin(): com.sun.management.VMOption$Origin
        public isWriteable(): boolean
        public toString(): java.lang.String
        public static from(arg0: javax.management.openmbean.CompositeData): com.sun.management.VMOption
      }

    }
  }
}
