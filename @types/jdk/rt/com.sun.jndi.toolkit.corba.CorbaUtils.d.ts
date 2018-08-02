declare namespace com {
    namespace sun {
        namespace jndi {
            namespace toolkit {
                namespace corba {
                    class CorbaUtils {
                        public constructor()
                        public static remoteToCorba(arg0: java.rmi.Remote, arg1: org.omg.CORBA.ORB): org.omg.CORBA.Object
                        public static getOrb(arg0: java.lang.String | string, arg1: int, arg2: java.util.Hashtable<any, any>): org.omg.CORBA.ORB
                        public static isObjectFactoryTrusted(arg0: java.lang.Object): boolean
                        public static class: java.lang.Class<any>
                    }
                }
            }
        }
    }
}