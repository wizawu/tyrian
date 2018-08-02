declare namespace sun {
    namespace management {
        namespace counter {
interface ByteArrayCounter extends sun.management.counter.Counter {
    byteArrayValue(): byte[]
    byteAt(arg0: int): byte
}

        }
    }
}