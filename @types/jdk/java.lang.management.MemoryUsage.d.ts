declare namespace java {
  namespace lang {
    namespace management {

      class MemoryUsage {
        public constructor(arg0: number | java.lang.Long, arg1: number | java.lang.Long, arg2: number | java.lang.Long, arg3: number | java.lang.Long)
        public getInit(): number
        public getUsed(): number
        public getCommitted(): number
        public getMax(): number
        public toString(): java.lang.String
        public static from(arg0: javax.management.openmbean.CompositeData): java.lang.management.MemoryUsage
      }

    }
  }
}
