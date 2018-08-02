declare namespace com {
    namespace sun {
        namespace corba {
            namespace se {
                namespace spi {
                    namespace extension {
                        class ZeroPortPolicy extends org.omg.CORBA.LocalObject implements org.omg.CORBA.Policy {
                            public toString(): string
                            public forceZeroPort(): boolean
                            public static getPolicy(): com.sun.corba.se.spi.extension.ZeroPortPolicy
                            public policy_type(): int
                            public copy(): org.omg.CORBA.Policy
                            public destroy(): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}