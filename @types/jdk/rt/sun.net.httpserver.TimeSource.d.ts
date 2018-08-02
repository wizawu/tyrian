declare namespace sun {
    namespace net {
        namespace httpserver {
            interface TimeSource {
                getTime(): long
            }
            interface TimeSource$$Lambda {
                (): long
            }
        }
    }
}