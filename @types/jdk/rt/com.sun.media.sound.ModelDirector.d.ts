declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                interface ModelDirector {
                    noteOn(arg0: int, arg1: int): void
                    noteOff(arg0: int, arg1: int): void
                    close(): void
                }
            }
        }
    }
}