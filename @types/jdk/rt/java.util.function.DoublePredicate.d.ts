declare namespace java {
    namespace util {
        namespace function$ {
            interface DoublePredicate {
                test(arg0: double): boolean
                and(arg0: java.util.function$.DoublePredicate): java.util.function$.DoublePredicate
                negate(): java.util.function$.DoublePredicate
                or(arg0: java.util.function$.DoublePredicate): java.util.function$.DoublePredicate
            }
        }
    }
}