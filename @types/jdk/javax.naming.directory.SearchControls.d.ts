declare namespace javax {
  namespace naming {
    namespace directory {

      class SearchControls implements java.io.Serializable {
        public static readonly OBJECT_SCOPE: int
        public static readonly ONELEVEL_SCOPE: int
        public static readonly SUBTREE_SCOPE: int
        public constructor()
        public constructor(arg0: number | java.lang.Integer, arg1: number | java.lang.Long, arg2: number | java.lang.Integer, arg3: java.lang.String[] | string[], arg4: boolean | java.lang.Boolean, arg5: boolean | java.lang.Boolean)
        public getSearchScope(): number
        public getTimeLimit(): number
        public getDerefLinkFlag(): boolean
        public getReturningObjFlag(): boolean
        public getCountLimit(): number
        public getReturningAttributes(): java.lang.String[]
        public setSearchScope(arg0: number | java.lang.Integer): void
        public setTimeLimit(arg0: number | java.lang.Integer): void
        public setDerefLinkFlag(arg0: boolean | java.lang.Boolean): void
        public setReturningObjFlag(arg0: boolean | java.lang.Boolean): void
        public setCountLimit(arg0: number | java.lang.Long): void
        public setReturningAttributes(arg0: java.lang.String[] | string[]): void
      }

    }
  }
}
