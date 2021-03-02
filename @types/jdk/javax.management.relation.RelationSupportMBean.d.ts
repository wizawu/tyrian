declare namespace javax {
  namespace management {
    namespace relation {

      interface RelationSupportMBean extends javax.management.relation.Relation {
        isInRelationService(): java.lang.Boolean
        setRelationServiceManagementFlag(arg0: java.lang.Boolean): void
      }

    }
  }
}
