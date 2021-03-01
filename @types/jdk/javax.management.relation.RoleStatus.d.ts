declare namespace javax {
  namespace management {
    namespace relation {

      class RoleStatus {

        public static readonly NO_ROLE_WITH_NAME: int
        public static readonly ROLE_NOT_READABLE: int
        public static readonly ROLE_NOT_WRITABLE: int
        public static readonly LESS_THAN_MIN_ROLE_DEGREE: int
        public static readonly MORE_THAN_MAX_ROLE_DEGREE: int
        public static readonly REF_MBEAN_OF_INCORRECT_CLASS: int
        public static readonly REF_MBEAN_NOT_REGISTERED: int
        public constructor()
        public static isRoleStatus(arg0: int): boolean
      }

    }
  }
}
