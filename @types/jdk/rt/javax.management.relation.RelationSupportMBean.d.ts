declare namespace javax {
    namespace management {
        namespace relation {
            interface RelationSupportMBean extends javax.management.relation.Relation {
                isInRelationService(): boolean
                setRelationServiceManagementFlag(arg0: java.lang.Boolean | boolean): void
            }
        }
    }
}