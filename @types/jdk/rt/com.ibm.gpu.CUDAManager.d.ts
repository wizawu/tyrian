declare namespace com {
    namespace ibm {
        namespace gpu {
            class CUDAManager {
                public static getInstance(): com.ibm.gpu.CUDAManager
                public static instance(): com.ibm.gpu.CUDAManager
                public static getOutputHeader(): string
                public static getVersion(): string
                public static tearDown(): void
                public acquireFreeDevice(): int
                public getCUDADevices(): java.util.ArrayList<com.ibm.gpu.CUDADevice>
                public getDefaultDevice(): int
                public getDevice(arg0: int): com.ibm.gpu.CUDADevice
                public getDeviceCount(): int
                public getDeviceWithMostAvailableMemory(): com.ibm.gpu.CUDADevice
                public getDoubleThreshold(): int
                public getEnabledCUDADevices(): com.ibm.gpu.CUDADevice[]
                public getFloatThreshold(): int
                public getFreeMemoryForDevice(arg0: int): long
                public getIntThreshold(): int
                public getLongThreshold(): int
                public getNextAvailableDevice(): int
                public getVerboseGPUOutput(): boolean
                public hasCUDASupport(): boolean
                public isSortEnabledOnGPU(): boolean
                public isSortEnforcedOnGPU(): boolean
                public printAllDeviceInfo(): void
                public releaseDevice(arg0: int): void
                public setDefaultDevice(arg0: int): void
                public setDevice(arg0: int): void
                public setVerboseGPU(arg0: boolean): void
                public static class: java.lang.Class<any>
            }
        }
    }
}