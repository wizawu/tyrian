declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                class SoftChannel implements javax.sound.midi.MidiChannel , com.sun.media.sound.ModelDirectedPlayer {
                    public constructor(arg0: com.sun.media.sound.SoftSynthesizer, arg1: int)
                    public noteOn(arg0: int, arg1: int): void
                    public noteOff(arg0: int, arg1: int): void
                    public play(arg0: int, arg1: com.sun.media.sound.ModelConnectionBlock[]): void
                    public noteOff(arg0: int): void
                    public setPolyPressure(arg0: int, arg1: int): void
                    public getPolyPressure(arg0: int): int
                    public setChannelPressure(arg0: int): void
                    public getChannelPressure(): int
                    public mapPolyPressureToDestination(arg0: int[], arg1: int[]): void
                    public mapChannelPressureToDestination(arg0: int[], arg1: int[]): void
                    public mapControlToDestination(arg0: int, arg1: int[], arg2: int[]): void
                    public controlChangePerNote(arg0: int, arg1: int, arg2: int): void
                    public getControlPerNote(arg0: int, arg1: int): int
                    public controlChange(arg0: int, arg1: int): void
                    public getController(arg0: int): int
                    public tuningChange(arg0: int): void
                    public tuningChange(arg0: int, arg1: int): void
                    public programChange(arg0: int): void
                    public programChange(arg0: int, arg1: int): void
                    public getProgram(): int
                    public setPitchBend(arg0: int): void
                    public getPitchBend(): int
                    public nrpnChange(arg0: int, arg1: int): void
                    public rpnChange(arg0: int, arg1: int): void
                    public resetAllControllers(): void
                    public resetAllControllers(arg0: boolean): void
                    public allNotesOff(): void
                    public allSoundOff(): void
                    public localControl(arg0: boolean): boolean
                    public setMono(arg0: boolean): void
                    public getMono(): boolean
                    public setOmni(arg0: boolean): void
                    public getOmni(): boolean
                    public setMute(arg0: boolean): void
                    public getMute(): boolean
                    public setSolo(arg0: boolean): void
                    public getSolo(): boolean
                    public static class: java.lang.Class<any>
                }
                class SoftChannel$$Lambda implements javax.sound.midi.MidiChannel , com.sun.media.sound.ModelDirectedPlayer {
                    public constructor(arg0: com.sun.media.sound.SoftSynthesizer, arg1: int)
                }
            }
        }
    }
}