declare namespace javax {
    namespace management {
        namespace relation {
            class RoleInfo implements java.io.Serializable {
                public static ROLE_CARDINALITY_INFINITY: int
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean, arg3: boolean, arg4: int, arg5: int, arg6: java.lang.String | string)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: boolean, arg3: boolean)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string)
                public constructor(arg0: javax.management.relation.RoleInfo)
                public getName(): string
                public isReadable(): boolean
                public isWritable(): boolean
                public getDescription(): string
                public getMinDegree(): int
                public getMaxDegree(): int
                public getRefMBeanClassName(): string
                public checkMinDegree(arg0: int): boolean
                public checkMaxDegree(arg0: int): boolean
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}