declare namespace sun {
    namespace management {
        namespace counter {
interface LongArrayCounter extends sun.management.counter.Counter {
    longArrayValue(): long[]
    longAt(arg0: int): long
}

        }
    }
}