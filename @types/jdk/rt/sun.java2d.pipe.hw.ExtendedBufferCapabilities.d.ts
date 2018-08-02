declare namespace sun {
    namespace java2d {
        namespace pipe {
            namespace hw {
                class ExtendedBufferCapabilities extends java.awt.BufferCapabilities {
                    public constructor(arg0: java.awt.BufferCapabilities)
                    public constructor(arg0: java.awt.ImageCapabilities, arg1: java.awt.ImageCapabilities, arg2: java.awt.BufferCapabilities$FlipContents)
                    public constructor(arg0: java.awt.ImageCapabilities, arg1: java.awt.ImageCapabilities, arg2: java.awt.BufferCapabilities$FlipContents, arg3: sun.java2d.pipe.hw.ExtendedBufferCapabilities$VSyncType)
                    public constructor(arg0: java.awt.BufferCapabilities, arg1: sun.java2d.pipe.hw.ExtendedBufferCapabilities$VSyncType)
                    public derive(arg0: sun.java2d.pipe.hw.ExtendedBufferCapabilities$VSyncType): sun.java2d.pipe.hw.ExtendedBufferCapabilities
                    public getVSync(): sun.java2d.pipe.hw.ExtendedBufferCapabilities$VSyncType
                    public isPageFlipping(): boolean
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}