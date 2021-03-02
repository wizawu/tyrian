declare namespace javax {
  namespace management {
    namespace relation {

      class RelationTypeSupport implements javax.management.relation.RelationType {
        public constructor(arg0: java.lang.String | string, arg1: javax.management.relation.RoleInfo[])
        protected constructor(arg0: java.lang.String | string)
        public getRelationTypeName(): java.lang.String
        public getRoleInfos(): java.util.List<javax.management.relation.RoleInfo>
        public getRoleInfo(arg0: java.lang.String | string): javax.management.relation.RoleInfo
        protected addRoleInfo(arg0: javax.management.relation.RoleInfo): void
        setRelationServiceFlag(arg0: boolean | java.lang.Boolean): void
        static checkRoleInfos(arg0: javax.management.relation.RoleInfo[]): void
      }

    }
  }
}
