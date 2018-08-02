declare namespace java {
    namespace util {
        namespace function$ {
            interface IntPredicate {
                test(arg0: int): boolean
                and(arg0: java.util.function$.IntPredicate): java.util.function$.IntPredicate
                negate(): java.util.function$.IntPredicate
                or(arg0: java.util.function$.IntPredicate): java.util.function$.IntPredicate
            }
        }
    }
}