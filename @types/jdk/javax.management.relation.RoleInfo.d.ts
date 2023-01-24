declare namespace javax {
  namespace management {
    namespace relation {
      class RoleInfo implements java.io.Serializable {
        public static readonly ROLE_CARDINALITY_INFINITY: int
        public constructor(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: boolean | java.lang.Boolean,
          arg3: boolean | java.lang.Boolean,
          arg4: number | java.lang.Integer,
          arg5: number | java.lang.Integer,
          arg6: java.lang.String | string
        )
        public constructor(
          arg0: java.lang.String | string,
          arg1: java.lang.String | string,
          arg2: boolean | java.lang.Boolean,
          arg3: boolean | java.lang.Boolean
        )
        public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
        public constructor(arg0: javax.management.relation.RoleInfo)
        public getName(): java.lang.String
        public isReadable(): boolean
        public isWritable(): boolean
        public getDescription(): java.lang.String
        public getMinDegree(): number
        public getMaxDegree(): number
        public getRefMBeanClassName(): java.lang.String
        public checkMinDegree(arg0: number | java.lang.Integer): boolean
        public checkMaxDegree(arg0: number | java.lang.Integer): boolean
        public toString(): java.lang.String
      }
    }
  }
}
