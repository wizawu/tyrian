declare namespace sun {
    namespace rmi {
        namespace transport {
            namespace proxy {
                interface CGICommandHandler {
                    getName(): string
                    execute(arg0: java.lang.String | string): void
                }
            }
        }
    }
}