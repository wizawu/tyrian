declare namespace com {
    namespace ibm {
        namespace cuda {
            class CudaDevice {
                public static readonly ATTRIBUTE_ASYNC_ENGINE_COUNT: int
                public static readonly ATTRIBUTE_CAN_MAP_HOST_MEMORY: int
                public static readonly ATTRIBUTE_CLOCK_RATE: int
                public static readonly ATTRIBUTE_COMPUTE_CAPABILITY: int
                public static readonly ATTRIBUTE_COMPUTE_CAPABILITY_MAJOR: int
                public static readonly ATTRIBUTE_COMPUTE_CAPABILITY_MINOR: int
                public static readonly ATTRIBUTE_COMPUTE_MODE: int
                public static readonly ATTRIBUTE_CONCURRENT_KERNELS: int
                public static readonly ATTRIBUTE_ECC_ENABLED: int
                public static readonly ATTRIBUTE_GLOBAL_MEMORY_BUS_WIDTH: int
                public static readonly ATTRIBUTE_INTEGRATED: int
                public static readonly ATTRIBUTE_KERNEL_EXEC_TIMEOUT: int
                public static readonly ATTRIBUTE_L2_CACHE_SIZE: int
                public static readonly ATTRIBUTE_MAX_BLOCK_DIM_X: int
                public static readonly ATTRIBUTE_MAX_BLOCK_DIM_Y: int
                public static readonly ATTRIBUTE_MAX_BLOCK_DIM_Z: int
                public static readonly ATTRIBUTE_MAX_GRID_DIM_X: int
                public static readonly ATTRIBUTE_MAX_GRID_DIM_Y: int
                public static readonly ATTRIBUTE_MAX_GRID_DIM_Z: int
                public static readonly ATTRIBUTE_MAX_PITCH: int
                public static readonly ATTRIBUTE_MAX_REGISTERS_PER_BLOCK: int
                public static readonly ATTRIBUTE_MAX_SHARED_MEMORY_PER_BLOCK: int
                public static readonly ATTRIBUTE_MAX_THREADS_PER_BLOCK: int
                public static readonly ATTRIBUTE_MAX_THREADS_PER_MULTIPROCESSOR: int
                public static readonly ATTRIBUTE_MAXIMUM_SURFACE1D_LAYERED_LAYERS: int
                public static readonly ATTRIBUTE_MAXIMUM_SURFACE1D_LAYERED_WIDTH: int
                public static readonly ATTRIBUTE_MAXIMUM_SURFACE1D_WIDTH: int
                public static readonly ATTRIBUTE_MAXIMUM_SURFACE2D_HEIGHT: int
                public static readonly ATTRIBUTE_MAXIMUM_SURFACE2D_LAYERED_HEIGHT: int
                public static readonly ATTRIBUTE_MAXIMUM_SURFACE2D_LAYERED_LAYERS: int
                public static readonly ATTRIBUTE_MAXIMUM_SURFACE2D_LAYERED_WIDTH: int
                public static readonly ATTRIBUTE_MAXIMUM_SURFACE2D_WIDTH: int
                public static readonly ATTRIBUTE_MAXIMUM_SURFACE3D_DEPTH: int
                public static readonly ATTRIBUTE_MAXIMUM_SURFACE3D_HEIGHT: int
                public static readonly ATTRIBUTE_MAXIMUM_SURFACE3D_WIDTH: int
                public static readonly ATTRIBUTE_MAXIMUM_SURFACECUBEMAP_LAYERED_LAYERS: int
                public static readonly ATTRIBUTE_MAXIMUM_SURFACECUBEMAP_LAYERED_WIDTH: int
                public static readonly ATTRIBUTE_MAXIMUM_SURFACECUBEMAP_WIDTH: int
                public static readonly ATTRIBUTE_MAXIMUM_TEXTURE1D_LAYERED_LAYERS: int
                public static readonly ATTRIBUTE_MAXIMUM_TEXTURE1D_LAYERED_WIDTH: int
                public static readonly ATTRIBUTE_MAXIMUM_TEXTURE1D_LINEAR_WIDTH: int
                public static readonly ATTRIBUTE_MAXIMUM_TEXTURE1D_MIPMAPPED_WIDTH: int
                public static readonly ATTRIBUTE_MAXIMUM_TEXTURE1D_WIDTH: int
                public static readonly ATTRIBUTE_MAXIMUM_TEXTURE2D_GATHER_HEIGHT: int
                public static readonly ATTRIBUTE_MAXIMUM_TEXTURE2D_GATHER_WIDTH: int
                public static readonly ATTRIBUTE_MAXIMUM_TEXTURE2D_HEIGHT: int
                public static readonly ATTRIBUTE_MAXIMUM_TEXTURE2D_LAYERED_HEIGHT: int
                public static readonly ATTRIBUTE_MAXIMUM_TEXTURE2D_LAYERED_LAYERS: int
                public static readonly ATTRIBUTE_MAXIMUM_TEXTURE2D_LAYERED_WIDTH: int
                public static readonly ATTRIBUTE_MAXIMUM_TEXTURE2D_LINEAR_HEIGHT: int
                public static readonly ATTRIBUTE_MAXIMUM_TEXTURE2D_LINEAR_PITCH: int
                public static readonly ATTRIBUTE_MAXIMUM_TEXTURE2D_LINEAR_WIDTH: int
                public static readonly ATTRIBUTE_MAXIMUM_TEXTURE2D_MIPMAPPED_HEIGHT: int
                public static readonly ATTRIBUTE_MAXIMUM_TEXTURE2D_MIPMAPPED_WIDTH: int
                public static readonly ATTRIBUTE_MAXIMUM_TEXTURE2D_WIDTH: int
                public static readonly ATTRIBUTE_MAXIMUM_TEXTURE3D_DEPTH: int
                public static readonly ATTRIBUTE_MAXIMUM_TEXTURE3D_DEPTH_ALTERNATE: int
                public static readonly ATTRIBUTE_MAXIMUM_TEXTURE3D_HEIGHT: int
                public static readonly ATTRIBUTE_MAXIMUM_TEXTURE3D_HEIGHT_ALTERNATE: int
                public static readonly ATTRIBUTE_MAXIMUM_TEXTURE3D_WIDTH: int
                public static readonly ATTRIBUTE_MAXIMUM_TEXTURE3D_WIDTH_ALTERNATE: int
                public static readonly ATTRIBUTE_MAXIMUM_TEXTURECUBEMAP_LAYERED_LAYERS: int
                public static readonly ATTRIBUTE_MAXIMUM_TEXTURECUBEMAP_LAYERED_WIDTH: int
                public static readonly ATTRIBUTE_MAXIMUM_TEXTURECUBEMAP_WIDTH: int
                public static readonly ATTRIBUTE_MEMORY_CLOCK_RATE: int
                public static readonly ATTRIBUTE_MULTIPROCESSOR_COUNT: int
                public static readonly ATTRIBUTE_PCI_BUS_ID: int
                public static readonly ATTRIBUTE_PCI_DEVICE_ID: int
                public static readonly ATTRIBUTE_PCI_DOMAIN_ID: int
                public static readonly ATTRIBUTE_STREAM_PRIORITIES_SUPPORTED: int
                public static readonly ATTRIBUTE_SURFACE_ALIGNMENT: int
                public static readonly ATTRIBUTE_TCC_DRIVER: int
                public static readonly ATTRIBUTE_TEXTURE_ALIGNMENT: int
                public static readonly ATTRIBUTE_TEXTURE_PITCH_ALIGNMENT: int
                public static readonly ATTRIBUTE_TOTAL_CONSTANT_MEMORY: int
                public static readonly ATTRIBUTE_UNIFIED_ADDRESSING: int
                public static readonly ATTRIBUTE_WARP_SIZE: int
                public static readonly COMPUTE_MODE_DEFAULT: int
                public static readonly COMPUTE_MODE_PROCESS_EXCLUSIVE: int
                public static readonly COMPUTE_MODE_PROHIBITED: int
                public static readonly COMPUTE_MODE_THREAD_EXCLUSIVE: int
                public static readonly FLAG_LMEM_RESIZE_TO_MAX: int
                public static readonly FLAG_MAP_HOST: int
                public static readonly FLAG_SCHED_AUTO: int
                public static readonly FLAG_SCHED_BLOCKING_SYNC: int
                public static readonly FLAG_SCHED_SPIN: int
                public static readonly FLAG_SCHED_YIELD: int
                public static readonly MASK_SCHED: int
                public static getCount(): int
                public static getDriverVersion(): int
                public static getRuntimeVersion(): int
                public constructor(arg0: int)
                public addCallback(arg0: java.lang.Runnable | java.lang.Runnable$$Lambda): void
                public canAccessPeer(arg0: com.ibm.cuda.CudaDevice): boolean
                public disablePeerAccess(arg0: com.ibm.cuda.CudaDevice): void
                public enablePeerAccess(arg0: com.ibm.cuda.CudaDevice): void
                public equals(arg0: java.lang.Object): boolean
                public getAttribute(arg0: int): int
                public getCacheConfig(): com.ibm.cuda.CudaDevice$CacheConfig
                public getDeviceId(): int
                public getFreeMemory(): long
                public getGreatestStreamPriority(): int
                public getLeastStreamPriority(): int
                public getLimit(arg0: com.ibm.cuda.CudaDevice$Limit): long
                public getName(): string
                public getSharedMemConfig(): com.ibm.cuda.CudaDevice$SharedMemConfig
                public getTotalMemory(): long
                public hashCode(): int
                public setCacheConfig(arg0: com.ibm.cuda.CudaDevice$CacheConfig): void
                public setLimit(arg0: com.ibm.cuda.CudaDevice$Limit, arg1: long): void
                public setSharedMemConfig(arg0: com.ibm.cuda.CudaDevice$SharedMemConfig): void
                public synchronize(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}