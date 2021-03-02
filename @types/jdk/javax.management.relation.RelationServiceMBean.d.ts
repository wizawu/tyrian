declare namespace javax {
  namespace management {
    namespace relation {

      interface RelationServiceMBean {
        isActive(): void
        getPurgeFlag(): boolean
        setPurgeFlag(arg0: boolean | java.lang.Boolean): void
        createRelationType(arg0: java.lang.String | string, arg1: javax.management.relation.RoleInfo[]): void
        addRelationType(arg0: javax.management.relation.RelationType): void
        getAllRelationTypeNames(): java.util.List<java.lang.String>
        getRoleInfos(arg0: java.lang.String | string): java.util.List<javax.management.relation.RoleInfo>
        getRoleInfo(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.management.relation.RoleInfo
        removeRelationType(arg0: java.lang.String | string): void
        createRelation(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.relation.RoleList): void
        addRelation(arg0: javax.management.ObjectName): void
        isRelationMBean(arg0: java.lang.String | string): javax.management.ObjectName
        isRelation(arg0: javax.management.ObjectName): java.lang.String
        hasRelation(arg0: java.lang.String | string): boolean
        getAllRelationIds(): java.util.List<java.lang.String>
        checkRoleReading(arg0: java.lang.String | string, arg1: java.lang.String | string): number
        checkRoleWriting(arg0: javax.management.relation.Role, arg1: java.lang.String | string, arg2: boolean | java.lang.Boolean): number
        sendRelationCreationNotification(arg0: java.lang.String | string): void
        sendRoleUpdateNotification(arg0: java.lang.String | string, arg1: javax.management.relation.Role, arg2: java.util.List<javax.management.ObjectName>): void
        sendRelationRemovalNotification(arg0: java.lang.String | string, arg1: java.util.List<javax.management.ObjectName>): void
        updateRoleMap(arg0: java.lang.String | string, arg1: javax.management.relation.Role, arg2: java.util.List<javax.management.ObjectName>): void
        removeRelation(arg0: java.lang.String | string): void
        purgeRelations(): void
        findReferencingRelations(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: java.lang.String | string): java.util.Map<java.lang.String,java.util.List<java.lang.String>>
        findAssociatedMBeans(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: java.lang.String | string): java.util.Map<javax.management.ObjectName,java.util.List<java.lang.String>>
        findRelationsOfType(arg0: java.lang.String | string): java.util.List<java.lang.String>
        getRole(arg0: java.lang.String | string, arg1: java.lang.String | string): java.util.List<javax.management.ObjectName>
        getRoles(arg0: java.lang.String | string, arg1: java.lang.String[]): javax.management.relation.RoleResult
        getAllRoles(arg0: java.lang.String | string): javax.management.relation.RoleResult
        getRoleCardinality(arg0: java.lang.String | string, arg1: java.lang.String | string): number
        setRole(arg0: java.lang.String | string, arg1: javax.management.relation.Role): void
        setRoles(arg0: java.lang.String | string, arg1: javax.management.relation.RoleList): javax.management.relation.RoleResult
        getReferencedMBeans(arg0: java.lang.String | string): java.util.Map<javax.management.ObjectName,java.util.List<java.lang.String>>
        getRelationTypeName(arg0: java.lang.String | string): java.lang.String
      }

    }
  }
}
