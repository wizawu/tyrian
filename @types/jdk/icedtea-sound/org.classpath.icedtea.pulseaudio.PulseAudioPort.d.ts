declare namespace org {
    namespace classpath {
        namespace icedtea {
            namespace pulseaudio {
                abstract class PulseAudioPort extends org.classpath.icedtea.pulseaudio.PulseAudioLine implements javax.sound.sampled.Port , org.classpath.icedtea.pulseaudio.PulseAudioPlaybackLine {
                    public abstract native_set_volume(arg0: float): byte[]
                    public abstract native_update_volume(): byte[]
                    public getCachedVolume(): float
                    public setCachedVolume(arg0: float): void
                    public close(): void
                    public abstract getLineInfo(): javax.sound.sampled.Line$Info
                    public open(): void
                    public getName(): string
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}