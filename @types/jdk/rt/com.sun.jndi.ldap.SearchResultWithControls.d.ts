declare namespace com {
    namespace sun {
        namespace jndi {
            namespace ldap {
                class SearchResultWithControls extends javax.naming.directory.SearchResult implements javax.naming.ldap.HasControls {
                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: boolean, arg4: javax.naming.ldap.Control[])
                    public getControls(): javax.naming.ldap.Control[]
                    public static class: java.lang.Class<any>
                }
                class SearchResultWithControls$$Lambda extends javax.naming.directory.SearchResult implements javax.naming.ldap.HasControls {
                    public constructor(arg0: java.lang.String | string, arg1: java.lang.Object, arg2: javax.naming.directory.Attributes, arg3: boolean, arg4: javax.naming.ldap.Control[])
                }
            }
        }
    }
}