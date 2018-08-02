declare namespace sun {
    namespace net {
interface ProgressListener extends java.util.EventListener {
    progressStart(arg0: sun.net.ProgressEvent): void
    progressUpdate(arg0: sun.net.ProgressEvent): void
    progressFinish(arg0: sun.net.ProgressEvent): void
}

    }
}