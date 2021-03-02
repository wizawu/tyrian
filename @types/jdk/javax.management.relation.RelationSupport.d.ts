declare namespace javax {
  namespace management {
    namespace relation {

      class RelationSupport implements javax.management.relation.RelationSupportMBean, javax.management.MBeanRegistration {
        public constructor(arg0: java.lang.String, arg1: javax.management.ObjectName, arg2: java.lang.String, arg3: javax.management.relation.RoleList)
        public constructor(arg0: java.lang.String, arg1: javax.management.ObjectName, arg2: javax.management.MBeanServer, arg3: java.lang.String, arg4: javax.management.relation.RoleList)
        public getRole(arg0: java.lang.String): java.util.List<javax.management.ObjectName>
        public getRoles(arg0: java.lang.String[]): javax.management.relation.RoleResult
        public getAllRoles(): javax.management.relation.RoleResult
        public retrieveAllRoles(): javax.management.relation.RoleList
        public getRoleCardinality(arg0: java.lang.String): java.lang.Integer
        public setRole(arg0: javax.management.relation.Role): void
        public setRoles(arg0: javax.management.relation.RoleList): javax.management.relation.RoleResult
        public handleMBeanUnregistration(arg0: javax.management.ObjectName, arg1: java.lang.String): void
        public getReferencedMBeans(): java.util.Map<javax.management.ObjectName,java.util.List<java.lang.String>>
        public getRelationTypeName(): java.lang.String
        public getRelationServiceName(): javax.management.ObjectName
        public getRelationId(): java.lang.String
        public preRegister(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): javax.management.ObjectName
        public postRegister(arg0: java.lang.Boolean): void
        public preDeregister(): void
        public postDeregister(): void
        public isInRelationService(): java.lang.Boolean
        public setRelationServiceManagementFlag(arg0: java.lang.Boolean): void
        getRoleInt(arg0: java.lang.String, arg1: boolean, arg2: javax.management.relation.RelationService, arg3: boolean): java.lang.Object
        getRolesInt(arg0: java.lang.String[], arg1: boolean, arg2: javax.management.relation.RelationService): javax.management.relation.RoleResult
        getAllRolesInt(arg0: boolean, arg1: javax.management.relation.RelationService): javax.management.relation.RoleResult
        setRoleInt(arg0: javax.management.relation.Role, arg1: boolean, arg2: javax.management.relation.RelationService, arg3: boolean): java.lang.Object
        setRolesInt(arg0: javax.management.relation.RoleList, arg1: boolean, arg2: javax.management.relation.RelationService): javax.management.relation.RoleResult
        handleMBeanUnregistrationInt(arg0: javax.management.ObjectName, arg1: java.lang.String, arg2: boolean, arg3: javax.management.relation.RelationService): void
      }

    }
  }
}
