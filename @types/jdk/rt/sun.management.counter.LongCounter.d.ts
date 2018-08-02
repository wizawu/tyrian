declare namespace sun {
    namespace management {
        namespace counter {
            interface LongCounter extends sun.management.counter.Counter {
                longValue(): long
            }
        }
    }
}