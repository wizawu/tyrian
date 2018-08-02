declare namespace java {
    namespace security {
        namespace acl {
            interface Group extends java.security.Principal {
                addMember(arg0: java.security.Principal): boolean
                removeMember(arg0: java.security.Principal): boolean
                isMember(arg0: java.security.Principal): boolean
                members(): java.util.Enumeration<java.security.Principal>
            }
        }
    }
}