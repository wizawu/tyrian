declare namespace org {
    namespace classpath {
        namespace icedtea {
            namespace pulseaudio {
                class PulseAudioSourcePort extends org.classpath.icedtea.pulseaudio.PulseAudioPort {
                    public open(): void
                    public close(): void
                    public native_set_volume(arg0: float): byte[]
                    public native_update_volume(): byte[]
                    public getLineInfo(): javax.sound.sampled.Line$Info
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}