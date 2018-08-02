declare namespace sun {
    namespace management {
        namespace counter {
            interface StringCounter extends sun.management.counter.Counter {
                stringValue(): string
            }
        }
    }
}