declare namespace com {
  namespace sun {
    namespace management {

      class VMOption {
        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean | java.lang.Boolean, arg3: com.sun.management.VMOption$Origin)
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
