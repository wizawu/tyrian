declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class SoftFilter {
                    public static FILTERTYPE_LP6: int
                    public static FILTERTYPE_LP12: int
                    public static FILTERTYPE_HP12: int
                    public static FILTERTYPE_BP12: int
                    public static FILTERTYPE_NP12: int
                    public static FILTERTYPE_LP24: int
                    public static FILTERTYPE_HP24: int
                    public constructor(arg0: float)
                    public setFrequency(arg0: double): void
                    public setResonance(arg0: double): void
                    public reset(): void
                    public setFilterType(arg0: int): void
                    public processAudio(arg0: com.sun.media.sound.SoftAudioBuffer): void
                    public filter4(arg0: com.sun.media.sound.SoftAudioBuffer): void
                    public filter2calc(): void
                    public filter2(arg0: com.sun.media.sound.SoftAudioBuffer): void
                    public filter1calc(): void
                    public filter1(arg0: com.sun.media.sound.SoftAudioBuffer): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}