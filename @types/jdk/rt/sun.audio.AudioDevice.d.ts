declare namespace sun {
    namespace audio {
        class AudioDevice {
            public static device: sun.audio.AudioDevice
            public openChannel(arg0: java.io.InputStream): void
            public closeChannel(arg0: java.io.InputStream): void
            public open(): void
            public close(): void
            public play(): void
            public closeStreams(): void
            public openChannels(): int
            public static class: java.lang.Class<any>
        }
    }
}