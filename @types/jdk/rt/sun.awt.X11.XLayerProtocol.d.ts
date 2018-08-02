declare namespace sun {
    namespace awt {
        namespace X11 {
interface XLayerProtocol {
    LAYER_NORMAL: int
    LAYER_ALWAYS_ON_TOP: int
    supportsLayer(arg0: int): boolean
    setLayer(arg0: sun.awt.X11.XWindowPeer, arg1: int): void
}

        }
    }
}