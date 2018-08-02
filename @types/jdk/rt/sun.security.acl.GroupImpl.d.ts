declare namespace sun {
    namespace security {
        namespace acl {
            class GroupImpl implements java.security.acl.Group {
                public constructor(arg0: java.lang.String | string)
                public addMember(arg0: java.security.Principal): boolean
                public removeMember(arg0: java.security.Principal): boolean
                public members(): java.util.Enumeration<java.security.Principal>
                public equals(arg0: java.lang.Object): boolean
                public equals(arg0: java.security.acl.Group): boolean
                public toString(): string
                public hashCode(): int
                public isMember(arg0: java.security.Principal): boolean
                public getName(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}