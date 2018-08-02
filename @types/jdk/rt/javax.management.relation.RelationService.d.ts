declare namespace javax {
    namespace management {
        namespace relation {
            class RelationService extends javax.management.NotificationBroadcasterSupport implements javax.management.relation.RelationServiceMBean , javax.management.MBeanRegistration , javax.management.NotificationListener {
                public constructor(arg0: boolean)
                public isActive(): void
                public preRegister(arg0: javax.management.MBeanServer, arg1: javax.management.ObjectName): javax.management.ObjectName
                public postRegister(arg0: java.lang.Boolean | boolean): void
                public preDeregister(): void
                public postDeregister(): void
                public getPurgeFlag(): boolean
                public setPurgeFlag(arg0: boolean): void
                public createRelationType(arg0: java.lang.String | string, arg1: javax.management.relation.RoleInfo[]): void
                public addRelationType(arg0: javax.management.relation.RelationType): void
                public getAllRelationTypeNames(): java.util.List<java.lang.String>
                public getRoleInfos(arg0: java.lang.String | string): java.util.List<javax.management.relation.RoleInfo>
                public getRoleInfo(arg0: java.lang.String | string, arg1: java.lang.String | string): javax.management.relation.RoleInfo
                public removeRelationType(arg0: java.lang.String | string): void
                public createRelation(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.management.relation.RoleList): void
                public addRelation(arg0: javax.management.ObjectName): void
                public isRelationMBean(arg0: java.lang.String | string): javax.management.ObjectName
                public isRelation(arg0: javax.management.ObjectName): string
                public hasRelation(arg0: java.lang.String | string): boolean
                public getAllRelationIds(): java.util.List<java.lang.String>
                public checkRoleReading(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Integer
                public checkRoleWriting(arg0: javax.management.relation.Role, arg1: java.lang.String | string, arg2: java.lang.Boolean | boolean): java.lang.Integer
                public sendRelationCreationNotification(arg0: java.lang.String | string): void
                public sendRoleUpdateNotification(arg0: java.lang.String | string, arg1: javax.management.relation.Role, arg2: java.util.List<javax.management.ObjectName>): void
                public sendRelationRemovalNotification(arg0: java.lang.String | string, arg1: java.util.List<javax.management.ObjectName>): void
                public updateRoleMap(arg0: java.lang.String | string, arg1: javax.management.relation.Role, arg2: java.util.List<javax.management.ObjectName>): void
                public removeRelation(arg0: java.lang.String | string): void
                public purgeRelations(): void
                public findReferencingRelations(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: java.lang.String | string): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
                public findAssociatedMBeans(arg0: javax.management.ObjectName, arg1: java.lang.String | string, arg2: java.lang.String | string): java.util.Map<javax.management.ObjectName, java.util.List<java.lang.String>>
                public findRelationsOfType(arg0: java.lang.String | string): java.util.List<java.lang.String>
                public getRole(arg0: java.lang.String | string, arg1: java.lang.String | string): java.util.List<javax.management.ObjectName>
                public getRoles(arg0: java.lang.String | string, arg1: java.lang.String[]): javax.management.relation.RoleResult
                public getAllRoles(arg0: java.lang.String | string): javax.management.relation.RoleResult
                public getRoleCardinality(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.Integer
                public setRole(arg0: java.lang.String | string, arg1: javax.management.relation.Role): void
                public setRoles(arg0: java.lang.String | string, arg1: javax.management.relation.RoleList): javax.management.relation.RoleResult
                public getReferencedMBeans(arg0: java.lang.String | string): java.util.Map<javax.management.ObjectName, java.util.List<java.lang.String>>
                public getRelationTypeName(arg0: java.lang.String | string): string
                public handleNotification(arg0: javax.management.Notification, arg1: java.lang.Object): void
                public getNotificationInfo(): javax.management.MBeanNotificationInfo[]
                public static class: java.lang.Class<any>
            }
        }
    }
}