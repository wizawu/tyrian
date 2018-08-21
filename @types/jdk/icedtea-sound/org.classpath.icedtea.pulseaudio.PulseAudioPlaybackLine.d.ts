declare namespace org {
    namespace classpath {
        namespace icedtea {
            namespace pulseaudio {
                interface PulseAudioPlaybackLine {
                    SECONDS_TO_MICROSECONDS: int
                    native_set_volume(arg0: float): byte[]
                    native_update_volume(): byte[]
                    getCachedVolume(): float
                    setCachedVolume(arg0: float): void
                    isOpen(): boolean
                }
            }
        }
    }
}