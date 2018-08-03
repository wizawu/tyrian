declare namespace javax {
    namespace management {
        namespace relation {
            class RelationNotification extends javax.management.Notification {
                public static readonly RELATION_BASIC_CREATION: string
                public static readonly RELATION_MBEAN_CREATION: string
                public static readonly RELATION_BASIC_UPDATE: string
                public static readonly RELATION_MBEAN_UPDATE: string
                public static readonly RELATION_BASIC_REMOVAL: string
                public static readonly RELATION_MBEAN_REMOVAL: string
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: long, arg3: long, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: java.lang.String | string, arg7: javax.management.ObjectName, arg8: java.util.List<javax.management.ObjectName>)
                public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: long, arg3: long, arg4: java.lang.String | string, arg5: java.lang.String | string, arg6: java.lang.String | string, arg7: javax.management.ObjectName, arg8: java.lang.String | string, arg9: java.util.List<javax.management.ObjectName>, arg10: java.util.List<javax.management.ObjectName>)
                public getRelationId(): string
                public getRelationTypeName(): string
                public getObjectName(): javax.management.ObjectName
                public getMBeansToUnregister(): java.util.List<javax.management.ObjectName>
                public getRoleName(): string
                public getOldRoleValue(): java.util.List<javax.management.ObjectName>
                public getNewRoleValue(): java.util.List<javax.management.ObjectName>
                public static class: java.lang.Class<any>
            }
        }
    }
}