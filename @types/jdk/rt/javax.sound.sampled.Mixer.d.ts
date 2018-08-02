declare namespace javax {
    namespace sound {
        namespace sampled {
interface Mixer extends javax.sound.sampled.Line {
    getMixerInfo(): javax.sound.sampled.Mixer$Info
    getSourceLineInfo(): javax.sound.sampled.Line$Info[]
    getTargetLineInfo(): javax.sound.sampled.Line$Info[]
    getSourceLineInfo(arg0: javax.sound.sampled.Line$Info): javax.sound.sampled.Line$Info[]
    getTargetLineInfo(arg0: javax.sound.sampled.Line$Info): javax.sound.sampled.Line$Info[]
    isLineSupported(arg0: javax.sound.sampled.Line$Info): boolean
    getLine(arg0: javax.sound.sampled.Line$Info): javax.sound.sampled.Line
    getMaxLines(arg0: javax.sound.sampled.Line$Info): int
    getSourceLines(): javax.sound.sampled.Line[]
    getTargetLines(): javax.sound.sampled.Line[]
    synchronize(arg0: javax.sound.sampled.Line[], arg1: boolean): void
    unsynchronize(arg0: javax.sound.sampled.Line[]): void
    isSynchronizationSupported(arg0: javax.sound.sampled.Line[], arg1: boolean): boolean
}

        }
    }
}