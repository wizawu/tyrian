declare namespace javax {
    namespace sound {
        namespace sampled {
            interface DataLine extends javax.sound.sampled.Line {
                drain(): void
                flush(): void
                start(): void
                stop(): void
                isRunning(): boolean
                isActive(): boolean
                getFormat(): javax.sound.sampled.AudioFormat
                getBufferSize(): int
                available(): int
                getFramePosition(): int
                getLongFramePosition(): long
                getMicrosecondPosition(): long
                getLevel(): float
            }
        }
    }
}