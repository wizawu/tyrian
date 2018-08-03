declare namespace com {
    namespace sun {
        namespace media {
            namespace sound {
                abstract class ModelAbstractChannelMixer implements com.sun.media.sound.ModelChannelMixer {
                    public constructor()
                    public abstract process(arg0: float[][], arg1: int, arg2: int): boolean
                    public abstract stop(): void
                    public allNotesOff(): void
                    public allSoundOff(): void
                    public controlChange(arg0: int, arg1: int): void
                    public getChannelPressure(): int
                    public getController(arg0: int): int
                    public getMono(): boolean
                    public getMute(): boolean
                    public getOmni(): boolean
                    public getPitchBend(): int
                    public getPolyPressure(arg0: int): int
                    public getProgram(): int
                    public getSolo(): boolean
                    public localControl(arg0: boolean): boolean
                    public noteOff(arg0: int): void
                    public noteOff(arg0: int, arg1: int): void
                    public noteOn(arg0: int, arg1: int): void
                    public programChange(arg0: int): void
                    public programChange(arg0: int, arg1: int): void
                    public resetAllControllers(): void
                    public setChannelPressure(arg0: int): void
                    public setMono(arg0: boolean): void
                    public setMute(arg0: boolean): void
                    public setOmni(arg0: boolean): void
                    public setPitchBend(arg0: int): void
                    public setPolyPressure(arg0: int, arg1: int): void
                    public setSolo(arg0: boolean): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}