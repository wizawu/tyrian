declare namespace javax {
    namespace naming {
        namespace ldap {
            interface HasControls {
                getControls(): javax.naming.ldap.Control[]
            }
            interface HasControls$$Lambda {
                (): javax.naming.ldap.Control[]
            }
        }
    }
}