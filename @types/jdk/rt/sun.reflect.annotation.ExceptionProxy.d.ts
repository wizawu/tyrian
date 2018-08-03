declare namespace sun {
    namespace reflect {
        namespace annotation {
            abstract class ExceptionProxy implements java.io.Serializable {
                public constructor()
                protected abstract generateException(): java.lang.RuntimeException
                public static class: java.lang.Class<any>
            }
            interface ExceptionProxy$$Lambda implements java.io.Serializable {
                (): java.lang.RuntimeException
            }
        }
    }
}