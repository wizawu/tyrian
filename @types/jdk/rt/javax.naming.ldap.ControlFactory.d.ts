declare namespace javax {
    namespace naming {
        namespace ldap {
            abstract class ControlFactory {
                protected constructor()
                public abstract getControlInstance(arg0: javax.naming.ldap.Control): javax.naming.ldap.Control
                public static getControlInstance(arg0: javax.naming.ldap.Control, arg1: javax.naming.Context, arg2: java.util.Hashtable<any, any>): javax.naming.ldap.Control
                public static class: java.lang.Class<any>
            }
            interface ControlFactory$$Lambda {
                (arg0: javax.naming.ldap.Control): javax.naming.ldap.Control
            }
        }
    }
}