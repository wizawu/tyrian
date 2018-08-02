declare namespace com {
    namespace sun {
        namespace org {
            namespace glassfish {
                namespace external {
                    namespace probe {
                        namespace provider {
                            namespace annotations {
                                interface Probe extends java.lang.annotation.Annotation {
                                    name(): string
                                    hidden(): boolean
                                    self(): boolean
                                    providerName(): string
                                    moduleName(): string
                                    stateful(): boolean
                                    profileNames(): string
                                    statefulReturn(): boolean
                                    statefulException(): boolean
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}