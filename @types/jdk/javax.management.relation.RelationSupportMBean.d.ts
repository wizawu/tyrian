declare namespace javax {
  namespace management {
    namespace relation {

      interface RelationSupportMBean extends javax.management.relation.Relation {
        isInRelationService(): boolean
        setRelationServiceManagementFlag(arg0: boolean | java.lang.Boolean): void
      }

    }
  }
}
