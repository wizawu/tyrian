declare namespace javax {
    namespace sound {
        namespace sampled {
            interface Clip extends javax.sound.sampled.DataLine {
                LOOP_CONTINUOUSLY: int
                open(arg0: javax.sound.sampled.AudioFormat, arg1: byte[], arg2: int, arg3: int): void
                open(arg0: javax.sound.sampled.AudioInputStream): void
                getFrameLength(): int
                getMicrosecondLength(): long
                setFramePosition(arg0: int): void
                setMicrosecondPosition(arg0: long): void
                setLoopPoints(arg0: int, arg1: int): void
                loop(arg0: int): void
            }
        }
    }
}