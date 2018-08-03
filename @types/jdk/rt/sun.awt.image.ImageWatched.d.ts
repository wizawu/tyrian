declare namespace sun {
    namespace awt {
        namespace image {
            abstract class ImageWatched {
                public static endlink: sun.awt.image.ImageWatched$Link
                public watcherList: sun.awt.image.ImageWatched$Link
                public constructor()
                public addWatcher(arg0: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): void
                public isWatcher(arg0: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): boolean
                public removeWatcher(arg0: java.awt.image.ImageObserver | java.awt.image.ImageObserver$$Lambda): void
                public isWatcherListEmpty(): boolean
                public newInfo(arg0: java.awt.Image, arg1: int, arg2: int, arg3: int, arg4: int, arg5: int): void
                protected notifyWatcherListEmpty(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}