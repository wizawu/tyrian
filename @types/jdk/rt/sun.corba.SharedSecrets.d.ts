declare namespace sun {
    namespace corba {
        class SharedSecrets {
            public constructor()
            public static getJavaOISAccess(): sun.misc.JavaOISAccess
            public static getJavaCorbaAccess(): sun.corba.JavaCorbaAccess
            public static setJavaCorbaAccess(arg0: sun.corba.JavaCorbaAccess): void
            public static class: java.lang.Class<any>
        }
    }
}