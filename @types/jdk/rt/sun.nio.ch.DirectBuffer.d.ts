declare namespace sun {
    namespace nio {
        namespace ch {
            interface DirectBuffer {
                address(): long
                attachment(): java.lang.Object
                cleaner(): sun.misc.Cleaner
            }
        }
    }
}