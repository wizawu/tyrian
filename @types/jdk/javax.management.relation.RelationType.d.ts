declare namespace javax {
  namespace management {
    namespace relation {

      interface RelationType extends java.io.Serializable {
        getRelationTypeName(): java.lang.String
        getRoleInfos(): java.util.List<javax.management.relation.RoleInfo>
        getRoleInfo(arg0: java.lang.String | string): javax.management.relation.RoleInfo
      }

    }
  }
}
