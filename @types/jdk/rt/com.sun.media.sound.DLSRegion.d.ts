declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class DLSRegion {
                    public static readonly OPTION_SELFNONEXCLUSIVE: int
                    public constructor()
                    public getModulators(): java.util.List<com.sun.media.sound.DLSModulator>
                    public getChannel(): long
                    public setChannel(arg0: long): void
                    public getExclusiveClass(): int
                    public setExclusiveClass(arg0: int): void
                    public getFusoptions(): int
                    public setFusoptions(arg0: int): void
                    public getKeyfrom(): int
                    public setKeyfrom(arg0: int): void
                    public getKeyto(): int
                    public setKeyto(arg0: int): void
                    public getOptions(): int
                    public setOptions(arg0: int): void
                    public getPhasegroup(): int
                    public setPhasegroup(arg0: int): void
                    public getSample(): com.sun.media.sound.DLSSample
                    public setSample(arg0: com.sun.media.sound.DLSSample): void
                    public getVelfrom(): int
                    public setVelfrom(arg0: int): void
                    public getVelto(): int
                    public setVelto(arg0: int): void
                    public setModulators(arg0: java.util.List<com.sun.media.sound.DLSModulator>): void
                    public getSampleoptions(): com.sun.media.sound.DLSSampleOptions
                    public setSampleoptions(arg0: com.sun.media.sound.DLSSampleOptions): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}