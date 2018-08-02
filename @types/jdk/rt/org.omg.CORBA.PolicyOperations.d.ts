declare namespace org {
    namespace omg {
        namespace CORBA {
            interface PolicyOperations {
                policy_type(): int
                copy(): org.omg.CORBA.Policy
                destroy(): void
            }
        }
    }
}