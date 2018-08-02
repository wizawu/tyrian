declare namespace com {
    namespace ibm {
        namespace cuda {
interface CudaError {
    Success: int
    MissingConfiguration: int
    MemoryAllocation: int
    InitializationError: int
    LaunchFailure: int
    LaunchTimeout: int
    LaunchOutOfResources: int
    InvalidDeviceFunction: int
    InvalidConfiguration: int
    InvalidDevice: int
    InvalidValue: int
    InvalidPitchValue: int
    InvalidSymbol: int
    MapBufferObjectFailed: int
    UnmapBufferObjectFailed: int
    InvalidHostPointer: int
    InvalidDevicePointer: int
    InvalidTexture: int
    InvalidTextureBinding: int
    InvalidChannelDescriptor: int
    InvalidMemcpyDirection: int
    InvalidFilterSetting: int
    InvalidNormSetting: int
    CudartUnloading: int
    Unknown: int
    InvalidResourceHandle: int
    NotReady: int
    InsufficientDriver: int
    SetOnActiveProcess: int
    InvalidSurface: int
    NoDevice: int
    ECCUncorrectable: int
    SharedObjectSymbolNotFound: int
    SharedObjectInitFailed: int
    UnsupportedLimit: int
    DuplicateVariableName: int
    DuplicateTextureName: int
    DuplicateSurfaceName: int
    DevicesUnavailable: int
    InvalidKernelImage: int
    NoKernelImageForDevice: int
    IncompatibleDriverContext: int
    PeerAccessAlreadyEnabled: int
    PeerAccessNotEnabled: int
    DeviceAlreadyInUse: int
    ProfilerDisabled: int
    Assert: int
    TooManyPeers: int
    HostMemoryAlreadyRegistered: int
    HostMemoryNotRegistered: int
    OperatingSystem: int
    PeerAccessUnsupported: int
    LaunchMaxDepthExceeded: int
    LaunchFileScopedTex: int
    LaunchFileScopedSurf: int
    SyncDepthExceeded: int
    LaunchPendingCountExceeded: int
    NotPermitted: int
    NotSupported: int
    StartupFailure: int
}

        }
    }
}