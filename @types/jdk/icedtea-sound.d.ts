declare namespace org {
    namespace classpath {
        namespace icedtea {
            class Config {
                public static PACKAGE_NAME: string
                public static PACKAGE_VERSION: string
            }
            namespace pulseaudio {
                class SecurityWrapper {
                    constructor()
                    static loadNativeLibrary(): void
                }
                class SecurityWrapper$1 implements java.security.PrivilegedAction<java.lang.Boolean> {
                    constructor()
                    public run(): boolean
                    public run(): java.lang.Object
                }
                class PulseAudioTargetPort extends org.classpath.icedtea.pulseaudio.PulseAudioPort {
                    constructor(arg0: string)
                    public open(): void
                    public close(): void
                    public native_set_volume(arg0: float): byte[]
                    public native_update_volume(): byte[]
                    public getLineInfo(): javax.sound.sampled.Line$Info
                }
                class PulseAudioTargetDataLine extends org.classpath.icedtea.pulseaudio.PulseAudioDataLine implements javax.sound.sampled.TargetDataLine {
                    public static DEFAULT_TARGETDATALINE_NAME: string
                    static $assertionsDisabled: boolean
                    constructor(arg0: javax.sound.sampled.AudioFormat[], arg1: javax.sound.sampled.AudioFormat)
                    public close(): void
                    public open(arg0: javax.sound.sampled.AudioFormat, arg1: int): void
                    public open(arg0: javax.sound.sampled.AudioFormat): void
                    protected connectLine(arg0: int, arg1: org.classpath.icedtea.pulseaudio.Stream): void
                    public read(arg0: byte[], arg1: int, arg2: int): int
                    public drain(): void
                    public flush(): void
                    public available(): int
                    public getFramePosition(): int
                    public getLongFramePosition(): long
                    public getMicrosecondPosition(): long
                    public start(): void
                    public stop(): void
                    public getLineInfo(): javax.sound.sampled.Line$Info
                    public getBytesInBuffer(): int
                    public getName(): string
                    public setName(arg0: string): void
                    public getLevel(): float
                    public getFormat(): javax.sound.sampled.AudioFormat
                    public getBufferSize(): int
                    public getStream(): org.classpath.icedtea.pulseaudio.Stream
                    public isRunning(): boolean
                    public isActive(): boolean
                    public open(): void
                    public removeLineListener(arg0: javax.sound.sampled.LineListener): void
                    public isOpen(): boolean
                    public isControlSupported(arg0: javax.sound.sampled.Control$Type): boolean
                    public getControls(): javax.sound.sampled.Control[]
                    public getControl(arg0: javax.sound.sampled.Control$Type): javax.sound.sampled.Control
                    public addLineListener(arg0: javax.sound.sampled.LineListener): void
                }
                class PulseAudioSourcePort extends org.classpath.icedtea.pulseaudio.PulseAudioPort {
                    constructor(arg0: string)
                    public open(): void
                    public close(): void
                    public native_set_volume(arg0: float): byte[]
                    public native_update_volume(): byte[]
                    public getLineInfo(): javax.sound.sampled.Line$Info
                }
                class PulseAudioSourceDataLine extends org.classpath.icedtea.pulseaudio.PulseAudioDataLine implements javax.sound.sampled.SourceDataLine , org.classpath.icedtea.pulseaudio.PulseAudioPlaybackLine {
                    public static DEFAULT_SOURCEDATALINE_NAME: string
                    static $assertionsDisabled: boolean
                    constructor(arg0: javax.sound.sampled.AudioFormat[], arg1: javax.sound.sampled.AudioFormat)
                    public open(arg0: javax.sound.sampled.AudioFormat, arg1: int): void
                    public open(arg0: javax.sound.sampled.AudioFormat): void
                    public native_set_volume(arg0: float): byte[]
                    public native_update_volume(): byte[]
                    public getCachedVolume(): float
                    public setCachedVolume(arg0: float): void
                    protected connectLine(arg0: int, arg1: org.classpath.icedtea.pulseaudio.Stream): void
                    public write(arg0: byte[], arg1: int, arg2: int): int
                    public available(): int
                    public getFramePosition(): int
                    public getLongFramePosition(): long
                    public getMicrosecondPosition(): long
                    public drain(): void
                    public flush(): void
                    public close(): void
                    public getLineInfo(): javax.sound.sampled.Line$Info
                    public getBytesInBuffer(): int
                    public getName(): string
                    public setName(arg0: string): void
                    public getLevel(): float
                    public getFormat(): javax.sound.sampled.AudioFormat
                    public getBufferSize(): int
                    public getStream(): org.classpath.icedtea.pulseaudio.Stream
                    public isRunning(): boolean
                    public isActive(): boolean
                    public stop(): void
                    public start(): void
                    public open(): void
                    public removeLineListener(arg0: javax.sound.sampled.LineListener): void
                    public isOpen(): boolean
                    public isControlSupported(arg0: javax.sound.sampled.Control$Type): boolean
                    public getControls(): javax.sound.sampled.Control[]
                    public getControl(arg0: javax.sound.sampled.Control$Type): javax.sound.sampled.Control
                    public addLineListener(arg0: javax.sound.sampled.LineListener): void
                }
                class PulseAudioVolumeControl extends javax.sound.sampled.FloatControl {
                    static MAX_VOLUME: int
                    static MIN_VOLUME: int
                    protected constructor(arg0: org.classpath.icedtea.pulseaudio.PulseAudioPlaybackLine, arg1: org.classpath.icedtea.pulseaudio.EventLoop)
                    public setValue(arg0: float): void
                    protected setStreamVolume(arg0: float): void
                    public getValue(): float
                }
                abstract class PulseAudioPort extends org.classpath.icedtea.pulseaudio.PulseAudioLine implements javax.sound.sampled.Port , org.classpath.icedtea.pulseaudio.PulseAudioPlaybackLine {
                    constructor(arg0: string)
                    public native_set_volume(arg0: float): byte[]
                    public native_update_volume(): byte[]
                    public getCachedVolume(): float
                    public setCachedVolume(arg0: float): void
                    update_channels_and_volume(arg0: int, arg1: float): void
                    public close(): void
                    public getLineInfo(): javax.sound.sampled.Line$Info
                    public open(): void
                    public getName(): string
                }
                class PulseAudioMixerProvider extends javax.sound.sampled.spi.MixerProvider {
                    public constructor()
                    public getMixer(arg0: javax.sound.sampled.Mixer$Info): javax.sound.sampled.Mixer
                    public getMixerInfo(): javax.sound.sampled.Mixer$Info[]
                }
                class PulseAudioMixerInfo extends javax.sound.sampled.Mixer$Info {
                    protected constructor(arg0: string, arg1: string, arg2: string, arg3: string)
                    public static getInfo(): org.classpath.icedtea.pulseaudio.PulseAudioMixerInfo
                }
                class PulseAudioMixer implements javax.sound.sampled.Mixer {
                    static PULSEAUDIO_FORMAT_KEY: string
                    public static getInstance(): org.classpath.icedtea.pulseaudio.PulseAudioMixer
                    public getLine(arg0: javax.sound.sampled.Line$Info): javax.sound.sampled.Line
                    public getMaxLines(arg0: javax.sound.sampled.Line$Info): int
                    public getMixerInfo(): javax.sound.sampled.Mixer$Info
                    public getSourceLineInfo(): javax.sound.sampled.Line$Info[]
                    public getSourceLineInfo(arg0: javax.sound.sampled.Line$Info): javax.sound.sampled.Line$Info[]
                    public getSourceLines(): javax.sound.sampled.Line[]
                    public getTargetLineInfo(): javax.sound.sampled.Line$Info[]
                    public getTargetLineInfo(arg0: javax.sound.sampled.Line$Info): javax.sound.sampled.Line$Info[]
                    public getTargetLines(): javax.sound.sampled.Line[]
                    public isLineSupported(arg0: javax.sound.sampled.Line$Info): boolean
                    public isSynchronizationSupported(arg0: javax.sound.sampled.Line[], arg1: boolean): boolean
                    public synchronize(arg0: javax.sound.sampled.Line[], arg1: boolean): void
                    public unsynchronize(arg0: javax.sound.sampled.Line[]): void
                    public addLineListener(arg0: javax.sound.sampled.LineListener): void
                    public close(): void
                    public getControl(arg0: javax.sound.sampled.Control$Type): javax.sound.sampled.Control
                    public getControls(): javax.sound.sampled.Control[]
                    public getLineInfo(): javax.sound.sampled.Line$Info
                    public isControlSupported(arg0: javax.sound.sampled.Control$Type): boolean
                    public isOpen(): boolean
                    public open(): void
                    public openLocal(): void
                    public openLocal(arg0: string): void
                    public openRemote(arg0: string, arg1: string): void
                    public openRemote(arg0: string, arg1: string, arg2: int): void
                    public removeLineListener(arg0: javax.sound.sampled.LineListener): void
                    addSourceLine(arg0: org.classpath.icedtea.pulseaudio.PulseAudioLine): void
                    removeSourceLine(arg0: org.classpath.icedtea.pulseaudio.PulseAudioLine): void
                    addTargetLine(arg0: org.classpath.icedtea.pulseaudio.PulseAudioLine): void
                    removeTargetLine(arg0: org.classpath.icedtea.pulseaudio.PulseAudioLine): void
                    refreshSourceAndTargetLines(): void
                    static access$000(arg0: org.classpath.icedtea.pulseaudio.PulseAudioMixer, arg1: javax.sound.sampled.LineEvent): void
                }
                class PulseAudioMixer$2 implements org.classpath.icedtea.pulseaudio.ContextListener {
                    val$ready: java.util.concurrent.Semaphore
                    this$0: org.classpath.icedtea.pulseaudio.PulseAudioMixer
                    constructor(arg0: org.classpath.icedtea.pulseaudio.PulseAudioMixer, arg1: java.util.concurrent.Semaphore)
                    public update(arg0: org.classpath.icedtea.pulseaudio.ContextEvent): void
                }
                class PulseAudioMixer$1 implements org.classpath.icedtea.pulseaudio.ContextListener {
                    this$0: org.classpath.icedtea.pulseaudio.PulseAudioMixer
                    constructor(arg0: org.classpath.icedtea.pulseaudio.PulseAudioMixer)
                    public update(arg0: org.classpath.icedtea.pulseaudio.ContextEvent): void
                }
                class StreamSampleSpecification {
                    public constructor(arg0: org.classpath.icedtea.pulseaudio.Stream$Format, arg1: int, arg2: int)
                    public constructor(arg0: string, arg1: int, arg2: int)
                    public getFormat(): org.classpath.icedtea.pulseaudio.Stream$Format
                    public getRate(): int
                    public getChannels(): int
                }
                class StreamBufferAttributes {
                    public static SANE_DEFAULT: int
                    public static MAX_VALUE: int
                    public static MIN_VALUE: int
                    constructor(arg0: int, arg1: int, arg2: int, arg3: int, arg4: int)
                    getMaxLength(): int
                    getTargetLength(): int
                    getPreBuffering(): int
                    getMinimumRequest(): int
                    getFragmentSize(): int
                }
                interface PulseAudioPlaybackLine {
                    SECONDS_TO_MICROSECONDS: int
                    native_set_volume(arg0: float): byte[]
                    native_update_volume(): byte[]
                    getCachedVolume(): float
                    setCachedVolume(arg0: float): void
                    isOpen(): boolean
                }
                abstract class PulseAudioLine implements javax.sound.sampled.Line {
                    protected lineListeners: java.util.List<javax.sound.sampled.LineListener>
                    protected controls: java.util.List<javax.sound.sampled.Control>
                    protected isOpen: boolean
                    constructor()
                    public addLineListener(arg0: javax.sound.sampled.LineListener): void
                    public close(): void
                    protected fireLineEvent(arg0: javax.sound.sampled.LineEvent): void
                    public getControl(arg0: javax.sound.sampled.Control$Type): javax.sound.sampled.Control
                    public getControls(): javax.sound.sampled.Control[]
                    public isControlSupported(arg0: javax.sound.sampled.Control$Type): boolean
                    public isOpen(): boolean
                    public removeLineListener(arg0: javax.sound.sampled.LineListener): void
                }
                abstract class PulseAudioDataLine extends org.classpath.icedtea.pulseaudio.PulseAudioLine implements javax.sound.sampled.DataLine {
                    protected static DEFAULT_BUFFER_SIZE: int
                    protected streamName: string
                    protected isStarted: boolean
                    protected dataWritten: boolean
                    protected supportedFormats: javax.sound.sampled.AudioFormat[]
                    protected currentFormat: javax.sound.sampled.AudioFormat
                    protected defaultFormat: javax.sound.sampled.AudioFormat
                    protected sendEvents: boolean
                    protected framesSinceOpen: long
                    protected eventLoop: org.classpath.icedtea.pulseaudio.EventLoop
                    protected semaphore: java.util.concurrent.Semaphore
                    protected stream: org.classpath.icedtea.pulseaudio.Stream
                    writeInterrupted: boolean
                    static $assertionsDisabled: boolean
                    constructor()
                    protected open(arg0: javax.sound.sampled.AudioFormat, arg1: int): void
                    protected open(arg0: javax.sound.sampled.AudioFormat): void
                    public open(): void
                    public close(): void
                    reconnectforSynchronization(arg0: org.classpath.icedtea.pulseaudio.Stream): void
                    public start(): void
                    public stop(): void
                    public isActive(): boolean
                    public isRunning(): boolean
                    protected connectLine(arg0: int, arg1: org.classpath.icedtea.pulseaudio.Stream): void
                    public getStream(): org.classpath.icedtea.pulseaudio.Stream
                    public getBufferSize(): int
                    public getFormat(): javax.sound.sampled.AudioFormat
                    public getLevel(): float
                    public setName(arg0: string): void
                    public getName(): string
                    public getBytesInBuffer(): int
                }
                class PulseAudioDataLine$5 implements org.classpath.icedtea.pulseaudio.Stream$CorkListener {
                    this$0: org.classpath.icedtea.pulseaudio.PulseAudioDataLine
                    constructor(arg0: org.classpath.icedtea.pulseaudio.PulseAudioDataLine)
                    public update(): void
                }
                class PulseAudioDataLine$4 implements org.classpath.icedtea.pulseaudio.Stream$WriteListener {
                    this$0: org.classpath.icedtea.pulseaudio.PulseAudioDataLine
                    constructor(arg0: org.classpath.icedtea.pulseaudio.PulseAudioDataLine)
                    public update(): void
                }
                class PulseAudioDataLine$3 implements org.classpath.icedtea.pulseaudio.Stream$PlaybackStartedListener {
                    this$0: org.classpath.icedtea.pulseaudio.PulseAudioDataLine
                    constructor(arg0: org.classpath.icedtea.pulseaudio.PulseAudioDataLine)
                    public update(): void
                }
                class PulseAudioDataLine$2 implements org.classpath.icedtea.pulseaudio.Stream$UnderflowListener {
                    this$0: org.classpath.icedtea.pulseaudio.PulseAudioDataLine
                    constructor(arg0: org.classpath.icedtea.pulseaudio.PulseAudioDataLine)
                    public update(): void
                }
                class PulseAudioDataLine$1 implements org.classpath.icedtea.pulseaudio.Stream$StateListener {
                    this$0: org.classpath.icedtea.pulseaudio.PulseAudioDataLine
                    constructor(arg0: org.classpath.icedtea.pulseaudio.PulseAudioDataLine)
                    public update(): void
                }
                class PulseAudioClip extends org.classpath.icedtea.pulseaudio.PulseAudioDataLine implements javax.sound.sampled.Clip , org.classpath.icedtea.pulseaudio.PulseAudioPlaybackLine {
                    public static DEFAULT_CLIP_NAME: string
                    constructor(arg0: javax.sound.sampled.AudioFormat[], arg1: javax.sound.sampled.AudioFormat)
                    protected connectLine(arg0: int, arg1: org.classpath.icedtea.pulseaudio.Stream): void
                    public available(): int
                    public close(): void
                    public drain(): void
                    public flush(): void
                    public getFrameLength(): int
                    public getFramePosition(): int
                    public getLongFramePosition(): long
                    public getMicrosecondLength(): long
                    public getMicrosecondPosition(): long
                    public loop(arg0: int): void
                    public open(): void
                    public open(arg0: javax.sound.sampled.AudioFormat, arg1: byte[], arg2: int, arg3: int): void
                    public native_set_volume(arg0: float): byte[]
                    public native_update_volume(): byte[]
                    public getCachedVolume(): float
                    public setCachedVolume(arg0: float): void
                    public open(arg0: javax.sound.sampled.AudioInputStream): void
                    public setFramePosition(arg0: int): void
                    public setLoopPoints(arg0: int, arg1: int): void
                    public setMicrosecondPosition(arg0: long): void
                    public start(): void
                    public stop(): void
                    public getLineInfo(): javax.sound.sampled.Line$Info
                    public getBytesInBuffer(): int
                    public getName(): string
                    public setName(arg0: string): void
                    public getLevel(): float
                    public getFormat(): javax.sound.sampled.AudioFormat
                    public getBufferSize(): int
                    public getStream(): org.classpath.icedtea.pulseaudio.Stream
                    public isRunning(): boolean
                    public isActive(): boolean
                    public removeLineListener(arg0: javax.sound.sampled.LineListener): void
                    public isOpen(): boolean
                    public isControlSupported(arg0: javax.sound.sampled.Control$Type): boolean
                    public getControls(): javax.sound.sampled.Control[]
                    public getControl(arg0: javax.sound.sampled.Control$Type): javax.sound.sampled.Control
                    public addLineListener(arg0: javax.sound.sampled.LineListener): void
                    static access$000(arg0: org.classpath.icedtea.pulseaudio.PulseAudioClip): int
                    static access$100(arg0: org.classpath.icedtea.pulseaudio.PulseAudioClip): int
                    static access$200(arg0: org.classpath.icedtea.pulseaudio.PulseAudioClip, arg1: int, arg2: int): void
                    static access$300(arg0: org.classpath.icedtea.pulseaudio.PulseAudioClip): int
                    static access$400(arg0: org.classpath.icedtea.pulseaudio.PulseAudioClip): java.lang.Object
                    static access$002(arg0: org.classpath.icedtea.pulseaudio.PulseAudioClip, arg1: int): int
                    static access$500(arg0: org.classpath.icedtea.pulseaudio.PulseAudioClip): int
                    static access$310(arg0: org.classpath.icedtea.pulseaudio.PulseAudioClip): int
                }
                class PulseAudioClip$1 implements org.classpath.icedtea.pulseaudio.Stream$WriteListener {
                    this$0: org.classpath.icedtea.pulseaudio.PulseAudioClip
                    constructor(arg0: org.classpath.icedtea.pulseaudio.PulseAudioClip)
                    public update(): void
                }
                class PulseAudioClip$ClipThread extends java.lang.Thread {
                    this$0: org.classpath.icedtea.pulseaudio.PulseAudioClip
                    public run(): void
                    constructor(arg0: org.classpath.icedtea.pulseaudio.PulseAudioClip, arg1: org.classpath.icedtea.pulseaudio.PulseAudioClip$1)
                }
                class Stream {
                    public static STATE_UNCONNECTED: long
                    public static STATE_CREATING: long
                    public static STATE_READY: long
                    public static STATE_FAILED: long
                    public static STATE_TERMINATED: long
                    public static FLAG_NOFLAGS: long
                    public static FLAG_START_CORKED: long
                    public static FLAG_INTERPOLATE_TIMING: long
                    public static FLAG_NOT_MONOTONIC: long
                    public static FLAG_AUTO_TIMING_UPDATE: long
                    public static FLAG_NO_REMAP_CHANNELS: long
                    public static FLAG_NO_REMIX_CHANNELS: long
                    public static FLAG_FIX_FORMAT: long
                    public static FLAG_FIX_RATE: long
                    public static FLAG_FIX_CHANNELS: long
                    public static FLAG_DONT_MOVE: long
                    public static FLAG_VARIABLE_RATE: long
                    public static FLAG_PEAK_DETECT: long
                    public static FLAG_START_MUTED: long
                    public static FLAG_ADJUST_LATENCY: long
                    public static FLAG_EARLY_REQUESTS: long
                    public static FLAG_DONT_INHIBIT_AUTO_SUSPEND: long
                    public static FLAG_START_UNMUTED: long
                    public static FLAG_FAIL_ON_SUSPEND: long
                    public static DEFAULT_DEVICE: string
                    static $assertionsDisabled: boolean
                    public static checkNativeStreamState(arg0: long): long
                    public bytesInBuffer(): int
                    native_set_volume(arg0: float): byte[]
                    native_update_volume(): byte[]
                    constructor(arg0: byte[], arg1: string, arg2: org.classpath.icedtea.pulseaudio.Stream$Format, arg3: int, arg4: int)
                    addStateListener(arg0: org.classpath.icedtea.pulseaudio.Stream$StateListener | org.classpath.icedtea.pulseaudio.Stream$StateListener): void
                    removeStateListener(arg0: org.classpath.icedtea.pulseaudio.Stream$StateListener | org.classpath.icedtea.pulseaudio.Stream$StateListener): void
                    addWriteListener(arg0: org.classpath.icedtea.pulseaudio.Stream$WriteListener | org.classpath.icedtea.pulseaudio.Stream$WriteListener): void
                    removeWriteListener(arg0: org.classpath.icedtea.pulseaudio.Stream$WriteListener | org.classpath.icedtea.pulseaudio.Stream$WriteListener): void
                    addReadListener(arg0: org.classpath.icedtea.pulseaudio.Stream$ReadListener | org.classpath.icedtea.pulseaudio.Stream$ReadListener): void
                    removeReadListener(arg0: org.classpath.icedtea.pulseaudio.Stream$ReadListener | org.classpath.icedtea.pulseaudio.Stream$ReadListener): void
                    addOverflowListener(arg0: org.classpath.icedtea.pulseaudio.Stream$OverflowListener | org.classpath.icedtea.pulseaudio.Stream$OverflowListener): void
                    removeOverflowListener(arg0: org.classpath.icedtea.pulseaudio.Stream$OverflowListener | org.classpath.icedtea.pulseaudio.Stream$OverflowListener): void
                    addUnderflowListener(arg0: org.classpath.icedtea.pulseaudio.Stream$UnderflowListener | org.classpath.icedtea.pulseaudio.Stream$UnderflowListener): void
                    removeUnderflowListener(arg0: org.classpath.icedtea.pulseaudio.Stream$UnderflowListener | org.classpath.icedtea.pulseaudio.Stream$UnderflowListener): void
                    addCorkListener(arg0: org.classpath.icedtea.pulseaudio.Stream$CorkListener | org.classpath.icedtea.pulseaudio.Stream$CorkListener): void
                    removeCorkListener(arg0: org.classpath.icedtea.pulseaudio.Stream$CorkListener | org.classpath.icedtea.pulseaudio.Stream$CorkListener): void
                    addPlaybackStartedListener(arg0: org.classpath.icedtea.pulseaudio.Stream$PlaybackStartedListener | org.classpath.icedtea.pulseaudio.Stream$PlaybackStartedListener): void
                    removePlaybackStartedListener(arg0: org.classpath.icedtea.pulseaudio.Stream$PlaybackStartedListener | org.classpath.icedtea.pulseaudio.Stream$PlaybackStartedListener): void
                    addLatencyUpdateListener(arg0: org.classpath.icedtea.pulseaudio.Stream$LatencyUpdateListener | org.classpath.icedtea.pulseaudio.Stream$LatencyUpdateListener): void
                    removeLatencyUpdateListener(arg0: org.classpath.icedtea.pulseaudio.Stream$LatencyUpdateListener | org.classpath.icedtea.pulseaudio.Stream$LatencyUpdateListener): void
                    addMovedListener(arg0: org.classpath.icedtea.pulseaudio.Stream$MovedListener | org.classpath.icedtea.pulseaudio.Stream$MovedListener): void
                    removeMovedListener(arg0: org.classpath.icedtea.pulseaudio.Stream$MovedListener | org.classpath.icedtea.pulseaudio.Stream$MovedListener): void
                    addSuspendedListener(arg0: org.classpath.icedtea.pulseaudio.Stream$SuspendedListener | org.classpath.icedtea.pulseaudio.Stream$SuspendedListener): void
                    removeSuspendedListener(arg0: org.classpath.icedtea.pulseaudio.Stream$SuspendedListener | org.classpath.icedtea.pulseaudio.Stream$SuspendedListener): void
                    getState(): long
                    getContextPointer(): byte[]
                    getSinkInputIndex(): int
                    getDeviceIndex(): int
                    getBufferSize(): int
                    getDeviceName(): string
                    isSuspended(): boolean
                    connectForPlayback(arg0: string, arg1: org.classpath.icedtea.pulseaudio.StreamBufferAttributes, arg2: byte[]): void
                    connectForRecording(arg0: string, arg1: long, arg2: org.classpath.icedtea.pulseaudio.StreamBufferAttributes): void
                    disconnect(): void
                    write(arg0: byte[], arg1: int, arg2: int): int
                    peek(): byte[]
                    drop(): void
                    getWritableSize(): int
                    getReableSize(): int
                    drain(): org.classpath.icedtea.pulseaudio.Operation
                    updateTimingInfo(): org.classpath.icedtea.pulseaudio.Operation
                    isCorked(): boolean
                    cork(arg0: boolean): org.classpath.icedtea.pulseaudio.Operation
                    cork(): org.classpath.icedtea.pulseaudio.Operation
                    unCork(): org.classpath.icedtea.pulseaudio.Operation
                    flush(): org.classpath.icedtea.pulseaudio.Operation
                    triggerStart(): org.classpath.icedtea.pulseaudio.Operation
                    setName(arg0: string): org.classpath.icedtea.pulseaudio.Operation
                    getTime(): long
                    getLatency(): long
                    getFormat(): org.classpath.icedtea.pulseaudio.Stream$Format
                    getBufferAttributes(): org.classpath.icedtea.pulseaudio.StreamBufferAttributes
                    setBufferAtrributes(arg0: org.classpath.icedtea.pulseaudio.StreamBufferAttributes): org.classpath.icedtea.pulseaudio.Operation
                    updateSampleRate(arg0: int): org.classpath.icedtea.pulseaudio.Operation
                    getStreamPointer(): byte[]
                    free(): void
                    getCachedVolume(): float
                    setCachedVolume(arg0: float): void
                    update_channels_and_volume(arg0: int, arg1: float): void
                }
                class Stream$Format extends java.lang.Enum<org.classpath.icedtea.pulseaudio.Stream$Format> {
                    public static PA_SAMPLE_U8: org.classpath.icedtea.pulseaudio.Stream$Format
                    public static PA_SAMPLE_ULAW: org.classpath.icedtea.pulseaudio.Stream$Format
                    public static PA_SAMPLE_ALAW: org.classpath.icedtea.pulseaudio.Stream$Format
                    public static PA_SAMPLE_S16LE: org.classpath.icedtea.pulseaudio.Stream$Format
                    public static PA_SAMPLE_S16BE: org.classpath.icedtea.pulseaudio.Stream$Format
                    public static PA_SAMPLE_FLOAT32LE: org.classpath.icedtea.pulseaudio.Stream$Format
                    public static PA_SAMPLE_FLOAT32BE: org.classpath.icedtea.pulseaudio.Stream$Format
                    public static PA_SAMPLE_S32LE: org.classpath.icedtea.pulseaudio.Stream$Format
                    public static PA_SAMPLE_S32BE: org.classpath.icedtea.pulseaudio.Stream$Format
                    public static values(): org.classpath.icedtea.pulseaudio.Stream$Format[]
                    public static valueOf(arg0: string): org.classpath.icedtea.pulseaudio.Stream$Format
                }
                interface Stream$SuspendedListener {
                    update(): void
                }
                interface Stream$SuspendedListener$$Lambda {
                    (): void
                }
                interface Stream$UpdateTimingInfoListener {
                    update(): void
                }
                interface Stream$UpdateTimingInfoListener$$Lambda {
                    (): void
                }
                interface Stream$MovedListener {
                    update(): void
                }
                interface Stream$MovedListener$$Lambda {
                    (): void
                }
                interface Stream$LatencyUpdateListener {
                    update(): void
                }
                interface Stream$LatencyUpdateListener$$Lambda {
                    (): void
                }
                interface Stream$PlaybackStartedListener {
                    update(): void
                }
                interface Stream$PlaybackStartedListener$$Lambda {
                    (): void
                }
                interface Stream$UnderflowListener {
                    update(): void
                }
                interface Stream$UnderflowListener$$Lambda {
                    (): void
                }
                interface Stream$OverflowListener {
                    update(): void
                }
                interface Stream$OverflowListener$$Lambda {
                    (): void
                }
                interface Stream$ReadListener {
                    update(): void
                }
                interface Stream$ReadListener$$Lambda {
                    (): void
                }
                interface Stream$WriteListener {
                    update(): void
                }
                interface Stream$WriteListener$$Lambda {
                    (): void
                }
                interface Stream$CorkListener {
                    update(): void
                }
                interface Stream$CorkListener$$Lambda {
                    (): void
                }
                interface Stream$StateListener {
                    update(): void
                }
                interface Stream$StateListener$$Lambda {
                    (): void
                }
                class Operation {
                    public static RUNNING: long
                    public static DONE: long
                    public static CANCELLED: long
                    static $assertionsDisabled: boolean
                    constructor(arg0: byte[])
                    protected finalize(): void
                    addReference(): void
                    releaseReference(): void
                    isNull(): boolean
                    getState(): long
                    waitForCompletion(): void
                }
                class EventLoop implements java.lang.Runnable {
                    threadLock: java.lang.Object
                    static $assertionsDisabled: boolean
                    static getEventLoop(): org.classpath.icedtea.pulseaudio.EventLoop
                    setAppName(arg0: string): void
                    setServer(arg0: string): void
                    public run(): void
                    addContextListener(arg0: org.classpath.icedtea.pulseaudio.ContextListener | org.classpath.icedtea.pulseaudio.ContextListener$$Lambda): void
                    removeContextListener(arg0: org.classpath.icedtea.pulseaudio.ContextListener | org.classpath.icedtea.pulseaudio.ContextListener$$Lambda): void
                    getStatus(): long
                    update(arg0: long): void
                    getContextPointer(): byte[]
                    getMainLoopPointer(): byte[]
                    updateTargetPortNameList(): java.util.List<java.lang.String>
                    protected updateSourcePortNameList(): java.util.List<java.lang.String>
                    public source_callback(arg0: string): void
                    public sink_callback(arg0: string): void
                }
                class Debug {
                    constructor()
                    static println(arg0: string): void
                    static print(arg0: org.classpath.icedtea.pulseaudio.Debug$DebugLevel, arg1: string): void
                    static println(arg0: org.classpath.icedtea.pulseaudio.Debug$DebugLevel, arg1: string): void
                }
                class Debug$DebugLevel extends java.lang.Enum<org.classpath.icedtea.pulseaudio.Debug$DebugLevel> {
                    public static Verbose: org.classpath.icedtea.pulseaudio.Debug$DebugLevel
                    public static Debug: org.classpath.icedtea.pulseaudio.Debug$DebugLevel
                    public static Info: org.classpath.icedtea.pulseaudio.Debug$DebugLevel
                    public static Warning: org.classpath.icedtea.pulseaudio.Debug$DebugLevel
                    public static Error: org.classpath.icedtea.pulseaudio.Debug$DebugLevel
                    public static None: org.classpath.icedtea.pulseaudio.Debug$DebugLevel
                    public static values(): org.classpath.icedtea.pulseaudio.Debug$DebugLevel[]
                    public static valueOf(arg0: string): org.classpath.icedtea.pulseaudio.Debug$DebugLevel
                }
                interface ContextListener {
                    update(arg0: org.classpath.icedtea.pulseaudio.ContextEvent): void
                }
                interface ContextListener$$Lambda {
                    (arg0: org.classpath.icedtea.pulseaudio.ContextEvent): void
                }
                class ContextEvent {
                    static UNCONNECTED: long
                    static CONNECTING: long
                    static AUTHORIZING: long
                    static SETTING_NAME: long
                    static READY: long
                    static FAILED: long
                    static TERMINATED: long
                    public static checkNativeEnumReturn(arg0: long): long
                    public constructor(arg0: long)
                    public getType(): long
                }
            }
        }
    }
}
