declare namespace sun {
    namespace reflect {
        interface ByteVector {
            getLength(): int
            get(arg0: int): byte
            put(arg0: int, arg1: byte): void
            add(arg0: byte): void
            trim(): void
            getData(): byte[]
        }
    }
}