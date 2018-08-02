declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            namespace output {
                                class Encoded {
                                    public buf: byte[]
                                    public len: int
                                    public constructor()
                                    public constructor(arg0: java.lang.String | string)
                                    public ensureSize(arg0: int): void
                                    public set(arg0: java.lang.String | string): void
                                    public setEscape(arg0: java.lang.String | string, arg1: boolean): void
                                    public write(arg0: com.sun.xml.internal.bind.v2.runtime.output.UTF8XmlOutput): void
                                    public append(arg0: char): void
                                    public compact(): void
                                    public static class: java.lang.Class<any>
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}