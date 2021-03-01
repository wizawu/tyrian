declare namespace javax {
  namespace management {
    namespace relation {

      class RoleUnresolved implements java.io.Serializable {

        public constructor(arg0: java.lang.String, arg1: java.util.List<javax.management.ObjectName>, arg2: int)
        public getRoleName(): java.lang.String
        public getRoleValue(): java.util.List<javax.management.ObjectName>
        public getProblemType(): int
        public setRoleName(arg0: java.lang.String): void
        public setRoleValue(arg0: java.util.List<javax.management.ObjectName>): void
        public setProblemType(arg0: int): void
        public clone(): java.lang.Object
        public toString(): java.lang.String
      }

    }
  }
}
