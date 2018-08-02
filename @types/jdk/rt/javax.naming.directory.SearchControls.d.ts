declare namespace javax {
    namespace naming {
        namespace directory {
            class SearchControls implements java.io.Serializable {
                public static OBJECT_SCOPE: int
                public static ONELEVEL_SCOPE: int
                public static SUBTREE_SCOPE: int
                public constructor()
                public constructor(arg0: int, arg1: long, arg2: int, arg3: java.lang.String[], arg4: boolean, arg5: boolean)
                public getSearchScope(): int
                public getTimeLimit(): int
                public getDerefLinkFlag(): boolean
                public getReturningObjFlag(): boolean
                public getCountLimit(): long
                public getReturningAttributes(): java.lang.String[]
                public setSearchScope(arg0: int): void
                public setTimeLimit(arg0: int): void
                public setDerefLinkFlag(arg0: boolean): void
                public setReturningObjFlag(arg0: boolean): void
                public setCountLimit(arg0: long): void
                public setReturningAttributes(arg0: java.lang.String[]): void
                public static class: java.lang.Class<any>
            }
        }
    }
}