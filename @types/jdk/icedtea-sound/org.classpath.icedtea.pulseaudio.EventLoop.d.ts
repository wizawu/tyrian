declare namespace org {
    namespace classpath {
        namespace icedtea {
            namespace pulseaudio {
                class EventLoop implements java.lang.Runnable {
                    public run(): void
                    protected updateSourcePortNameList(): java.util.List<java.lang.String>
                    public source_callback(arg0: java.lang.String | string): void
                    public sink_callback(arg0: java.lang.String | string): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}