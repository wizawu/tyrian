declare namespace sun {
    namespace net {
        class ProgressMonitor {
            public constructor()
            public static getDefault(): sun.net.ProgressMonitor
            public static setDefault(arg0: sun.net.ProgressMonitor): void
            public static setMeteringPolicy(arg0: sun.net.ProgressMeteringPolicy): void
            public getProgressSources(): java.util.ArrayList<sun.net.ProgressSource>
            public getProgressUpdateThreshold(): int
            public shouldMeterInput(arg0: java.net.URL, arg1: java.lang.String | string): boolean
            public registerSource(arg0: sun.net.ProgressSource): void
            public unregisterSource(arg0: sun.net.ProgressSource): void
            public updateProgress(arg0: sun.net.ProgressSource): void
            public addProgressListener(arg0: sun.net.ProgressListener): void
            public removeProgressListener(arg0: sun.net.ProgressListener): void
            public static class: java.lang.Class<any>
        }
    }
}