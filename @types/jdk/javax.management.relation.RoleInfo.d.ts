declare namespace javax {
  namespace management {
    namespace relation {

      class RoleInfo implements java.io.Serializable {
        public static readonly ROLE_CARDINALITY_INFINITY: int
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: boolean, arg3: boolean, arg4: int, arg5: int, arg6: java.lang.String)
        public constructor(arg0: java.lang.String, arg1: java.lang.String, arg2: boolean, arg3: boolean)
        public constructor(arg0: java.lang.String, arg1: java.lang.String)
        public constructor(arg0: javax.management.relation.RoleInfo)
        public getName(): java.lang.String
        public isReadable(): boolean
        public isWritable(): boolean
        public getDescription(): java.lang.String
        public getMinDegree(): int
        public getMaxDegree(): int
        public getRefMBeanClassName(): java.lang.String
        public checkMinDegree(arg0: int): boolean
        public checkMaxDegree(arg0: int): boolean
        public toString(): java.lang.String
      }

    }
  }
}
