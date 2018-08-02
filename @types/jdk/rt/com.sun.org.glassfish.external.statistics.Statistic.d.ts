declare namespace com {
    namespace sun {
        namespace org {
            namespace glassfish {
                namespace external {
                    namespace statistics {
                        interface Statistic {
                            getName(): string
                            getUnit(): string
                            getDescription(): string
                            getStartTime(): long
                            getLastSampleTime(): long
                        }
                    }
                }
            }
        }
    }
}