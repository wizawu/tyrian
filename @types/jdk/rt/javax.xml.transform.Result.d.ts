declare namespace javax {
    namespace xml {
        namespace transform {
            interface Result {
                PI_DISABLE_OUTPUT_ESCAPING: string
                PI_ENABLE_OUTPUT_ESCAPING: string
                setSystemId(arg0: java.lang.String | string): void
                getSystemId(): string
            }
        }
    }
}