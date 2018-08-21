declare namespace org {
    namespace classpath {
        namespace icedtea {
            namespace pulseaudio {
                class Stream {
                    public static STATE_UNCONNECTED: long
                    public static STATE_CREATING: long
                    public static STATE_READY: long
                    public static STATE_FAILED: long
                    public static STATE_TERMINATED: long
                    public static FLAG_NOFLAGS: long
                    public static FLAG_START_CORKED: long
                    public static FLAG_INTERPOLATE_TIMING: long
                    public static FLAG_NOT_MONOTONIC: long
                    public static FLAG_AUTO_TIMING_UPDATE: long
                    public static FLAG_NO_REMAP_CHANNELS: long
                    public static FLAG_NO_REMIX_CHANNELS: long
                    public static FLAG_FIX_FORMAT: long
                    public static FLAG_FIX_RATE: long
                    public static FLAG_FIX_CHANNELS: long
                    public static FLAG_DONT_MOVE: long
                    public static FLAG_VARIABLE_RATE: long
                    public static FLAG_PEAK_DETECT: long
                    public static FLAG_START_MUTED: long
                    public static FLAG_ADJUST_LATENCY: long
                    public static FLAG_EARLY_REQUESTS: long
                    public static FLAG_DONT_INHIBIT_AUTO_SUSPEND: long
                    public static FLAG_START_UNMUTED: long
                    public static FLAG_FAIL_ON_SUSPEND: long
                    public static readonly DEFAULT_DEVICE: string
                    public static checkNativeStreamState(arg0: long): long
                    public bytesInBuffer(): int
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}