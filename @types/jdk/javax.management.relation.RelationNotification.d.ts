declare namespace javax {
  namespace management {
    namespace relation {
      class RelationNotification extends javax.management.Notification {
        public static readonly RELATION_BASIC_CREATION: java.lang.String
        public static readonly RELATION_MBEAN_CREATION: java.lang.String
        public static readonly RELATION_BASIC_UPDATE: java.lang.String
        public static readonly RELATION_MBEAN_UPDATE: java.lang.String
        public static readonly RELATION_BASIC_REMOVAL: java.lang.String
        public static readonly RELATION_MBEAN_REMOVAL: java.lang.String
        public constructor(
          arg0: java.lang.String | string,
          arg1: java.lang.Object | any,
          arg2: number | java.lang.Long,
          arg3: number | java.lang.Long,
          arg4: java.lang.String | string,
          arg5: java.lang.String | string,
          arg6: java.lang.String | string,
          arg7: javax.management.ObjectName,
          arg8: java.util.List<javax.management.ObjectName>
        )
        public constructor(
          arg0: java.lang.String | string,
          arg1: java.lang.Object | any,
          arg2: number | java.lang.Long,
          arg3: number | java.lang.Long,
          arg4: java.lang.String | string,
          arg5: java.lang.String | string,
          arg6: java.lang.String | string,
          arg7: javax.management.ObjectName,
          arg8: java.lang.String | string,
          arg9: java.util.List<javax.management.ObjectName>,
          arg10: java.util.List<javax.management.ObjectName>
        )
        public getRelationId(): java.lang.String
        public getRelationTypeName(): java.lang.String
        public getObjectName(): javax.management.ObjectName
        public getMBeansToUnregister(): java.util.List<javax.management.ObjectName>
        public getRoleName(): java.lang.String
        public getOldRoleValue(): java.util.List<javax.management.ObjectName>
        public getNewRoleValue(): java.util.List<javax.management.ObjectName>
      }
    }
  }
}
